import { useCart } from "../context/CartContext";

const CartScreen = () => {
  const { cartItems } = useCart();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-6 border p-4 rounded-lg"
            >
              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>₹{item.price}</p>
                <p>Quantity: {item.qty}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartScreen;