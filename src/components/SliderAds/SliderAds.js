import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "../SliderAds/SliderAds.scss";
import SampleNextArrow from "../RSlick/MultipleRowSlick"
import SamplePrevArrow from "../RSlick/MultipleRowSlick"

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={className} onClick={onClick}>
      <SampleNextArrow style={{ fontSize: 45 }} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <SamplePrevArrow style={{ fontSize: 45 }} />
    </div>
  );
}
export default function SliderAds(props) {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 600, //speed transition animate
    autoplaySpeed: 5000, //speed per sence
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,

    responsive: [
      {
        //less than
        breakpoint: 1065,
        settings: {
          arrows: false,
          // autoplay: false,
        },
      },
    ],
  };

  return (

    <div>
      <section className="carousel">
        <Slider {...settings} {...props.customSlick}>
          {props.children}
        </Slider>
      </section>
    </div>
  );
}

SliderAds.propTypes = {
  customSlick: PropTypes.object,
};
SliderAds.defaultProps = {
  customSlick: {},
};
