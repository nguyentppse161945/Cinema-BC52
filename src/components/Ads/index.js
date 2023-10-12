import React from "react";
import "../Ads/Ads.scss";
import SliderAds from "../SliderAds/SliderAds";
import listAdventiseImages from "../../Data/advertiseData";
// import LazyLoadImage from "react-lazy-load-image-component";

const customSlick = {
  speed: 500,
  dots: false,
  arrows: false,
};
function Ads() {
  return (
    <section className="ads" id="ungDung" style={{ width: "100%" }}>
      <div className="container">
        <div className="row text-white">
          <div className="ads_text col-7 text-center ">
            <p className="text-2xl" style={{ lineHeight: "1rem" }}>
              Ứng dụng tiện lợi dành cho
            </p>
            <p className="text-2xl">người yêu điện ảnh</p>
            <br />
            <p className="text-xl	">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm <br />
              rạp và đổi quà hấp dẫn.
            </p>
            <button
              className="btnDownload"
              style={{
                color: "#fff",
                border: "1px solid #fb4226",
                borderRadius: "4px",
                background: "#fb4226",
                padding: "10px 20px",
                fontWeight: "700px",
              }}
            >
              App miễn phí - Tải về ngay!
            </button>
            <br />
            <p className="	mt-2">
              Hệ điều hành : <a href="#!">iOS</a> &amp;
              <a href="#!"> Android</a>
            </p>
          </div>
          <div className="col-5">
            {
              <SliderAds customSlick={customSlick}>
                {listAdventiseImages.map((img, index) => (
                  <div key={index}>
                    <img className="img-fluid" src={img} alt="app-tix" />
                  </div>
                ))}
              </SliderAds>
            }
          </div>
        </div>
      </div>
    </section>
  );
}
export default Ads;
