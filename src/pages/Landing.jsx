import Landing from "../components/Landing"
import {AuthContext} from "../context/authContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const LandingPage=()=>{
const {session , handleLogout}=useContext(AuthContext)
    return(

        <>
        
            {
                !session? <Landing/> : <div><Link to="/Home">Home</Link> 
                 <button onClick={handleLogout}>Logout</button></div>
            }
            
        
        </>

    )
}

export default LandingPage