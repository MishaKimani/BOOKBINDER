import styles from "./profile.module.css"
import NavBar from "../NavBar";

import { BsFillPersonFill } from "react-icons/bs";

const Profile=(()=>{

    return(

        <main className={styles.profile}>

            <NavBar/>

            <div className={styles.profilecont}>

            <div className={styles.profilebox}>

                <div>

            <div>
                <img src="https://bmblyjkgzliveuyxaurt.supabase.co/storage/v1/object/public/photos/BOOKBINd.png" className={styles.image}></img>
            </div>

            <div className={styles.profileimg}>
            <BsFillPersonFill/>
            </div>

            <div>Welcome User!</div>

                </div>

            </div>

            </div>

        </main>
    )
})

export default Profile