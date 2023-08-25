import NavBar from "../components/NavBar"
import Homes from '../components/Home'
import Landing from "../components/Landing"

import {AuthContext} from "../context/authContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

function Home() {

  const {session , handleLogout}=useContext(AuthContext)
  return(

      <main>

        
      
          {
              !session? <Landing/> : <main><NavBar/> <Homes/></main>
               
          }
          
      
      </main>

  )
}

export default Home