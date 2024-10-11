import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/MenuSettings.css";
import {
    Alert,
  Button,
  Form,
  FormControl,

  FormLabel,
  Modal,
} from "react-bootstrap";
import { useState } from "react";

const MenuSettings = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    titolo: "",
    descrizione: "",
    prezzo: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.titolo) errors.titolo = "Il titolo è da inserire";
    if (!formData.descrizione) errors.descrizione = "Il descrizione è da inserire";
    if (!formData.prezzo) errors.prezzo = "L'prezzo è da inserire";
    if (!formData.image) errors.image = "Il image è da inserire";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length === 0) {
      console.log("form submitted", formData);
      setSuccess(true);
    } else {
      setErrors(validateErrors);
      setSuccess(false);
    }
  };

  return (
    <div className="contMenuSettings mt-5  d-flex justify-content-center">
      <div>
        <div>
          <h1 className="text-white h1MenuSett">GESTIONE PIATTI</h1>
        </div>

        <div className="mt-5 justify-content-center d-flex">
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
          <Button variant="primary" onClick={handleShow}>
            NUOVO PIATTO
          </Button>

          <Modal show={show} onHide={handleClose} animation={false} onSubmit={handleSubmit}>
            <Modal.Header closeButton className="justify-content-center">
              <Modal.Title>NUOVO PIATTO</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* --------------TIPO PIATTO---------------- */}
              <FormLabel className="mt-3">
                Seleziona il tipo di piatto*
              </FormLabel>
              <Form.Select aria-label="Default select example">
                <option>-- -- --</option>
                <option value="1">Antipasto</option>
                <option value="2">Primo</option>
                <option value="3">Secondo</option>
                <option value="4">Dessert</option>
              </Form.Select>

              {/* --------------TITOLO---------------- */}
              <FormLabel className="mt-4">Titolo piatto*</FormLabel>
              <FormControl
                type="text"
                name="titolo"
                value={formData.titolo}
                          onChange={handleChange}
                          isInvalid={!!errors.titolo}
                className=""
              />
              <FormControl.Feedback type="invalid">
                {/* {errors.titolo} */}
              </FormControl.Feedback>

              {/* --------------DESCRIZIONE---------------- */}
              <FormLabel className="mt-4">Descrizione piatto*</FormLabel>
              <FormControl
                type="text"
                name="descrizione"
                value={formData.descrizione}
                          onChange={handleChange}
                          isInvalid={!!errors.descrizione}
                className=""
              />
              <FormControl.Feedback type="invalid">
                {/* {errors.descrizione} */}
              </FormControl.Feedback>

              {/* --------------PREZZO---------------- */}

              <Form.Label className="mt-4">Prezzo*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Inserisci il prezzo"
                value={name}
                onChange={handleChange}
                min="0"
                step="0.01" 
              />


            {/* --------------PREZZO---------------- */}

              <Form.Group controlId="formFile" className="mt-3">
                <Form.Label>Seleziona un&apos;immagine</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*" 
                  onChange={handleFileChange}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center mt-3 mb-3 align-items-center">
              <Button variant="primary" type="submit" onClick={handleClose}>
                {" "}
                GENERA PIATTO
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default MenuSettings;
