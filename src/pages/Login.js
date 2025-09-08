
import "./login.css"
import { useNavigate } from "react-router-dom"
let Login=()=>{
let navigate=useNavigate()
    let handlecontinue=(e)=>{
        e.preventDefault()
        alert('continue button clicked')
        if(true){
            navigate('/sublogin')

        }
        
    }
    return(<>
    <div className="loginclass">
        <h3>login on Snapdeal</h3>
        <p>please provide your mobile number or email to login on Snapdeal</p>
        <form>
            <div className="mobile">
                <input type="text" placeholder="Mobile Number/email "/>
            </div>
            <div className="btcontinue">
                <button onClick={handlecontinue}>continue</button>
            </div>
        </form>


    </div>
    
    </>)
}
export default Login;