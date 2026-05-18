import express from 'express';
import {createUser, getALLUsers, deleteUser} from ('./controllers/userController')
const router = express.Router();

router.post("/usuario", adicionarUser);
router.get("/usuarios", listarUser);
router.get("/usuario/:id", buscarUserId);
router.put("/usuario/:id", editUser);
router.delete("/usuario/:id", deleteUser);

export default router;