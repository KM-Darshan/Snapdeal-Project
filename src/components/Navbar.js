
import { Link, useNavigate } from "react-router-dom";
// import Sigin from "../pages/signin";

import "./nav.css" 

let Nav=()=>{

const navigate =useNavigate()
    return(

 <div>

  <nav className="nameBrand"> 

  

       <div className="topstring">
        <span className="tagline">india's leading online shopping  destination</span>   

       <ul className="headings">
         <li className="heading"> <Link to="/our">Ourblog</Link> </li>
         <li className="heading"> <Link to="/helpcenter"> Help Center  </Link></li>
         <li className="heading"> <Link to="/sellon"> Sell on Snapdeal</Link></li>
         <li className="heading"> <Link to="/download">Download App </Link> </li>

       </ul>
        <div className="navbar"> 

            <div className="navitems"> 

          <img src="https://logodix.com/logo/1241165.png" alt="logo" width="100" height="30"/>
                 <h3>Snapdeal</h3>
        </div> 

            <form>
                <input type="name" placeholder="search product & brand"/>
                <button className="btn">search</button>
            </form>

            <div className="cart">
                <button  className="btncart" > <span>cart  </span>
                <img  src="https://tse1.mm.bing.net/th/id/OIP.f-l_ZRGx63wa1OL3-p5RQwHaGE?pid=Api&P=0&h=180" alt="" width="25" />
                      </button>
            </div>

            <div className="signin">
                <span on onClick={()=>navigate("/login")}>Sign In</span>
                <div className="icon" onClick={()=>navigate("/login")}>  
              <img src="https://cdn4.vectorstock.com/i/1000x1000/97/03/user-sign-white-icon-vector-15479703.jpg" alt="user" width="22"/>
                
                </div>
            </div> 
               </div>
            </div>

            </nav>

        </div>
    )
}
export default Nav;