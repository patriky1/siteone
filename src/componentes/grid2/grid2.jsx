import React from 'react'
import "./grid2.css"
import image1 from "./imagensgrid2/img1.png";
import image2 from "./imagensgrid2/img2.png";
import image3 from "./imagensgrid2/img3.png";
import image4 from "./imagensgrid2/img4.png";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function grid2() {
  return (
    <>
    <div className='position' style={{ display: 'block', width: 1500, padding: 0 }}>
    <h2 className='title'>SETUP'S </h2>
    <Carousel fade>
      <Carousel.Item interval={5000}>
        <img  className="image1"
        src={image1} alt="image1" />
        <Carousel.Caption>
        <h3>Readset 3uix</h3>
          <Button className='buttoncarousel' variant="light">Buy</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img  className="image1"
         src={image2} alt="image2" />
        <Carousel.Caption>
        <h3>Readset 3uz</h3>
          <Button className='buttoncarousel' variant="light">Buy</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img  className="image1"
         src={image3} alt="image3" />
        <Carousel.Caption>
          <h3>Readset 3ui</h3>
          <Button className='buttoncarousel' variant="light">Buy</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img  className="image1"
         src={image4} alt="image4" />
        <Carousel.Caption>
          <h3>Readset 3ui</h3>
          <Button className='buttoncarousel' variant="light">Buy</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>

    </>
  )
}

export default grid2