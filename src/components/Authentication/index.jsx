import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

import styles from "../Landing/landing.module.css"


const Log = () =>{
    const { session, handleLogout } = useContext(AuthContext)


    return (
        <>
            {
                !session ?
                
                <>  
                    
                    <button className={styles.login}><Link to='/Home'>Login</Link></button>

                </>

                    :
                    <>
                        <button onClick={handleLogout}>SignOut</button>
                        <h1>Home</h1>                
                    </>

            }
        </>
    )
}

export default Log