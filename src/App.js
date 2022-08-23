import Box from '@mui/material/Box';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Banners from './Components/Banners';
import Products from './Components/Products';
import WomenProducts from './Components/WomenProducts';
import MensProduct from './Components/MensProduct'
import Footer from './Components/Footer';
import HomePageBanner from './Components/HomePageBanner'

import './App.css';

function App() {
  return (
    <Box className='container'>
<Header />
<Banners />
<Products />
<MensProduct />
<HomePageBanner />
<WomenProducts />
<Footer />
    </Box>
  );
}

export default App;
