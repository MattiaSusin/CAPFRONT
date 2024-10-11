import "bootstrap/dist/css/bootstrap.min.css"; //! IMPORTAZIONE BOOTSTRAP-REACT
import { Button, Form, FormControl, InputGroup} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import '../Css/DashBoardPrenotazioni.css'

const DashBoardPrenotazioni = () => {
    return(
<div className="contDash">
    <div className=" d-flex justify-content-center align-items-center h-25 ">
<h1 className="h1Dash">PRENOTAZIONI</h1>
    </div>
    <Form className=" d-flex justify-content-center d-flex w-100">
      <div className="d-flex justify-content-between w-25">
      <Form.Control type="date" className="w-50 dataA"></Form.Control>
      </div>
      <div>
      <Form className="d-flex w-100">
      <InputGroup>
        <InputGroup.Text id="basic-addon1">
          <Search/>
        </InputGroup.Text>
        <FormControl
          type="search"
          placeholder="Cerca"
          aria-label="Cerca"
        />
      </InputGroup>
    </Form>
      </div>
    </Form>
    <div className="d-flex justify-content-center align-items-center h-25">

<table className="table table-white table-striped align-items-center w-75">
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
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
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