import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slider.css';

const responsiveSettings = [
  {
      breakpoint: 800,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  },
  {
      breakpoint: 500,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  }
];
const indicators = (index) => (<div className="indicator">{index + 1}</div>);

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];


export default function Slider() {
  return (
    <div className="slide-container">
      <Slide slidesToScroll={1} slidesToShow={1} indicators={indicators} responsive={responsiveSettings}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <img
              className="slide-img"
              src={slideImage.url}
              alt={slideImage.caption}
            />
            <h2>{slideImage.caption}</h2>
          </div>
        ))}
      </Slide>

    </div>

  );
}
