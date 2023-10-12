import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import News from "./Layout/News/News";

export const HomeTemplate = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />

            <Component {...propsRoute} />

            <News/>

            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
