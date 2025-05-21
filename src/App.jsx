import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Componets/Header'
import Footer from './componets/Footer'
import NewsLetter from './componets/NewsLetter'
import Spinner from './Componets/spinner'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Career = lazy(() => import('./pages/Career'))
const Contact = lazy(() => import('./pages/Contact'))
const Team=lazy(()=>import('./pages/Team'))

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Suspense fallback={<div><Spinner/></div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team/>} />
          <Route path='/services' element={<Services />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Suspense>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App


