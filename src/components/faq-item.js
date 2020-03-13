import React from "react";
import PropTypes from "prop-types";

function FAQItem({ term, description, children }) {
  return (
    <div className="mt-12">
      <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {term}
      </dt>
      <dd className="mt-2">
        <p className="text-base leading-6 text-gray-500 dark:text-gray-200">
          {description}
        </p>
        {children}
      </dd>
    </div>
  );
}

FAQItem.propTypes = {
  description: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default FAQItem;
