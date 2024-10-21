import "bootstrap/dist/css/bootstrap.min.css"; //! IMPORTAZIONE BOOTSTRAP-REACT
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Css/MenuAdmin.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const MenuAdmin = () => {
  const navigate = useNavigate();
  const handleAdmninLogout = () => {
   Cookies.remove('accessToken');
   navigate('/loginAdmin');
  } 
  return (
    <div className="contMenuAdmin backgroundAdmin">
        <div className="d-flex justify-content-center align-items-center h-25 contH1Admin">
            <h1 className="h1MenuAdmin">SCELTA OPERAZIONI </h1>
        </div>
      <div className="contRiga1 mb-5">
        <NavLink to="/dashboard" className="nav-link">
          <Button className="btnFormMenuAdmin btnAdmin me-5">PRENOTAZIONI</Button>
        </NavLink>
        <NavLink to="/" className="nav-link">
          <Button className="btnFormMenuAdmin btnAdmin me-5">DRINK</Button>
        </NavLink>
        <NavLink to="/menuSettings" className="nav-link">
          <Button className="btnFormMenuAdmin btnAdmin me-5">PIATTI</Button>
        </NavLink>
          <Button
          className="btnExit btnAdmin"
          onClick={handleAdmninLogout}>ESCI</Button>
      </div>
    </div>
  );
};

export default MenuAdmin;
