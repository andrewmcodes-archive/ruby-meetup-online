import PropTypes from "prop-types";
import React from "react";

import GithubCorner from "./github-corner";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div>
      <GithubCorner />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
