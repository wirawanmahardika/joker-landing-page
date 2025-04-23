import { Fragment } from "react/jsx-runtime"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Invitation from "./components/Invitation"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return <Fragment>
    <div className="h-screen flex flex-col bg-yellow-700">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Invitation />
    <Skills />
    <Contact />

    <Footer />
  </Fragment>
}

export default App
