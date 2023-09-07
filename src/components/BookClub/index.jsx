import styles from "./bookclub.module.css"
import data from "./data.json"
import Footer from '../footer';
import NavBar from '../NavBar';


import { Link } from "react-router-dom";

import { FaCircleLeft } from "react-icons/fa6";

const bookclub=()=>{

    return(

        <>
        <section className={styles.clubpage}>

            <NavBar/>

            {/* <div className={styles.banner}>
                 View this month's club leaderboard
                 
            </div> */}

            <div className={styles.club}>

            {data.map((clubs)=>{

                return(


                        <div className={styles.clubs} key={clubs.id}>

                            <div><img src={clubs.Image} className={styles.bookimg}></img></div>

                            <div className={styles.clubcont}>

                                <div className={styles.names}>{clubs.Name}</div>
                                <div>{clubs.Book}</div>
                                <div>{clubs.Members}</div>
                                <Link to="/Chat"><button className={styles.join}>Join Club</button></Link>
                                
                            </div>
                        </div>

                    
                )
            })}


            </div>

            <Link to="/">
            <div className={styles.arrow}>

            <FaCircleLeft/>

            </div>
            </Link>

        </section>

        <section>

            <Footer/>
        </section>
    </>
    )
}

export default bookclub