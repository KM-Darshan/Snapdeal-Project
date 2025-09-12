
import "./Product.css"
import { useState, useEffect } from "react";

let Products = () => {
  let [products, setProducts] = useState([]);

  useEffect(  () => {
    fetch("http://localhost:1221/products") 
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
 
  }, []);
 
  return (
    <div className="container">
      <h3> recent viewed  </h3>
      <div className="row">
        {products.map((p) => (
          <div key={p._id} className="col-md-3">
            <div className="card">
              <img src={p.img} alt={p.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">₹{p.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
 };

export default Products;


