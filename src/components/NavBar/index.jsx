import { Link } from "react-router-dom";

import styles from './navbar.module.css'
import  MenuSimple  from "./dropdown.jsx"

const NavBar=()=>{

    return(
        <nav className={styles.nav}>

        <div>
        
            <div className={styles.logo}>
            <img src="https://bmblyjkgzliveuyxaurt.supabase.co/storage/v1/object/public/photos/BOOKBINd.png" className={styles.image}></img>
            </div>

            <div className={styles.group}>

                <Link to="/"><div>Home</div></Link>

                <Link to="/MyShelf"><div>MyShelf</div></Link>
                
                <Link to="/Explore"><div>Explore</div></Link>

                <Link to="/MyClub"><div>MyClub</div></Link>

            </div>

            <MenuSimple/>



        </div>
        </nav>
    )
}

export default NavBar