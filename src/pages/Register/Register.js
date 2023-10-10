import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { useTranslation } from "react-i18next";
import "./register.css";




export default function Register(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: "",
      hoTen: "",
    },
    onSubmit: (values) => {
      dispatch(dangKyAction(values));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      
    >
      <div className="pt-12">
        <div className="">
          <div>
            <svg
              className="w-10"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="-70 10 350 225"
              style={{ enableBackground: "new 0 0 225 225" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                ",
                }}
              />
              <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <g>
                  <path
                    id="Layer0_0_1_STROKES"
                    className="st0"
                    d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-10 ">
        <h1
          className="text-center "
        >
          {t("Đăng ký")}
        </h1>
        <div className="mt-2">
          <div>
            <div>
              <div>
                <div className="text_8">
                  {t("Họ và tên")}
                </div>
              </div>
              <input
                type="text"
                name="hoTen"
                onChange={formik.handleChange}
                placeholder="Nguyen Van A"
              />
            </div>

            <div className="mt-2">
              <div>
                <div className="text_8">
                  Email
                </div>
              </div>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                placeholder="example@gmail.com"
              />
            </div>

            <div className="mt-2">
              <div>
                <div className="text_9 ">
                  {t("Số điện thoại")}
                </div>
              </div>
              <input
                type="text"
                name="soDT"
                onChange={formik.handleChange}
                className="text_10"
                placeholder="0909900009"
              />
            </div>

            <div className="mt-2">
              <div>
                <div className="text_11">
                  {t("Mã nhóm")}
                </div>
              </div>
              <input
                type="text"
                name="maNhom"
                onChange={formik.handleChange}
                className="text-12 "
                placeholder="1 - 2 - 3"
              />
            </div>

            <div>
              <div className="text_8 ">
                {t("Tài khoản")}
              </div>
              <input
                type="name"
                name="taiKhoan"
                onChange={formik.handleChange}
                className="text-12"
                placeholder="Nhập vào tài khoản"
              />
            </div>

            <div className="mt-2">
              <div>
                <div className="text_8">
                  {t("Mật khẩu")}
                </div>
              </div>
              <input
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
                className=" text-14"
                placeholder="Nhập vào mật khẩu"
              />
            </div>

            <div className="mt-5">
              <button
                className="bg-1 "
              >
                {t("Đăng ký")}
              </button>
            </div>
          </div>
          <div className="mt-5 text-15 ">
            {t("Bạn đã có tài khoản ?")}
            <NavLink
              to="login"
              className="text_16 p-2 "
            >
              {t("Đăng nhập")}
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
}
