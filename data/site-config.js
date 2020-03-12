const config = {
  siteTitle: "Ruby Meetup: Online",
  siteTitleShort: "Ruby Meetup",
  siteTitleAlt: "Remote Ruby Meetup",
  siteLogo: "src/images/logo-512.png",
  siteUrl: "https://rubymeetup.online",
  pathPrefix: "/",
  siteDescription:
    "Don't have any active Ruby meetups near you? Can't attend even if there are? We want to bring the joy of congregating with your Ruby friends to you with online Ruby meetups!",
  themeColor: "#5850ec",
  backgroundColor: "#ffffff",
  lang: "en",
  display: "standalone",
  author: {
    name: "Andrew Mason",
    twitter: "@andrewmcodes"
  }
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

module.exports = config;
