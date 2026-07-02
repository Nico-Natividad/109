import './Catalog.css'
import Product from './Product.jsx'

function Catalog() {
    return (
        <div className="catalog">
            <h1>Our Products</h1>
            <div className="product-list">
                <Product title="Product 1" price={19.99} />
                <Product title="Product 2" price={29.99} />
                <Product title="Product 3" price={39.99} />
            </div>

        </div>
    );
}

export default Catalog;