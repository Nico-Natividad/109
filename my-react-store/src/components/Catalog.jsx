import './Catalog.css'
import Product from './Product.jsx'

function Catalog() {
    return (
        <div className="catalog">
            <h1 style={{ textAlign: 'center', fontSize: '4rem', fontFamily: 'Arial, sans-serif' }}>Check out our Products</h1>
            <div className="product-list">
               <Product  /><Product  /><Product  />
               
                
            </div>

        </div>
    );
}

export default Catalog;