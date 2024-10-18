import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import  './assets/components/Css/App.css'
import '../src/assets/components/Css/TopBar.css'
import '../src/assets/components/Css/MenuSettings.css'
import '../src/assets/components/Css/DashBoardPrenotazioni.css'
import '../src/assets/components/Css/HomePage.css'
import '../src/assets/components/Css/LoginAdmin.css'
import '../src/assets/components/Css/Menu.css'
import '../src/assets/components/Css/MenuAdmin.css'
import '../src/assets/components/Css/Prenotazione.css'
import '../src/assets/components/Css/Footer.css'
import '../src/assets/components/Css/Contatti.css'
import '../src/assets/components/Css/LoungeBar.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
