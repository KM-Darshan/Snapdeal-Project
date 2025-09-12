
// import { Link, useNavigate } from "react-router-dom";
// // import Sigin from "../pages/signin";

// import "./nav.css" 

// let Nav=()=>{

// const navigate =useNavigate()
//     return(

//  <div>

//   <nav className="nameBrand"> 

  

//        <div className="topstring">
//         <span className="tagline">india's leading online shopping  destination</span>   

//        <ul className="headings">
//          <li className="heading"> <Link to="/our">Ourblog</Link> </li>
//          <li className="heading"> <Link to="/helpcenter"> Help Center  </Link></li>
//          <li className="heading"> <Link to="/sellon"> Sell on Snapdeal</Link></li>
//          <li className="heading"> <Link to="/download">Download App </Link> </li>

//        </ul>
//         <div className="navbar"> 

//             <div className="navitems"> 

//           <img src="https://logodix.com/logo/1241165.png" alt="logo" width="100" />
//                  <h3>Snapdeal</h3>
//         </div> 

//             <form>
//                 <input type="name" placeholder="search product & brand"/>
//                 <button className="btn">search</button>
//             </form>

//             <div className="cart">
//                 <button  className="btncart" > 
//                     cart  
//                 <img  src="https://tse1.mm.bing.net/th/id/OIP.f-l_ZRGx63wa1OL3-p5RQwHaGE?pid=Api&P=0&h=180" alt="" width="25" />
//                       </button>
//             </div>

//             <div className="signin">
//                 <span className="sigin-button" onClick={()=>navigate("/login")}>Sign In</span>
//                 <div className="icon" onClick={()=>navigate("/login")}>  
//               <img src="https://cdn4.vectorstock.com/i/1000x1000/97/03/user-sign-white-icon-vector-15479703.jpg" alt="user" width="22"/>
                
//                 </div>
//             </div> 
//                </div>
//             </div>

//             </nav>

//         </div>
//     )
// }
// export default Nav;
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

let Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar-container">
      {/* Top Tagline Row */}
      <div className="top-bar">
        <span className="tagline">India's leading online shopping destination</span>
        <ul className="top-links">
          <li><Link to="/our">Our Blog</Link></li>
          <li><Link to="/helpcenter">Help Center</Link></li>
          <li><Link to="/sellon">Sell on Snapdeal</Link></li>
          <li><Link to="/download">Download App</Link></li>
        </ul>
      </div>

      {/* Main Navbar */}
      <div className="navbar">
        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")}>
          <img
            src="https://logodix.com/logo/1241165.png"
            alt="Snapdeal Logo"
            width="120"
            
          />
          <span>Snapdeal</span>
         
        </div>

        {/* Search Bar */}
        <form className="search-bar">
          <input type="text" placeholder="Search products & brands" />
          <button type="submit">Search</button>
        </form>

        {/* Cart */}
        <div className="cart">
          <button className="btn-cart">
            <span>Cart</span>
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.f-l_ZRGx63wa1OL3-p5RQwHaGE?pid=Api&P=0&h=180"
              alt="Cart"
              width="25"
            />
          </button>
        </div>

        {/* Sign In */}
        <div className="signin" onClick={() => navigate("/login")}>
          <span>Sign In</span>
          <img
            src="https://cdn4.vectorstock.com/i/1000x1000/97/03/user-sign-white-icon-vector-15479703.jpg"
            alt="User"
            width="22"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
