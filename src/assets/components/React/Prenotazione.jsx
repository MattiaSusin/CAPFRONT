import "bootstrap/dist/css/bootstrap.min.css";
import {Dropdown, Form } from "react-bootstrap";

const Prenotazione = () => {
  
  return (
    <div>
      <div>
        <img
          src="../../../src/assets/Images/Prenotazione.jpg"
          alt=""
          className="imgPrenotazione"
        />
      </div>

      <div className="formPrenotazione">
      <div className="contIntestazioneFormPrenotazione"> {/* TITOLO INTESTAZIONE */}
        <h1 className="h1TitoloPrenotazione">RISERVA IL TUO TAVOLO</h1>
        <p className="pTitoloPrenotazione">Ogni tavolo è una nuova avventura: prenota il tuo viaggio nel gusto!</p>
      </div>
        {" "}
        {/*BLOCCO  FORM*/}
        <div className="contFormPrenotazione">
          <div >
            {" "}
            {/* PRIMA RIGA  */}
            
            <Form>
              <Form.Group
                className="contprimaRigaPrenotazione"
                controlId="exampleForm.ControlInput1"
              >
                <div className="NomePrenotazione">
                  <Form.Label>Nome*</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Nome*"
                    className="border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent pb-4 colore "
                  />
                </div>
                <div className="CognomePrenotazione">
                  <Form.Label>Cognome*</Form.Label>
                  <Form.Control type="surname" placeholder="" className="border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent pb-4" />
                </div>

                <div className="TelPrenotazione">
                  <Form.Label>Telefono*</Form.Label>
                  <Form.Control type="telefono" placeholder="" className="border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent pb-4"/>
                </div>
              </Form.Group>
            </Form>
          </div>
          <div>
            {" "}
            {/* SECONDA RIGA */}
            <div className="contSecondaRigaPrenotazione">
              {/* DATA PRENOTAZIONE */}
              <Form className="FormDataPrenotazione">
                <Form.Group controlId="formDate" className="d-flex">
                  <Form.Control
                    type="date"
                    className="border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent text-light pb-5"
                  />
                </Form.Group>
              </Form>
              {/*ORARIO PRENOTAZIONE */}
              
              <Dropdown className="dropDownOraPrenotazione">
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  className="d-flex align-items-center text-light border-0"
                >
                  09:00
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/azione1">12:00</Dropdown.Item>
                  <Dropdown.Item href="#/azione2">12:30</Dropdown.Item>
                  <Dropdown.Item href="#/azione3">13:00</Dropdown.Item>
                  <Dropdown.Item href="#/azione1">13:30</Dropdown.Item>
                  <Dropdown.Item href="#/azione2">14:00</Dropdown.Item>
                  <hr className="ms-3 me-3" />
                  <Dropdown.Item href="#/azione3">19:00</Dropdown.Item>
                  <Dropdown.Item href="#/azione1">19:30</Dropdown.Item>
                  <Dropdown.Item href="#/azione2">20:00</Dropdown.Item>
                  <Dropdown.Item href="#/azione3">20:30</Dropdown.Item>
                  <Dropdown.Item href="#/azione1">21:00</Dropdown.Item>
                  <Dropdown.Item href="#/azione2">21:30</Dropdown.Item>
                  <Dropdown.Item href="#/azione3">22:00</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

             

              {/* POSTI A SEDERE */}
              <div className="contPostiPrenotazione">
                
                <Dropdown className="dropDownPersPrenotazione">
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="d-flex align-items-center text-light border-0 "
                  >
                    Numero persone
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/azione1">1</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">2</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">3</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">4</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">5</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">6</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">7</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">8</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">9</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">10</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">12</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">13</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">14</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">15</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">16</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">17</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">18</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">19</Dropdown.Item>
                    <Dropdown.Item href="#/azione1">20</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="contBtnFormPrenotazione">
            <button className="btnFormPrenotazione">
              PRENOTA ORA 
            </button>
          </div>
        </div>
        <div>
        <div style={{ width: '100%' }}> {/*MAPS LOCALE*/}
      <iframe
        title="Google Map"
        width="100%"
        height="650"
      
        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Viale%20Fratelli%20Cairoli,%20181%20,%20Treviso%20-%2031100+(Restaurant%20&amp;%20Lounge)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen
      ></iframe>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Prenotazione;
