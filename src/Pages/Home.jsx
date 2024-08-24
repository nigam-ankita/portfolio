import React from 'react'
import Nav from '../components/Home/Nav'
import HeroSection from '../components/Home/HeroSection'
import About from '../components/Home/About'
import Project from '../components/Home/Project'
import Contact from '../components/Home/Contact'
import Footer from '../components/Home/Footer'
import Service from '../components/Home/Service'
import cardData from '../components/Home/Data'
import ProjectData from '../components/Home/PData'
import Testinomial from '../components/Home/Testinomial'

function Home() {
  return (
    <div> 
       <Nav/>
       <HeroSection/>
       <About/>
       <Service cardData={cardData}/>
       <Project ProjectData={ProjectData}/>
       <Testinomial/>
       <Contact/>
       <Footer/>
       
    </div>
  )
}

export default Home