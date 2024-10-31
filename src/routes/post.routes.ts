import express, { Request, Response } from 'express';
import Post from '../models/Posts.model';

const router = express.Router();

// Endpoint 1: Consulta por intervalo de datas
router.get('/', async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;

    const posts = await Post.find({
      createdAt: {
        $gte: new Date(startDate as string),
        $lte: new Date(endDate as string),
      },
    }).sort({ createdAt: -1 }); // Ordena da mais nova para a mais antiga

    res.status(200).json(posts);
  } catch (error) {
    console.error('Erro ao buscar postagens:', error);
    res.status(500).json({ error: 'Erro ao buscar postagens' });
  }
});

// Endpoint 2: Consulta por intervalo de datas com ordenação
router.get('/ordered', async (req: Request, res: Response) => {
  try {
    const { startDate, endDate, orderBy } = req.query;

    const sortOrder: { [key: string]: 1 | -1 } = orderBy === 'ups' ? { ups: -1 } : { comments: -1 };

    const posts = await Post.find({
      createdAt: {
        $gte: new Date(startDate as string),
        $lte: new Date(endDate as string),
      },
    }).sort(sortOrder);

    res.status(200).json(posts);
  } catch (error) {
    console.error('Erro ao buscar postagens ordenadas:', error);
    res.status(500).json({ error: 'Erro ao buscar postagens ordenadas' });
  }
});

export default router;