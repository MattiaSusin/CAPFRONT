import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import videoSourceLoungeBar from "../../Video/LoungeBar.mp4";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const LoungeBar = () => {
    const [activeLoungeBar, setActiveLoungebar] = useState("aperitivo");

    const ListMenuContent = () => {
      switch (activeLoungeBar) {
        case "aperitivo":
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
                      <CardBody>
                        <CardTitle className="titoloColoreContatti">
                          APERITIVO 1
                        </CardTitle>
                        <CardText>Descrizione Piatto</CardText>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="border">
                    <CardText>Prezzo</CardText>
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
                          APERITIVO 2
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
                          APERITIVO 3
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
                          APERITIVO 4
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
                          APERITIVO 5
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
                          APERITIVO 6
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
        case "vino":
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
                          VINO 1
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
                          VINO 2
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
                          VINO 3
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
                          VINO 4
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
                          VINO 5
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
                          VINO 6
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
        case "birra":
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
                          BIRRA 1
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
                          BIRRA 2
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
                          BIRRA 3
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
                          BIRRA 4
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
                          BIRRA 5
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
                          BIRRA 6
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
        case "gin":
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
                          GIN 1
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
                          GIN 2
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
                          GIN 3
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
                          GIN 4
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
                          GIN 5
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
                          GIN 6
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
        case "vodka":
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
                            VODKA 1
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
                          VODKA 2
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
                          VODKA 3
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
                          VODKA 4
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
                          VODKA 5
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
                          VODKA 6
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
        case "cocktails":
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
                          COCKTAILS 1
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
                        COCKTAILS 2
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
                        COCKTAILS 3
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
                        COCKTAILS 4
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
                        COCKTAILS 5
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
                        COCKTAILS 6
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
            <source src={videoSourceLoungeBar} type="video/mp4" />
            Il tuo browser non supporta il tag video.
          </video>
          <div className="content-overlay">
            <h1 className="h1LongeMenu mb-5">COCKTAILS</h1>
            <p className="pLongeMenu">“Il cocktail, in realtà, è solo un occasione di incontro. È una festa alla quale ognuno si invita da solo per farsi un po' di festa.”</p>
          </div>
        </div>
  
        {/* Menu */}
        <div>
          <div className="menu-tabs contBtnMenu pt-5 pb-5">
            <button
              onClick={() => setActiveLoungebar("aperitivo")}
              className="topBarMenu me-5 mt-5"
            >
              APERITIVO
            </button>
            <button
              onClick={() => setActiveLoungebar("vino")}
              className="topBarMenu me-5 ms-5 mt-5"
            >
              VINO
            </button>
            <button
              onClick={() => setActiveLoungebar("birra")}
              className="topBarMenu me-5 ms-5 mt-5"
            >
              BIRRA
            </button>
            <button
              onClick={() => setActiveLoungebar("gin")}
              className="topBarMenu ms-5 mt-5"
            >
              GIN
            </button>
            <button
              onClick={() => setActiveLoungebar("vodka")}
              className="topBarMenu ms-5 mt-5"
            >
             VODKA
            </button>
            <button
              onClick={() => setActiveLoungebar("cocktails")}
              className="topBarMenu ms-5 mt-5"
            >
              COCKTAILS
            </button>
          </div>
          <div className="menu-content">{ListMenuContent()}</div>
        </div>
      </>
    );
  
}

export default LoungeBar;

