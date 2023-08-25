import styles from "./explorepg.module.css"
import { useState, useEffect } from "react"

const ExplorePg=()=>{

    const [search, setSearch]=useState("")
    const [books, setBooks]=useState([])

            const url = 'https://book-finder1.p.rapidapi.com/api/search';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'de2ad08ef1msh01ca43cac2e1726p13cae3jsnb8a559f0cea8',
                'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
            }
        };

        const fetchData=async()=>{

        try {
            const response = await fetch(url, options);
            const result = await response.json  ();
            console.log(result);
            setBooks(result.results)

        } catch (error) {
            console.error(error);
        }
    }

    const handleForm=((e)=>{

        e.preventDefault()
        fetchData()
    })
               

    useEffect(()=>{
        fetchData()
    }, [])

    return(

        <main className={styles.explore}>

            <form onSubmit={handleForm}>

                <input type="text"  placeholder="Find Books"/>
                <input value="submit" type="submit"/>
            </form>
           
           {
           !books || search === "" ? <h2>Search books</h2> :

           books.filter((books)=>
           {
            if(!value || books.title.toLowerCase().includes(search.toLowerCase())) {
                return books
            }

    
        })
           .map((book)=>{

                return(
                    <div key={book.work_id}>

                        <h2>{book.title}</h2>

                    </div>
                )
           })}
            
        
        </main>
    )
}

export default ExplorePg