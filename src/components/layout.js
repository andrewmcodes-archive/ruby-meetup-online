import PropTypes from "prop-types";
import React, { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalContextProvider";
import isLightMode from "../utils/is-light-mode";
import Banner from "./banner";
import Footer from "./footer";
import GithubCorner from "./github-corner";
import Header from "./header";
import Announcement from "./announcement";

if (typeof document !== "undefined") {
  if (isLightMode()) {
    document.documentElement.classList.remove("mode-dark");
  } else {
    document.documentElement.classList.add("mode-dark");
  }
}

const Layout = ({ children }) => {
  const state = useContext(GlobalStateContext);

  return (
    <div>
      <GithubCorner />
      <Header />
      <Announcement
        message="Please consider taking a quick survey to help us plan!"
        link="https://forms.gle/CFZ3cozDQtE5Hn356"
        cta="Take the survey"
      />
      <main>{children}</main>
      {state.bannerVisible && (
        <Banner message={state.bannerMessage} type={state.bannerType} />
      )}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
