

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ClientLogos from './components/ClientLogos'
import ServicesSection from './components/ServicesSection'
import CTASection from './components/CTASection'
import CaseStudiesSection from './components/CaseStudiesSection'
import WorkingProcessSection from './components/WorkingProcessSection'
import TeamSection from './components/TeamSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className="flex flex-col pt-16 bg-white">
    <Header />
    <main>
      <HeroSection />
      <ClientLogos />
      <ServicesSection />
      <CTASection />
      <CaseStudiesSection />
      <WorkingProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactForm />
    </main>
    <Footer />
  </div>
  )
}

export default App
