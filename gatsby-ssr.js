/* eslint-disable */

const React = require("react");

const applyDarkModeClass = `
(function() {
  try {
    var mode = localStorage.getItem('theme');
    if (mode === 'dark') {
			document.body.classList.add('dark');
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

const GlobalContextProvider = require("./src/context/GlobalContextProvider")
  .default;

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
