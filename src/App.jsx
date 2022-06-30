import "./App.css"
import Analytics from "./components/Analytics"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NewsLetter from "./components/NewsLetter"

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />
    <Analytics />
    <NewsLetter />
  </div>
)

export default App
