import React from "react";
import { Link } from "gatsby";

import EmailListForm from "./email-list-form";

const FormCard = () => (
  <div className="pt-12 duration-700 lg:pt-16">
    <div className="px-6 py-6 text-center bg-gray-900 rounded-lg shadow-2xl dark:bg-blue-600 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:text-left xl:flex xl:items-center animation-jump animation-once animation-ease animation-1s">
      <div className="xl:w-0 xl:flex-1">
        <h2 className="text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9">
          Are you interested in online Ruby Meetups?
        </h2>
        <p className="mt-3 text-lg leading-6 text-blue-200 xl:max-w-3xl dark:text-blue-100">
          Enter your email to get added the list for updates or to get involved.
        </p>
        <p className="mt-3 text-sm italic leading-6 text-blue-200 xl:max-w-3xl dark:text-blue-100">
          We&apos;ll only email you when we have updates to share. We hate spam
          as much as you do!
        </p>
      </div>
      <div className="mx-auto mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
        <EmailListForm />
        <p className="mt-3 text-sm leading-5 text-blue-200 dark:text-blue-100">
          <Link
            className="mx-2 font-medium text-white underline"
            key={`Privacy`}
            to={`/privacy`}
          >
            Privacy Policy
          </Link>
          <Link
            className="mx-2 font-medium text-white underline"
            key={`Code of Conduct`}
            to={`/code-of-conduct`}
          >
            Code of Conduct
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default FormCard;
