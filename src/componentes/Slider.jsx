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
          // src="../images/capsulas.jpg"
          src="https://cdn.pixabay.com/photo/2020/03/15/18/36/hands-4934590_960_720.jpg"
          
          alt="0 slide"
        />

        <Carousel.Caption>
          <h3 className="title_slider">
            <span>{props.titleImg3}</span>
          </h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
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
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img_s"
          src="https://cdn.pixabay.com/photo/2017/05/23/16/23/soap-dispenser-2337697_960_720.jpg"
          // src="./images/Empresa.jpg"
          // src="https://asd-law.com/app/uploads/2018/04/Dresden_iStock-931497600_cropped-1440x500.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="title_slider img_s">
            <span>{props.titleImg2}</span>
          </h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
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
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;