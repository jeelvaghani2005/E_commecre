import { Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ViewProduct from './components/ViewProduct';
import Invoice from './components/Invoice';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './components/Login';

function App() {
  const { isAuthenticated } = useAuth0();

  if(isAuthenticated){
    return (
      <div>
        <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/invoice' element={<Invoice/>}/>
          <Route path='/:id' element={<ViewProduct/>}/>
        </Routes>
      </div>
    );
  }
  else{
    return (
      <>
        <Login />
      </>
    );
  }

}

export default App;
