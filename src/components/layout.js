import PropTypes from "prop-types";
import React, { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalContextProvider";

import Banner from "./banner";
import Footer from "./footer";
import GithubCorner from "./github-corner";
import Header from "./header";

function Layout({ children }) {
  const state = useContext(GlobalStateContext);
  console.log(state);
  return (
    <div>
      <GithubCorner />
      <Header />
      <main>{children}</main>
      {state.bannerVisible && (
        <Banner message={state.bannerMessage} type={state.bannerType} />
      )}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
