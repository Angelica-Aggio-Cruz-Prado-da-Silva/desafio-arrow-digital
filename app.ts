import express from 'express';
import routes from './src/routes';

const app = express();

app.use(express.json()); // Middleware para parsear JSON
app.use('/api', routes); // Rota base

export default app;