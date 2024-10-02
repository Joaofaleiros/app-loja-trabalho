import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";

const seedProducts = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://joaofaleirospaulo:RRvziwZy9fQU3JEJ@cluster0.coeawas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    await Product.deleteMany();
    console.log("Produtos deletados");

    await Product.insertMany(products);
    console.log("Produtos adicionados");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
