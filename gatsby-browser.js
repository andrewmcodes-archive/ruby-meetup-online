import PropTypes from "prop-types";
import React from "react";
import GlobalContextProvider from "./src/context/GlobalContextProvider";
import "./src/css/style.css";

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};

wrapRootElement.propTypes = {
  element: PropTypes.any
};
