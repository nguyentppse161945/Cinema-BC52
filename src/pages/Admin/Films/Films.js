import React, { Fragment, useEffect, useRef } from "react";
import { AutoComplete, Button, Table } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
import {
  layDanhSachPhimAction,
  layDanhSachPhimKeyWordAction,
  xoaPhimAction,
} from "../../../redux/actions/QuanLyPhimActions";
import { useState } from "react";

export default function Films() {
  const { arrFilmDefault } = useSelector((state) => state.QuanLyPhimReducer);
  const { arrFilmSearch } = useSelector((state) => state.QuanLyPhimReducer);
  const searchRef = useRef(null);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, [dispatch]);

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, film) => {
        return (
          <Fragment>
            <img
              style={{ width: 60, height: 60, borderRadius: 8 }}
              src={film.hinhAnh}
              alt={film.tenPhim}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${text}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      render: (text, film) => {
        return (
          <div className="pl-10">
            <NavLink
              key={1}
              className=" mr-2  text-2xl "
              to={`/admin/films/edit/${film.maPhim}`}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span
              key={2}
              onClick={() => {
                dispatch(xoaPhimAction(film.maPhim));
              }}
              className="text-2xl mr-2 cursor-pointer"
              to="/"
            >
              <DeleteOutlined style={{ color: "red" }} />{" "}
            </span>

            <NavLink
              key={3}
              className="text-2xl "
              to={`/admin/films/showtime/${film.maPhim}/${film.tenPhim}`}
            >
              <CalendarOutlined style={{ color: "green" }} />
            </NavLink>
          </div>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
  ];
  const data = arrFilmDefault;

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-4xl text-blue-400">Quản lý Phim</h3>
        <Button
          className="mb-5 pb-2"
          onClick={() => {
            history.push("/admin/films/addnew");
          }}
          type="danger"
          shape="round"
          icon={<PlusOutlined />}
          size={"large"}
        >
          Thêm phim mới
        </Button>
      </div>
      <AutoComplete
        className="mb-5 w-25"
        placeholder="Nhập vào tên phim bạn muốn tìm kiếm"
        value={value}
        onChange={(text) => {
          setValue(text);
        }}
        options={arrFilmSearch?.map((film) => {
          return {
            label: film.tenPhim,
            value: film.tenPhim,
          };
        })}
        onSelect={(valueSelect, option) => {
          setValue(option.label);
          dispatch(layDanhSachPhimKeyWordAction(valueSelect));
        }}
        onSearch={(value) => {
          if (searchRef.current) {
            clearTimeout(searchRef.current);
          }
          searchRef.current = setTimeout(() => {
            if (value === "") {
              dispatch(layDanhSachPhimAction());
            } else {
              dispatch(layDanhSachPhimKeyWordAction(value));
            }
          }, 800);
        }}
        style={{ width: "100%", height: 40 }}
      />

      <Table columns={columns} dataSource={data} />
    </div>
  );
}
