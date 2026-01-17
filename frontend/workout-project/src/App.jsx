import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import './index.css'
function App() {
  return (
   <>
     <div className='App'>
      <Navbar />
      <BrowserRouter>
       <div className='pages'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
       </div>
      </BrowserRouter>
     </div>
   </>
  )
}

export default App
