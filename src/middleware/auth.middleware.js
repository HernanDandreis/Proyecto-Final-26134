import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

export const authentication = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json ({
            message: "Token not send"
        })
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return json.status(401).json({
            message: "Invalid token"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;

        next();

    } catch (error) {
        return json.status(403).json({ 
            message: "Token invalid or expired"
        })
    }
} 