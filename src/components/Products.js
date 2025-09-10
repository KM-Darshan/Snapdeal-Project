//     return(
//     <div className="products-section">
//       <h3>Featured Products</h3>
//       <div className="products-grid">
//         <div className="product-card">
//           <img
//             src=""
//             alt="Shoes"
//           />
//           <h4>Stylish Shoes</h4>
//           <p>₹999</p>
//           <button>Add to Cart</button>
//         </div>
//          </div>
//           </div>
//     )
// }
// export default Product


// import "./Product.css";

// let Products = () => {
//   return (
//     <div className="products-section">
//       <h3>Treanding Products</h3>
//       <div className="products-grid">
//         <div className="product-card">
//           <img
//             src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
//             alt="Shoes"
//           />
//           <h4>Stylish Shoes</h4>
//           <p>₹999</p>
//           <button>Add to Cart</button>
//         </div>

//         <div className="product-card">
//           <img
//             src="https://tse3.mm.bing.net/th/id/OIP._RaaNiJy4M9hcyLeAop-2wHaIb?pid=Api&P=0&h=180"
//             alt="Watch"
//           />
//           <h4>Smart Watch</h4>
//           <p>₹1,499</p>
//           <button>Add to Cart</button>
//         </div>

//         <div className="product-card">
//           <img
//             src="https://cdn.pixabay.com/photo/2023/10/12/13/05/headphones-8310796_1280.jpg"
//             alt="Headphones"
//           />
//           <h4>Headphones</h4>
//           <p>₹799</p>
//           <button>Add to Cart</button>
//         </div>
        
//         <div className="product-card">
//           <img
//             src="http://www.pngall.com/wp-content/uploads/5/Cotton-Pant-PNG-File-Download-Free.png"
//             alt="pants"
//           />
//           <h4>Paint</h4>
//           <p>₹899</p>
//           <button>Add to Cart</button>
//         </div>

//           <div className="product-card">
//           <img
//             src="https://tse2.mm.bing.net/th/id/OIP.UjbccTzKf0Z9fXfZFFi9SgHaHa?pid=Api&P=0&h=180"
//             alt="shorts"
//           />
//           <h4>shorts</h4>
//           <p>₹499</p>
//           <button>Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
///////////////////////////


import { useState, useEffect } from "react";

let Products = () => {
  let [products, setProducts] = useState([]);

  let getProducts = () => {
    fetch("http://localhost:1221/products") 
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
 
  };
 
  useEffect(getProducts, []);

  return (
    <div className="container">
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



//////////////////////////////////////
// let Product=()=>{
//   let [Product,setProduct]=useState([])
//   let getproducts=()=>{
//     fetch("http://localhost:1221/product")
//     .then(response=>response.json())
//     .then(data=>setProduct(data))
//   }
//   useEffect(getproducts,[])
//   return(<>

//    <div className="container">
//      <div className="row">
//    {/* {product.map(product=>
//    <Product key={product.id} product={product}/>)} */}
//     <Product key={product.id} product={product}/>
//      </div>
//      </div>
  
//   </>)
// }
// export default Product