import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import logo from "../images/logo-512.png";

function SEO() {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          lang
          social {
            twitter
          }
        }
      }
    }
  `);
  const metaDescription = site.siteMetadata.description;
  const ogImageUrl = site.siteMetadata.siteUrl + logo;
  const keywords = [`ruby`, `rails`, `meetup`, `online`];
  const lang = site.siteMetadata.lang;
  const title = site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `image`,
          content: ogImageUrl
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `og:image`,
          content: ogImageUrl
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:image`,
          content: ogImageUrl
        }
      ].concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `)
            }
          : []
      )}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

export default SEO;
