import { generateToken } from '../utils/token.generator.js'

const default_user = {
    id: 1,
    name:"Harry Potter",
    email: "harrypotter@howards.uk",
    password: "ItsleviOsaNotLeviosA",
    teacher: false,
}

export const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password ) {
            res.status(401).json ({
            message: "email and password they must be complete" 
        }) 
    }

    if (email !== default_user.email || password !== default_user.password) {
        res.status(401).json ({
            message: "email or password is incorrect" 
        }) 
    }

    const token = generateToken(default_user)

    res.status(200).json({
        message: "Successful login",
        token
    })
}