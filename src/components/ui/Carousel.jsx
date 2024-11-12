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
    <div className="flex  items-center justify-center max-w-md "> {/* Center the carousel */}
      <Slider {...settings} className="rounded-md flex items-center justify-center p-10 overflow-hidden">

         {/* Add styling */}
        <div>
          <img src={six} alt="First" className="w-96 h-66 flex items-center justify-center object-cover" />
          <h4 className='text-2xl bg-yellow-400 px-4 py-2'>Asus Zenbook</h4>
        </div>
        <div>
          <img src={eight} alt="Second" className="w-96 h-66 flex items-center justify-center object-cover" />
        </div>
        <div>
          <img src={third} alt="Third" className="w-96 h-66 flex items-center justify-center object-cover" />
        </div>
        
        <div>
          <img src={six} alt="Sixth" className="w-96 h-66 flex items-center justify-center object-cover" />
        </div>
        <div>
          <img src={seven} alt="Seventh" className="w-96 h-66 flex items-center justify-center object-cover" />
        </div>
        <div>
          <img src={eight} alt="Eighth" className="w-96 h-66 flex items-center justify-center object-cover" />
        </div>
        <div>
          <img src={nine} alt="Ninth" className="w-96 h-66 flex items-center justify-center object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
