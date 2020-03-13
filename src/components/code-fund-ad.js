import React from "react";
import ScriptTag from "react-script-tag";
import isLightMode from "../utils/is-light-mode";

function CodeFundAd() {
  const propertyUrl = `https://app.codefund.io/properties/766/funder.js?template=horizontal&theme=${
    isLightMode() ? "light" : "dark"
  }`;

  return (
    <div className="mt-6 relative w-full h-46 animation-pulse animation-once">
      <div id="codefund" className="shadow-sm"></div>
      <ScriptTag type="text/javascript" src={propertyUrl} async={true} />
    </div>
  );
}

export default CodeFundAd;
