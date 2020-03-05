import PropTypes from "prop-types";
import React from "react";

import Footer from "./footer";
import GithubCorner from "./github-corner";
import Header from "./header";
import Alert from "./alert";

const Layout = ({ children }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <GithubCorner />
      <Header />
      <main className="flex-grow">
        <Alert visible={showAlert} dismiss={() => setShowAlert(false)} />
        {children(setShowAlert)}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
