import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/DashBoardPrenotazioni.css";
import Cookies from "js-cookie";
import useDeleteItemPrenotazione from "../../../hooks/useDeleteItemPrenotazione";
import useFilterPrenotazioniByDate from "../../../hooks/useFilterPrenotazioniByDate";
import { Spinner, Alert, Form } from "react-bootstrap";

const DashBoardPrenotazioni = () => {
  const tokenLogin = Cookies.get("accessToken");
  const [selectedDate, setSelectedDate] = useState("");
  const { filteredDate, loading, error } =
    useFilterPrenotazioniByDate(selectedDate);

  console.log(filteredDate);
  const navigate = useNavigate();
  useEffect(() => {
    if (!tokenLogin) {
      navigate("/loginAdmin");
    }
  }, [navigate, tokenLogin]);

  const {
    deleteItemPrenotazione,
    loading: deleteLoading,
    error: deleteError,
    response: deleteResponse,
  } = useDeleteItemPrenotazione();

  const handleDeletePrenotazione = async (id, cognome) => {
    await deleteItemPrenotazione(id);
    const titoloMessage = `La prenotazione con  ${cognome} è stata eliminata con successo`;
    alert(titoloMessage);
    window.location.reload();
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  if (loading || deleteLoading) return <Spinner animation="border" />;
  if (error || deleteError)
    return (
      <Alert variant="danger">{error?.message || deleteError?.message}</Alert>
    );

  return (
    <div className="contDash">
      <div className=" d-flex justify-content-center align-items-center h-25 ">
        <h1 className="h1Dash mt-5">PRENOTAZIONI</h1>
      </div>
      <Form className="formDataDash mt-5">
        <div className="d-flex justify-content-between">
          <Form.Control
            type="date"
            className="dataDash"
            onChange={handleDateChange}
          ></Form.Control>
        </div>
        <div>
          {/* <InputGroup className="searchDash">
            <InputGroup.Text id="basic-addon1">
              <Search />
            </InputGroup.Text>
            <FormControl type="search" placeholder="Cerca" aria-label="Cerca" />
          </InputGroup> */}
        </div>
      </Form>
      <div className="d-flex justify-content-center align-items-center h-25 contTab mt-5">
        {/* TABELLA ORIZZONTALE */}
        <table className="table table-white table-striped align-items-center w-75 ms-5 me-5 tableOrrizonta">
          <thead>
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Nome</th>
              <th scope="col">Cognome</th>
              <th scope="col">Email</th>
              <th scope="col">Coperti</th>
              <th scope="col">Orario</th>
              <th scope="col">Telefono</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filteredDate) && filteredDate.length > 0 ? (
              filteredDate.map((prenotazione, index) => (
                <tr key={prenotazione.id || index}>
                  <td>{index + 1}</td>
                  <td>{prenotazione.nome}</td>
                  <td>{prenotazione.cognome}</td>
                  <td>{prenotazione.email}</td>
                  <td>{prenotazione.numeroCoperti}</td>
                  <td>{prenotazione.orario}</td>
                  <td>{prenotazione.telefono}</td>
                  <td>
                    <button
                      onClick={() =>
                        handleDeletePrenotazione(
                          prenotazione.id,
                          prenotazione.cognome
                        )
                      }
                      className="border-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ color: "#dc3545" }}
                      >
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* TABELLA VERTICALE */}

      <div className="d-flex justify-content-center align-items-center h-25 contTab mt-5 tableVertical">
        <div className="row w-75 ms-5 me-5 d-flex justifycontent-center">
        {Array.isArray(filteredDate) && filteredDate.length > 0 ? (
          filteredDate.map((prenotazione, index) => (
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
    </div>
  );
};

export default DashBoardPrenotazioni;
