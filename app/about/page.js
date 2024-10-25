"use client"
import Typed from 'typed.js';
import React from 'react';
import { useEffect, useRef } from 'react';

export default function About() {
  return (
    <main>
      {/* About Me Section */}
      <section className="container px-4 py-16 mx-auto lg:h-128 lg:flex lg:items-center lg:space-x-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-800 dark:text-gray-200">
            About <span className="font-semibold">Sardar Khurram</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Passionate, dedicated, and fueled by creativity. I’ve poured my heart into building this platform, ensuring each component and detail is crafted with excellence.
          </p>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            This project isn’t just about sharing code—it’s about building a community where developers can collaborate, grow, and innovate together.
          </p>
        </div>
        <div className="w-full mt-10 lg:mt-0 lg:w-1/2">
          <img src="self.jpeg" alt="Sardar Khurram" className="w-full h-auto max-w-sm mx-auto rounded-full shadow-xl" /> {/* Add your image src */}
        </div>
      </section>

      {/* Dedication and Hard Work Section */}
      <section className="container px-4 py-16 mx-auto bg-gray-100 dark:bg-gray-700">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            My Journey
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Behind every line of code is a story of resilience, continuous learning, and a commitment to pushing the boundaries of design and functionality.
          </p>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row lg:space-x-8">
          <div className="w-full lg:w-1/3 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center">
            <p className="text-xl italic text-gray-600 dark:text-gray-300">
              "Crafting each component from scratch, ensuring high quality, and striving for creative solutions—this is my commitment to this platform."
            </p>
          </div>
          <div className="w-full lg:w-1/3 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center mt-10 lg:mt-0">
            <p className="text-xl italic text-gray-600 dark:text-gray-300">
              "With a dedication to the community, I aim to create a valuable resource for developers worldwide."
            </p>
          </div>
          <div className="w-full lg:w-1/3 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center mt-10 lg:mt-0">
            <p className="text-xl italic text-gray-600 dark:text-gray-300">
              "Embracing challenges and learning from them, I continue to evolve and adapt, ensuring that my journey is one of growth and innovation."
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            Vision and Future Goals
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            I believe in an open-source community that empowers developers and brings innovative ideas to life. This platform is just the beginning—there’s so much more in store!
          </p>
        </div>
      </section>
    </main>
  );
}