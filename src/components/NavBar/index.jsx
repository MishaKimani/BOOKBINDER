import { Link } from "react-router-dom";

import styles from './navbar.module.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SearchIcon from '@mui/icons-material/Search';

import logo from '../../assets/BOOKBINd.png'
import MenuSimple from "./dropdown";


const NavBar=()=>{

    return(
        <nav className={styles.nav}>

        <div>
        
            <div className={styles.logo}>
            <img src={logo} className={styles.image}></img>
            </div>

        
            <div>
            <Link to="/">Home</Link>
            </div>

            <div>
                <Link to="/MyShelf">MyShelf</Link>
            </div>

            <div>
            <Link to="/Explore">Explore</Link>
            </div>

            <div>
            <Link to="/MyClub">MyClub</Link>
            </div>

            <div className={styles.search}>
                <input type='search' placeholder='Search by author or title' className={styles.input}>
                    
                </input>

                <SearchIcon/>
            </div>

            <div className={styles.icons}>
            <NotificationsActiveIcon/>

            <Link to="/Chat"><QuestionAnswerIcon/></Link>

            <EmojiPeopleIcon/>

            <div className={styles.acc}>
                
                <MenuSimple/>

                
            </div>

        
            </div>
        </div>
        </nav>
    )
}

export default NavBar