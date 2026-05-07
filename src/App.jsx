import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Benefits from './components/Benefits'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Doctor from './components/Doctor'
import { PhoneCall } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Doctor />
      <Services />
      <WhyUs />
      <Benefits />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />

      {/* Floating Call Button */}
      <a 
        href="tel:7028056103" 
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce"
        aria-label="Call Us"
      >
        <PhoneCall size={28} />
      </a>
    </div>
  )
}

export default App
