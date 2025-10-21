import React from 'react'
import { Navbar } from '../components/Shared/Navbar'
import { Outlet } from 'react-router'
import { Footer } from '../components/Shared/Footer'

export const Layout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
         <Footer></Footer>
    </div>
  )
}
