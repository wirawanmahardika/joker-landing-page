import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Invitation from "./components/Invitation"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Pricing from "./components/Pricing"

function App() {
  return <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Pricing />
    <Invitation />
    <Skills />
    <Contact />
    <Footer />
  </div>
}

export default App
