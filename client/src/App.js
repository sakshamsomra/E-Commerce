import logo from './logo.svg';
import './App.css';
import './Sign.css';
import './Landing.css'
import './Glass.css'
import './Button.css'
import './Checkout.css'
import './cart.css'
import './card.css'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
  NavLink
} from 'react-router-dom';
import Items from './components/Items';
import Sell from './components/Sell';
import Home from './components/Home';
import Signup from './components/Signup';
import Landing from './components/Landing';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <div className="App">

      


      <Routes>

        
      <Route path="/" element={< Landing/>} />
        <Route path="/items" element={< Items/>} />
        <Route path="/sell" element={< Sell/>} />
        <Route path="/home" element={< Home/>} />
        <Route path="/sign" element={< Signup/>} />
        <Route path="/cart" element={< Cart/>} />
        <Route path="/checkout" element={< Checkout/>} />
        

        
      </Routes>
      
    </div>
  );
}

export default App;
