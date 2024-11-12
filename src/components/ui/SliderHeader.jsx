
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Game from "../../assets/image/game-1.jpg"
import Camera from "../../assets/image/camera-1.jpg"


import Slider from "react-slick";


const SliderHeader = ()  => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,      
    autoplaySpeed: 3000,  
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <div className="overflow-hidden w-full">
      <Slider {...settings}>
      <div className="relative">
        <div className="absolute left-32 top-40 gap-4 flex flex-col items-start justify-center">
           <p className="text-5xl font-semibold text-gray-800">Game, Consoles &<br/>Much More!</p>
           <p className="text-2xl text-gray-400">Sega Saturn Disc Drive Replacement</p>
           <button className="bg-[#fedc19] px-4 py-3 text-md font-semibold hover:bg-black hover:text-white">
            Shop Now
           </button>
        </div>
       
        <img src={Game} />
      </div>
      <div className="relative">
        <div className="absolute left-32 top-40 gap-4 flex flex-col items-start justify-center">
           <p className="text-5xl font-semibold text-gray-800">New Range Of<br /> Samsung Camera</p>
           <p className="text-2xl text-gray-400">Samsung EOS600D/Kiss X5</p>
           <button className="bg-[#fedc19] px-4 py-3 text-md font-semibold hover:bg-black hover:text-white">
            Shop Now
           </button>
        </div>
       
        <img src={Camera} />
      </div>
    </Slider>
    </div>
  );
}

export default SliderHeader