import React from 'react'
import NavBar from "../component/Navbar"
import Landingcomponent from '../component/Landingcomponent'
import Footer from '../component/Footer'

function Home() {
  return (
    <div>
        <NavBar />
      <Landingcomponent />
      <Footer/>
    </div>
  )
}

export default Home