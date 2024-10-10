export default (controlerFunction) => (req, res, next) =>
  Promise.resolve(controlerFunction(req, res, next)).catch(next);
