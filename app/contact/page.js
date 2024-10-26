// Import necessary dependencies
import React from 'react';

const Contact = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-10 text-center px-4">
        Have a question or want to work together? Reach out to us anytime!
      </p>

      {/* Contact Form */}
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-500"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white py-2 rounded-md font-semibold transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex gap-4">
        <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
          <i className="fab fa-linkedin-in text-2xl"></i>
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
      </div>

      {/* Contact Information */}
      <div className="mt-8 text-center">
        <p className="text-lg">Phone: (123) 456-7890</p>
        <p className="text-lg">Email: contact@yourdomain.com</p>
      </div>
    </div>
  );
};

export default Contact;
