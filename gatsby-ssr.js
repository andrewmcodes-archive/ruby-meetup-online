/* eslint-disable */

import React from "react";

const applyDarkModeClass = `
(function() {
  try {
    var mode = localStorage.getItem('theme');
    if (mode === 'dark') {
      document.body.classList.add('mode-dark');
    }
  } catch (e) {}
})();
`;

export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass
    }
  });
  setPreBodyComponents([script]);
};

import GlobalContextProvider from "./src/context/GlobalContextProvider";

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
