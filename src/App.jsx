import { useState } from "react"
import "./App.css"
import Contact from "./components/Contact/Contact"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Intro from "./components/Intro/Intro"

import Navbar from "./components/Navbar/Navbar"
import Portfolio from "./components/Portfolio/Portfolio"
import Services from "./components/Services/Services"
import Testimonial from "./components/Testimonial/Testimonial"
import { ThemeProvider } from "./context/Context"
import Skills from "./components/Skills/Skills"

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark");
  }
  const lightTheme = () => {
    setThemeMode("light");
  }

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="App"
        style={{
          background: themeMode === "dark" ? "black" : "",
          color: themeMode === "dark" ? "white" : "",
        }}
      >
        <Navbar />
        <Intro />
        <Services />
        <Skills />
        <Experience />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
