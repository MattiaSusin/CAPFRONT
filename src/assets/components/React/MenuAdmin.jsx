import "bootstrap/dist/css/bootstrap.min.css"; //! IMPORTAZIONE BOOTSTRAP-REACT
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Css/MenuAdmin.css";

const MenuAdmin = () => {
  return (
    <div className="contMenuAdmin backgroundAdmin">
        <div className="d-flex justify-content-center align-items-center h-25 contH1Admin"  >
            <h1 className="h1MenuAdmin">SCELTA OPERAZIONI </h1>
        </div>
      <div className="contRiga1 border mb-5">
        <NavLink to="/dashboard" className="nav-link">
          <Button className="btnFormMenuAdmin me-5">PRENOTAZIONI</Button>
        </NavLink>
        <NavLink to="/" className="nav-link">
          <Button className="btnFormMenuAdmin me-5">DRINK LIST</Button>
        </NavLink>
        <NavLink to="/menuSettings" className="nav-link">
          <Button className="btnFormMenuAdmin me-5">MENU</Button>
        </NavLink>
        <NavLink to="/loginAdmin">
          <Button className="btnExit">ESCI </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default MenuAdmin;
