import User from "../models/user.js";
import catchAsyncErros from "../middleware/catchAsyncErros.js";
import ErrorHandler from "../utils/errorHandler.js";

export const registerUser = catchAsyncErros(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = user.getJwtToken();

  res.status(201).json({
    success: true,
    token,
  });
});

// login de usuários - /api/v1/login
export const loginUser = catchAsyncErros(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Por favor, informe o email e password", 400));
  }

  // busca o usuário no BD
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Por Favor, informe o Usuários", 401));
  }

  // verifica se o password está correto
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Password incorreto", 401));
  }

  const token = user.getJwtToken();

  res.status(201).json({
    token,
  });
});
