import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function PrivacyPage () {
  return (
    <Layout>
      <SEO keywords={[`ruby`, `rails`, `meetup`, `online`]} title='Privacy' />;
      <div className='bg-white'>
        <div className='max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8'>
          <h2 className='text-3xl leading-9 font-extrabold text-gray-900'>
            Privacy Policy
          </h2>
          <div className='mt-6 border-t-2 border-gray-100 pt-10'>
            <dl className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <div>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    Data gathered by this website
                  </dt>
                  <dd className='mt-2'>
                    <p className='text-base leading-6 text-gray-500'>
                      None. We do not use any trackers or analytics.
                    </p>
                  </dd>
                </div>
                <div className='mt-12'>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    Data you send to us voluntarily via our contact forms
                  </dt>
                  <dd className='mt-2'>
                    <p className='text-base leading-6 text-gray-500'>
                      This website may collect the following information via its
                      contact and enquiry form features (use of these features
                      is optional):
                      <ul className='ml-6 mt-4 list-disc'>
                        <li>Email Address</li>
                      </ul>
                    </p>
                  </dd>
                </div>
                <div className='mt-12'>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    How we use this data
                  </dt>
                  <dd className='mt-2'>
                    <p className='text-base leading-6 text-gray-500'>
                      We are collecting this data to understand if the community
                      is interested in online Ruby meetups. Specifically, we may
                      use data:
                      <ul className='ml-6 mt-4 list-disc'>
                        <li>For our own internal records</li>
                        <li>
                          To contact you in the event we decide to proceed
                        </li>
                      </ul>
                      </p>
                      <p className='mt-4 text-base leading-6 text-gray-500'>
                      We will not share your personal information with or sell
                      it to third-party marketers.
                    </p>
                  </dd>
                </div>
                <div className='mt-12'>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    Cookies and how we use them
                  </dt>
                  <dd className='mt-2'>
                    <p className='text-base leading-6 text-gray-500'>
                      It&apos;s simple: we don&apos;t use or record them.
                    </p>
                  </dd>
                </div>
              </div>
              <div className='mt-12 md:mt-0'>
                <div>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    Third-party Service Providers
                  </dt>
                  <dd className='mt-2'>
                    <p className='text-base leading-6 text-gray-500 mb-2'>
                      We may use the following third-party service providers
                      named below to process and store your data:
                      <ul className='ml-6 mt-4 list-disc'>
                        <li>
                          Mailchimp (The Rocket Science Group, LLC), which we
                          use to manage email marketing subscriber lists and
                          send emails to our subscribers.
                          <a
                            href='https://mailchimp.com/legal/privacy/'
                            className='font-medium text-gray-900 underline'
                          >
                            Read their privacy policy
                          </a>
                          .
                        </li>
                        <li>
                          Netlify, which hosts this website.
                          <a
                            href='https://www.netlify.com/privacy/'
                            className='font-medium text-gray-900 underline'
                          >
                            Read their privacy policy
                          </a>
                          .
                        </li>
                      </ul>
                    </p>
                    <p className='pt-4 text-base leading-6 text-gray-500'>
                      We will not share your personal information with any other
                      third-party unless we have your permission or the law
                      requires us to.
                    </p>
                    <p className='pt-4 text-base leading-6 text-gray-500'>
                      Any personal information we hold about you is stored and
                      processed in accordance with the UK’s Data Protection Act
                      1998 and the General Data Protection Regulation (GDPR).
                    </p>
                  </dd>
                </div>
                <div className='mt-12'>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    How to make a request about your data
                  </dt>
                  <dd className='mt-2'>
                    <p className='text-base leading-6 text-gray-500'>
                      You can contact us to ask us what data we hold about you,
                      who has access to it and how it is being used. We will
                      also delete any data about you that we hold if you ask us
                      to. Just to be clear through, this data will be stored in
                      Mailchimp, and not by us.
                    </p>

                    <p className='text-base leading-6 text-gray-500'>
                      To make a request please contact Andrew Mason at{' '}
                      <a
                        href='mailto:andrewmcodes@protonmail.com'
                        className='font-medium text-gray-900 underline'
                      >
                        andrewmcodes@protonmail.com
                      </a>
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPage
