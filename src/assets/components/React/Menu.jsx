import { useState} from 'react';
import {
  Alert,
  Card,
  Col,
  Container,
  Row,
  Spinner,
  Button,
} from "react-bootstrap";
import "../Css/Menu.css";
import useApi from "../../../hooks/Api";
import videoSource from "../../Video/Menu.mp4";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("antipasto");

  const { data, loading, error } = useApi(`menu/filtro?tipoPiatto=${activeMenu.toUpperCase()}`);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error.message}</Alert>;

  const ListMenuContent = () => {
    return (
      
      <div className="contElencoMenu contmobile ">
        <Container fluid className="d-flex contCards">
          <Row className="contTotCard">
            {!loading &&
              data.content.map((plate) => (
                <Col key={plate.titolo} xs={12} md={6} className="mb-4 mt-5">
                  <Card className="cardCont me-5 ms-4">
                    <Card.Body className="d-flex justify-content-around">
                      <div className="d-flex">
                        <img
                          src={plate.immagine}
                          alt=""
                          className="imaginePiatto me-5"
                        />
                        <div>
                          <h5>{plate.titolo}</h5>
                          <p>{plate.descrizione}</p>
                          <p>{plate.prezzo} €</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  };


  

  return (
    <>
      {/* Video di sfondo */}
      <div className="video-background-container">
        <video className="video-background" autoPlay muted loop>
          <source src={videoSource} type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>
        <div className="content-overlay">
          <h1 className="h1LongeMenu">MENU</h1>
          <p className="pLongeMenu">
            Vivi un&apos;esperienza culinaria indimenticabile.
          </p>
        </div>
      </div> 
      
    <div>
      <div className="menu-buttons">
        <Button onClick={() => setActiveMenu("antipasto")}>Antipasti</Button>
        <Button onClick={() => setActiveMenu("primo")}>Primi</Button>
        <Button onClick={() => setActiveMenu("secondo")}>Secondi</Button>
        <Button onClick={() => setActiveMenu("dessert")}>Dessert</Button>
      </div>
      <ListMenuContent />
    </div>
    </>
  );
};

export default Menu;