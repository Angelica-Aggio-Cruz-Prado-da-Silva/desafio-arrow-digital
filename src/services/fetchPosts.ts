import axios from 'axios';
import Post from '../models/Posts.model';

async function fetchAndSaveHotPosts() {
  try {
    const response = await axios.get('https://api.reddit.com/r/artificial/hot');
    const posts = response.data.data.children.map((post: any) => ({
      redditId: post.data.redditId,
      title: post.data.title,
      author: post.data.author,
      createdAt: new Date(post.data.created * 1000), // Convertendo para Date
      ups: post.data.ups,
      comments: post.data.num_comments,
    }));

    await Post.insertMany(posts);
    console.log(`Salvo ${posts.length} postagens HOT no banco de dados.`);
  } catch (error) {
    console.error('Erro ao buscar e salvar postagens:', error);
  }
}

export default fetchAndSaveHotPosts;