import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import FormCard from "../components/form-card";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`ruby`, `rails`, `meetup`, `online`]} title="Home" />
      <div className="relative bg-white overflow-hidden">
        <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
          <div className="max-w-screen-xl mx-auto px-4 pt-12 sm:px-6 lg:pt-16 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  Coming soon
                </div>
                <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                  Data to enrich your
                  <br className="hidden md:inline" />
                  <span className="text-indigo-600">online business</span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua ad ad non deserunt sunt.
                </p>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                {/* img */}
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <button className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline">
                    <img
                      className="w-full"
                      src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      alt="Woman making a sale"
                    />
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                      <svg
                        className="h-20 w-20 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 84 84"
                      >
                        <circle
                          opacity="0.9"
                          cx={42}
                          cy={42}
                          r={42}
                          fill="white"
                        />
                        <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                      </svg>
                    </div>
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
