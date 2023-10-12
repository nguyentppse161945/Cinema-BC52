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
