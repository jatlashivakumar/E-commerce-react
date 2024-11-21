import React, { createContext, useContext, useReducer } from 'react';

// Initial cart state
const initialState = {
  cart: [],
};

// Action types
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'; // Add this
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'; // Add this

// Reducer function
// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the item is already in the cart
      const existingProduct = state.cart.find(item => item.id === action.payload.id);

      if (existingProduct) {
        // If it exists, update the quantity
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 } // Increase quantity by 1
              : item
          ),
        };
      } else {
        // If it's not in the cart, add it with quantity 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(action.payload.quantity, 1) }
            : item
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};


// Create context
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
