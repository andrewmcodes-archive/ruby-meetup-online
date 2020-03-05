import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import FormCard from "../components/form-card";
import hangoutIllustration from "../images/undraw_group_hangout.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`ruby`, `rails`, `meetup`, `online`]} title="Home" />
      <div className="relative bg-white overflow-hidden">
        <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
          <div className="max-w-screen-xl mx-auto px-4 pt-12 sm:px-6 lg:pt-16 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                  Want to hangout online with{` `}
                  <br className="hidden md:inline" />
                  <span className="text-indigo-600">fellow Rubyists?</span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Many of us would love to hangout with fellow Ruby developers, but there is no Ruby community where we live. We are toying with the idea of holding online Ruby meetups, and maybe even a remote conference??
                </p>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  If this is something you are interested in, please enter your email below. We want to make sure there is enough interest before sinking time in this idea.
                </p>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <div className="relative mx-auto w-full lg:max-w-md">
                  <button className="relative block w-full rounded-lg overflow-hidden">
                    <img
                      className="w-full"
                      src={hangoutIllustration}
                      alt="Remote hangout"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <FormCard />
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
