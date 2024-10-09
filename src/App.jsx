import './assets/components/Css/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './assets/components/React/Footer'
import TopBar from './assets/components/React/TopBar'
import TopBarMobile from './assets/components/React/TopBarMobile'
import Contatti from './assets/components/React/Contatti'
import Prenotazione from './assets/components/React/Prenotazione'
import HomePage from './assets/components/React/HomePage'

function App() {

  return (
    <BrowserRouter>
    <TopBar/>
    <TopBarMobile/>
       <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/contatti" element={<Contatti/>} />
       <Route path="/prenotazione" element={<Prenotazione/>} />
       </Routes>
      <Footer/>                                   
   </BrowserRouter>
  )
}

export default App
