export const getProducts = async (req, res) => {
  res.status(200).json({
    message: "Todos os Produtos",
  });
};