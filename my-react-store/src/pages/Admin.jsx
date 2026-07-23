import { useState } from "react";

function Admin() {
    const [couponCode, setCouponCode] = useState("");
    const [couponDiscount, setCouponDiscount] = useState("");
    const [coupons, setCoupons] = useState([]);

    const [productTitle, setProductTitle] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [products, setProducts] = useState([]);

    function saveCoupon() {
        const newCoupon = {
            code: couponCode,
            discount: couponDiscount
        };
        
        setCoupons([...coupons, newCoupon]); 
        setCouponCode("");
        setCouponDiscount("");
    }

    function saveProduct() {
        console.log("hello from saveProduct function!")
        const newProduct = {
            title: productTitle,
            category: productCategory,
            image: productImage,
            price: productPrice
        };
        
        setProducts([...products, newProduct]);
        setProductTitle("");
        setProductCategory("");
        setProductImage("");
        setProductPrice("");
    }

    return (
        <div>
            <h1 className="text-center">Store Administration</h1>

            <div className="d-flex gap-4">
                <section className="w-50">
                    <h2>Add Products</h2>
                    <div>
                        <div className="card">
                            <div className="card-body"> 
                                <div className="mt-2"> 
                                    <label className="form-label">Title</label>
                                    <input type="text" className="form-control" value={productTitle} onChange={(event) => setProductTitle(event.target.value)} 
                                    />
                                </div>
                                <div className="mt-2"> 
                                    <label className="form-label">Category</label>
                                    <input type="text" className="form-control" value={productCategory} onChange={(event) => setProductCategory(event.target.value)}/>
                                </div>
                                <div className="mt-2"> 
                                    <label className="form-label">Image (URL)</label>
                                    <input type="text" className="form-control" value={productImage} onChange={(event) => setProductImage(event.target.value)}/>
                                </div>
                                <div className="mt-2"> 
                                    <label className="form-label">Price</label>
                                    <input type="number" className="form-control" value={productPrice} onChange={(event) => setProductPrice(event.target.value)} />
                                </div>
                                <div className="mt-4 text-center">
                                    <button className="btn btn-dark" onClick={saveProduct}>
                                        Save Product
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3>Products List:</h3>
                        <div className="d-flex gap-2">
                            {products.map(product=>(
                                <div className="card" style={{ width: "150px" }}>
                                    <img src={product.image} className="card-img-top" alt="product" />
                                    <div className="card-body">
                                        <div className="text-end fw-bold text-primary" >{product.category}</div>
                                        <div className="d-flex justify-content-between align-items-center mt-2 text-success">
                                            <h6 className="mb-0">{product.title}</h6>
                                            <span className="text-muted" style={{ fontSize: "14px" }}>${product.price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section className="w-50">
                    <h2>Add Coupons</h2>
                    <div>
                        <div className="card">
                            <div className="card-body"> 
                                <div className="mt-2"> 
                                    <label className="form-label">Code</label>
                                    <input type="text" className="form-control" value={couponCode} onChange={(event) => setCouponCode(event.target.value)} />
                                </div>
                                <div className="mt-2"> 
                                    <label className="form-label">Discount</label>
                                    <input type="number"  className="form-control"  value={couponDiscount} onChange={(event) => setCouponDiscount(event.target.value)}/>
                                </div>
                                <div className="mt-4 text-center">
                                    <button className="btn btn-dark" onClick={saveCoupon}>
                                        Save Coupon
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3>Coupons List:</h3>

                        {coupons.map(coupon=>(
                            <div className="border p-2 mb-2 rounded text-muted">{coupon.code} - {coupon.discount}%</div>
                        ))}
                    </div>
                    
                </section>
            </div>  
        </div>
    );
}

export default Admin;