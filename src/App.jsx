import './App.css'
import './typeface.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import Home from './pages/Home/Page'

function App() {

  return (
    <div className='app'>
      <Navbar />

      <Home />

      <Footer />
    </div>
  )
}

export default App
