import React from 'react';
import ProductList from './pages/ProductList';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Cart from './pages/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

const App = () => {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products/:category' element={<ProductList />} />
        <Route exact path='/product/:id' element={<Product />} />
        <Route
          exact path='/login'
          element={user ? <Navigate to='/' replace /> : <Login />}
        />
        <Route
          exact path='/Register'
          element={user ? <Navigate to='/' replace /> : <Register />}
        />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
