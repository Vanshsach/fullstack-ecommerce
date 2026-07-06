const Product = require("../models/Product");
const asyncHandler = require("../utils/asyncHandler");

// Add Product
const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json(product);
});

// Get All Products
const getProducts = asyncHandler(async (req, res) => {
  let filter = {};

  // Search
  if (req.query.keyword) {
    filter.name = {
      $regex: req.query.keyword,
      $options: "i",
    };
  }

  // Category
  if (req.query.category) {
    filter.category = req.query.category;
  }

  const pageSize = 2; // products per page
  const page = Number(req.query.page) || 1;

  const count = await Product.countDocuments(filter);

  const sort = req.query.sort || "-createdAt";

const products = await Product.find(filter)
  .sort(sort)
  .limit(pageSize)
  .skip(pageSize * (page - 1));

  res.json({
    products,
    page,
    pages: Math.ceil(count / pageSize),
    totalProducts: count,
  });
});

// Get Single Product
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.json(product);
});

// Update Product
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedProduct);
});

// Delete Product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  await product.deleteOne();

  res.json({
    message: "Product removed",
  });
});

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};