import mongoose from 'mongoose';
import 'dotenv/config';

// Leitura e salvamento da string de conexão do .env
const mongoURI = process.env.MONGO_URI as string;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;