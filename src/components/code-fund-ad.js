import React from "react";
import ScriptTag from "react-script-tag";
import isDarkMode from "../utils/is-dark-mode";

function CodeFundAd() {
  const colorTheme = isDarkMode() ? "dark" : "light";
  const propertyUrl = `https://app.codefund.io/properties/766/funder.js?theme=${colorTheme}`;

  return (
    <div className="mt-8 relative w-full h-46 animation-pulse animation-once">
      <div id="codefund" className="shadow-sm"></div>
      <ScriptTag type="text/javascript" src={propertyUrl} async={true} />
    </div>
  );
}

export default CodeFundAd;
