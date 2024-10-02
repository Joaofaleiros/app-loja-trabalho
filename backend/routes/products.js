import express from "express";
import {
  deleteProductbyID,
  getProductById,
  getProducts,
  newProduct,
  updateProductbyID,
} from "../controllers/productControllers.js";
const router = express.Router();

// rota para obter  todos os produtos
router.route("/products").get(getProducts);

// Rota apenas para o admin do sistema para cadastrar um novo produto
router.route("/admin/products").post(newProduct);

// rota para obter produtos usando ID
router.route("/products/:id").get(getProductById);

// rota para atualizar produto por ID
router.route("/products/:id").put(updateProductbyID);

// rota para deletar produto por ID
router.route("/products/:id").delete(deleteProductbyID);

export default router;
