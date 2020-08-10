import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles/slider.css';

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
          src="https://cdn.pixabay.com/photo/2017/05/23/16/23/soap-dispenser-2337697_960_720.jpg"
          alt="0 slide"
        />

        <Carousel.Caption>
          <h3 className="title_slider">
            <span>{props.titleImg3}</span>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img_s"
          
          src="./images/detergentP.jpg"
          alt="First slide"
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
          src="https://cdn.pixabay.com/photo/2017/05/23/16/23/soap-dispenser-2337697_960_720.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="title_slider img_s">
            <span>{props.titleImg2}</span>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img_s"
          src="./images/detergente.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="title_slider">
            <span>{props.titleImg3}</span>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;