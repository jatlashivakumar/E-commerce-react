import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar'; 

const App = () => {
  return (
    <Router>
      <div className="bg-blue-600">
        <Navbar /> 
      </div>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
