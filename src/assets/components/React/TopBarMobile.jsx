import { useState } from "react"
import {Container} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";


const TopBarMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false) 

    console.log("menuOpen", menuOpen)

    const toggleMenu = () => {
      setMenuOpen(!menuOpen)
      console.log("menuOpen", menuOpen)
    };

    return(
      <Container fluid className="topBarMobile d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center col-6 btnMobile">
          <button className="btnTopBar" onClick={toggleMenu}>
            {menuOpen ? <FaTimes/> : <FaBars/>}
            </button>
        </div>
        {menuOpen && (
          <div className="d-flex flex-column align-items-start mt-3 col-12">
            <NavLink to="/" className="nav-link">
              <p className="me-4 textTopBar pt-3">
            HOME</p>
            </NavLink>
            <p className="me-4 textTopBar pt-3">CUCINA</p>
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
        )}
      </Container>
    )
}

export default TopBarMobile