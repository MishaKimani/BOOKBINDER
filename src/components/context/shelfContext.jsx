import { createContext, useContext} from "react";
import { useState, useEffect } from "react";

const getInitialState=()=>{

    const shelf=localStorage.getItem("bookstore")
    return shelf? JSON.parse(shelf) : []
}

const ShelfContext=createContext(null)

export const useShelfContext=()=>{

        const context=useContext(ShelfContext)

        if (context === undefined) {
            
            throw new Error("ShelfContext must be within ShelfContextProvider!")
        }

        return context;
}

const ShelfContextProvider=(({children})=>{

    const [shelf,setShelf]=useState(getInitialState)

    useEffect(()=>{

        localStorage.setItem("bookstore", JSON.stringify(shelf))
    }, [shelf])

    const addToShelf=((books)=>{
        

        const oldShelf= [...shelf]

        const newShelf= oldShelf.concat(books)


        setShelf(newShelf)
        
    })

    const removeFromShelf=((id)=>{

        const oldShelf= [...shelf]

        const newShelf= oldShelf.filter((book) => book.id !== id )

        
        setShelf(newShelf)
        
        
    })


    return(
        <ShelfContext.Provider value={{ shelf, addToShelf, removeFromShelf }}>

            {children}

        </ShelfContext.Provider>
    )
})

export default ShelfContextProvider