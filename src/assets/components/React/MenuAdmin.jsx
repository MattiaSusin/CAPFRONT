import "bootstrap/dist/css/bootstrap.min.css"; //! IMPORTAZIONE BOOTSTRAP-REACT
import { Button } from "react-bootstrap";
import {NavLink } from "react-router-dom";
import '../Css/MenuAdmin.css'

const MenuAdmin = () => {
    return (
        <div className="d-flex justify-content-center align-items-center contMenuAdmin backgroundAdmin">
            <NavLink to="/dashboard" className="nav-link">
            <Button className="btnFormPrenotazione me-5">PRENOTAZIONI</Button>
            </NavLink>
            <NavLink to="/" className="nav-link">
            <Button className="btnFormPrenotazione me-5">DRINK LIST</Button>
            </NavLink>
            <NavLink to="/menuSettings" className="nav-link">
            <Button className="btnFormPrenotazione me-5">MENU</Button>
            </NavLink>
        </div>
    )
}

export default MenuAdmin;