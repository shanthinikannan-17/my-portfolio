import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Navbar from "./components/Navbar"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Interests from "./components/Interests"
import StarBackground from "./components/Starbackground"
function App() {
  return (
    <>
      <StarBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Interests />
      <Contact />
      <Footer />
    </>
  )
}

export default App