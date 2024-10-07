import './assets/components/Css/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './assets/components/React/Footer'
import TopBar from './assets/components/React/TopBar'
import TopBarMobile from './assets/components/React/TopBarMobile'
import Contatti from './assets/components/React/Contatti'

function App() {

  return (
    <BrowserRouter>
    <TopBar/>
    <TopBarMobile/>
       <Routes>
       <Route path="/contatti" element={<Contatti/>} />
       </Routes>
      <Footer/>                                   
   </BrowserRouter>
  )
}

export default App
