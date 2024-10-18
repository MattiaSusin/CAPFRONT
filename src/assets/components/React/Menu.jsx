import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import videoSource from "../../Video/Menu.mp4";
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

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("antipasti");

  const { data, loading, error } = useApi(`menu/view/food`);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error.message}</Alert>;

  const ListMenuContent = () => {
    switch (activeMenu) {
      case "antipasti":
        return (
          <div className="contElencoMenu contmobile ">
            {/*------------------------------------------ PIATTO 1 ----------------------------------- */}
            <Container fluid className="d-flex contCards">
              <Row className="contTotCard">
                {!loading &&
                  data.content.map((plate) => (
                    <Col key={plate.titolo} xs={12} md={6} className="mb-4 mt-5">
                      <Card className="cardCont me-5 ms-4  ">
                        <Card.Body className="d-flex justify-content-around">
                          <div className="d-flex">
                            <img
                              src={plate.immagine}
                              alt=""
                              className="imaginePiatto me-5"
                            />
                          <div className="mt-3">
                            <Card.Title className="titoloColoreContatti">
                              <strong> {plate.titolo}</strong>
                            </Card.Title>
                            <Card.Text className="descrizioneMenu">{plate.descrizione}</Card.Text>
                          </div>
                          </div>
                              <Card.Text className="colorPrice mt-3">
                                {plate.prezzo} <strong>€</strong>
                              </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Container>
          </div>
        );
      case "primi":
        return (
          <div className="contElencoMenu">
            {/*------------------------------------------ PARTE SX----------------------------------- */}
            <div className="menuSx mt-5 mb-5">
              {/*------------------------------------------ PIATTO 1----------------------------------- */}
              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        PRIMI 1
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>

              {/*------------------------------------------ PIATTO 2----------------------------------- */}

              <div className="d-flex align-items-center justify-content-between mb-5 ">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        PRIMI 2
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>

              {/*------------------------------------------ PIATTO 3----------------------------------- */}

              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        PRIMI 3
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>

              {/*------------------------------------------ PARTE DX----------------------------------- */}
            </div>

            <div className="menuDx mt-5 mb-5">
              {/*------------------------------------------ PIATTO 4----------------------------------- */}
              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        PRIMI 4
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>
              {/*------------------------------------------ PIATTO 5----------------------------------- */}

              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        PRIMI 5
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>
              {/*------------------------------------------ PIATTO 6----------------------------------- */}
              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        PRIMI 6
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>
            </div>
          </div>
        );
      case "secondi":
        return (
          <div className="contElencoMenu">
            {/*------------------------------------------ PARTE SX----------------------------------- */}
            <div className="menuSx mt-5 mb-5">
              {/*------------------------------------------ PIATTO 1----------------------------------- */}
              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        SECONDI 1
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>

              {/*------------------------------------------ PIATTO 2----------------------------------- */}

              <div className="d-flex align-items-center justify-content-between mb-5 ">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        SECONDI 2
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>

              {/*------------------------------------------ PIATTO 3----------------------------------- */}

              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        SECONDI 3
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>

              {/*------------------------------------------ PARTE DX----------------------------------- */}
            </div>

            <div className="menuDx mt-5 mb-5">
              {/*------------------------------------------ PIATTO 4----------------------------------- */}
              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        SECONDI 4
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>
              {/*------------------------------------------ PIATTO 5----------------------------------- */}

              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        SECONDI 5
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>
              {/*------------------------------------------ PIATTO 6----------------------------------- */}
              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        SECONDI 6
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>
            </div>
          </div>
        );
      case "dessert":
        return (
          <div className="contElencoMenu">
            {/*------------------------------------------ PARTE SX----------------------------------- */}
            <div className="menuSx mt-5 mb-5">
              {/*------------------------------------------ PIATTO 1----------------------------------- */}
              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        DESSERT 1
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>

              {/*------------------------------------------ PIATTO 2----------------------------------- */}

              <div className="d-flex align-items-center justify-content-between mb-5 ">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        DESSERT 2
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>

              {/*------------------------------------------ PIATTO 3----------------------------------- */}

              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        DESSERT 3
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>

              {/*------------------------------------------ PARTE DX----------------------------------- */}
            </div>

            <div className="menuDx mt-5 mb-5">
              {/*------------------------------------------ PIATTO 4----------------------------------- */}
              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        DESSERT 4
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>
              {/*------------------------------------------ PIATTO 5----------------------------------- */}

              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        DESSERT 5
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>
              {/*------------------------------------------ PIATTO 6----------------------------------- */}
              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="d-flex">
                  <div className="imagginePiatto me-3">
                    <img src="" alt="" />
                  </div>

                  <Card className="cardCont ">
                    <Card.Body>
                      <Card.Title className="titoloColoreContatti">
                        DESSERT 6
                      </Card.Title>
                      <Card.Text>Descrizione Piatto</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="border">
                  <Card.Text>Prezzo</Card.Text>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
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

      {/* Menu */}
      <div>
        <div className="menu-tabs contBtnMenu pt-5 pb-5">
          <button
            onClick={() => setActiveMenu("antipasti")}
            className="topBarMenu me-5 mt-5"
          >
            ANTIPASTI
          </button>
          <button
            onClick={() => setActiveMenu("primi")}
            className="topBarMenu me-5 ms-5 mt-5"
          >
            PRIMI
          </button>
          <button
            onClick={() => setActiveMenu("secondi")}
            className="topBarMenu me-5 ms-5 mt-5"
          >
            SECONDI
          </button>
          <button
            onClick={() => setActiveMenu("dessert")}
            className="topBarMenu ms-5 mt-5"
          >
            DESSERT
          </button>
        </div>
        <div className="menu-content">{ListMenuContent()}</div>
      </div>
    </>
  );
};

export default Menu;
