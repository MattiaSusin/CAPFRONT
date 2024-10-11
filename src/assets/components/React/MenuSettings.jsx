import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/MenuSettings.css";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
} from "react-bootstrap";
import { useState } from "react";

const MenuSettings = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="contMenuSettings mt-5  d-flex justify-content-center">
      <div>
        <div>
          <h1 className="text-white h1MenuSett">GESTIONE PIATTI</h1>
        </div>

        <div className="mt-5 justify-content-center d-flex">
          <Button variant="primary" onClick={handleShow}>
            NUOVO PIATTO
          </Button>

          <Modal show={show} onHide={handleClose} animation={false}>
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
                name="nome"
                /* value={formData.nome}
                          onChange={handleChange}
                          isInvalid={!!errors.nome} */
                className=""
              />
              <FormControl.Feedback type="invalid">
                {/* {errors.nome} */}
              </FormControl.Feedback>

              {/* --------------DESCRIZIONE---------------- */}
              <FormLabel className="mt-4">Descrizione piatto*</FormLabel>
              <FormControl
                type="text"
                name="nome"
                /* value={formData.nome}
                          onChange={handleChange}
                          isInvalid={!!errors.nome} */
                className=""
              />
              <FormControl.Feedback type="invalid">
                {/* {errors.nome} */}
              </FormControl.Feedback>

              {/* --------------PREZZO---------------- */}

              <Form.Label className="mt-4">Prezzo*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Inserisci il prezzo"
                /* value={price}
              onChange={handlePriceChange} */
                min="0"
                step="0.01" // Permette valori decimali
              />


            {/* --------------PREZZO---------------- */}

              <Form.Group controlId="formFile" className="mt-3">
                <Form.Label>Seleziona un'immagine</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*" 
                  /* onChange={handleFileChange} */
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center mt-3 mb-3 align-items-center">
              <Button variant="primary" onClick={handleClose}>
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
