import express from "express";
import cors from "cors";
import userRoutes from "./routes/routes.js";
import "./database/index.js";

const app = express();

app.use(express.json());
app.use(cors());

// Define que todas as rotas do userRoutes terão o prefixo /users
app.use("/users", userRoutes);

app.listen(3000, () => console.log("🚀 Servidor ON na porta 3000"));