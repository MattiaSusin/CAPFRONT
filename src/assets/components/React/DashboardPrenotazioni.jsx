import "bootstrap/dist/css/bootstrap.min.css"; //! IMPORTAZIONE BOOTSTRAP-REACT
import { Alert, Button, Form, FormControl, InputGroup, Spinner} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../Css/DashBoardPrenotazioni.css'
import useApi from "../../../hooks/Api";
import Cookies from "js-cookie";

const DashBoardPrenotazioni = () => {
  const tokenLogin = Cookies.get('accessToken');
  const { data, loading, error } = useApi( `prenotazioni`, {}, tokenLogin );

  useEffect(() => {




  }, []);


  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error.message}</Alert>;


    return(
<div className="contDash">
    <div className=" d-flex justify-content-center align-items-center h-25 ">
<h1 className="h1Dash mt-5">PRENOTAZIONI</h1>
    </div>
<Form className="formDataDash mt-5">
      <div className="d-flex justify-content-between">
      <Form.Control type="date" className="dataDash"></Form.Control>
      </div>
      <div>
      <InputGroup className="searchDash">
        <InputGroup.Text id="basic-addon1">
          <Search/>
        </InputGroup.Text>
        <FormControl
          type="search"
          placeholder="Cerca"
          aria-label="Cerca"
        />
      </InputGroup>
      </div>
    </Form>
    <div className="d-flex justify-content-center align-items-center h-25 contTab mt-5">

      {/* TABELLA ORIZZONTALE */}

<table className="table table-white table-striped align-items-center w-75 ms-5 me-5 tableOrrizonta">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Cognome</th>
      <th scope="col">Email</th>
      <th scope="col">Coperti</th>
      <th scope="col">Orario</th>
      <th scope="col">Telefono</th>
    </tr>
  </thead>
  <tbody>
  {Array.isArray(data.content) && data.content.length > 0 ? ( // Controlla se data.content è un array
              data.content.map((prenotazione, index) => (
                <tr key={prenotazione.id || index}>
                  <td>{index + 1}</td>
                  <td>{prenotazione.nome}</td>
                  <td>{prenotazione.cognome}</td>
                  <td>{prenotazione.email}</td>
                  <td>{prenotazione.numeroCoperti}</td>
                  <td>{prenotazione.orario}</td>
                  <td>{prenotazione.telefono}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">Nessun dato disponibile</td>
              </tr>
            )}
  </tbody>
</table>
    </div>

    {/* TABELLA VERTICALE */}

    <div className="d-flex justify-content-center align-items-center h-25 contTab mt-5 tableVertical">
  <div className="row w-75 ms-5 me-5 d-flex justifycontent-center">
    {Array.isArray(data.content) && data.content.length > 0 ? (
      data.content.map((prenotazione, index) => (
        <div className="col-md-4" key={prenotazione.id || index}>
          <table className="table table-white table-striped align-items-center">
            <thead>
              <tr key={prenotazione.id || index}>
                <th scope="col">#</th>
                <th scope="col">{index + 1}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="intDash">Nome</td>
                <td>{prenotazione.nome}</td>
              </tr>
              <tr>
                <td className="intDash">Cognome</td>
                <td>{prenotazione.cognome}</td>
              </tr>
              <tr>
                <td className="intDash">Email</td>
                <td>{prenotazione.email}</td>
              </tr>
              <tr>
                <td className="intDash">Coperti</td>
                <td>{prenotazione.numeroCoperti}</td>
              </tr>
              <tr>
                <td className="intDash">Orario</td>
                <td>{prenotazione.orario}</td>
              </tr>
              <tr>
                <td className="intDash">Telefono</td>
                <td>{prenotazione.telefono}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))
    ) : (
      <div className="col-12">
        <p className="text-center">Nessun dato disponibile</p>
      </div>
    )}
  </div>
</div>


    <div className="d-flex justify-content-center  mt-5">
      <Link to="/menuAdmin">
    <Button className="btnFormPrenotazione mb-5">
      TORNA ALLA HOME
    </Button>
      </Link>

    </div>
</div>
    )
}

export default DashBoardPrenotazioni;