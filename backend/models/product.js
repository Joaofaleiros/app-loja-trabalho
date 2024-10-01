import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Por favor insira o nome do produto"],
      maxLenght: [200, "Nome do produto não pode ultrapassar 200 caracteres"],
    },
    price: {
      type: Number,
      require: [true, "Por favor insira o preço do produto"],
      maxLenght: [5, "Preço do produto não pode ultrapassar 5 caracteres"],
    },
    description: {
      type: String,
      require: [true, "Por favor insira a descrição do produto"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
    category: {
      type: String,
      require: [true, "Por favor, insira a categoria do produto"],
      enum: {
        values: [
          "Eletrônicos",
          "Câmeras",
          "Notebooks",
          "Acessórios",
          "Headphones",
          "Alimentação",
          "Livros",
          "Sportes",
          "Jardim",
          "Casa",
        ],
        message: "Por favor, selecione a categoria correta para o produto",
      },
    },
    seller: {
      type: String,
      require: [true, "Por favor, insira o vendedor do produto"],
    },
    stock: {
      type: Number,
      require: [true, "Por favor, insira o estoque do produto"],
    },
    num0fReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          require: true,
        },
        rating: {
          type: Number,
          require: true,
        },
        comment: {
          type: String,
          require: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
