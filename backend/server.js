require("dotenv").config();

const { errorHandler } = require("./middleware/errorMiddleware");

const express = require("express");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/products", productRoutes);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Server is Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Started on Port ${PORT}`);
});