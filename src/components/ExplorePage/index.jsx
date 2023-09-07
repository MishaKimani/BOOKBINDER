import styles from "./explorepg.module.css"
import { useState } from "react"
import data from "./data.json"

import { Link } from "react-router-dom"

import { useShelfContext } from "../context/shelfContext"
           

const ExplorePg=()=>{

    const [search, setSearch]=useState("")
    

    const { shelf, addToShelf, removeFromShelf }= useShelfContext()

    console.log('MyShelf has:',shelf)



    const shelfChecker= (id) => {

        const boolean= shelf.some((book) => book.id === id)

        return boolean;
    }

        //     const url = 'https://book-finder1.p.rapidapi.com/api/search';
        //     const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': 'de2ad08ef1msh01ca43cac2e1726p13cae3jsnb8a559f0cea8',
        //         'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        //     }
        // };

    //     const fetchData=async()=>{

    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.json  ();
    //         console.log(result);
    //         setBooks(result.results)

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // const handleForm=((e)=>{

    //     e.preventDefault()
    //     fetchData()
        
    // })

    

    // useEffect(()=>{
    //     fetchData()
    // },[])

    
    return(

        <main className={styles.explore}>

        <div className={styles.exploretop}>

                <form className={styles.exploreform}>

                    <input type="text"  placeholder="Find Books" 
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                    
                    />

                    <input value="Search" type="submit"/>
                </form>

        </div>
            

        <div className={styles.explorebk}>
           
           {
           
           data.filter((books)=>
           {
            if(!books || books.title.toLowerCase().includes(search.toLowerCase())) {
                return books
            }

    
        })
           .map((book)=>{

                return(
                    <div className={styles.bookbox} key={book.id}>

                        <div className={styles.box1}>
                            <img className={styles.cover} src={book.image}></img>
                        </div>
                        
                        <div className={styles.box2}>
                            <div>{book.title}</div>

                            {/* <div><b>Author:</b>{book.author}</div> */}
                            
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
           })}
            
        </div>
           
        </main>
    )
        
    }

    


export default ExplorePg