import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { useTranslation } from "react-i18next";

export default function Login() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      dispatch(dangNhapAction(values));
    },
  });

  return (

    
    <form
      onSubmit={formik.handleSubmit}
      className=""
    >
      <div>
        <h1
          className="text-5"
        >
          {t("Đăng nhập")}
        </h1>
        <div className="mt-12">
          <div>
            <div>
              <div className="text-5">
                <h4>{t("Tài khoản")}</h4>
              </div>
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                className="text-6"
                placeholder="Nhập vào tài khoản"
              />
            </div>
            <div className="mt-8">
              <div >
                <div>
                  <h4>{t("Mật khẩu")}</h4>
                </div>
              </div>

              <input
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
                className="text-7"
                placeholder="Nhập vào mật khẩu"
              />
              <div className="text-right mt-2">
                <NavLink
                  to="/register"
                >
                  {t("Quên mật khẩu")}
                </NavLink>
              </div>
            </div>
            <div className="mt-5">
              <button
                className="bg-1"
              >
                {t("Đăng nhập")}
              </button>
            </div>
          </div>
          <div className="mt-5  text-center">
            {t("Bạn chưa có tài khoản ? ")}
            <NavLink
              to="register"
              className="text_16 p-2 "
            >
              {t("Đăng ký")}
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
}
