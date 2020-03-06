import PropTypes from "prop-types";
import React, { useContext } from "react";
import { GlobalDispatchContext } from "../context/GlobalContextProvider";

const Banner = ({ type, message }) => {
  const dispatch = useContext(GlobalDispatchContext);
  const isError = type === "error";
  const color = isError ? "red" : "green";
  const handleClick = () => {
    dispatch({ type: "TOGGLE_BANNER", bannerVisible: false });
  };

  return (
    <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className={`p-2 rounded-lg bg-${color}-700 shadow-lg sm:p-3`}>
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className={`flex p-2 rounded-lg bg-${color}-800`}>
                <svg
                  className="h-6 w-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {!isError && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  )}
                  {isError && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  )}
                </svg>
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">
                  {type.charAt(0).toUpperCase() + type.substring(1)}
                </span>
                <span className="hidden md:inline">{message}.</span>
              </p>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                className={`-mr-1 flex p-2 rounded-md hover:bg-${color}-600 focus:outline-none focus:bg-${color}-600 transition ease-in-out duration-150`}
                onClick={handleClick}
              >
                <svg
                  className="h-6 w-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.defaultProps = {
  message: ``,
  type: ``
};

Banner.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string
};

export default Banner;
