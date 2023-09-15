import NavBar from "../components/NavBar"
import ShelfPg from "../components/Shelf"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"
const MyShelf=()=>{
    const { session } = useContext(AuthContext)

    return(

        <main>
            <NavBar/>
            {
                !session ?
                <h2>Kindly Login</h2>
                :
                <ShelfPg/>
            }
        </main>
    )
}

export default MyShelf