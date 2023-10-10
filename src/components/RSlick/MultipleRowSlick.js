import React, { useState } from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleRowSlick.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../redux/actions/types/QuanLyPhimType";
import Film from "../Film/Film";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", top: "45%" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-62px", top: "45%" }}
      onClick={onClick}
    ></div>
  );
}

const MultipleRowSlick = (props) => {
  const [show, setShow] = useState(false);
  const [trailer, setTrailer] = useState("");
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );
  const renderFilms = () => {
    return props.arrFilm.slice(0, 24).map((item, index) => {
      return (
        <div
          className="mt-2 film "
          key={index}
          onClick={() => {
            setTrailer(item.trailer);
          }}
        >
          <Film phim={item} />
          <button onClick={() => setShow(true)} className="play-btn">
            <img src="./images/play-video.png" alt="playvideo" />
          </button>
        </div>
      );
    });
  };
  let activeClassDC = dangChieu === true ? "active_Film" : "none_active_Film";
  let activeClassSC = sapChieu === true ? "active_Film" : "none_active_Film";

  const settings = {
    className: "center  ",
    centerMode: true,
    infinite: true,
    centerPadding: 0,
    slidesToShow: 2,
    speed: 300,
    rows: 2,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container ">
      <div className="text-center mb-4" id="lichChieu">
        <button
          className={`${styleSlick[activeClassDC]} btn btn-warning m-4 `}
          onClick={() => {
            const action = { type: SET_FILM_DANG_CHIEU };
            dispatch(action);
          }}
        >
          PHIM ĐANG CHIẾU
        </button>
        <button
          className={`${styleSlick[activeClassSC]} btn btn-warning`}
          onClick={() => {
            const action = { type: SET_FILM_SAP_CHIEU };
            dispatch(action);
          }}
        >
          PHIM SẮP CHIẾU
        </button>
      </div>

      <div className="">
        <Slider {...settings}>{renderFilms()}</Slider>
        <CSSTransition
          in={show}
          unmountOnExit
          timeout={{ enter: 0, exit: 300 }}
        >
          <div className="modal" onClick={() => setShow(false)}>
    
            <iframe
              style={{ position: "relative" }}
              title="title4"
              allowfullscreen="true"
              width="1000px"
              height="500px"
              src={trailer}
              frameborder="0"
            ></iframe>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default MultipleRowSlick;
