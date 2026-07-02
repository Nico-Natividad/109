import './Product.css'
const title = "Soap";
const price = 19.99;

function Product({ title, price }) {
    return (
        
        <div className="product">
            <h2>{title}</h2>
            <p>Price: ${price}</p>
        </div>
    )

}

export default Product;