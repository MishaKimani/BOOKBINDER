import Homes from '../components/Home'
import Login from "../components/Login"

import {AuthContext} from "../context/authContext"
import { useContext } from "react"

function Home() {

  const {session , handleLogout}=useContext(AuthContext)
  return(

      <main>

        
      
          {
              !session? <Login/> : <main> <Homes/> </main>
               
          }
          
      
      </main>

  )
}

export default Home