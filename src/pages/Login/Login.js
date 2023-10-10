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
      <div className="py-12 ">
        <div>
          <div>
            <svg
          
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
      <div className="mt-10 px-12 ">
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
