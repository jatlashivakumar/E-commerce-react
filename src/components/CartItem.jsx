import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  const updateQuantity = (quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: item.id, quantity: Math.max(quantity, 1) },
    });
  };

  const removeItem = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
  };

  const discountedPrice =
    item.discount.type === 'percentage'
      ? item.price - (item.price * (item.discount.value / 100))
      : item.price - item.discount.value;

  return (
    <div className="flex items-center justify-between border-b py-4">
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 object-cover rounded-md"
      />
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
        <p className="font-bold text-gray-900">₹{discountedPrice.toFixed(2)}</p>
        <div className="flex items-center space-x-4 mt-2">
          <button
            onClick={() => updateQuantity(item.quantity - 1)}
            className="px-3 py-1 bg-gray-300 rounded-full text-lg"
          >
            -
          </button>
          <span className="text-lg font-semibold">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.quantity + 1)}
            className="px-3 py-1 bg-gray-300 rounded-full text-lg"
          >
            +
          </button>
        </div>
      </div>
      <button
        className="text-red-600 font-semibold hover:text-red-800 transition-all duration-200"
        onClick={removeItem}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
