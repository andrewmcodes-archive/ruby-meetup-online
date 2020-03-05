import PropTypes from "prop-types";
import React from "react";

const Alert = ({ visible, dismiss }) => {
  return (
    <>
      {visible ? (
        <div
          className={
            "text-white px-6 py-4 border-0 rounded relative my-4 mx-16 bg-green-500"
          }
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" /> Signed up successfully!
          </span>
          <span className="inline-block align-middle mr-8"></span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={dismiss}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

Alert.propTypes = {
  dismiss: PropTypes.func,
  visible: PropTypes.bool
};

export default Alert;
