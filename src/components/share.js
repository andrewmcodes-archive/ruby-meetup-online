import React from "react";
import {
  Twitter,
  Facebook,
  Linkedin,
  Reddit,
  Whatsapp
} from "react-social-sharing";
import { useStaticQuery, graphql } from "gatsby";

function Share() {
  const { site } = useStaticQuery(graphql`
    query DefaultShareQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);
  const title = site.siteMetadata.title;
  const link = site.siteMetadata.siteUrl;

  return (
    <div className="pt-12 lg:pt-16">
      <div className="px-6 py-6 rounded-lg md:pt-12 md:px-12 lg:pt-16 lg:px-16 text-center animation-jump animation-once animation-ease animation-1s">
        <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
          Help us spread the word!
        </h2>
        <div className="mt-8 w-full mx-auto">
          <Twitter solid medium message={title} link={link} />
          <Linkedin solid medium message={title} link={link} />
          <Whatsapp solid medium message={title} link={link} />
          <Facebook solid medium link={link} />
          <Reddit solid medium link={link} />
        </div>
      </div>
    </div>
  );
}

export default Share;
