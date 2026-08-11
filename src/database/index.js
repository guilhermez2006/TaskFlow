import Sequelize from "sequelize";
import dbConfig from "../config/database.js";
import User from "../models/User.js";

// Cria a conexão com as configurações do database.js
const connection = new Sequelize(dbConfig);

// Inicializa o Model
User.init(connection);

export default connection;