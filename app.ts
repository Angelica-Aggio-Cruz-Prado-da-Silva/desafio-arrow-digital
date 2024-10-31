import 'dotenv/config';
import cron from 'node-cron';
import express from 'express';
import connectDB from './src/db';
import postRoutes from './src/routes/router';
import fetchAndSaveHotPosts from './src/services/fetchPosts';

const app = express();
app.use(express.json());

// Conecta ao banco de dados
connectDB();

// Define as rotas em '/api'
app.use('/api', postRoutes);

// Agenda a tarefa para rodar todos os dias
cron.schedule('00 12 * * *', () => {
  console.log('Buscando e salvando postagens HOT do Reddit...');
  fetchAndSaveHotPosts();
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;