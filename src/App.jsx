import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';
import Home from './pages/Home'
import ProductList from './pages/ProductList';
import { HashRouter , Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="pages/login" element={<Login />} />
        <Route path="pages/register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
};

export default App;