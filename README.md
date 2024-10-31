Desafio Arrow Digital

Este projeto foi desenvolvido como parte do teste técnico da Arrow Digital, utilizando Node.js, TypeScript, Express e MongoDB para coletar e exibir postagens do subreddit /r/artificial.
Requisitos

    Node.js (versão recomendada: 14+)
    MongoDB Atlas (ou uma instância local do MongoDB)
    npm (gerenciador de pacotes do Node.js)

Instalação e configuração
1. Clonar o repositório

git clone https://github.com/seu_usuario/seu_repositorio.git
cd seu_repositorio

2. Instalar as dependências

npm install

3. Configurar o arquivo .env

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

MONGO_URI=mongodb+srv://test-user:senha@desafiotecnico.fl4m8.mongodb.net/?retryWrites=true&w=majority&appName=desafiotecnico.test

4. Executar o projeto

Para iniciar o servidor, utilize:

npm run dev

O servidor estará disponível em http://localhost:5001.

Endpoints

    GET /api/posts: Retorna as postagens entre as datas especificadas (startDate e endDate).
        Exemplo: http://localhost:5001/api/posts?startDate=2023-10-28&endDate=2023-10-30

    GET /api/posts/ordered: Retorna as postagens ordenadas por ups ou comments.
        Exemplo: http://localhost:5001/api/posts/ordered?startDate=2023-10-28&endDate=2023-10-30&orderBy=ups
