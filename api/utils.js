import bcrypt from 'bcrypt'

export const hashPassword = async (password) => {
    const saltRounds = 10; // The cost factor controls how much time is needed to calculate a single bcrypt hash
    return await bcrypt.hash(password, saltRounds);
};


export const verifyPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword); // Returns true if the password matches, false otherwise
};
