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

import "./Product.css";

let Products = () => {
  return (
    <div className="products-section">
      <h3>Treanding Products</h3>
      <div className="products-grid">
        <div className="product-card">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt="Shoes"
          />
          <h4>Stylish Shoes</h4>
          <p>₹999</p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP._RaaNiJy4M9hcyLeAop-2wHaIb?pid=Api&P=0&h=180"
            alt="Watch"
          />
          <h4>Smart Watch</h4>
          <p>₹1,499</p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img
            src="https://cdn.pixabay.com/photo/2023/10/12/13/05/headphones-8310796_1280.jpg"
            alt="Headphones"
          />
          <h4>Headphones</h4>
          <p>₹799</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;