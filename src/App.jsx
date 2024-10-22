import './assets/components/Css/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './assets/components/React/Footer'
import TopBar from './assets/components/React/TopBar'
import TopBarMobile from './assets/components/React/TopBarMobile'
import Contatti from './assets/components/React/Contatti'
import Prenotazione from './assets/components/React/Prenotazione'
import HomePage from './assets/components/React/HomePage'
import LoungeBar from './assets/components/React/LoungeBar'
import Menu from './assets/components/React/Menu'
import LoginAdmin from './assets/components/React/LoginAdmin'
import MenuAdmin from './assets/components/React/MenuAdmin'
import MenuSettings from './assets/components/React/MenuSettings'
import DashBoardPrenotazioni from './assets/components/React/DashboardPrenotazioni'
import {useLocation } from 'react-router-dom';

// COMPONENTE LAYOUT
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation();
  
  // DOVE NON MOSTRIAMO TOP BAR E FOOTER
  const adminRoutes = [
    '/loginAdmin',
    '/menuAdmin',
    '/dashboard',
    '/menuSettings'
  ];
  
  // CONTROLLO DEL PERCORSO CORRENTE 
  const isAdminRoute = adminRoutes.includes(location.pathname);
  
  return (
    <>
      {!isAdminRoute && <TopBar />}
      {!isAdminRoute && <TopBarMobile />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loungeBar" element={<LoungeBar />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/prenotazione" element={<Prenotazione />} />

          {/* Admin Pages */}
          <Route path="/loginAdmin" element={<LoginAdmin />} />
          <Route path="/menuAdmin" element={<MenuAdmin />} />
          <Route path="/dashboard" element={<DashBoardPrenotazioni />} />
          <Route path="/menuSettings" element={<MenuSettings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
