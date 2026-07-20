import {BrowserRouter, Routes, Route} from 'react-router';

import Navbar from './components/Navbar.jsx'; 
import './components/Footer.jsx'


import './App.css';
import Footer from './components/Footer.jsx';
import Catalog from './components/Catalog.jsx';
import Product from './components/Product.jsx';
import QuantityPicker from './components/QuantityPicker.jsx';
import About from './pages/About.jsx'
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Admin from './pages/Admin.jsx';



function App() {
  return(
    <BrowserRouter>
      <div className='d-flex flex-column min-vh-100'>
        <Navbar />
          <main className='flex-grow-1 my-3'>
            <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path ="/contact"element={<Contact/>} />
            <Route path = "/catalog" element = {<Catalog/>}/>
            <Route path = "/admin" element = {<Admin/>}/>
            <Route path = "*" element = {<h1>404 page not found</h1>}/>
            </Routes>
          </main>
      
      <Footer/>
       </div>
    </BrowserRouter>
  ); 
} 

export default App;