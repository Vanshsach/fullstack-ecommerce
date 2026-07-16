import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";

const ProductScreen = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

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
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={`http://localhost:5000${product.image}`}
          alt={product.name}
          className="w-full rounded-lg shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-2xl text-blue-600 font-semibold mb-4">
            ₹{product.price}
          </p>

          <p className="text-gray-700 mb-6">
            {product.description}
          </p>

          <p className="mb-4">
            <strong>Brand:</strong> {product.brand}
          </p>

          <p className="mb-6">
            <strong>Stock:</strong> {product.countInStock}
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getProductById = async (id) => {
  const { data } = await axios.get(
    `http://localhost:5000/api/products/${id}`
  );
  return data;
};

export default ProductScreen;