import React, { Fragment } from "react";
import Ads from "../../../../components/Ads";

export default function Footer() {
  return (
    <Fragment>
      <Ads />
      <footer className="footer__info">
        <div className="container mx-auto">
          <div className="row info__top ">
            <div className="col-md-4">
              <h4>FOX MOVIE</h4>
              <p>
                FAQ
                <span>
                  Thỏa thuận sử dụng
                </span>
              </p>
              <p>
                Brand Guidelines
                <span>
                  Chính sách bảo mật
                </span>
              </p>
            </div>

            <div className="icon_1 col-md-4">
              <h4>ĐỐI TÁC</h4>
              <div className="row pb-2">
                <div className="col ">
                  <img src="./images/cgv.png" alt="cgv" className="img-fluid" />
                </div>
                <div className="col">
                  <img src="./images/bhd.png"
                    alt="bhd"
                    className="img-fluid" />
                </div>
                <div className="col">
                  <img src="./images/galaxycine.png"
                    alt="galaxy"
                    className="img-fluid" />
                </div>
                <div className="col">
                  <img
                    src="./images/megags.png"
                    alt="megags"
                    className="img-fluid"
                  />
                </div>
                <div className="row pb-2">
                  <div className="col">

                    <img
                      src="./images/dongdacinema.png"
                      alt="ddc"
                      className="img-fluid"
                    />

                  </div>
                  <div className="col">

                    <img
                      src="./images/TOUCH.png"
                      alt="touch"
                      className="img-fluid"
                    />

                  </div>
                  <div className="col">

                    <img
                      src="./images/cnx.jpg"
                      alt="cinemax"
                      className="img-fluid"
                    />

                  </div>
                  <div className="col">
                    <img
                      src="./images/STARLIGHT.png"
                      alt="starlight"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="row pb-2">
                  <div className="col">

                    <img
                      src="./images/dcine.png"
                      alt="dcine"
                      className="img-fluid"
                    />

                  </div>
                  <div className="col">

                    <img
                      src="./images/lotte.png"
                      alt="lotte"
                      className="img-fluid"
                    />

                  </div>
                  <div className="col">

                    <img
                      src="./images/payoo.jpg"
                      alt="payoo"
                      className="img-fluid"
                    />

                  </div>
                  <div className="col">

                    <img
                      src="./images/zalopay_icon.png"
                      alt="zalo"
                      className="img-fluid"
                    />

                  </div>
                  <div className="col">

                    <img
                      src="./images/AGRIBANK.png"
                      alt="Agribank"
                      className="img-fluid"
                    />

                  </div>
                </div>
                <div className="row">
                  <div className="col">

                    <img
                      src="./images/VCB.png"
                      alt="Vietcombank"
                      className="img-fluid"
                    />

                  </div>
                  <div className="col">

                    <img
                      src="./images/VIETTINBANK.png"
                      alt="Viettinbank"
                      className="img-fluid"
                    />

                  </div>
                  <div className="col">
                    <img
                      src="./images/IVB.png"
                      alt="IVB"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="./images/123go.png"
                      alt="123go"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <img
                      src="./images/laban.png"
                      alt="laban"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="icon col-md-4">
              <h4 className="pt-3 pt-md-0">SOCIAL</h4>

              <i className="fab fa-facebook pl-0" />


              <i className="fab fa-instagram" />


              <i className="fab fa-twitter" />


              <i className="fab fa-pinterest" />
            </div>
            <hr></hr>
            <div className="row info__bottom mt-5">
              <div className="col-md-8">
                <h4>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h4>
                <p>
                  Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                  Hồ Chí Minh, Việt Nam.
                </p>
                <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                <p>
                  đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở
                  kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                </p>
                <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                <p>
                  Email: support@tix.vn
                </p>
              </div>
              <div className="congThuong col-md-4 text-center mt-5">

                <img
                  src="./images/bocong thuong.png"
                  alt="bocongthuong"
                  className=" img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment >
  );
}
