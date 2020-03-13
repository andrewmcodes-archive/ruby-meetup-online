import React from "react";
import { Link } from "gatsby";

import EmailListForm from "./email-list-form";

const FormCard = () => (
  <div className="duration-700 pt-12 lg:pt-16">
    <div className="shadow-2xl px-6 py-6 bg-gray-900 dark:bg-blue-600 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 text-center xl:text-left xl:flex xl:items-center animation-jump animation-once animation-ease animation-1s">
      <div className="xl:w-0 xl:flex-1">
        <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
          Are you interested in online Ruby Meetups?
        </h2>
        <p className="mt-3 xl:max-w-3xl text-lg leading-6 text-blue-200 dark:text-blue-100">
          Enter your email to get added the list for updates or to get involved.
        </p>
        <p className="italic mt-3 xl:max-w-3xl text-sm leading-6 text-blue-200 dark:text-blue-100">
          We&apos;ll only email you when we have updates to share. We hate spam
          as much as you do!
        </p>
      </div>
      <div className="mt-8 sm:w-full sm:max-w-md mx-auto xl:mt-0 xl:ml-8">
        <EmailListForm />
        <p className="mt-3 text-sm leading-5 text-blue-200 dark:text-blue-100">
          We care about the protection of your data. Read our{` `}
          <Link
            className="text-white font-medium underline"
            key={`Privacy`}
            to={`/privacy`}
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default FormCard;
