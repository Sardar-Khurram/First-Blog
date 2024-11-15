"use client"
import Typed from 'typed.js';
import React from 'react';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
export default function Home() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding','Softwares', 'ML','AI', 'Data Science','Cyber'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (

    <main>

      {/* Introduction Section */}
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          {/* <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
              <input
                type="search"
                name="query" 
                placeholder="Search Components"
                required
                className=" flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0  bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"  className="dark:stroke-black w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div> */}
        </div>

        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <div className="relative w-full h-full max-w-md mx-auto">
                <Image
                    src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
                    alt="tailwind css components"
                    layout="responsive" // Adjusts based on the container size
                    width={600} // Adjust width to match max-w-md or your desired value
                    height={600} // Adjust height proportionally
                    objectFit="contain" // Ensures the image scales to fit within the container
                    className="rounded-lg" // Additional styling if needed
                />
            </div>
        </div>

      </section>

      {/* Pricing Section */}

      <section className="z-50 container px-4 py-10 mx-auto bg-gray-100 dark:bg-gray-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose a plan that suits your needs.</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Basic Plan */}
          <div className="dark:shadow-white w-full lg:w-1/3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">$9/month</p>
            <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-300">
              <li>1 project</li>
              <li>Basic support</li>
              <li>Access to components</li>
            </ul>
            <button className="mt-6 w-full py-2 bg-primary text-white dark:text-gray-800 rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
              Choose Basic
            </button>
          </div>

          {/* Pro Plan */}
          <div className="dark:shadow-white w-full lg:w-1/3 p-6 mt-8 lg:mt-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Pro</h3>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">$29/month</p>
            <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-300">
              <li>10 projects</li>
              <li>Priority support</li>
              <li>Access to premium components</li>
            </ul>
            <button className="mt-6 w-full py-2 bg-primary dark:text-gray-800 text-white rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
              Choose Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="w-full lg:w-1/3 p-6 mt-8 lg:mt-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-white border-2 border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Enterprise</h3>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">$99/month</p>
            <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-300">
              <li>Unlimited projects</li>
              <li>24/7 support</li>
              <li>Access to all components</li>
            </ul>
            <button className="dark:text-gray-800 mt-6 w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
              Choose Enterprise
            </button>
          </div>
        </div>
      </section>

      {/* Top Blogs Section */}

      <section className="container px-4 py-10 mx-auto bg-gray-100 dark:bg-gray-700">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Explore our most popular blog posts.</p>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Blog 1 */}
          <div className="flex-1 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
          <div className="relative w-full h-48"> {/* Container with specified width and height */}
            <Image
                src="/1.jpg"
                alt="Understanding React Hooks"
                className="rounded-t-lg"
                layout="fill" // Makes the image fill the parent container
                objectFit="cover" // Ensures the image covers the container like `object-cover`
            />
        </div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4">Understanding Modern C++ Resource Management</h3>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Dive deep into the world of modern C++ resource management and learn how to use smart pointers in your projects
            </p>
            <button className="mt-6 w-full py-2 bg-primary text-white dark:text-gray-800 rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
              Read More
            </button>
          </div>

          {/* Blog 2 */}
          <div className="flex-1 p-6 mt-8 lg:mt-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">            <div className="relative w-full h-48"> {/* Container with specified width and height */}
            <Image
                src="/2.jpg"
                alt="Understanding React Hooks"
                className="rounded-t-lg"
                layout="fill" // Makes the image fill the parent container
                objectFit="cover" // Ensures the image covers the container like `object-cover`
            />
        </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4">Understanding JavaScript Fundamentals</h3>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Dive deep into the world of JavaScript and learn how to use it effectively in your projects
            </p>
            <button className="mt-6 w-full py-2 bg-primary text-white dark:text-gray-800 rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
              Read More
            </button>
          </div>

          {/* Blog 3 */}
          <div className="flex-1 p-6 mt-8 lg:mt-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">            <div className="relative w-full h-48"> {/* Container with specified width and height */}
            <Image
                src="/3.jpg"
                alt="Understanding React Hooks"
                className="rounded-t-lg"
                layout="fill" // Makes the image fill the parent container
                objectFit="cover" // Ensures the image covers the container like `object-cover`
            />
        </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4">Understanding React.js Hooks</h3>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Dive deep into the world of React Hooks and learn how to use them effectively in your projects
            </p>
            <button className="mt-6 w-full py-2 bg-primary text-white dark:text-gray-800 rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Clients Section */}

      <section className="container px-4 py-10 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from some of our satisfied customers.</p>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Testimonial 1 */}
          <div className="w-full lg:w-1/3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
            <p className="text-lg italic text-gray-500 dark:text-gray-300">
              This service has truly transformed the way we manage our projects. Highly recommend!
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Jane Doe</h4>
              <p className="text-gray-500 dark:text-gray-400">CEO, Example Corp</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="w-full lg:w-1/3 p-6 mt-8 lg:mt-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
            <p className="text-lg italic text-gray-500 dark:text-gray-300">
              Excellent customer support and amazing features. Our productivity has skyrocketed!
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">John Smith</h4>
              <p className="text-gray-500 dark:text-gray-400">Founder, StartUp Inc.</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="w-full lg:w-1/3 p-6 mt-8 lg:mt-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
            <p className="text-lg italic text-gray-500 dark:text-gray-300">
              A game changer for our team. Weve been able to scale quickly thanks to this service!
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Alice Johnson</h4>
              <p className="text-gray-500 dark:text-gray-400">CTO, Tech Solutions</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );

}
