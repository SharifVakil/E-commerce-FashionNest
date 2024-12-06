import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Shop } from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import  Product  from './Pages/Product';
import { Cart } from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/products' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      {window.location.pathname !== '/cart' && <Footer />}
      </BrowserRouter>

    </div>
  );
}

export default App;
