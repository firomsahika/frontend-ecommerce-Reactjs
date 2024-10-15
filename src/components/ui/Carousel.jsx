import React from 'react';
import Slider from 'react-slick';
import first from '../../assets/image/1.jpg';
import second from '../../assets/image/2.jpg';
import third from '../../assets/image/3.jpg';
import four from '../../assets/image/4.png';
import five from '../../assets/image/5.jpg';
import six from '../../assets/image/6.jpeg';
import seven from '../../assets/image/7.jpeg';
import eight from '../../assets/image/8.jpeg';
import nine from '../../assets/image/9.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Time between transitions
    arrows: true,
  };

  return (
    <div className="max-w-3xl mx-auto "> {/* Center the carousel */}
      <Slider {...settings} className="rounded-md overflow-hidden"> {/* Add styling */}
        <div>
          <img src={first} alt="First" className="w-80 h-66 object-cover" /> {/* Ensure image fits */}
        </div>
        <div>
          <img src={second} alt="Second" className="w-80 h-66 object-cover" />
        </div>
        <div>
          <img src={third} alt="Third" className="w-80 h-66 object-cover" />
        </div>
        <div>
          <img src={four} alt="Fourth" className="w-80 h-66 object-cover" />
        </div>
        <div>
          <img src={five} alt="Fifth" className="w-80 h-66 object-cover" />
        </div>
        <div>
          <img src={six} alt="Sixth" className="w-80 h-66 object-cover" />
        </div>
        <div>
          <img src={seven} alt="Seventh" className="w-80 h-66 object-cover" />
        </div>
        <div>
          <img src={eight} alt="Eighth" className="w-80 h-66 object-cover" />
        </div>
        <div>
          <img src={nine} alt="Ninth" className="w-80 h-66 object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
