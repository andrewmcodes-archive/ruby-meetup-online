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
        className="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none form-input focus:outline-none focus:placeholder-gray-400 sm:max-w-xs"
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
          className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md dark:bg-gray-800 hover:bg-blue-400 dark-hover:bg-gray-900 focus:outline-none focus:bg-blue-400 dark-focus:bg-gray-400"
        >
          Notify me
        </button>
      </div>
    </form>
  );
};

export default EmailListForm;
