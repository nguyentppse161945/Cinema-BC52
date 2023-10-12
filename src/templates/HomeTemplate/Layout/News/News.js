import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function News() {
  const [activeTab, setActiveTab] = useState("pills-home");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };


  const [expandedContent, setExpandedContent] = useState({
    "pills-home": false,
    "pills-review": false,
    "pills-promotions": false,
  });

  const toggleExpandContent = (tabId) => {
    setExpandedContent((prevState) => ({
      ...prevState,
      [tabId]: !prevState[tabId],
    }));
  };
  return (
    <div>
      <ul className="nav nav-pills mb-3 justify-content-center pt-5" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation" id="tinTuc">
          <a
            className={`nav-link btn ${activeTab === "pills-home" ? "active" : ""}`}
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected={activeTab === "pills-home"}
            onClick={() => handleTabClick("pills-home")}
            
          >
            Điện Ảnh 24h
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link btn  ${activeTab === "pills-review" ? "active" : ""}`}
            id="pills-review-tab"
            data-toggle="pill"
            href="#pills-review"
            role="tab"
            aria-controls="pills-review"
            aria-selected={activeTab === "pills-review"}
            onClick={() => handleTabClick("pills-review")}
          >
            Review
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link btn ${activeTab === "pills-promotions" ? "" : ""}`}
            id="pills-promotions-tab"
            data-toggle="pill"
            href="#pills-promotions"
            role="tab"
            aria-controls="pills-promotions"
            aria-selected={activeTab === "pills-promotions"}
            onClick={() => handleTabClick("pills-promotions")}
          >
            Khuyến Mãi
          </a>
        </li>
      </ul>
      
      <div className="tab-content" id="pills-tabContent">
        <div className={`tab-pane fade ${activeTab === "pills-home" ? "show active" : ""}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        {expandedContent["pills-home"] ?
          <div className="container">
            <div className="row">
              <div className="col-md-6 readmore__img">
                <img
                  src="./images/new2.jpg"
                  alt="anh_new1"
                  className="img-fluid "
                />
                <Link
                  to="#"
                  href="#"
                  className="text-decoration-none"
                >
                  [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                  Antebellum: Bẫy Thực Tại Kinh Hoàng
                </Link>
                <p>
                  Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác
                  những mảng tối của xã hội trên nền một câu chuyện kinh
                  dị, có sự tham gia của nhà sản xuất đã làm nên thành
                  công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay ...{" "}
                </p>
                <p className="icon pl-1">
                  <i className="far fa-thumbs-up" /> &nbsp; 2 &nbsp;
                  <img
                    src="./images/iconComment.png"
                    alt="icon_Comment"
                  />{" "}
                  1
                </p>
              </div>
              <div className="col-md-6 readmore__img">
                <img
                  src="./images/news1.png"
                  alt="anh_new2"
                  className="img-fluid "
                />
                <Link to="#" href="#" className="text-decoration-none">
                  Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng
                  đầu doanh thu tại Hàn Quốc mùa dịch
                </Link>
                <p>
                  Vượt mặt Peninsula, Ác Quỷ Đối Đầu trở thành phim ăn
                  khách nhất mùa hè 2020 tại Hàn Quốc. Chỉ sau 12 ngày, Ác
                  Quỷ Đối Đầu chạm điểm hoà vốn với 3.5 triệu lượt xem. Ác
                  Quỷ Đối Đầu giữ vững vị trí top 1 doanh thu 2 tuần liên
                  tiếp{" "}
                </p>
                <p className="icon pl-1">
                  <i className="far fa-thumbs-up" /> &nbsp; 10 &nbsp;
                  <img
                    src="./images/iconComment.png"
                    alt="icon_Comment"
                  />{" "}
                  1
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 readmore__img readmore__bot">
                <img
                  src="./images/new3.png"
                  alt="anh_new3"
                  className="img-fluid"
                />
                <p>
                  <Link to="#" href="#" className="text-decoration-none">
                    Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                    Christopher Nolan
                  </Link>
                </p>
                <p>
                  Làng phim đương đại những năm qua chứng kiến sự lên ngôi
                  của cái tên Christopher Nolan, được biết tới như một
                  trong những đạo diễn thiên tài với khả...{" "}
                </p>
                <p className="icon pl-1">
                  <i className="far fa-thumbs-up" /> &nbsp; 0 &nbsp;
                  <img
                    src="./images/iconComment.png"
                    alt="icon_Comment"
                  />{" "}
                  0
                </p>
              </div>
              <div className="col-md-4 readmore__img readmore__bot">
                <img
                  src="./images/new4.png"
                  alt="anh_new4"
                  className="img-fluid"
                />
                <p>
                  <Link to="#" href="#" className="text-decoration-none">
                    Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                    phòng vé' xứ Hàn
                  </Link>
                </p>
                <p>
                  Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn
                  4.68 triệu vé, hai tên tuổi lão làng trong làng điện ảnh
                  Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết Tận –
                  một bộ phim hành động siêu “nặng đô”...
                </p>
                <p className="icon pl-1">
                  <i className="far fa-thumbs-up" /> &nbsp; 1 &nbsp;
                  <img
                    src="./images/iconComment.png"
                    alt="icon_Comment"
                  />{" "}
                  1
                </p>
              </div>
              <div className="col-md-4 readmore__special">
                <div className="row mb-3 mb-md-0 mb-lg-2">
                  <img
                    src="./images/new5.png"
                    alt=""
                    className="img-fluid"
                  />
                  <Link
                    to="#"
                    href="#"
                    className="pt-md-2 text-decoration-none"
                  >
                    6 đạo diễn tỉ đô làm nên thành công của những bom tấn
                    đình đám
                  </Link>
                </div>
                <div className="row mb-3 mb-md-0 mb-lg-2">
                  <img src="./images/new6.png" alt="anh_new6" />
                  <Link
                    to="#"
                    href="#"
                    className="pt-md-2 text-decoration-none"
                  >
                    Gái Già Lắm Chiêu V - Những cuộc đời vương giả
                  </Link>
                </div>
                <div className="row mb-3 mb-md-0 mb-lg-2">
                  <img src="./images/new7.png" alt="anh_new6" />
                  <Link
                    to="#"
                    href="#"
                    className="pt-md-2 text-decoration-none"
                  >
                    Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già
                    Lắm Chiêu
                  </Link>
                </div>
                <div className="row mb-3 mb-md-0 mb-lg-2">
                  <img src="./images/new8.png" alt="anh_new6" />
                  <Link
                    to="#"
                    href="#"
                    className="pt-md-2 text-decoration-none"
                  >
                    5 lý do bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ
                  </Link>
                </div>
              </div>
            </div>
          </div>
          : " "}


          <div className="text-center">
            {!expandedContent["pills-home"] && (
              <button className=" readmore__button" onClick={() => toggleExpandContent("pills-home")}>Xem thêm</button>
            )}
            {expandedContent["pills-home"] && (
              <button className=" readmore__button" onClick={() => toggleExpandContent("pills-home")}>Rút gọn</button>
            )}
          </div>
        </div>




        <div className={`tab-pane fade ${activeTab === "pills-review" ? "show active" : ""}`} id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
        <div className="text-center">
            {!expandedContent["pills-review"] && (
              <button className="readmore__button" onClick={() => toggleExpandContent("pills-review")}>Xem thêm</button>
            )}
            {expandedContent["pills-review"] && (
              <button className="readmore__button" onClick={() => toggleExpandContent("pills-review")}>Rút gọn</button>
            )}
          </div>
        </div>



        <div className={`tab-pane fade ${activeTab === "pills-promotions" ? "show active" : ""}`} id="pills-promotions" role="tabpanel" aria-labelledby="pills-promotions-tab">
          <div className="text-center">
            {!expandedContent["pills-promotions"] && (
              <button className=" readmore__button" onClick={() => toggleExpandContent("pills-promotions")}>Xem thêm</button>
            )}
            {expandedContent["pills-promotions"] && (
              <button className=" readmore__button" onClick={() => toggleExpandContent("pills-promotions")}>Rút gọn</button>
            )}
          </div>
        </div>


      </div>
    </div >
  );
}


