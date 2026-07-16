import {BrowserRouter, Routes, Route} from 'react-router';

import Navbar from './components/Navbar.jsx'; 
import './components/Footer.jsx'

import Home from './pages/Home.jsx';
import './App.css';
import Footer from './components/Footer.jsx';
import Catalog from './components/Catalog.jsx';
import Product from './components/Product.jsx';
import QuantityPicker from './components/QuantityPicker.jsx';
import About from './pages/Contact.jsx'


function App() {
  return(
    <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path ="/contact"element={<Contact/>} />
        <Route path = "/catalog" element = {<Catalog/>}/>
        <Route path = "*" element = {<h1>404 page not found</h1>}/>
        </Routes>
       
      
      
      <Footer/>
    </BrowserRouter>
  ); 
} 

export default App;