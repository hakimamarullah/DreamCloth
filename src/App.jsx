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
import Success from './pages/Success';
import { useSelector } from 'react-redux';

const App = () => {
  const {currentUser} = useSelector(state=> state.user)
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/success' element={<Success />} />
        <Route exact path='/products/:category' element={<ProductList />} />
        <Route exact path='/product/:id' element={<Product />} />
        <Route
          exact path='/login'
          element={currentUser ? <Navigate to='/' replace /> : <Login />}
        />
        <Route
          exact path='/Register'
          element={currentUser ? <Navigate to='/' replace /> : <Register />}
        />
        <Route path='/cart' element={currentUser ? <Cart/>: <Navigate to='/login'/>} />
      </Routes>
    </Router>
  );
};

export default App;
