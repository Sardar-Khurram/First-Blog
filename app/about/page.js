// Import necessary dependencies
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-green-100 via-green-200 to-green-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-5xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-10 text-center px-4 max-w-2xl">
        Welcome! I am dedicated to providing top-notch solutions and always eager to collaborate. My goal is to create meaningful work that helps clients achieve their objectives with excellence and integrity.
      </p>

      {/* Profile Image */}
      <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-8">
        <Image 
          src={'/self.jpeg'} 
          alt="Profile photo" 
          layout="responsive" 
          width={200} 
          height={200} 
          className="object-cover" 
        />
      </div>

      {/* Mission and Values Section */}
      <div className="w-full max-w-3xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105 mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-center">My Mission</h2>
        <p className="text-md text-gray-700 dark:text-gray-300">
          My mission is to transform ideas into impactful solutions with creativity, innovation, and commitment to quality. I strive to make a positive difference through my work.
        </p>
      </div>

      {/* Core Values / Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <i className="fas fa-handshake text-4xl text-green-500 dark:text-green-400 mb-4"></i>
          <h3 className="text-xl font-semibold">Client-Focused</h3>
          <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
            I prioritize building trust and transparency with my clients to deliver excellent results.
          </p>
        </div>
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <i className="fas fa-lightbulb text-4xl text-yellow-500 dark:text-yellow-400 mb-4"></i>
          <h3 className="text-xl font-semibold">Innovation-Driven</h3>
          <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
            Innovation is at the heart of my work, always looking to push boundaries and improve.
          </p>
        </div>
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <i className="fas fa-users text-4xl text-blue-500 dark:text-blue-400 mb-4"></i>
          <h3 className="text-xl font-semibold">Team-Oriented</h3>
          <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
            I collaborate effectively, ensuring each project is handled with expertise and dedication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
