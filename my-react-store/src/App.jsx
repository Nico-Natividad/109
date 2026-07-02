import Navbar from './components/Navbar.jsx'; 
import './components/Footer.jsx'


import './App.css';
import Footer from './components/Footer.jsx';
import Catalog from './components/Catalog.jsx';
import Product from './components/Product.jsx';

function App() {
  return(
    <div>
      <Navbar />
      <h1>Welcome to my online store</h1>
      <div>
        <Catalog />
      </div>
      <Footer/>
    </div>
  ); 
} 

export default App;