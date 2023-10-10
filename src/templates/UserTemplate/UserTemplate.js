import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

export const UserTemplate = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { Component, ...restProps } = props;
  const { i18n } = useTranslation();

  const { Option } = Select;

  function handleChange(value) {
    i18n.changeLanguage(value);
  }
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <div className="container ">
              <div className="row hidden ">
                <div className="col-md-2 Dich">
                  <Select
                    defaultValue="vn"
                    style={{ width: 70 }}
                    onChange={handleChange}
                  >
                    <Option value="en">EN</Option>
                    <Option value="vn">VN</Option>
                  </Select>
                </div>
                <div className="col-md-8"><Component {...propsRoute} /></div>
              </div>
            </div>
          </Fragment>
        );
      }}
    />
  );
};
