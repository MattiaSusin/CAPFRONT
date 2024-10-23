import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/MenuSettings.css";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  FormLabel,
  Modal,
  Row,
  Spinner,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import useApi from "../../../hooks/Api";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import useDeleteDrink from "../../../hooks/useDeleteDrink";
import useCreateItem from "../../../hooks/useCreateItem";
import { Toast } from 'react-bootstrap';



const DrinkSettings = () => {
  //! STATI DEI DUE MODALI
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  //! TOAST 
  const [showToast, setShowToast] = useState(false);


  //! GESTIONE MODALE NR. 1
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => {
    setFormData({
    titolo: "",
    descrizione: "",
    prezzo: "",
    /* immagine: "", */
    tipoPiatto: "",
    });
    setShow1(true);
  };

  //! GESTIONE MODALE NR.2
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [formData, setFormData] = useState({
    titolo: "",
    descrizione: "",
    prezzo: "",
    /* immagine: "", */
    tipoPiatto: "",
  });


  const [showDelete, setShowDelete] = useState(false);


  const handleClose = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  useEffect(() => {
    
  }, [formData]);

  const navigate = useNavigate();

  useEffect(() => {
   const tokenLogin = Cookies.get('accessToken');
   if(!tokenLogin){
    navigate('/loginAdmin');
   }
  }, [navigate]);

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const { data, loading, error } = useApi(`drinks/view/drink`);
  const {deleteDrink, loading: deleteLoading, error: deleteError, response: deleteResponse} = useDeleteDrink();
  const {createItem, loading: createItemLoading, error: createItemError, response: createItemResponse } = useCreateItem();

  
  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error.message}</Alert>;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
   /*  if(name === "prezzo"){
      const price = parseFloat(value);
    } */
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
    if (!formData.tipoPiatto) errors.tipoPiatto = "Il Tipo del piatto è da inserire";
    return errors;
  };
  
  const handleSubmit  = async (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length === 0) {
      const {
        titolo,
        descrizione,
        prezzo,
        tipoPiatto,
      } = formData;
      const formDataParsed = {
        titolo,
        descrizione,
        prezzo: parseFloat(prezzo),
        tipoPiatto,
      }
      await createItem(formDataParsed);
      if(!createItemError){
       /*  alert('Piatto creato correttamente') */ //sistemare 
        setShow1(false);
        setShowToast(true);
        window.location.reload();
      }
      setSuccess(true);
      
    } else {
      setErrors(validateErrors);
      setSuccess(false);
    }
  };
  
  const handleEdit = (drink) => {
    setFormData({
      titolo: drink.titolo,
      descrizione: drink.descrizione,
      prezzo: drink.prezzo,
      /* imaggine: drink.immagine, */
      tipoPiatto: drink.tipoPiatto,
    });
    
    handleShow2();
  };

  const handleDelete = async (id,titolo) => {
    await deleteDrink(id);
      const titoloMessage = `Il drink ${titolo} è stato eliminato con successo`;
      alert(titoloMessage);
      /* handleClose(); */
      window.location.reload();

  };

  
  return (
    <div className="contMenuSettings mt-5 ">
      <div className="contMobileInt">
        <div className="d-flex justify-content-center">
          <h1 className="text-white h1MenuSett">GESTIONE DRINK</h1>
        </div>

        <div className="mt-5 justify-content-center d-flex">
          {success && (
            <>
              <Alert variant={"success"}>Form submitted successfully</Alert>
              <p>Riceverai una risposta quanto prima dal nostro staff</p>
            </>
          )}
          <Button variant="primary" onClick={handleShow1} className="btnFormPrenotazione">
            NUOVO DRINK
          </Button>

          <Modal
            show={show1}
            onHide={handleClose1}
            animation={false}
            onSubmit={handleSubmit}
            className="modalPosition textColor"
          >
            <Modal.Header closeButton>
              <Modal.Title>NUOVO DRINK</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* --------------TIPO DRINK---------------- */}
              <FormLabel className="mt-3 textColor">
                Seleziona il tipo di drink*
              </FormLabel>
              <Form.Control
                as="select"
                name="tipoDrink"
                aria-label="Default select example"
                className="selectBg"
                value={formData.tipoDrink}
                isInvalid={!!errors.tipoDrink}
                onChange={handleChange}
              >
                <option value="">Seleziona il tipo di drink</option>
                <option value="APERITIVO">Aperitivi</option>
                <option value="VINO">Vini</option>
                <option value="COCKTAILS">Cocktails</option>
                <option value="GIN">Gin</option>
                <option value="VODKA">Vodka</option>
                <option value="BIRRA">Birra</option>
              </Form.Control>
              <FormControl.Feedback type="invalid">
                {errors.tipoPiatto}
              </FormControl.Feedback>

              {/* --------------TITOLO---------------- */}
              <FormLabel className="mt-4 textColor">Titolo drink*</FormLabel>
              <FormControl
                type="text"
                name="titolo"
                value={formData.titolo}
                onChange={handleChange}
                isInvalid={!!errors.titolo}
                className="selectBg"
              />
              <FormControl.Feedback type="invalid">
                {errors.titolo}
              </FormControl.Feedback>

              {/* --------------DESCRIZIONE---------------- */}
              <FormLabel className="mt-4 textColor">
                Descrizione drink*
              </FormLabel>
              <FormControl
                type="text"
                name="descrizione"
                value={formData.descrizione}
                onChange={handleChange}
                isInvalid={!!errors.descrizione}
                className="selectBg"
              />
              <FormControl.Feedback type="invalid">
                {/* {errors.descrizione} */}
              </FormControl.Feedback>

              {/* --------------PREZZO---------------- */}

              <Form.Label className="mt-4 textColor">Prezzo*</Form.Label>
              <Form.Control
                type="number"
                name="prezzo"
                placeholder="Inserisci il prezzo"
                value={formData.prezzo}
                onChange={handleChange}
                className="selectBg"
                isInvalid={!!errors.prezzo}
              />

              {/* --------------IMMAGINE---------------- */}
              <Form.Group controlId="formFile" className="mt-3 textColor">
                <Form.Label className="">Seleziona un&apos;immagine</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  /* onChange={handleFileChange} */
                  className="selectBg"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center mt-3 mb-3 align-items-center contModal">
              <Button
                variant="primary"
                type="submit"
                onClick={handleSubmit}
                className="btnFormPrenotazione"
              >
                {" "}
                GENERA DRINK
              </Button>
            </Modal.Footer>
          </Modal>

          {/* MODALE UPDATE*/}

          <Modal
            show={show2}
            onHide={handleClose2}
            animation={false}
            onSubmit={handleSubmit}
            className="modalPosition textColor"
          >
            <Modal.Header closeButton>
              <Modal.Title>MODIFICA DRINK</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* --------------TIPO DRINK---------------- */}
              <FormLabel className="mt-3 textColor">
                Seleziona il tipo di drink*
              </FormLabel>
              <Form.Select
                aria-label="Default select example"
                className="selectBg"
                value={formData.tipoDrink}
                isInvalid={!!errors.tipoDrink}
                onChange={handleChange}
              >
                <option value="">Seleziona il tipo di drink</option>
                <option value="APERITIVO">Aperitivi</option>
                <option value="VINO">Vini</option>
                <option value="COCKTAILS">Cocktails</option>
                <option value="GIN">Gin</option>
                <option value="VODKA">Vodka</option>
                <option value="BIRRA">Birra</option>
              </Form.Select>
              <FormControl.Feedback type="invalid">
                {errors.tipoPiatto}
              </FormControl.Feedback>

              {/* --------------TITOLO---------------- */}
              <FormLabel className="mt-4 textColor">Titolo drink*</FormLabel>
              <FormControl
                type="text"
                name="titolo"
                value={formData.titolo}
                onChange={handleChange}
                isInvalid={!!errors.titolo}
                className="selectBg"
              />
              <FormControl.Feedback type="invalid">
                {/* {errors.titolo} */}
              </FormControl.Feedback>

              {/* --------------DESCRIZIONE---------------- */}
              <FormLabel className="mt-4 textColor">
                Descrizione drink*
              </FormLabel>
              <FormControl
                type="text"
                name="descrizione"
                value={formData.descrizione}
                onChange={handleChange}
                isInvalid={!!errors.descrizione}
                className="selectBg"
              />
              <FormControl.Feedback type="invalid">
                {/* {errors.descrizione} */}
              </FormControl.Feedback>

              {/* --------------PREZZO---------------- */}

              <Form.Label className="mt-4 textColor">Prezzo*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Inserisci il prezzo"
                value={formData.prezzo}
                onChange={handleChange}
                className="selectBg"
                min="0"
                step="0.01"
              />

              {/* --------------IMMAGINE---------------- */}

              <Form.Group controlId="formFile" className="mt-3 textColor">
                <Form.Label>Seleziona un&apos;immagine</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="selectBg"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center mt-3 mb-3 align-items-center contModal">
              <Button
                variant="primary"
                type="submit"
                onClick={handleClose1}
                className="btnFormPrenotazione"
              >
                {" "}
                CONFERMA MODIFICA
              </Button>
            </Modal.Footer>
          </Modal>


          {/* MODALE DELETE */}

          <Modal show={showDelete} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>CANCELLA ELEMENTO</Modal.Title>
            </Modal.Header>
            <Modal.Body>SEI SICURO?</Modal.Body>
            <Modal.Footer>
              <Button 
              variant="secondary" 
              onClick={() => handleDelete()}
              
              >
                SI,ELIMINA
              </Button>
              <Button variant="primary" onClick={handleClose}>
                NO,ANNULLA
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className=" mt-5 text-white contCarte ">
          <div className="d-flex justify-content-center mt-5">
            <h1>PIATTI PRESENTI</h1>
          </div>
          <Form className=" mt-5 mb-5">
            <FormLabel className="mt-3 textColor d-flex justify-content-center mb-3 fs-5">
              Seleziona la tipologia di piatto da trovare
            </FormLabel>
            <div className="d-flex justify-content-center">
              <Form.Select
                aria-label="Default select example"
                className="selectBg"
                id="selectFormGestione"
                value={formData.tipoPiatto}
                onChange={handleChange}
              >
                <option value="">Seleziona il tipo di drink</option>
                <option value="APERITIVO">Aperitivi</option>
                <option value="VINO">Vini</option>
                <option value="COCKTAILS">Cocktails</option>
                <option value="GIN">Gin</option>
                <option value="VODKA">Vodka</option>
                <option value="BIRRA">Birra</option>
              </Form.Select>
            </div>
          </Form>

          <div className="cardContExt">
            <div className="d-flex align-items-center justify-content-between mb-5 contmobile">
              <Container fluid className="d-flex contCards">
                <Row className="contTotCard">
                  {!loading &&
                    data?.content?.map((drink) => (
                      <Col
                        key={drink.titolo}
                        xs={12}
                        md={6}
                        className="mb-4 mt-5"
                      >
                        <Card className="cardCont me-5 ms-4">
                          <Card.Body className="d-flex justify-content-around cardSett">
                            <div className="d-flex ">
                              <img
                                src={drink.immagine}
                                alt=""
                                className="imaginePiatto me-5"
                              />
                              <div className="mt-3">
                                <Card.Title className="titoloColoreContatti">
                                  <strong> {drink.titolo}</strong>
                                </Card.Title>
                                <Card.Text className="descrizioneMenu">
                                  {drink.descrizione}
                                </Card.Text>
                              </div>
                            </div>
                            <div className=" ps-2 pe-2">
                              <Card.Text className="colorPrice mt-3  ">
                                {drink.prezzo} <strong>€</strong>
                              </Card.Text>
                              <div className="d-flex  p-2">
                                {/* ----------------- MODAL UPDATE ----------------- */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="50"
                                  height="50"
                                  fill="#ffc999"
                                  className="bi bi-pencil-square "
                                  viewBox="0 0 16 16"
                                  onClick={() => handleEdit(drink)}
                                >
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                  <path
                                    fillRule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                  />
                                </svg>

                                {/* ----------------- DELETE ----------------- */}
                                <svg
                                  onClick={() => handleDelete(drink.id, drink.titolo)}
                                  fill="#ff0000"
                                  viewBox="0 0 1024 1024"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="DeleteBtn ms-2 mb-1"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path d="M831.24 280.772c5.657 0 10.24-4.583 10.24-10.24v-83.528c0-5.657-4.583-10.24-10.24-10.24H194.558a10.238 10.238 0 00-10.24 10.24v83.528c0 5.657 4.583 10.24 10.24 10.24H831.24zm0 40.96H194.558c-28.278 0-51.2-22.922-51.2-51.2v-83.528c0-28.278 22.922-51.2 51.2-51.2H831.24c28.278 0 51.2 22.922 51.2 51.2v83.528c0 28.278-22.922 51.2-51.2 51.2z"></path>
                                    <path d="M806.809 304.688l-58.245 666.45c-.544 6.246-6.714 11.9-12.99 11.9H290.226c-6.276 0-12.447-5.654-12.99-11.893L218.99 304.688c-.985-11.268-10.917-19.604-22.185-18.619s-19.604 10.917-18.619 22.185l58.245 666.45c2.385 27.401 26.278 49.294 53.795 49.294h445.348c27.517 0 51.41-21.893 53.796-49.301l58.244-666.443c.985-11.268-7.351-21.201-18.619-22.185s-21.201 7.351-22.185 18.619zM422.02 155.082V51.3c0-5.726 4.601-10.342 10.24-10.342h161.28c5.639 0 10.24 4.617 10.24 10.342v103.782c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V51.3c0-28.316-22.908-51.302-51.2-51.302H432.26c-28.292 0-51.2 22.987-51.2 51.302v103.782c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"></path>
                                    <path d="M496.004 410.821v460.964c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V410.821c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm-192.435 1.767l39.936 460.964c.976 11.269 10.903 19.612 22.171 18.636s19.612-10.903 18.636-22.171l-39.936-460.964c-.976-11.269-10.903-19.612-22.171-18.636s-19.612 10.903-18.636 22.171zm377.856-3.535l-39.936 460.964c-.976 11.269 7.367 21.195 18.636 22.171s21.195-7.367 22.171-18.636l39.936-460.964c.976-11.269-7.367-21.195-18.636-22.171s-21.195 7.367-22.171 18.636z"></path>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 btnMenuSettings">
      <Link to="/menuAdmin">
    <Button className="btnFormPrenotazione mb-5">
      TORNA ALLA HOME
    </Button>
      </Link>

    </div>
    <Toast show={showToast} onClose={() => setShowToast(false)} delay={2000} autohide className="ToastCont">
          <Toast.Header>
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Creato il Piatto</Toast.Body>
        </Toast>
    </div>
  );
};
export default DrinkSettings;
