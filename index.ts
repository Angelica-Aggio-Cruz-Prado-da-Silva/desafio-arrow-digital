import 'dotenv/config';
import app from './app';
import connectDB from './src/db'

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});