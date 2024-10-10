import express from "express";
import { loginUser, registerUser } from "../controllers/authControllers.js";
const router = express.Router();

// 1- rota para registrar um novo usuário
router.route("/register").post(registerUser);

// 2- rota para login do usuário
router.route("/login").post(loginUser);

export default router;
