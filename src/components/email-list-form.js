import PropTypes from "prop-types";
import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const EmailListForm = ({ setShowAlert }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    addToMailchimp(email)
      .then(() => {
        setShowAlert(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} className="sm:flex">
      <input
        aria-label="Email address"
        className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out sm:max-w-xs"
        name="email"
        onChange={handleEmailChange}
        placeholder="Enter your email"
        type="email"
      />
      <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button
          type="submit"
          className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out"
        >
          Notify me
        </button>
      </div>
    </form>
  );
};

EmailListForm.propTypes = {
  setShowAlert: PropTypes.func
};

export default EmailListForm;
