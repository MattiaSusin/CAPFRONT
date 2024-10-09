import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import '../Css/HomePage.css'

const HomePage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="d-flex justify-content-center">
        <div className="contHomePage d-flex justify-content-between">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image text="First slide" src="../../Images/Prenotazione.jpg" className="border" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
        
        </div>
    );
}

export default HomePage;