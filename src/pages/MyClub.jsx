import NavBar from "../components/NavBar"
import BookClub from "../components/BookClub"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"

const MyClub=()=>{
    const { session } = useContext(AuthContext)

    return(
        <main>
            {
                !session ?
                <>
                    <h2>Kindly Login</h2>
                </>
                :
                <>
                    <BookClub/>
                </>

            }
            
        </main>
    )
}

export default MyClub