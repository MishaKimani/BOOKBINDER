import styles from "./bookclub.module.css"
import data from "./data.json"

const bookclub=()=>{

    return(

        <main className={styles.clubpage}>
            <div className={styles.banner} > BookBinder Awards : Best BookClub this year wins!</div>

            <div className={styles.heading}>Trending Book Clubs of the Week</div>

            {data.map((clubs)=>{

                return(
                    <div className={styles.clubs} key={clubs.id}>

                        <div><img src={clubs.Image} className={styles.bookimg}></img></div>

                        <div className={styles.clubcont}>

                            <h2>{clubs.Name}</h2>
                            <h2>{clubs.Book}</h2>
                            <h2>{clubs.Members}</h2>
                            <button className={styles.buttjoin}>Join Club</button>
                            
                        </div>
                    </div>
                    
                )
            })}
        </main>
    )
}

export default bookclub