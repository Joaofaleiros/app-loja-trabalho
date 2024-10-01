import express from "express";
import { getProducts } from "../controllers/productControllers.js";

const router = express.Router();

// rota para obter  todos os produtos
router.route("/products").get(getProducts);

export default router;
