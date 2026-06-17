import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import SplitCTA from './components/SplitCTA'
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SplitCTA />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
