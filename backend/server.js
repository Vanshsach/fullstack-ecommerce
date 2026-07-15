const cors = require("cors");

require("dotenv").config();

const { errorHandler } = require("./middleware/errorMiddleware");

const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.use("/images", express.static(path.join(__dirname, "/uploads")));

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Started on Port ${PORT}`);
});