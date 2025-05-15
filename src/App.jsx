
import Header from './componets/Header'
import Footer from './componets/Footer'
import { Route, Routes, } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import OurTeam from './componets/OurTeam'
import Services from './pages/Services'
import Career from './pages/Career'
import Contact from './pages/Contact'
import NewsLetter from './componets/NewsLetter'
import BrandPage from './pages/BrandPage'

const App = () => {
  
  return (
    <div>
      <Header  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<OurTeam/>} />
        <Route path='/services' element={<Services />} />
        <Route path='/career' element={<Career />} />
        <Route path='/contact' element={<Contact />} />
         <Route path='/brands' element={<BrandPage/>} />
      </Routes>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App

