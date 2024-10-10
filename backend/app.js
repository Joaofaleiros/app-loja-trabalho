import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middleware/erros.js";

const app = express();
dotenv.config({ path: "backend/config/config.env" });

// Conectando ao MongoDB
connectDatabase();

// Função do express que lida com o json
app.use(express.json());

// importando todas as rotas
app.use("/api/v1", productRoutes);
app.use("/api/v1", authRoutes);

// utilizando o middleware de erros
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log("Servidor iniciado na porta 3000");
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err}`);
  console.log(
    "Desligando o servidor devido Rejeições de Promessas não tratadas"
  );
  server.close(() => {
    process.exit(1);
  });
});
