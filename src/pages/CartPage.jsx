import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty</p>
      ) : (
        <div>
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="text-right mt-8">
            <p className="text-xl font-bold text-gray-800">
              Subtotal: ₹{subtotal.toFixed(2)}
            </p>
            <p className="text-lg text-gray-600">
              Total Items: {totalItems}
            </p>
            <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
