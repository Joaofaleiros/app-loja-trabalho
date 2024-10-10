import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Informe seu nome"],
      maxlenght: [50, "Seu nome não pode ultrapassar mais de 50 caracteres"],
    },
    email: {
      type: String,
      require: [true, "Informe seu email"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Informe sua senha"],
      minLength: [6, "Sua senha deve ter no mínimo 6 caracteres"],
      select: false,
    },
    avatar: {
      public_id: String,
      url: String,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

// Criptografando a senha antes no BD
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// Retornando o token JWT
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

// Comparando a senha informada pelo usuário e a senha no BD
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", userSchema);
