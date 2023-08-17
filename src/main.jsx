import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home"
import Chat from "./pages/Chat"
import Explore from "./pages/Explore"
import MyClub from "./pages/MyClub"
import MyShelf from "./pages/MyShelf"

import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

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
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths}/>
  </React.StrictMode>,
)
