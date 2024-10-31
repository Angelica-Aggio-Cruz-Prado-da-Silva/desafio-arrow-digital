import express from 'express';
import postRoutes from './post.routes';

const router = express.Router();

// Usa as rotas de postagens em '/posts'
router.use('/posts', postRoutes);

export default router;