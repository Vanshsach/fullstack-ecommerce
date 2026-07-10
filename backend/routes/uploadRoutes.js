const express = require("express");
const path = require("path");

const router = express.Router();

const upload = require("../config/multer");
const { protect, admin } = require("../middleware/authMiddleware");

router.post("/", protect, admin, upload.single("image"), (req, res) => {
  res.send({
    message: "Image uploaded successfully",
    image: `/${req.file.path.replace(/\\/g, "/")}`,
  });
});

module.exports = router;