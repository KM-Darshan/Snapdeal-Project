
import "./sublogins.css"
import { useNavigate } from "react-router-dom"
let Sublogin=()=>{
    let navigate=useNavigate()
    let handlecontinues=(e)=>{
        e.preventDefault()
        alert ("you have clicked")
        if(handlecontinues){
            navigate('/our')
        }
    }
    return(<>
    <form className="items">
            <div>
                <input type="text" placeholder="+91 "/>
            </div>
            <div>
                <input type="text"placeholder="email"/>
            </div>
            <div>
                <input type="name" placeholder="name"/>
            </div>
            <div>
                <input type="text" placeholder="DOB 00/00/0000"/>
            </div>
            <div>
                <input type="text" placeholder="password"/>
            </div>
            <div className="cheackbox">
                <input type="checkbox" />
                 <label htmlFor="keepLogged">Keep me logged in</label>
            </div>

          <div className="btcontinue">
                <button onClick={handlecontinues}>continue</button>
            </div>


    </form>
    </>)
}
export default Sublogin
