import styles from './home.module.css'
import bourne from '../../assets/BourneBook.jpeg'
import ransom from '../../assets/BloodRansom.jpeg'
import Carousel from '../Swiper'

import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Homes=()=>{

    return(
        <main className={styles.landing}>

            <div className={styles.main}>

                <div className={styles.picks}>This Week's Hot Scripts</div>

                <div><Carousel/></div>

                <div className={styles.picks}>Hand-Picked for you...</div>

                <div className={styles.updates}>

                <div className={styles.trending}>
                    <div className={styles.imgBox}>
                        <img src={bourne} className={styles.bourne}/>
                    </div>

                    <div className={styles.bookinfo}>

                    <div><b>The Bourne Identity</b></div>

                    <div>by Robert Ludlum</div>

                    <div>A man with an unknown past and an uncertain future,
                         the target of assassins and at the heart of a deadly puzzle.
                         He's fighting for survival and no one can help him -
                          except the one woman who once wanted to escape him...

                    </div>

                    <button>Add To Shelf</button>

                    </div>

                </div>

                <div className={styles.trending}>
                    <div className={styles.imgBox}>
                        <img src={ransom} className={styles.ransom}/>
                    </div>

                    <div className={styles.bookinfo}>

                    <div><b>Blood Ransom</b></div>

                    <div>by Sophie Mackenzie</div>

                    <div>When Rachel discovers that evil scientist Elijah is still working in secret 
                         for a section of the government and about to murder Daniel,
                         she sets out to rescue the little boy, but her plans backfire with disastrous consequences.
                         Across the Atlantic...

                    </div>

                    <button>Add To Shelf</button>

                    </div>
                </div>

                </div>

            
    
            </div>

            <div className={styles.side}>

                <div><b>YOUR CURRENT READS</b></div>

                <div className={styles.shelf}>
                    <AutoStoriesIcon className={styles.bookicon}/>
                    <input type="search" placeholder="Search MyShelf"></input>

                </div>

                <div className={styles.bookcount}>
                    Bookcount:
                </div>

                <div>
                    Explore book buddies with similar genre preferences...

                    <div classname={styles.buddy}>

                    </div>
                </div>
                
    
            </div>
        </main>
    )
}

export default Homes