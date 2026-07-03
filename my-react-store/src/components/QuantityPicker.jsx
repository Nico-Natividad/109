import "./QuantityPicker.css"
import { useState } from "react";

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);

    function handleIncrease() {
        let nextvalue = quantity + 1;
        setQuantity(nextvalue);
    }
    function handleDecrease() {
        let nextvalue = quantity - 1;
        if (nextvalue > 0) {
            setQuantity(nextvalue);
        }
    }
    return(
        <div className="quantity-picker">
            <button className="quantity-button" onClick={handleDecrease}>-</button>
            <label className="quantity-label">{quantity}</label>
            <button className="quantity-button" onClick={handleIncrease}>+</button>
        </div>
    )

}
export default QuantityPicker;