import head from "../assets/Images/head.png";
import heade from "../assets/Images/heade.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Slick() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slideToScroll: 1,
    autoplay: true,
    autospeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="overflow-hidden pt-10 md:h-96">
      <Slider {...settings}>
        <div>
          <h3>
            <img src={heade} alt="image" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={head} alt="image" />
          </h3>
        </div>
      </Slider>
    </div>
  );
}
