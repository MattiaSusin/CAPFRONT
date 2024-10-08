import "bootstrap/dist/css/bootstrap.min.css"; //! IMPORTAZIONE BOOTSTRAP-REACT

import {Container} from "react-bootstrap"
import { NavLink } from "react-router-dom"
/* import { FaBars, FaTimes } from "react-icons/fa"; */


const TopBarMobile = () => {
    /* const [menuOpen, setMenuOpen] = useState(false) 

    console.log("menuOpen", menuOpen) */

    /* const toggleMenu = () => {
      setMenuOpen(!menuOpen)
      console.log("menuOpen", menuOpen)
    }; */

    return(
      <Container fluid className="topBarMobile d-flex justify-content-between align-items-center">
       {/*  <div className="d-flex align-items-center btnMobile m-2">
          <button className="btnTopBar" onClick={toggleMenu}>
            {menuOpen ? <FaTimes/> : <FaBars/>}
            </button>
        </div>
        {menuOpen && (
          <div className="d-flex flex-column align-items-center openBtn border">
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
        )} */}


<div className="navbar w-100 border">
          <div className="logo">
          <NavLink to="/" className="nav-link">
          <img src="../../../src/assets/Images/Logo_Footer.png" alt="" className="imgLogoTopBarM"/>
          </NavLink>
          </div>
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
          <div className="menu-items">
            <li className="mb-5"><a href="#">Home</a></li>
            <li className="mb-5"><a href="#">Cucina</a></li>
            <li className="mb-5"><a href="#">Lounge Bar</a></li>
            <li className="mb-5"><a href="#">Menu</a></li>
            <li className="mb-5"><a href="#">Contatti</a></li>
            <li className="mb-5"><a href="#">Prenota</a></li>
          </div>
        </div>
      </div>

      </Container>
    )
}

export default TopBarMobile