import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <p className='text-white text-3xl'>Hello World</p>
    </>
  )
}

export default App
