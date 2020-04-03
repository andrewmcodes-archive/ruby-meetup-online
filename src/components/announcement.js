import PropTypes from "prop-types";
import React from "react";

const Announcement = ({ message, link, cta }) => {
  return (
    <div className="relative bg-blue-600 dark:bg-blue-600">
      <div className="max-w-screen-xl px-3 py-3 mx-auto sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="inline">{message}</span>
            <span className="block sm:ml-2 sm:inline-block">
              <a
                href={link}
                className="font-bold text-white underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta} &rarr;
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

Announcement.defaultProps = {
  message: `Message`,
  link: `#`,
  cta: `CTA`
};

Announcement.propTypes = {
  message: PropTypes.string,
  link: PropTypes.string,
  cta: PropTypes.string
};

export default Announcement;
