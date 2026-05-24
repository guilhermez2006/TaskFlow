import express from "express";
import {
  createUser,
  getUsers,
  getUserID,
  editUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);      
router.get("/", getUsers);         
router.get("/:id", getUserID);     
router.put("/:id", editUser);     
router.delete("/:id", deleteUser); 

export default router;