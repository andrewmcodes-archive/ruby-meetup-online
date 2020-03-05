import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import takenIllustration from "../images/undraw_taken.svg";

function NotFoundPage() {
  return (
    <Layout>
      {() => (
        <>
          <SEO title="404: Not found" />
          <div className="relative bg-white overflow-hidden">
            <div className="relative pt-6">
              <div className="max-w-screen-xl px-4 pt-12 sm:px-6 lg:pt-16 lg:px-8">
                <img
                  className="h-auto mx-auto"
                  src={takenIllustration}
                  alt="Taken illustration"
                />
                <div className="absolute inset-0 w-screen h-full flex items-center justify-center">
                  <h1 className="text-10xl tracking-tight font-extrabold text-indigo-600">
                    404
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default NotFoundPage;
