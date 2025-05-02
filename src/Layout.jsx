import { Outlet } from 'react-router-dom';
import React from 'react'
import Navbar from './components/Navbar';
import About from './components/About'
import ConsultationSection from './components/Consultaion'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HSServices from './components/HSServices'

import Pricing from './components/Pricing'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import WorkingStep from './components/WorkingStep'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
