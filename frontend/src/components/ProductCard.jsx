const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={`http://localhost:5000${product.image}`}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">
          {product.name}
        </h2>

        <p className="text-gray-600 mt-2">
          ₹{product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;