import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import Footer from './assets/components/React/Footer'
import TopBar from './assets/components/React/TopBar'
import TopBarMobile from './assets/components/React/TopBarMobile'

function App() {

  return (
    <BrowserRouter>
    <TopBar/>
    <TopBarMobile/>
       <Routes>
         
       </Routes>
      <Footer/>                                   
   </BrowserRouter>
  )
}

export default App
