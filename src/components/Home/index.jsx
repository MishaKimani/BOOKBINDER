import styles from './home.module.css'
import NavBar from '../NavBar';
import Homeimg from "../../assets/pexels-home.jpg"
import Homeimgs from "../../assets/Home.jpg"
import atomic from "../../assets/Atomichabits.jpeg"
import bourne from "../../assets/BourneBook.jpeg"
import twisted from "../../assets/twistedgames.jpeg"
import bookstack from "../../assets/bookstack.jpg"
import divergent from "../../assets/Divergent.jpeg"

import Footer from '../Footer';

import { FaCircleRight } from "react-icons/fa6";

import { Link } from 'react-router-dom';

const Homes=()=>{

    return(
        <>

            <section  className={styles.home}>

                <NavBar/>

                <div className={styles.rest}> 

                <div>

                    <div className={styles.btxt}>
                        Get lost in the labyrinth of letters
                    </div>

                    <div className={styles.stxt}>
                        Join a bookclub and network with readers of similar taste.
                        BookBinder has your back!
                    </div>

                    <div className={styles.mtxt}>

                        <Link to="/Explore"><button>Find books</button></Link>

                        <Link to="/MyClub"><button>Find club</button></Link>
                    </div>

                    <div className={styles.homeim}>

                        <img className={styles.homeimg} src={Homeimgs} alt="img"></img>

                        <img className={styles.homimg} src={Homeimg} alt="img"></img>

                        <img className={styles.homeimg} src={bookstack} alt="img"></img>

                    </div>

                
                </div>

                </div>

            </section>

            <section className={styles.home2}>

                <div className={styles.homecont}>

                <div className={styles.btxt2}>
                    Explore countless books
                </div>

                <div>
                    Scroll through hundreds of books of choice and add any to shelf.
                    You can also choose to purchase the book and have it delivered to your front door!
                </div>

                </div>
                
                <div className={styles.homebox}>

                    <div className={styles.homebox1}>

                        <img className={styles.homeimg1} src={atomic} alt="img"></img>

                        <img className={styles.homeimg2} src={bourne} alt="img"></img>

                        <img className={styles.homeimg3} src={twisted} alt="img"></img>

                        <img className={styles.homeimg3} src={divergent} alt="img"></img>

                        <img className={styles.homeimg2} src="https://bmblyjkgzliveuyxaurt.supabase.co/storage/v1/object/public/photos/booklovers.jpeg" alt="img"></img>

                        <img className={styles.homeimg1} src="https://bmblyjkgzliveuyxaurt.supabase.co/storage/v1/object/public/photos/Hungergames.jpeg" alt="img"></img>

                    </div>

                    <Link to="/Explore">
                    <div className={styles.arrowr}>

                        <FaCircleRight/>

                    </div>
                    </Link>

                </div>

            

            </section>

            <section>

                <Footer/>
            </section>



        </>
    )
}

export default Homes