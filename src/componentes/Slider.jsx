import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles/slider.css';

const slider1 = `${process.env.PUBLIC_URL}/images/mpryr1.jpg`
const slider2 = `${process.env.PUBLIC_URL}/images/mpryr2.jpg`
const slider3 = `${process.env.PUBLIC_URL}/images/mpryr3.jpg`
const slider4 = `${process.env.PUBLIC_URL}/images/mpryr4.jpg`

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
          className="d-block w-100 img_s"
          src={slider1}
          alt="0 slide"
        />

        <Carousel.Caption>
          <h3 className="title_slider">
            <span>{props.titleImg1}</span>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img_s"
          
          src={slider2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="title_slider">
            <span>{props.titleImg2}</span>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img_s"
          src={slider3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="title_slider img_s">
            <span>{props.titleImg3}</span>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img_s"
          src={slider4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="title_slider">
            <span>{props.titleImg4}</span>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;