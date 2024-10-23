import { useState} from 'react';
import {
  Alert,
  Card,
  Col,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import "../Css/Menu.css";
import useApi from "../../../hooks/Api";
import videoLounge from "../../Video/LoungeBar.mp4";

const LoungeBar = () => {
  const [activeDrink, setActiveDrink] = useState("aperitivo");

  const { data, loading, error } = useApi(`drinks/filtro?tipoDrink=${activeDrink.toUpperCase()}`);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error.message}</Alert>;

  const ListMenuContent = () => {
    return (
      
      <div className="contElencoMenu contmobile ">
        <Container fluid className="d-flex contCards">
          <Row className="contTotCard">
            {!loading &&
              data.content.map((drink) => (
                <Col key={drink.titolo} xs={12} md={6} className="mb-4 mt-5">
                  <Card className="cardCont me-5 ms-4">
                    <Card.Body className="d-flex justify-content-around">
                      <div className="d-flex cardWid">
                        <img
                          src={drink.immagine}
                          alt=""
                          className="imaginePiatto me-5"
                        />
                        <div>
                          <h5>{drink.titolo}</h5>
                          <p>{drink.descrizione}</p>
                          <p>{drink.prezzo} €</p>
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
          <source src={videoLounge} type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>
        <div className="content-overlay">
          <h1 className="h1LongeMenu">DRINK</h1>
          <p className="pLongeMenu">
            Vivi un&apos;esperienza culinaria indimenticabile.
          </p>
        </div>
      </div> 
      
    <div>
      <div className="menu-buttons contBtnMenu pt-5 pb-5">
        <button className="topBarMenu me-5 mt-5" onClick={() => setActiveDrink("aperitivo")}>APERITIVI</button>
        <button className="topBarMenu me-5 mt-5" onClick={() => setActiveDrink("vino")}>VINI</button>
        <button className="topBarMenu me-5 mt-5" onClick={() => setActiveDrink("cocktail")}>COCKTAILS</button>
        <button className="topBarMenu me-5 mt-5" onClick={() => setActiveDrink("gin")}>GIN</button>
        <button className="topBarMenu me-5 mt-5" onClick={() => setActiveDrink("vodka")}>VODKA</button>
        <button className="topBarMenu me-5 mt-5" onClick={() => setActiveDrink("birra")}>BIRRA</button>
      </div>
      <ListMenuContent />
    </div>
    </>
  );
};

export default LoungeBar;