import "bootstrap/dist/css/bootstrap.min.css"; //! IMPORTAZIONE BOOTSTRAP-REACT
import { Alert, Button, Form, FormControl, InputGroup, Spinner} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import '../Css/DashBoardPrenotazioni.css'
import useApi from "../../../hooks/Api";

const DashBoardPrenotazioni = () => {
  const { data, loading, error } = useApi(`prenotazioni`);

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
    <div className="d-flex justify-content-center align-items-center h-25 contTab mt-5 ">

<table className="table table-white table-striped align-items-center w-75 ">
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
                  <td>{prenotazione.numerooperti}</td>
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
    <div className="d-flex justify-content-center  mt-5">
      <Link to="/menuAdmin">
    <Button className="btnFormPrenotazione">
      TORNA ALLA HOME
    </Button>
      </Link>

    </div>
</div>
    )
}

export default DashBoardPrenotazioni;