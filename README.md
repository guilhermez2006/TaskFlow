# TaskFlow 📋

API REST construída com o propósito de **estudo e desenvolvimento prático** de conhecimentos em **Docker, PostgreSQL, ORM (Sequelize), Arquitetura MVC e JWT**. O sistema gerencia o cadastro e fluxo de usuários, utilizando autenticação via tokens para proteger rotas e garantir a segurança dos dados.

---

### 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- Sequelize ORM / CLI
- PostgreSQL (via Docker)
- Padrão Arquitetural MVC
- JWT (Autenticação)

---

### 🚀 Como rodar o projeto

1. Clonar o repositório
   git clone https://github.com/guilhermez2006/dock-server
   cd dock-server

2. Instalar as dependências
   npm install

3. Configurar o banco de dados
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=usersdb

4. Rodar as migrations
   npx sequelize-cli db:migrate

5. Rodar o servidor
   node --watch src/server.js
   (O servidor ficará online em http://localhost:3000)

---

### 🛣️ Rotas disponíveis (Usuários)

Abaixo estão as rotas iniciais para o gerenciamento de usuários no banco de dados:

| Método | Rota       | Descrição                                         |
| :----- | :--------- | :------------------------------------------------ |
| POST   | /users     | Cria um novo usuário no banco                     |
| GET    | /users     | Lista todos os usuários cadastrados               |
| GET    | /users/:id | Busca os detalhes de um usuário específico por ID |
| PUT    | /users/:id | Atualiza os dados de um usuário                   |
| DELETE | /users/:id | Remove um usuário do sistema                      |

---

### 📂 Estrutura do projeto

├── node_modules/
├── src/
│ ├── config/
│ │ └── database.js
│ ├── controllers/
│ │ └── userController.js
│ ├── migrations/
│ │ ├── 20260525013031-create-users-table.js
│ │ └── package.json
│ ├── models/
│ ├── routes/
│ │ └── routes.js
│ ├── View/
│ └── server.js
├── .gitattributes
├── .gitignore
├── .sequelizerc
├── package-lock.json
├── package.json
└── README.md
