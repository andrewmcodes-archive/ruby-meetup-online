import React from 'react'

function Form () {
  return (
    <form action='#' method='POST' className='mt-3 sm:flex'>
      <input
        aria-label='Email'
        className='appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1'
        placeholder='Enter your email'
      />
      <button
        type='submit'
        className='mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto'
      >
        Notify me
      </button>
    </form>
  )
}

export default Form
