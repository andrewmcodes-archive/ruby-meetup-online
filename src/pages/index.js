import React from "react";

import CodeFundAd from "../components/code-fund-ad";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FormCard from "../components/form-card";
import Share from "../components/share";
import HangoutIllustration from "../images/undraw_group_hangout.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO />
      <div className="relative overflow-hidden bg-white dark:bg-gray-900">
        <div className="relative pt-6 pb-16">
          <div className="max-w-screen-xl px-4 pt-12 mx-auto sm:px-6 lg:pt-16 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-white sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                  Experience a Ruby Meetup{` `}
                  <span className="text-blue-600 dark:text-blue-600">
                    from the comfort of your couch.
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Don&apos;t have any active Ruby meetups near you? Can&apos;t
                  attend even if there are because you are quarantined? We want
                  to bring the joy of congregating with your Ruby friends to you
                  with <strong>online Ruby meetups!</strong>
                </p>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Your location and the virus don&apos;t have to be a barrier to
                  you learning and meeting like-minded developers.
                </p>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  If this is something you are interested in, please enter your
                  email below.
                </p>
              </div>
              <div className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <div className="relative w-full mx-auto lg:max-w-md">
                  <img
                    className="w-full animation-pulse animation-once animation-2s"
                    src={HangoutIllustration}
                    alt="Remote hangout"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl px-4 py-8 pt-16 mx-auto sm:px-6 lg:px-8">
            <CodeFundAd />
            <FormCard />
            <Share />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
