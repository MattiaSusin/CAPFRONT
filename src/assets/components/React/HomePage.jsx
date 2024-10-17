import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import image from "../../Images/Piatti/piatto menu.jpg";
import "../Css/HomePage.css";
import videoCucina from '../../Images/Video Ila/Antipasto.mp4'

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="contTotHome">
      {/* CAROSELLO INIZO */}
      <div className="contHomePage d-flex justify-content-center">
        {/* <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Image
              text="First slide"
              src="../../../../src/assets/Images/Prenotazione.jpg"
              className="border imgCarosello"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              text="Second slide"
              src="../../../../src/assets/Images/Prenotazione.jpg"
              className="border imgCarosello"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              text="Third slide"
              src="../../../../src/assets/Images/Prenotazione.jpg"
              className="border imgCarosello"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}

        <div className="">
          <img
            src="../../../../src/assets/Images/Logo_Footer.jpg.png"
            alt=""
            className="imgHome"
          />
          {/*  <h1 className="h1HomePage">LOUNGE & RESTUARANT</h1> */}
          {/*  <Link to="/prenotazione" className="nav-link">
         <Button className="btnFormPrenotazione">PRENOTA UN TAVOLO</Button>
         </Link> */}
        </div>
        <div></div>
      </div>

      {/* CAROSELLO FINE */}
      <div className="align-items-center">
        <div className="d-flex titleStaff">
          <h1 className="h1Staff">LO STAFF VI ASPETTA </h1>
        </div>
        <div className="d-flex justify-content-around">
          <div className="border imgStaffCucina">

        <video className="video-background" autoPlay muted loop>
          <source src={videoCucina} type="video/mp4" className="border text-white"/>
          Il tuo browser non supporta il tag video.
        </video>
          </div>
          <div className="mt-5">
            <h2 className="h2Staff mb-5">LA CUCINA</h2>
            <p className="text-white  pTextstaff">
              Il nostro team di cucina è il cuore pulsante del ristorante, un
              gruppo affiatato di chef e sous chef con un&apos;unica missione:
              trasformare ingredienti freschi e di qualità in esperienze
              culinarie indimenticabili. Con creatività, passione e una profonda
              conoscenza delle tecniche gastronomiche, ogni piatto che esce
              dalla nostra cucina è un capolavoro che celebra la tradizione
              italiana con un tocco innovativo. Il nostro staff, guidato dallo
              chef Nicola, lavora instancabilmente per offrirvi sapori autentici
              e preparazioni curate nei minimi dettagli.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-around">
          <img
            alt=""
            src="../../Images/preparing-refreshing-cocktail-bar.jpg"
            className=" imgStaff"
          />
          <div className="mt-5">
            <h2 className="h2Staff mb-5 ">LA SALA</h2>
            <p className="text-white  pTextstaff">
              Il nostro team di sala è sinonimo di accoglienza e
              professionalità. Sempre attenti ai dettagli e pronti a soddisfare
              ogni vostra esigenza, i nostri camerieri offrono un servizio
              impeccabile, assicurandosi che ogni cliente si senta coccolato e a
              proprio agio. Con cortesia e discrezione, accompagnano ogni
              esperienza gastronomica, rendendola un momento piacevole e
              indimenticabile.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <img alt="" src="" className=" imgStaff" />
          <immage className="video-background">
            <source src={image} type="img" />
            Il tuo browser non supporta il tag video.
          </immage>
          <div className="mt-5">
            <h2 className="h2Staff mb-5 ">IL BAR</h2>
            <p className="text-white  pTextstaff">
              Il nostro bar è affidato a un gruppo di esperti mixologist,
              maestri nella creazione di cocktail originali e ricercati. Ogni
              bevanda, che sia un classico o una novità, è preparata con
              passione e creatività, utilizzando solo ingredienti di alta
              qualità. Il bar è il luogo perfetto per rilassarsi e scoprire
              nuovi sapori, grazie alla cura e all’arte dei nostri bartender.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
