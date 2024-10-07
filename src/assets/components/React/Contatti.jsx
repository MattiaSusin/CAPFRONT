import { Card, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Contatti = () => {
  return (
    <div className="contFormPrenotazione">
      {/* IMG INIZIALE */}
      <div>
        <img
          src="../../../src/assets/Images/Prenotazione.jpg"
          alt=""
          className="imgPrenotazione"
        />
      </div>
      {/* INIZIO  */}

      <div className="mt-5  cont1FormContatti d-flex justify-content-evenly">
        {" "}
        {/* ------------------------------------------ CONTENITORE 1 ----------------------------------------------- */}
        <div className="contContactContatti mt-5 mb-5">
          <div className="d-flex mb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="#ffc999 "
                id="svgSocial"
                className="bi bi-geo-alt-fill m-4"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
            </div>

            <Card className="cardCont">
              <Card.Body>
                <Card.Title className="titoloColoreContatti">
                  DOVE SIAMO
                </Card.Title>
                <Card.Text>
                  Viale Fratelli Cairoli, 181 , Treviso - 31100
                </Card.Text>
                <Card.Link
                  className="hrefContatti"
                  href="https://www.google.it/maps/place/Viale+Fratelli+Cairoli,+181,+31100+Treviso+TV/@45.6699939,12.2469427,17z/data=!3m1!4b1!4m6!3m5!1s0x4779482982eda35d:0x42349e10afec714a!8m2!3d45.6699902!4d12.2495176!16s%2Fg%2F11c23rfdr5?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                >
                  Raggiungici
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          {/*-------------------------------------------------- CONTENITORE 2-------------------------------------- */}

          <div className="d-flex mb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="#ffc999 "
                id="svgSocial"
                className="bi bi-telephone-fill m-4"
                viewBox="0 0 16 16"
              >
                <path
                  fill="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
            </div>

            <Card className="cardCont">
              <Card.Body>
                <Card.Title className="titoloColoreContatti">
                  TELEFONO & EMAIL
                </Card.Title>
                <Card.Text>+39 0422 575 489</Card.Text>

                <Card.Text>info@loungebarristorante-treviso.it</Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/*-------------------------------------------------- CONTENITORE 3-------------------------------------- */}

          <div className="d-flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="#ffc999 "
                className="bi bi-clock-fill m-4"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              </svg>
            </div>

            <Card className="cardCont">
              <Card.Body>
                <Card.Title className="mb-3 titoloColoreContatti">
                  ORARI APERTURA
                </Card.Title>
                <Card.Text>
                  <b className="textGrassFooter">Lunedì - Giovedì:</b> 12:00 -
                  15:00 / 18:30 - 23:00
                </Card.Text>
                <Card.Text>
                  <b className="textGrassFooter">Venerdì - Sabato:</b> 12:00 -
                  15:00, 18:30 - 02:00
                </Card.Text>
                <Card.Text>
                  <b className="textGrassFooter">Domenica:</b> 12:00 - 16:00,
                  18:00 - 22:00
                </Card.Text>
                <Card.Text>
                  <b className="textGrassFooter">Eventi:</b> 21:00 - 03:00
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/*-------------------------------------------------- FINE-------------------------------------- */}
          <div></div>
        </div>
        <div>
          {" "}
          {/* CONTENITORE DX */}
          <div className="contFormContatti mt-5 mb-5">
            {" "}
            {/* DATI FORM CONTATTI */}
            {/* NOME*/}
            <div className="NomeContatti ">
              <FormLabel>Nome*</FormLabel>
              <FormControl
                type="name"
                className="border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent  colore "
              />
            </div>
            {/*COGNOME*/}
            <div className="CognomeContatti mt-4 mb-4">
              <FormLabel>Cognome*</FormLabel>
              <FormControl
                type="surname"
                className="border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent  FormNome"
              />
            </div>
            {/*EMAIL*/}
            <FormGroup className="mb-3" controlId="formBasicEmail">
              <FormLabel className="emailForm">
                Inserisci la tua email*
              </FormLabel>
              <FormControl type="email" className="emailFormArea" />
            </FormGroup>
            {/*TEL*/}
            {/* TEXT AREA*/}
            <FormLabel className="emailForm mt-3">
              Scrivi il tuo messaggio*
            </FormLabel>
            <div className="form-floating">
              <textarea className="form-control textFormTitle"></textarea>
              {/* <label form="floatingTextarea">
              </label> */}
            </div>
            <button className="mt-5 btnFormPrenotazione">
              INVIA MESSAGGIO
            </button>
          </div>
        </div>
      </div>

      {/*MAPS LOCALE*/}
      <div style={{ width: "100%" }}>
        <iframe
          title="Google Map"
          width="100%"
          height="650"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Viale%20Fratelli%20Cairoli,%20181%20,%20Treviso%20-%2031100+(Restaurant%20&amp;%20Lounge)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contatti;
