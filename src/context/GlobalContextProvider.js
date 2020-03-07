import PropTypes from "prop-types";
import React from "react";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  bannerMessage: "",
  bannerType: "",
  bannerVisible: false
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_BANNER": {
      return {
        ...state,
        bannerVisible: action.bannerVisible,
        bannerMessage: action.bannerMessage,
        bannerType: action.bannerType
      };
    }
    default:
      throw new Error("Bad Action Type");
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default GlobalContextProvider;
