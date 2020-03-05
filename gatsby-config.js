module.exports = {
  siteMetadata: {
    title: `Ruby Meetup: Online`,
    description: `Landing page to collect email addresses for those interested in an online Ruby meetup`,
    author: `@andrewmcodes`
  },
  plugins: [
    "gatsby-plugin-eslint",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ruby Meetup: Online`,
        short_name: `ruby_meetup`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
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
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`
  ]
};
