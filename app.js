// Dependencies
import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';


// Middleware
import endpointNotFoundMiddleware from './src/middleware/endpointNotFound.middleware.js';

// Routes
import productsRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.router.js'

// Dependencies configs
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// API routes
app.use('/api/products', productsRouter);
app.use('/api/auth', authRouter)

// healthcheck server
app.get("/up", (req, res) => {
    res.json ({
        status: res.statusCode,
        timestamp: new Date(),
        message: 'Server is up and running, all systems are operational. '
    })
})

// Middlewares
app.use(endpointNotFoundMiddleware);

export default app;