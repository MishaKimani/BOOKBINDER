import NavBar from "../components/NavBar"
import ExplorePg from "../components/ExplorePage"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"

const Explore=()=>{
    const { session } = useContext(AuthContext)
    return(
        <main>
            <NavBar/>
            {
                !session ? 
                <h2>Kindly Login</h2>
                :
                <ExplorePg/>

            }
        </main>
    )
}

export default Explore