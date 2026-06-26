import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const generateToken = (userData) => {
    const payLoad = {
        id: userData.id,
    }

    return jwt.sign(payLoad, process.env.JWT_SECRET, {expiresIn: '2h'});
}