import { ShoppingCartIcon } from '@heroicons/react/24/outline'; // Correct import for Heroicons v2
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="flex justify-between items-center p-4 bg-black rounded-2xl  max-w-screen-xl mx-auto">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-white  hover:text-gray-500 transition-all duration-300">
        E-Shop
      </h1>

      {/* Link to Featured Products */}
      <Link 
        to="/" 
        className="text-2xl font-semibold text-white hover:text-gray-300 transition-all  hover:underline duration-300">
        Products
      </Link>

      {/* Cart Icon */}
      <div className="relative group">
        <Link to="/cart">
          <ShoppingCartIcon className="h-8 w-8 text-white group-hover:text-gray-300 transition-all duration-300" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full underline  w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
