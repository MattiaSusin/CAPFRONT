import "bootstrap/dist/css/bootstrap.min.css";
import camerieri from "../../../../src/assets/Images/Piatti/Camerieri.jpg";
import chef from "../../../../src/assets/Images/Piatti/Chef.webp";
import baristi from "../../../../src/assets/Images/Piatti/Baristi.jpg";
import "../Css/HomePage.css";
import videoCucina from "../../Images/Video Ila/Antipasto.mp4";
import { Card } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="contTotHome">
      {/* CAROSELLO INIZO */}
      <div className="contHomePage d-flex justify-content-center">
        <div className="">
          <img
            src="../../../../src/assets/Images/Logo_Footer.jpg.png"
            alt=""
            className="imgHome"
          />
        </div>
        <div></div>
      </div>

      <div className="align-items-center">
        <div className="d-flex titleStaff">
          <h1 className="h1Staff">LO STAFF VI ASPETTA </h1>
        </div>
        <div className="d-flex justify-content-evenly contCardHomePage">
          <div className="imgStaffCucina">
            <img src={chef} alt="" className="imgHomePage rounded" />
          </div>
          <Card className="border-0 cardTextHomePage">
            <Card.Body className="bodyCardHome">
              <Card.Title className="h2Staff mb-5">LA CUCINA</Card.Title>

              <Card.Text className="text-white  pTextstaff">
                Il nostro team di cucina, guidato dallo chef Nicola, è il cuore
                pulsante del ristorante. <br /> Un gruppo affiatato di chef e sous chef
                lavora con passione per trasformare ingredienti freschi in
                piatti unici. <br /> Ogni creazione celebra la tradizione italiana,
                arricchita da un tocco innovativo. Con attenzione ai dettagli e
                una profonda conoscenza delle tecniche gastronomiche, ci
                impegniamo a offrirvi sapori autentici e indimenticabili.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex justify-content-evenly contCardHomePage">
          <div className="imgStaffCucina">
            <img src={camerieri} alt="" className="imgHomePage rounded" />
          </div>
          <Card className="border-0 cardTextHomePage">
            <Card.Body className="bodyCardHome">
              <Card.Title className="h2Staff mb-5">LA SALA</Card.Title>

              <Card.Text className="text-white  pTextstaff">
                Il nostro team di sala è sinonimo di accoglienza e
                professionalità. Sempre attenti ai dettagli e pronti a
                soddisfare ogni vostra esigenza, i nostri camerieri offrono un
                servizio impeccabile, assicurandosi che ogni cliente si senta
                coccolato e a proprio agio. <br /> Con cortesia e discrezione,
                accompagnano ogni esperienza gastronomica, rendendola un momento
                piacevole e indimenticabile.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="d-flex justify-content-evenly contCardHomePage mb-5">
          <div className="imgStaffCucina">
            <img src={baristi} alt="" className="rounded imgHomePage"></img>
          </div>

          <Card className="border-0 cardTextHomePage">
            <Card.Body className="bodyCardHome">
              <Card.Title className="h2Staff mb-5">IL BAR</Card.Title>

              <Card.Text className="text-white  pTextstaff">
                Il nostro bar è affidato a un gruppo di esperti mixologist,
                maestri nella creazione di cocktail originali e ricercati. <br /> Ogni
                bevanda, che sia un classico o una novità, è preparata con
                passione e creatività, utilizzando solo ingredienti di alta
                qualità. <br /> Il bar è il luogo perfetto per rilassarsi e scoprire
                nuovi sapori, grazie alla cura e all’arte dei nostri bartender.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
