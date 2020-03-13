import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import logo from "../images/logo-512.png";

function Header() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-800 dark:shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex animation-fall animation-once animation-ease animation-750ms">
              <Link
                className="flex-shrink-0 flex items-center no-underline text-white"
                to="/"
              >
                <img alt="Gem Emoji" className="h-8 mr-2 w-8" src={logo} />
                <span className="font-bold text-xl text-blue-600 dark:text-gray-100 hover:text-blue-800 dark-hover:text-white">
                  {site.siteMetadata.title}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
