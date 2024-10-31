import mongoose, { Schema, Document } from 'mongoose';

// Interface dos dados da postagem
export interface IPost extends Document {
  redditId: string;
  title: string;
  author: string; // Nome do autor
  createdAt: Date; // Timestamp da criação da postagem
  ups: number;
  comments: number;
}

const PostSchema: Schema = new Schema({
  redditId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, required: true },
  ups: { type: Number, required: true },
  comments: { type: Number, required: true },
});

export default mongoose.model<IPost>('Post', PostSchema);