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
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link
                className="flex-shrink-0 flex items-center no-underline text-white"
                to="/"
              >
                <img alt="Gem Emoji" className="h-8 mr-2 w-8" src={logo} />
                <span className="font-bold text-xl text-indigo-600 hover:text-indigo-800">
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
