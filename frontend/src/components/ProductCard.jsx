import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 bg-white">
      <img
        src={`http://localhost:5000${product.image}`}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

        <p className="text-gray-600 mb-3">₹{product.price}</p>

        <Link to={`/product/${product._id}`}>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
