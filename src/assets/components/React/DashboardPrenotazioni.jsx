import { Search } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/DashBoardPrenotazioni.css";
import Cookies from "js-cookie";
import useDeleteItemPrenotazione from "../../../hooks/useDeleteItemPrenotazione";
import useFilterPrenotazioniByDate from "../../../hooks/useFilterPrenotazioniByDate";
import { Spinner, Alert, Form, InputGroup, FormControl } from "react-bootstrap";

const DashBoardPrenotazioni = () => {
  const tokenLogin = Cookies.get("accessToken");
  const [selectedDate, setSelectedDate] = useState("");
  const { filteredDate, loading, error } = useFilterPrenotazioniByDate(selectedDate);

  console.log(filteredDate);
  const navigate = useNavigate();
  useEffect(() => {
    if (!tokenLogin) {
      navigate("/loginAdmin");
    }
  }, [navigate, tokenLogin]);

  const { deleteItemPrenotazione, loading: deleteLoading, error: deleteError, response: deleteResponse } = useDeleteItemPrenotazione();

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
  if (error || deleteError) return <Alert variant="danger">{error?.message || deleteError?.message}</Alert>;

  return (
    <div className="contDash">
      <div className=" d-flex justify-content-center align-items-center h-25 ">
        <h1 className="h1Dash mt-5">PRENOTAZIONI</h1>
      </div>
      <Form className="formDataDash mt-5">
        <div className="d-flex justify-content-between">
          <Form.Control type="date" className="dataDash" onChange={handleDateChange}></Form.Control>
        </div>
        <div>
          <InputGroup className="searchDash">
            <InputGroup.Text id="basic-addon1">
              <Search />
            </InputGroup.Text>
            <FormControl type="search" placeholder="Cerca" aria-label="Cerca" />
          </InputGroup>
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
                    <button onClick={() => handleDeletePrenotazione(prenotazione.id, prenotazione.cognome)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoardPrenotazioni;