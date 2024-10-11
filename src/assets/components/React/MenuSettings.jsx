import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/MenuSettings.css";
import { Button, Modal } from "react-bootstrap";
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
          <Modal.Header closeButton className="justify-content-center" >
            <Modal.Title>NUOVO PIATTO</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              {" "}
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
        </div>
    </div>
  );
};
export default MenuSettings;
