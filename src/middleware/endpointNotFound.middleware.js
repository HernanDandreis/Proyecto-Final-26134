import { Router } from 'express';

const router = Router();

router.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Endpoint not found'
    })
})

export default router;