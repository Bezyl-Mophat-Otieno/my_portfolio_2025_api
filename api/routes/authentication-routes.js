import express from "express";
import {handleUserRegistration, handleUserLogin} from "../controllers/authController.js";
const authRouter = express.Router()


authRouter.post('/register', handleUserRegistration)

authRouter.post('/login', handleUserLogin)


export default authRouter

