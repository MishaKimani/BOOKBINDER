import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home"
import Chat from "./pages/Chat"
import Explore from "./pages/Explore"
import MyClub from "./pages/MyClub"
import MyShelf from "./pages/MyShelf"
import LoginPage from "./pages/Login"
import Profile from "./components/profile"

import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import { AuthProvider } from './context/authContext'
import ShelfContextProvider from './components/context/shelfContext'

const paths = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: '/Chat',
    element: <Chat/>
  },

  {
    path: '/Explore',
    element: <Explore/>
  },

  {
    path: '/MyClub',
    element: <MyClub/>
  },

  {
    path: '/MyShelf',
    element: <MyShelf/>
  },

  {
    path: '/Login',
    element: <LoginPage/>
  },

  {
    path: '/Profile',
    element: <Profile/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      
      <ShelfContextProvider>

    <RouterProvider router={paths}/>

    </ShelfContextProvider>

    </AuthProvider>
    
  </React.StrictMode>,
)
