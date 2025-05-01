import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Hero from './components/Hero.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: "",
        element: <Hero/> 
      }
    ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

