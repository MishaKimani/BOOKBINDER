import styles from "./explorepg.module.css"
import { useState, useEffect } from "react"

const ExplorePg=()=>{

    const [books, setBooks]=useState([])

    const url = 'https://book-finder1.p.rapidapi.com/api/search?page=1';
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
                const result = await response.text();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        

    useEffect(()=>{
        fetchData()
    }, [])

    return(

        <main className={styles.explore}>
            {
                
            }
            
        
        </main>
    )
}

export default ExplorePg