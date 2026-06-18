import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';

import endpointNotFoundMiddleware from './src/middleware/endpointNotFound.middleware.js';
import productsRouter from './src/routes/products.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

app.use('/api/products', productsRouter);
app.use('/api/auth')

app.use(endpointNotFoundMiddleware);

app.listen(PORT, () => console.log('Server started on http://localhost:' + PORT));

