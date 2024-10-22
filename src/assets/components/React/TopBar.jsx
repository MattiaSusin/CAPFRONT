import {Container} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import '../Css/TopBar.css'

const TopBar = () => {
    return(
      
      <Container fluid className="contTotTopBar pt-1">
        <div className="LogoTopBar">
          <NavLink to="/" className="nav-link">
          <img src="../../../src/assets/Images/Logo_Footer.png" alt="" className="imgLogoTopBar"/>
          </NavLink>
        </div>
        <div className="contSxTopBar">
           <NavLink to="/" className="nav-link">
          <p className="me-4 textTopBar pt-3">
           HOME</p>
           </NavLink>
          <NavLink to="/loungeBar" className="nav-link">
          <p className="me-4 textTopBar pt-3">LOUNGE BAR</p>
          </NavLink>
          <NavLink to="/menu" className="nav-link">
          <p className="me-4 textTopBar pt-3">MENU</p>
          </NavLink>
          <NavLink to="/contatti" className="nav-link">
          <p className="me-4 textTopBar pt-3">CONTATTI</p>
          </NavLink>
          <NavLink to="/prenotazione" className="nav-link">
          <button className="btnTopBar">PRENOTA</button>
          </NavLink>
        </div>
      </Container>
   
    )
}

export default TopBar