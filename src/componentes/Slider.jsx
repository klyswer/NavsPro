import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Objetos JSON


function Slider(props) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/capsulas.jpg"
            height="600"
            alt="0 slide"
          />
  
          <Carousel.Caption>
            <h3>{props.titleImg3}</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/detergentP.jpg"
            height="600"
            // src="https://www.saexpeditions.com/Media/Default/Our%20Team/header%20silhouette%201440x500.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props.titleImg1}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/Empresa.jpg"
            height="600"
            // src="https://asd-law.com/app/uploads/2018/04/Dresden_iStock-931497600_cropped-1440x500.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>{props.titleImg2}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/detergente.jpg"
            height="600"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>{props.titleImg3}</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    );
  }

export default Slider;