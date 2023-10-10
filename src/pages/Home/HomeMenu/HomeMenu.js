import React from "react";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";
const { TabPane } = Tabs;


export default class Demo extends React.PureComponent {
  state = {
    tabPosition: "left",
  };

  changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };

  renderHeThongRap = () => {
    return this.props.heThongRapChieu?.map((heThongRap, index) => {
      let { tabPosition } = this.state;
      return (
        <TabPane
          style={{ height: "600px" }}
          tab={
            <img
              alt=""
              src={heThongRap.logo}
              className="rounded-full"
              width="60"
              id="cumRap"
            />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div
                      style={{
                        width: "320px",
                        display: "flex",
                      }}
                    >
                      <img
                        className="rounded-lg"
                        alt=""
                        src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg"
                        width="50"
                      />
                      <div className="cursor-pointer text-left ml-3">
                        {cumRap.tenCumRap}
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {cumRap.danhSachPhim.slice(0, 3).map((phim, index) => {
                    return (
                      <div key={index}>
                        <div className="py-4">
                          <div style={{ display: "flex" }}>
                            <img
                              className="mr-2"
                              style={{
                                height: 75,
                                width: 75,
                                borderRadius: 12,
                              }}
                              src={phim.hinhAnh}
                              alt={phim.tenPhim}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://picsum.photos/75/75";
                              }}
                            />

                            <div className="ml-2">
                              <h1 className="text-lg ">
                                <span className="text_2">
                                  C13
                                </span>
                                {phim.tenPhim}
                              </h1>
                              <p>{cumRap.diaChi}</p>
                              <div className=" ">
                                {phim.lstLichChieuTheoPhim
                                  ?.slice(0, 8)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        className="mua-ve"
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        key={index}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>

                        <hr />
                      </div>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  render() {
    const { tabPosition } = this.state;
    return (
      <div className="container">
        <Tabs tabPosition={tabPosition}>{this.renderHeThongRap()}</Tabs>
      </div>
    );
  }
}
