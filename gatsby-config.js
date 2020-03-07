const urljoin = require("url-join");
const config = require("./data/site-config");

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.author.name,
    lang: config.lang,
    social: {
      twitter: config.author.twitter
    }
  },
  plugins: [
    "gatsby-plugin-eslint",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        lang: config.lang,
        display: config.display,
        icon: config.siteLogo
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://protonmail.us19.list-manage.com/subscribe/post?u=eeebc60676240ae979f0da259&amp;id=cdde32891c"
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
        whitelist: [
          `hover:bg-red-600`,
          `focus:bg-red-600`,
          `bg-red-700`,
          `bg-red-800`,
          `hover:bg-green-600`,
          `focus:bg-green-600`,
          `bg-green-700`,
          `bg-green-800`
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
};
