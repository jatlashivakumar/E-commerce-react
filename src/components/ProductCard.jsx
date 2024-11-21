import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  // Destructure product properties
  const { id, name, price, discount, image, description } = product;

  // Calculate the discounted price
  const discountedPrice = discount.type === 'percentage' 
    ? price - (price * (discount.value / 100)) 
    : price - discount.value;

  // Calculate discount percentage for fixed discounts
  const discountPercentage = discount.type === 'percentage' 
    ? discount.value 
    : Math.round((discount.value / price) * 100);

  const addToCart = () => {
    setIsAnimating(true); // Start animation
    setTimeout(() => setIsAnimating(false), 500); // End animation after 500ms

    // Check if the product is already in the cart
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="border shadow-lg rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-xl ">
      <div className="w-full h-64 relative">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-gray-900">
            ₹{discountedPrice.toFixed(2)}
          </div>
          <div className="text-sm text-gray-500 line-through">
            ₹{price}
          </div>
        </div>
        <div className="mt-2 text-sm font-semibold text-green-500">
          {discountPercentage}% off
        </div>
        <button
          onClick={addToCart}
          className={`bg-blue-500 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-600 transition-all duration-200 ${
            isAnimating ? 'animate-pulse' : ''
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
