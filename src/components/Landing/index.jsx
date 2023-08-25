import styles from "./landing.module.css"
import logo from "../../assets/BOOKBINd.png"
import Log from "../Authentication/"
import Auth from "../../auth"


const Landing=()=>{

    return(

        <main className={styles.landing}>

            <div className={styles.logo}>

                <img src={logo} className={styles.image}/>

            </div>
            
            <div className={styles.landinfo}>

                <div>

                <div className={styles.landbaby}>
            
                    <div className={styles.landinfo1}>Welcome to BookBinder!</div>

                    <div className={styles.landinfo2}>A reader's haven</div>


                </div>

                <div><Auth/></div>

                </div>


            </div>

        </main>
    )
}

export default Landing