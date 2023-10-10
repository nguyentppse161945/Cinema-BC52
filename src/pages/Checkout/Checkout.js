import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  CheckOutlined,
  CloseOutlined,
  UserOutlined,
  DownOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import style from "./Checkout.module.css";
import { Tabs, Menu, Dropdown } from "antd";
import _ from "lodash";
import {
  datGheAction,
  datVeAction,
  layChiTietPhongVeAction,
} from "../../redux/actions/QuanLyDatVeActions";
import { DAT_GHE } from "../../redux/actions/types/QuanLyDatVeType";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { layThongTinUserAction } from "../../redux/actions/QuanLyNguoiDungAction";
import moment from "moment";
import { connection } from "../..";
import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { history } from "../../App";

function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDangDat } =
    useSelector((state) => state.QuanLyDatVeReducer);
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layChiTietPhongVeAction(props.match.params.id));

    connection.on("datVeThanhCong", () => {
      dispatch(layChiTietPhongVeAction(props.match.params.id));
    });
    connection.invoke("loadDanhSachGhe", props.match.params.id);
    connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
      dsGheKhachDat = dsGheKhachDat.filter(
        (item) => item.taiKhoan !== userLogin.taiKhoan
      );

      let arrGheKhachDat = dsGheKhachDat.reduce((result, item, index) => {
        let arrGhe = JSON.parse(item.danhSachGhe);

        return [...result, ...arrGhe];
      }, []);

      arrGheKhachDat = _.uniqBy(arrGheKhachDat, "maGhe");

      dispatch({
        type: DAT_GHE,
        arrGheKhachDat,
      });
    });

    window.addEventListener("beforeunload", clearGhe);

    return () => {
      clearGhe();
      window.removeEventListener("beforeunload", clearGhe);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearGhe = function (event) {
    connection.invoke("huyDat", userLogin.taiKhoan, props.match.params.id);
  };

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat ? "gheDaDat" : "";
      let classGheDangDat = "";
      let classGheDaDuocDat = "";
      let classGheKhachDangDat = "";
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );

      if (indexGheDD !== -1) {
        classGheDaDat = "gheDangDat";
      }

      let indexGheKDD = danhSachGheKhachDangDat.findIndex(
        (GheKDD) => GheKDD.maGhe === ghe.maGhe
      );

      if (indexGheKDD !== -1) {
        classGheKhachDangDat = "gheKhachDangDat";
      }

      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch(datGheAction(ghe, props.match.params.id));
            }}
            disabled={ghe.daDat || classGheKhachDangDat !== ""}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} ${classGheKhachDangDat} text-center`}
            key={index}
          >
            {ghe.daDat ? (
              classGheDaDuocDat !== "" ? (
                <UserOutlined
                  style={{ marginBottom: 7.5, fontWeight: "bold" }}
                />
              ) : (
                <CloseOutlined
                  style={{ marginBottom: 7.5, fontWeight: "bold" }}
                />
              )
            ) : (
              ghe.stt
            )}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div>
      <div className="row py-5" >
        <div className="col-md-9 ">
          <div className="mt-6">
            <div
              className="bg-success ml-5"
              style={{ width: "70%", height: 30 }}
            >
              <h3
                className="text-center"
                style={{ lineHeight: "30px" }}
              >
                Màn hình
              </h3>
            </div>
            <div className={`${style["trapezoid"]} text-center`}></div>
            <div className="mt-5">{renderSeats()}</div>
          </div>

          <div className="mt-5">
            <table>
              <thead>
                <tr>
                  <th>Chưa đặt</th>
                  <th className="pl-2">Đang đặt</th>
                  <th className="pl-4">VIP</th>
                  <th className="pl-2">Đã đặt</th>
                  <th className="pl-1">Bạn đã đặt</th>
                  <th className="pl-2">Khách khác đang đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td>
                    <button className="ghe text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />{" "}
                    </button>{" "}
                  </td>
                  <td>
                    <button className="ghe gheDangDat text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>{" "}
                  </td>
                  <td>
                    <button className="ghe gheVip text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>{" "}
                  </td>
                  <td>
                    <button className="ghe gheDaDat text-center">
                      {" "}
                      <CloseOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />{" "}
                    </button>{" "}
                  </td>
                  <td>
                    <button className="ghe gheDaDuocDat text-center">
                      {" "}
                      <UserOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />{" "}
                    </button>{" "}
                  </td>
                  <td className="pl-8">
                    <button className="ghe gheKhachDangDat text-center">
                      {" "}
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />{" "}
                    </button>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-3 bg-light">
          <hr />
          <h4 className="mt-2 bg-dark text-white text-center">{thongTinPhim.tenPhim}</h4>
          <hr />
          <p className="text-id">
            {thongTinPhim.tenCumRap} : {thongTinPhim.tenRap}
          </p>
          <p className="text-id">
            {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
          </p>
          <hr />
          <div className="flex flex-row my-5">
            <div>
              <span className="text-id2">Ghế đang chọn: </span>

              {_.sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, index) => {
                return (
                  <span key={index} className="text-id1 mr-3">
                    {`${gheDD.stt},`}
                  </span>
                );
              })}
            </div>
          </div>
          <h6 className="total">
            <p className="text-id1"> Tổng Tiền : {danhSachGheDangDat
              .reduce((tongTien, ghe) => {
                return (tongTien += ghe.giaVe);
              }, 0)
              .toLocaleString()}{" "}
              Đ </p>

          </h6>
          <hr />
          <div >
            <p className="text-id2">Email: </p>
            <span className="text-id1 p-3">{userLogin.email}</span>
          </div>
          <div className="my-5">
            <p className="text-id2">Họ và Tên: </p>
            <span className="text-id1 p-3">{userLogin.hoTen}</span>
          </div>
          <div>
            <button
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = props.match.params.id;
                thongTinDatVe.danhSachVe = danhSachGheDangDat;
                if (_.isEmpty(danhSachGheDangDat)) {
                  Swal.fire({
                    title: "Chọn tối thiểu 1 ghế để đặt vé",
                    icon: "error",
                    confirmButtonText: "Đã hiểu",
                  });
                } else {
                  dispatch(datVeAction(thongTinDatVe));
                }
              }}
              className="btn btn-danger p-3 " style={{ width: "50%" }}
            >
              ĐẶT VÉ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const { TabPane } = Tabs;

export default function CheckoutTab(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const menu = (
    <Menu>
      <Menu.Item>
        <button
          className="btn btn-danger"
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push("/login");
          }}
        >
          Đăng xuất
        </button>
      </Menu.Item>
    </Menu>
  );

  const operations = (
    <div className="ml-5">
      {!_.isEmpty(userLogin) ? (
        <div>
          <button className="btn btn-primary">
            <HomeOutlined
              onClick={() => {
                history.push("/home");
              }}
            />
          </button>
          <Dropdown overlay={menu}>
            <button
              className="btn btn-primary m-2"
              onClick={(e) => e.preventDefault()}
            >
              {userLogin.taiKhoan} <DownOutlined />
            </button>
          </Dropdown>
        </div>
      ) : (
        ""
      )}
    </div>
  );

  return (
    <div className="mt-2">
      <Tabs className="m-1 text-id" tabBarExtraContent={operations} defaultActiveKey="1">
        <TabPane className="m-2" tab="CHỌN GHẾ VÀ THANH TOÁN" key="2">
          <Checkout {...props} />
        </TabPane>
        <TabPane tab="LỊCH SỬ ĐẶT VÉ" key="3">
          <KetQuaDatVe />
        </TabPane>
      </Tabs>
    </div>
  );
}

function KetQuaDatVe() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.QuanLyNguoiDungReducer);

  useEffect(() => {
    dispatch(layThongTinUserAction());
  }, [dispatch]);

  const renderTicketItem = function () {
    return userData.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);

      return (
        <div className=" border p-4" key={index}>
          <div className="row">
            <img
              alt="team"
              className=" mr-4"
              src={ticket.hinhAnh}
              width="20%"
            />
            <div className="info-film">
              <h2 className="text-2xl">
                {ticket.tenPhim}
              </h2>
              <p className="text-id">
                <span>Giờ chiếu:</span>{" "}
                {moment(ticket.ngayDat).format("hh:mm A")} -{" "}
                <span>Ngày chiếu:</span>{" "}
                {moment(ticket.ngayDat).format("DD-MM-YYYY")} .
              </p>
              <p className="text-id" >
                <span>Địa điểm:</span>{" "}
                {seats.tenHeThongRap} -
                <span> Số rạp:</span> {seats.tenCumRap}
              </p>
              <span className="text-id">Ghế đã đặt: </span>
              {ticket.danhSachGhe.map((ghe, index) => {
                return (
                  <span className="text-2xl" key={index}>
                    {`${ghe.tenGhe}, `}
                  </span>
                );
              })}
            </div>

          </div>
        </div>
      );
    });
  };

  return (
    <div className="p-5">
      <section className="">
        <div className="container ">
          <div className=" text-center">
            <h1>
              Lịch sử đặt vé của bạn
            </h1>
            <p className="text-xl">
              Xem lại danh sách các vé đã đặt và thời gian để không bõ lỡ phút
              giây nào của phim bạn nhé!
            </p>
          </div>
          <div className="m-5">{renderTicketItem()}</div>
        </div>
      </section>
    </div>
  );
}
