import React from 'react'
import "./grid.css"
import img from "./imagensgrid/img1.png";
import img2 from "./imagensgrid/img2.png";
import img3 from "./imagensgrid/img3.png";
import img4 from "./imagensgrid/img4.png";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function grid() {
  return (
    <>
    <div style={{ display: 'block', width: 1500, padding: 0 }}>
    <h2 className='title'>READSET'S </h2>
    <Carousel fade>
      <Carousel.Item interval={5000}>
        <img  className="image1"
        src={img2} alt="img2" />
        <Carousel.Caption>
        <h3>Readset 3uix</h3>
          <Button className='buttoncarousel' variant="light">Buy</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img  className="image1"
         src={img} alt="img1" />
        <Carousel.Caption>
        <h3>Readset 3uz</h3>
          <Button className='buttoncarousel' variant="light">Buy</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img  className="image1"
         src={img3} alt="img3" />
        <Carousel.Caption>
          <h3>Readset 3ui</h3>
          <Button className='buttoncarousel' variant="light">Buy</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img  className="image1"
         src={img4} alt="img4" />
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

export default grid