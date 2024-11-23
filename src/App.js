import React from 'react';
import Navbar from "./components/Navbar"
import Home from './components/Home';
import DailyPrices from './components/DailyPrices';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import SingUp from './components/Singup';
import Roadmap from './components/Roadmap';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';



export default function App () {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <DailyPrices />
      <AboutUs />
      <Services />
      <SingUp />
      <Roadmap />
      <Newsletter />
      <Footer />
    </div>
  )
}