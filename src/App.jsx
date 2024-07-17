import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Carousel } from './components/Carousel/Carousel';
import { Navbar } from './components/Navbar/Navbar';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';
import { Promociones } from './components/Promociones/Promo';
import { Home } from './components/Home/Home';
import { Acerca } from './components/Acerca/Acerca';
import { Combos } from './components/Combos/Combos';

export const App = () => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <Router>
            <Navbar cartItems={cartItems} setCartItems={setCartItems} />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<><Carousel/><Card/><Footer /></>} />
                <Route path='/combos' element={<Combos cartItems={cartItems} setCartItems={setCartItems} />} />
                <Route path="/promo" element={<><Promociones cartItems={cartItems} setCartItems={setCartItems} /><Footer /></>} />
                <Route path='/acerca' element={<><Acerca/><Footer /></>} />
            </Routes>
        </Router>
    );
}

export default App;


