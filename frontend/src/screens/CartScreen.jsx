import { useCart } from "../context/CartContext";

const CartScreen = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.qty,
    0
  );

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Shopping Cart
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="md:col-span-2">
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
                    <h2 className="text-xl font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-lg font-medium">
                      ₹{item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => decreaseQty(item._id)}
                        className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                      >
                        -
                      </button>

                      <span className="font-semibold">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => increaseQty(item._id)}
                        className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="border rounded-lg p-6 shadow h-fit">
          <h2 className="text-2xl font-bold mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between mb-6">
            <span>Total Price</span>
            <span className="font-bold text-xl">
              ₹{totalPrice}
            </span>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;