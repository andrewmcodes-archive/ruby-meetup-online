import React, { useState, useContext } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { GlobalDispatchContext } from "../context/GlobalContextProvider";

const EmailListForm = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const [email, setEmail] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await addToMailchimp(email);
    const result = data["result"];
    const message = data["msg"].replace(/"/g, "");

    dispatch({
      type: "TOGGLE_BANNER",
      bannerType: result,
      bannerMessage: message,
      bannerVisible: true
    });

    if (result === "success") setEmail("");
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
        value={email}
        placeholder="Enter your email"
        type="email"
        id="email-form"
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

export default EmailListForm;
