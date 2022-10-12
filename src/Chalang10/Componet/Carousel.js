import React, { useState } from 'react';
import m from '../asset/one.jpg';
import c from '../asset/two.webp';
import d from '../asset/three.jpg';
import {Carousel} from 'react-bootstrap';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (<>
  
  <Carousel style={{width:'55%'}} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={m}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Image</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second Image</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={d}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third Image</h3>


        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 </> );
}

//render(<ControlledCarousel />);

export default ControlledCarousel;
