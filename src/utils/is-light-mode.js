const isLightMode = () => {
  if (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    return true;
  }
  return false;
};

export default isLightMode;
