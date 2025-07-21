// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AuthPage from './pages/AuthPage';
import './index.css';

function App() {
  return (
    <Router>
      <nav className="bg-black text-white p-4 flex justify-between">
        <Link to="/" className="font-bold">F1 Streetwear</Link>
        <div className="flex gap-4">
          <Link to="/login">Login</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/t-shirt" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<AuthPage type="Login" />} />
        <Route path="/signup" element={<AuthPage type="Sign Up" />} />
        <Route path="/forgot" element={<AuthPage type="Forgot Password" />} />
      </Routes>
    </Router>
  );
}

export default App;
