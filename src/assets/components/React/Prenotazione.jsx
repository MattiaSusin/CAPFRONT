import { Alert, Toast, ToastContainer } from "react-bootstrap";
import "../Css/Prenotazione.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Spinner,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useCreatePrenotazione from "../../../../src/hooks/useCreatePrenotazione";

const Prenotazione = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    telefono: "",
    email: "",
    date: "",
    orario: "",
    coperti: "",
  });

  const {
    createPrenotazione,
    loading: createPrenotazioneLoading,
    error: createPrenotazioneError,
    response: createPrenotazioneResponse,
  } = useCreatePrenotazione();

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Pulisci l'errore del campo quando l'utente inizia a modificarlo
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      date,
    }));
    if (errors.date) {
      setErrors((prev) => ({
        ...prev,
        date: null,
      }));
    }
  };

  const validate = () => {
    let errors = {};

    if (!formData.nome) errors.nome = "Il nome è obbligatorio";
    if (!formData.cognome) errors.cognome = "Il cognome è obbligatorio";
    if (!formData.telefono) errors.telefono = "Il telefono è obbligatorio";
    if (!formData.email) errors.email = "L'email è obbligatoria";
    if (!formData.date) errors.date = "La data è obbligatoria";
    if (!formData.orario) errors.orario = "L'orario è obbligatorio";
    if (!formData.coperti) errors.coperti = "Il numero di persone è obbligatorio";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSuccess(false);

      const formattedData = {
        nome: formData.nome,
        cognome: formData.cognome,
        email: formData.email,
        telefono: formData.telefono,
        data: formData.date ? formData.date.toISOString().split('T')[0] : '',
        orario: parseFloat(formData.orario),
        numeroCoperti: parseInt(formData.coperti)
      };

      try {
        await createPrenotazione(formattedData);
        if (createPrenotazioneResponse) {
          setSuccess(true);
          setShowToast(true);
          setFormData({
            nome: "",
            cognome: "",
            telefono: "",
            email: "",
            date: "",
            orario: "",
            coperti: "",
          });
        }
      } catch (error) {
        console.error("Errore nell'invio del form: ", error);
      }
    } else {
      setErrors(validationErrors);
      setSuccess(false);
    }
  };

  const [showToast, setShowToast] = useState(false);

  if (createPrenotazioneLoading) return <Spinner animation="border" />;
  if (createPrenotazioneError)
    return <Alert variant="danger">{createPrenotazioneError}</Alert>;

  return (
    <div className="contTotPrenotazioni">
      <div className="divImg">
        <img
          src="../../../src/assets/Images/Prenotazione.jpg"
          alt=""
          className="imgPrenotazione"
        />
        <div className="text-center mt-5 contTitoloPrenotazioni">
          <h1 className="h1TitoloPrenotazione mb-5">RISERVA IL TUO TAVOLO</h1>
          <p className="pTitoloPrenotazione">
            Ogni tavolo è una nuova avventura: prenota il tuo viaggio nel gusto!
          </p>
        </div>
        <div className="d-flex mt-5 mb-5">
          <Col md={6} className="contFormContatti">
            <Container fluid className="form1Riga border-0">
              <Card.Body>
                {success && createPrenotazioneResponse && (
                  <ToastContainer position="top-end" className="p-3">
                  <Toast 
                    onClose={() => setShowToast(false)} 
                    show={showToast} 
                    delay={3000} 
                    autohide
                    style={{ backgroundColor: '#0e517a' }}
                  >
                    <Toast.Header>
                      <strong className="me-auto">CONGRATULAZIONI</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white bodyToast">
                    Grazie per aver prenotato al nostro ristorante! Siamo lieti di accoglierti e non vediamo l&apos;ora di offrirti un&apos;esperienza unica.
                    </Toast.Body>
                  </Toast>
                </ToastContainer>
                
                )}

                <Form onSubmit={handleSubmit} className="contCardPrenotazioni">
                  <div className="d-flex justify-content-around contCardPrenotazioni">
                    {/* NOME */}
                    <Col xs={3}>
                      <Card
                        style={{ width: "30vh", background: "#122029" }}
                        className="border-0"
                      >
                        <Card.Body>
                          <FormGroup className="mb-4">
                            <FormLabel className="labelForm">Nome*</FormLabel>
                            <FormControl
                              type="text"
                              name="nome"
                              value={formData.nome}
                              onChange={handleChange}
                              isInvalid={!!errors.nome}
                              className="labelContatti border-bottom border-white rounded-0"
                            />
                            <FormControl.Feedback type="invalid">
                              {errors.nome}
                            </FormControl.Feedback>
                          </FormGroup>
                        </Card.Body>
                      </Card>
                    </Col>

                    {/* COGNOME */}
                    <Col xs={3}>
                      <Card
                        style={{ width: "30vh", background: "#122029" }}
                        className="border-0"
                      >
                        <Card.Body>
                          <FormGroup className="mb-4">
                            <FormLabel className="labelForm">Cognome*</FormLabel>
                            <FormControl
                              type="text"
                              name="cognome"
                              value={formData.cognome}
                              onChange={handleChange}
                              isInvalid={!!errors.cognome}
                              className="labelContatti border-bottom border-white rounded-0"
                            />
                            <FormControl.Feedback type="invalid">
                              {errors.cognome}
                            </FormControl.Feedback>
                          </FormGroup>
                        </Card.Body>
                      </Card>
                    </Col>

                    {/* TELEFONO */}
                    <Col xs={3}>
                      <Card
                        style={{ width: "30vh", background: "#122029" }}
                        className="border-0"
                      >
                        <Card.Body>
                          <FormGroup className="mb-4">
                            <FormLabel className="labelForm">Telefono*</FormLabel>
                            <FormControl
                              type="tel"
                              name="telefono"
                              value={formData.telefono}
                              onChange={handleChange}
                              isInvalid={!!errors.telefono}
                              className="labelContatti border-bottom border-white rounded-0"
                            />
                            <FormControl.Feedback type="invalid">
                              {errors.telefono}
                            </FormControl.Feedback>
                          </FormGroup>
                        </Card.Body>
                      </Card>
                    </Col>

                    {/* EMAIL */}
                    <Col xs={3}>
                      <Card
                        style={{ width: "30vh", background: "#122029" }}
                        className="border-0"
                      >
                        <Card.Body>
                          <FormGroup>
                            <FormLabel className="labelForm">Email*</FormLabel>
                            <FormControl
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              isInvalid={!!errors.email}
                              className="labelContatti border-bottom border-white rounded-0"
                            />
                            <FormControl.Feedback type="invalid">
                              {errors.email}
                            </FormControl.Feedback>
                          </FormGroup>
                        </Card.Body>
                      </Card>
                    </Col>
                  </div>

                  <div className="d-flex justify-content-around mt-5 contCardPrenotazioni">
                    {/* DATA */}
                    <Col xs={3}>
                      <Card
                        style={{ width: "30vh", background: "#122029" }}
                        className="border-0"
                      >
                        <FormGroup className="border12">
                          <FormLabel className="labelForm">Data*</FormLabel>
                          <DatePicker
                            selected={formData.date}
                            onChange={handleDateChange}
                            className={`form-control ${
                              errors.date ? "is-invalid" : ""
                            }`}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            id="datelabel"
                            placeholderText="Seleziona una data"
                          />
                          {errors.date && (
                            <div className="invalid-feedback">{errors.date}</div>
                          )}
                        </FormGroup>
                      </Card>
                    </Col>

                    {/* ORARIO */}
                    <Col xs={3}>
                      <Card
                        style={{ width: "30vh", background: "#122029" }}
                        className="border-0"
                      >
                        <FormGroup>
                          <FormLabel className="labelForm">Orario*</FormLabel>
                          <FormControl
                            as="select"
                            name="orario"
                            value={formData.orario}
                            onChange={handleChange}
                            isInvalid={!!errors.orario}
                            className="labelContatti border-bottom border-white rounded-0"
                          >
                            <option value="">Seleziona l&apos;orario</option>
                            <option value="17.00">17:00</option>
                            <option value="17.30">17:30</option>
                            <option value="18.00">18:00</option>
                            <option value="18.30">18:30</option>
                            <option value="19.00">19:00</option>
                            <option value="19.30">19:30</option>
                            <option value="20.00">20:00</option>
                            <option value="20.30">20:30</option>
                            <option value="21.00">21:00</option>
                            <option value="21.30">21:30</option>
                            <option value="22.00">22:00</option>
                          </FormControl>
                          <FormControl.Feedback type="invalid">
                            {errors.orario}
                          </FormControl.Feedback>
                        </FormGroup>
                      </Card>
                    </Col>

                    {/* COPERTI */}
                    <Col xs={3}>
                      <Card
                        style={{ width: "30vh", background: "#122029" }}
                        className="border-0"
                      >
                        <FormGroup>
                          <FormLabel className="labelForm">
                            Numero Persone*
                          </FormLabel>
                          <FormControl
                            as="select"
                            name="coperti"
                            value={formData.coperti}
                            onChange={handleChange}
                            isInvalid={!!errors.coperti}
                            className="labelContatti border-bottom border-white rounded-0"
                          >
                            <option value="">Seleziona i coperti</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </FormControl>
                          <FormControl.Feedback type="invalid">
                            {errors.coperti}
                          </FormControl.Feedback>
                        </FormGroup>
                      </Card>
                    </Col>
                  </div>
                  <div
                    className="justify-content-center d-flex mt-5"
                    id="btnprenotazione"
                  >
                    <Button
                      type="submit"
                      className="mt-3 btnFormPrenotazione"
                      disabled={createPrenotazioneLoading}
                    >
                      {createPrenotazioneLoading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-2"
                          />
                          Invio in corso...
                        </>
                      ) : (
                        "INVIA"
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Container>
          </Col>
        </div>
      </div>
      <div className="mapsCOnt">
        <iframe
          title="Google Map"
          width="100%"
          height="650"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Viale%20Fratelli%20Cairoli,%20181%20,%20Treviso%20-%2031100+(Restaurant%20&amp;%20Lounge)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen
          className="maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Prenotazione;