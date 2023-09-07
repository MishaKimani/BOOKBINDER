import { useShelfContext } from "../context/shelfContext"
import styles from "../ExplorePage/explorepg.module.css"

import { Link } from "react-router-dom"

import { BiBookAdd} from "react-icons/bi";


const ShelfPg=(()=>{


    const { shelf, addToShelf, removeFromShelf }= useShelfContext()

    console.log('MyShelf has:',shelf)

    const shelfChecker= (id) => {

        const boolean= shelf.some((book) => book.id === id)

        return boolean;
    }

    return(

        <main className={styles.shelf}>

            {/* <div><BiSolidBook/></div> */}

           { shelf.length > 0 ?
           
           shelf.map((book)=>{

            return(
                
                <div className={styles.bookbox} key={book.id}>

                    <div className={styles.box1}>
                        <img className={styles.cover} src={book.image}></img>
                    </div>
                    
                    <div className={styles.box2}>
                        <div>{book.title}</div>

                        {/* <div><b>Author:</b>{book.authors}</div> */}
                        
                        <div className={styles.btn}>

                            {
                                shelfChecker(book.id) ?

                                (
                                    <button onClick={()=>removeFromShelf(book.id)}>
                                        Remove From Shelf
                                    </button>
                                ) :

                                (
                                    <button onClick={()=>addToShelf(book)}>
                                        Add To Shelf
                                    </button>
                                )
                            }

                            

                        </div>

                        <div>
                            <Link to="https://www.amazon.com/b?node=283155">
                                <button className={styles.get}>Get Book</button>
                            </Link>
                        </div>

                    </div>

                </div>

            )

                        })
                : 

        <div className={styles.shelferror}>

            <div>
                
                <div>Start Your Reading Journey by adding books to shelf!</div>
            
                {/* <img className={styles.shelfimg} src={footstep}></img> */}

                <Link to="/Explore"><div className={styles.addbk}><BiBookAdd/></div></Link>

            </div>

        </div>
}
        </main>
    )
})

export default ShelfPg