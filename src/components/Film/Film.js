import React from "react";
import { history } from "../../App";
export default function Film(props) {
  const { phim } = props;

  return (
    <div className="px-2 overflow-hidden film" >
      <div className="relative ">
        <img
          src={phim.hinhAnh}
          alt={phim.tenPhim}
          style={{
            height: "300px",
            width: "90%",
            borderRadius: "6px",
          }}
        />
        
        <div
          onClick={() => {
            history.push(`/detail/${phim.maPhim}`);
          }}
        ></div>
      </div>
      <div className="film-title">
        <h5 className=" py-3 mb-5">
          <span className="text_1 ">
            C18
          </span>
          {phim.tenPhim}
        </h5>
      </div>
      <button
        className="py-1 btn-booking "
        onClick={() => {
          history.push(`/detail/${phim.maPhim}`);
        }}
      >
        MUA VÉ
      </button>
    </div>
  );
}
