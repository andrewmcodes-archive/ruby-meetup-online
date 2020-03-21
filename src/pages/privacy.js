import React from "react";

import FAQItem from "../components/faq-item";
import Layout from "../components/layout";
import SEO from "../components/seo";

function PrivacyPage() {
  return (
    <Layout>
      <SEO />
      <div className="bg-white dark:bg-gray-900">
        <div className="relative max-w-xl px-4 pt-12 pb-8 mx-auto sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <h1 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          <div className="mt-6 border-t-2 border-gray-100">
            <dl className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FAQItem
                  term="Data gathered &amp; Cookies tracked by this website"
                  description="None. We do not use any trackers or analytics. We also do not use or record cookies."
                />
                <FAQItem
                  term="Data you send to us voluntarily via our contact forms"
                  description="This website may collect the following information via its contact and enquiry form features (use of these features is optional):"
                >
                  <ul className="mt-4 ml-6 list-disc dark:text-gray-200">
                    <li>Email Address</li>
                  </ul>
                </FAQItem>
                <FAQItem
                  term="How we use this data"
                  description="We are collecting this data to understand if the community is interested in online Ruby meetups. We will not share your personal information with or sell it
                    to third-party marketers. Specifically, we may use data:"
                >
                  <ul className="mt-4 ml-6 list-disc dark:text-gray-200">
                    <li>For our own internal records</li>
                    <li>To contact you in the event we decide to proceed</li>
                  </ul>
                </FAQItem>
              </div>
              <div className="mt-12 md:mt-0">
                <FAQItem
                  term="Third-party Service Providers"
                  description="We may use the following third-party service providers named below to process and store your data. We will not share your personal information with any other third-party unless we have your permission or the law requires us to."
                >
                  <ul className="mt-4 ml-6 list-disc dark:text-gray-200">
                    <li>
                      Mailchimp (The Rocket Science Group, LLC), which we use to
                      manage email marketing subscriber lists and send emails to
                      our subscribers.
                      <a
                        href="https://mailchimp.com/legal/privacy/"
                        className="font-medium text-gray-900 underline dark:text-blue-400"
                      >
                        Read their privacy policy
                      </a>
                      .
                    </li>
                    <li>
                      Netlify, which hosts this website.
                      <a
                        href="https://www.netlify.com/privacy/"
                        className="font-medium text-gray-900 underline dark:text-blue-400"
                      >
                        Read their privacy policy
                      </a>
                      .
                    </li>
                  </ul>
                </FAQItem>
                <FAQItem
                  term="How to make a request about your data"
                  description="You can contact us to ask us what data we hold about you, who has access to it and how it is being used. We will also delete any data about you that we hold if you ask us to. Just to be clear through, this data will be stored in Mailchimp, and not by us."
                >
                  <p className="text-base leading-6 text-gray-500">
                    To make a request please contact Andrew Mason at{" "}
                    <a
                      href="mailto:andrewmcodes@protonmail.com"
                      className="font-medium text-gray-900 underline dark:text-blue-400"
                    >
                      andrewmcodes@protonmail.com
                    </a>
                  </p>
                </FAQItem>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PrivacyPage;
