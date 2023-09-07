import Login from "../components/Login"
import {AuthContext} from "../context/authContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const LoginPage=()=>{
const {session , handleLogout}=useContext(AuthContext)
    return(

        <>
        
            {
                !session? <Login/> : <div><Link to="/Home">Home</Link> 
                 <button onClick={handleLogout}>Logout</button></div>
            }
            
        
        </>

    )
}

export default LoginPage