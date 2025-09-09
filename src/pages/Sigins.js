import { useNavigate } from "react-router-dom";
import "./signin.css"
let Sigin=()=>{

    let navigate=useNavigate()
    let handlecont=()=>{
        if(handlecont){
            navigate('/')
        }
        else{
            alert("you clicked")
        }


    }
    return(<>
        <div className="sigin">
            

       
        <h3> Login /Sign up on Snapdeal</h3>
        <p> please provide your mobile number or email to Login</p>
        <div className="mobile">
            <input type="text" placeholder="Mobile Number"/>
        </div>
        <div className="btncontinue">
            <button  type="button" onClick={handlecont}>continue</button>
        </div>
             
        </div>
    </>)
}
export default Sigin;