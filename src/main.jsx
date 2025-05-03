import React from 'react'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Hero from './components/Hero.jsx'
import Layout from './Layout.jsx'
import Appointment from './components/Appointment.jsx'
import Contact from './components/Contact.jsx'
import NotesApp from './components/Notes.jsx'
import Mandala from './components/Mandala.jsx'
import Puzzle from './components/Puzzle.jsx'
import BubbleWrap from './components/Bubble.jsx'
import GamesCategory from './components/GamesCategory.jsx'
import Music from './components/Music.jsx'
import Blog from './components/Blog.jsx'
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import YogaCard from './components/YogaCard.jsx'
import Breathing from './components/Breathing.jsx'
import Meditation from './components/Meditation.jsx'
import Yoga from './components/Yoga.jsx'
import MoodAnalyzer from './components/MoodAnanlyzer.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: "",
        element: <Hero/> 
      },
      {
        path:"appointment",
        element:<Appointment/>
      },{
        path:"appointment-form",
        element:<Contact/>
      },
      {
        path:"journals",
        element:<NotesApp/>
      },{
        path:"games-category/mandala",
        element:<Mandala/>
      },{
        path:"games-category/puzzle",
        element:<Puzzle/>
      },{
        path:"games-category/bubble",
        element:<BubbleWrap/>
      },{
        path:"games-category",
        element:<GamesCategory/>
      },{
        path:"music",
        element:<Music/>
      },{
        path:"blog",
        element:<Blog/>
      },
      {
        path:"signup",
      element:<SignUp/>
      },
      {
        path:"signin",
        element:<SignIn/>
      },{
        path:"yogacards",
        element:<YogaCard/>
      },{
        path:"yogacards/breathing",
        element:<Breathing/>
      },{
        path:"yogacards/meditation",
        element:<Meditation/>
      },{
        path:"yogacards/yoga",
        element:<Yoga/>
      },
      {
        path:"mood-analyzer",
        element:<MoodAnalyzer/>
      }
    ]
  }])
  
  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

