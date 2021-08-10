import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import kud from "../images/kud.png"
import cycle from "../images/cycling.jpg"
const Carouselbar = () => {
  return (
    
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cycle}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>bla bla bla</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cycle}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>bla bla bla</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cycle}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              bla bla bla
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
  );
};

export default Carouselbar;
