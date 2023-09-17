
import './App.css';
import { Routes , Route } from 'react-router-dom';
import APPNavbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Products from './components/product';
import Cart from './components/cart';
import ProductDet from './components/productDet';
import Filtering from './components/filter';
function App() {
  return (
    <div className="App">
   
  <APPNavbar />
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/products' element={<Products />} />
  <Route path='/products/:id' element={<ProductDet />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/filtering' element={<Filtering />} />
  </Routes>
    </div>
  );
}

export default App;
