import Rating from "../components/Rating";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { useCart } from "../context/CartContext";

const ProductScreen = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h1 className="text-center text-2xl mt-10">Loading...</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link
        to="/"
        className="inline-block mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Go Back
      </Link>
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={`http://localhost:5000${product.image}`}
          alt={product.name}
          className="w-full rounded-lg shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />

          <p className="text-2xl text-blue-600 font-semibold mb-4">
            ₹{product.price}
          </p>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <p className="mb-4">
            <strong>Brand:</strong> {product.brand}
          </p>

          <p className="mb-6">
            <strong>Stock:</strong>{" "}
            {product.countInStock > 0 ? (
              <span className="text-green-600 font-semibold">
                In Stock ({product.countInStock})
              </span>
            ) : (
              <span className="text-red-600 font-semibold">Out of Stock</span>
            )}
          </p>

          <Link to="/cart">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
