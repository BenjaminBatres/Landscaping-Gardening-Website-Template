import React from 'react'
import ServiceHeroSection from '../components/ServiceHeroSection'
import ServicesSectionSecondary from '../components/ServicesSectionSecondary'
import TestimonialsSection from '../components/TestimonialsSection'
import GetInTouchSection from '../components/GetInTouchSection'
import Footer from '../components/Footer'

export default function page() {
  return (
    <>
       <ServiceHeroSection />
       <ServicesSectionSecondary />
       <TestimonialsSection />
       <GetInTouchSection />
       <Footer />
    </>
  )
}
