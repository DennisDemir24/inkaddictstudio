import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
