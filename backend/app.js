import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/products.js";
import { connectDatabase } from "./config/dbConnect.js";

const app = express();
dotenv.config({ path: "backend/config/config.env" });

// Conectando ao MongoDB
connectDatabase();

// importando todas as rotas
app.use("/api/v1", productRoutes);

app.listen(process.env.PORT, () => {
  console.log("Servidor iniciado na porta 3000");
});
