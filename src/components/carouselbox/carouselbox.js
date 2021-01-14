import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import reduce from '../../assets/1.jpg';
import bags from '../../assets/2.jpg';
import cottonBag from '../../assets/4.jpg';
import './carouselbox.css';

const CarouselBox = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          src={reduce}
          className = "photo d-block w-85 mx-auto"
          alt="3R principle"
        />
        < Carousel.Caption > Reduce Reuse Recycle </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          src={bags}
          className = "photo d-block w-85 mx-auto"
          alt="bag"
        />
        < Carousel.Caption > Reusable bag </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          src={cottonBag}
          className = "photo d-block w-85 mx-auto"
          alt="cotton bag"
        />
        < Carousel.Caption > Reusable bag </Carousel.Caption>
      </Carousel.Item>      
    </Carousel>
  )
};

export default CarouselBox;
