import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import { useSelector, useDispatch } from "react-redux";
import { getCarouselAction } from "../../../../redux/actions/CarouselActions";
import "./HomeCarousel.css";
import { CSSTransition } from "react-transition-group";

const contentStyle = {
  height: "100vh",
  backgroundSize: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel() {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarouselAction());
  }, [dispatch]);

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          ></div>
        </div>
      );
    });
  };


  return (
    <div className="relative">
      <Slider >{renderImg()}</Slider>
      <button onClick={() => setShow(true)} className="play-btn-carousel">
        <img src="./images/play-video.png" alt="playvideo" />
      </button>
      <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
        <div className="modal " onClick={() => setShow(false)}>
          <iframe
            title="title1"
            allowfullscreen="true"
            width="994px"
            height="500px"
            src="https://youtube.com/embed/8jraVtX821Q?autoplay=1r"
            frameborder="0"
          ></iframe>
        </div>
      </CSSTransition>
    </div>
  );
}
