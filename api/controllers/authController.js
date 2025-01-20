import { db } from '../db/index.js'
import {verifyPassword, hashPassword} from '../utils.js'
export async function handleUserRegistration (req , res, next){
    try {

        const query = `INSERT INTO portfoliousers (email,password) 
                             VALUES ($1,$2) 
                             `
        const {email, password} = req.body
        const hashedPassword = await hashPassword(password);

        const result = await db.query(query,[email,hashedPassword])

        return res.status(200).json({userId: result[0], message: "user inserted successfully"})

    } catch (error) {
        if (error.code === '23505') {
            return res.status(400).json({message: `Duplicate entry: ${error.detail}`})
        } else if (error.code === '23503') {
            return res.status(400).json({message: `Foreign key violation: ${error.detail}`})
        } else {
            return res.status(400).json({message: `Error inserting user: ${error}`})

        }

    }
}


export async function handleUserLogin(req, res) {
    try {
        const query = `SELECT * FROM portfoliousers WHERE email = $1`;
        const { email, password } = req.body;
        const result = await db.query(query, [email]);


        if (result.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = result[0];
        const isValid = await verifyPassword(password ,user.password)
        if(!isValid) res.status(403).json({message: "Invalid credentials"})
        const { password: hashedPassword, ...userData } = user;
        return res.status(200).json({userData, message: "User login successfully"});
    } catch (e) {
        console.error('Error during user login:', e);
        return res.status(500).json({ message: `Internal server error: ${e} ` });
    }
}

