import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {

  return (
    <div className='body'>
    <BrowserRouter>
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
