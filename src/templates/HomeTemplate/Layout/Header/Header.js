import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { history } from "../../../../App";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import {
  BarChartOutlined,
  DownOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { TOKEN, USER_LOGIN } from "../../../../util/settings/config";
import { OPEN_MODAL_USER } from "../../../../redux/actions/types/QuanLyNguoiDungType";
const pages = ["Lịch Chiếu", "Cụm Rạp", "Tin Tức", "Ứng Dụng"];

const handleScroll = (id) => {
  const element = document.getElementById(id);
  console.log(element); // Check if the element is found
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Header() {


  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log(userLogin);
  const dispatch = useDispatch();
  const menu = (
    <Menu className="my-menu">
      <Menu.Item className="my-menu-item">
        <UserOutlined />
        <button
          className="my-button"
          onClick={() => {
            dispatch({
              type: OPEN_MODAL_USER,
            });
          }}
        >
          Cá nhân
        </button>
      </Menu.Item>

      {userLogin.maLoaiNguoiDung === "QuanTri" ? (
        <Menu.Item className="my-menu-item">
          <Link to="/admin" className="my-link">
            <BarChartOutlined />
            Quản Trị
          </Link>
        </Menu.Item>
      ) : (
        ""
      )}

      <Menu.Item className="my-menu-item">
        <LogoutOutlined />
        <button
          className="my-button"
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            window.location.reload();
          }}
        >
          Đăng xuất
        </button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="header">
      <div className="header__nav">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <Link to="/" className="header__logo ml-3 mt-2 mb-0">
            <img src="../images/logo.png" alt="anh_LOGO" className="mb-0" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mt-0 ml-auto">
              {pages.map((page) => (
                <li
                  className="nav-link text-left text-md-center"
                  key={page}
                  onClick={
                    page === "Ứng Dụng"
                      ? () => handleScroll("ungDung")
                      : page === "Cụm Rạp"
                        ? () => {
                          handleScroll("cumRap");
                        }
                        : page === "Lịch Chiếu"
                          ? () => {
                            handleScroll("lichChieu");
                          }
                          : page === "Tin Tức"
                            ? () => handleScroll("tinTuc")
                            : page === undefined
                  }
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page}
                </li>
              ))}
            </ul>
          </div>
          <div className="button_1">
            {_.isEmpty(userLogin) ? (
              <Fragment>
                <button
                  className="font-bold self-center pr-10"
                  onClick={() => {
                    history.push("/register");
                  }}
                >
                  Sign up
                </button>
                <button
                  onClick={() => {
                    history.push("/login");
                  }}
                  className=" font-bold "
                >
                  Sign in
                </button>
              </Fragment>
            ) : (
              <Dropdown overlay={menu}>
                <button
                  className="ant-dropdown-link font-bold"
                  onClick={(e) => e.preventDefault()}
                >
                  Hello {userLogin.taiKhoan} <DownOutlined />
                </button>
              </Dropdown>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}