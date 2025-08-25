const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: `API ${req.originalUrl} not found`,
  });
};

export default notFound;
