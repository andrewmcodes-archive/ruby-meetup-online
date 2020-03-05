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
                  Experience a Ruby Meetup{` `}
                  <span className="text-indigo-600">
                    from the comfort of your couch.
                  </span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Don&apos;t have any active Ruby meetups near you? Don&apos;t
                  want to, or can&apos;t, go even if there are? We want to bring
                  the joy of congregating with your Ruby friends to you with{" "}
                  <strong>online Ruby meetups!</strong>
                </p>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Your location doesn&apos;t have to be a barrier to your
                  learning and meeting of like-minded developers.
                </p>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  If this is something you are interested in, please enter your
                  email below. Planning an online meetup (or{" "}
                  <i>_potentially_</i> a conference{" "}
                  <span role="img" aria-label="monocle face">
                    🧐
                  </span>
                  ) is a lot of work, and we would like to make sure there is
                  enough interest before moving forward!
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
