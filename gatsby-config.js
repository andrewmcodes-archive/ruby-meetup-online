module.exports = {
  siteMetadata: {
    title: `Ruby Meetup: Online`,
    description: `Don't have any active Ruby meetups near you? Don't want to, or can't, go even if there are? We want to bring the joy of congregating with your Ruby friends to you with online Ruby meetups!`,
    author: `Andrew Mason`,
    siteUrl: `https://rubymeetup.online/`,
    social: {
      twitter: `andrewmcodes`
    }
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
        theme_color: `#5850ec`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/icon.png`
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
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`
  ]
};
