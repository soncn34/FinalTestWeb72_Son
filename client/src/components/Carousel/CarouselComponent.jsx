import React from 'react';
import { Carousel } from 'antd';
import { sliderItems } from "../../data";
import "./Carousel.css"

const contentStyle = {
  maxHeight: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const CarouselComponent = () => (
  <Carousel autoplay>
     {sliderItems.map((item) => (
          <div className="carousel" style={contentStyle} bg={item.bg} key={item.id}>
              <img src={item.img} />
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button>SHOW NOW</button>
            </div>
        ))}
  </Carousel>
);
export default CarouselComponent;