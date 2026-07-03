import './Product.css'
import QuantityPicker from './QuantityPicker';


function Product({ title, price }) {
    return (
        
        <div className="product">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rzhS1GJ1XhEsNz0BHuiEWV-gdkYv6YOJBSMMgYfhig&s=10" alt="product"></img>
            <h2>{title}</h2>
            <div className="prices">
                <label>Price</label>
                <label>total</label>

            </div>
            <QuantityPicker />
        </div>
    );

}

export default Product;