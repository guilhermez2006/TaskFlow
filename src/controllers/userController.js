import User from "../models/User.js";
import crypto from "node:crypto";

// 1. Criar Usuário (POST)
export const createUser = async (req, res) => {
  try {
    const { name, age, email } = req.body;

    const user = await User.create({
      id: crypto.randomUUID(),
      name,
      age,
      email,
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 2. Buscar Todos os Usuários (GET)
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 3. Buscar Usuário por ID (GET)
export const getUserID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 4. Editar Usuário (PUT)
export const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, email } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Atualiza os dados direto no objeto do banco
    await user.update({ name, age, email });

    res.status(200).json({ message: "Usuário atualizado com sucesso!", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 5. Deletar Usuário (DELETE)
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    await user.destroy();
    res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
