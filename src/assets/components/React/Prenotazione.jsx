import { Alert } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {Card, Col,Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import DatePicker from "react-datepicker";

const Prenotazione = () => {

  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    telefono: "",
    email: "",
    date: "",
    orario: "",
    coperti: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  }
  
  const validate = () => {
    let errors = {};
    if (!formData.nome) errors.nome = "Il nome è da inserire";
    if (!formData.cognome) errors.cognome = "Il cognome è da inserire";
    if (!formData.telefono) errors.telefono = "Il telefono è da inserire";
    if (!formData.email) errors.email = "L'email è da inserire";
    if (!formData.date) errors.date = "La data è da inserire";
    if (!formData.orario) errors.orario = "L'orario è da inserire";
    if (!formData.coperti) errors.coperti = "Il numero delle persone è da inserire";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted", formData);
      window.location.href = "/loungeBar";
      setSuccess(true);
    } else {
      setErrors(validationErrors);
      setSuccess(false);
    }
  };

  return (
    <div className="contTotPrenotazioni">
      <div>
        <img
          src="../../../src/assets/Images/Prenotazione.jpg"
          alt=""
          className="imgPrenotazione"
        />
        
        <div className="text-center mt-5"> {/* TITOLO INTESTAZIONE */}
          <h1 className="h1TitoloPrenotazione  mb-5">RISERVA IL TUO TAVOLO</h1>
           <p className="pTitoloPrenotazione">Ogni tavolo è una nuova avventura: prenota il tuo viaggio nel gusto!</p>
        </div>
        
      <div className="d-flex mt-5 mb-5">
        <Form className="mt-5 ">
        <Col md={6} className=" contFormContatti">
        
          <Card className="form1Riga border-0">
            <Card.Body>
            {success && (
                      <>
                        <Alert variant={"success"}>
                          Form submitted successfully
                        </Alert>
                        <p>
                          Riceverai una risposta quanto prima dal nostro staff
                        </p>
                      </>
                    )}
              <Form onSubmit={handleSubmit} className="">

                {/* -----------------NOME------------------ */}
                <div className="d-flex justify-content-around">

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

                      {/* -----------------COGNOME------------------ */}

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

                      {/* -----------------TELEFONO------------------ */}

                      <FormGroup className="mb-4">
                        <FormLabel className="labelForm">Telefono*</FormLabel>
                        <FormControl
                          type="text"
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

                      {/* -----------------EMAIL------------------ */}
                      
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
                </div>

                <div className="d-flex justify-content-around mt-5">
                  {/*------------------ DATA------------------ */}
                  <FormGroup>
                  <FormLabel>Date</FormLabel>
                  <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    className={`form-control ${errors.date ? "is-invalid" : ""}`}
                    id="datelabel"
                  />
                  {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                </FormGroup>

                {/*------------------ ORARIO ------------------ */}

                <FormGroup>
                  <FormLabel className="labelForm" >Orario</FormLabel>
                  <FormControl
                    as="select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    isInvalid={!!errors.gender}
                    className="labelContatti border-bottom border-white rounded-0"
                  >
                    <option value="">Select a gender</option>
                    <option value="17.00">17.00</option>
                    <option value="17.30">17.30</option>
                    <option value="18.00">18.00</option>
                    <option value="18.00">18.30</option>
                    <option value="18.00">19.00</option>
                    <option value="18.00">19.30</option>
                    <option value="18.00">20.00</option>
                    <option value="18.00">20.30</option>
                    <option value="18.00">21.00</option>
                    <option value="18.00">21.30</option>
                    <option value="18.00">22.00</option>
                    <option value="18.00">18.00</option>

                  </FormControl>
                  <FormControl.Feedback type="invalid">
                    {errors.gender}
                  </FormControl.Feedback>
                </FormGroup>

                {/*------------------ COPERTI ------------------ */}

                <FormGroup>
                  <FormLabel className="labelForm" >Numero Persone</FormLabel>
                  <FormControl
                    as="select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    isInvalid={!!errors.gender}
                    className="labelContatti border-bottom border-white rounded-0"
                  >
                    <option value="">Select a gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </FormControl>
                  <FormControl.Feedback type="invalid">
                    {errors.gender}
                  </FormControl.Feedback>
                </FormGroup>

                {/*------------------ TIPO PRENOTAZIONE ------------------ */}

                <FormGroup>
                  <FormLabel className="labelForm">Luogo</FormLabel>
                  <FormControl
                    as="select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    isInvalid={!!errors.gender}
                    className="labelContatti border-bottom border-white rounded-0"
                  >
                    <option value="">Select a gender</option>
                    <option value="male">Lounge Bar</option>
                    <option value="female">Ristorante</option>
                  </FormControl>
                  <FormControl.Feedback type="invalid">
                    {errors.gender}
                  </FormControl.Feedback>
                </FormGroup>

                </div>

              </Form>
              
            </Card.Body>
          </Card>
        </Col>
        </Form>
      </div>    
      </div>

      
        
    
        
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
    
  );
};

export default Prenotazione;
