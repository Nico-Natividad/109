import Navbar from './components/Navbar.jsx'; 
import './components/Footer.jsx'


import './App.css';
import Footer from './components/Footer.jsx';
import Catalog from './components/Catalog.jsx';
import Product from './components/Product.jsx';
import QuantityPicker from './components/QuantityPicker.jsx';

function App() {
  return(
    <div>
      <Navbar />
      <h1 style={{ textAlign: 'center', fontSize: '1.2rem', fontFamily: 'Arial, sans-serif' }}>Shop with Fashion</h1>
      <div className="catalog-container">
        <Catalog />
      </div>
      
      <Footer/>
    </div>
  ); 
} 

export default App;