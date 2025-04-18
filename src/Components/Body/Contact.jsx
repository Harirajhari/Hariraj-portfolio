import React from "react";

const Contact = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-6 py-20">
 {/* Top Left Blob */}
<div className="absolute top-4 left-4 w-32 h-32 sm:w-72 sm:h-72 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-full opacity-30 blur-xl sm:blur-3xl z-0"></div>

{/* Bottom Center Blob */}
<div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-48 sm:w-96  bg-gradient-to-br from-orange-400 to-rose-500 rounded-full opacity-20 blur-xl sm:blur-3xl z-0"></div>

{/* Top Right Blob */}
<div className="absolute top-[10%] right-4 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-400 to-violet-600 rounded-full opacity-25 blur-xl sm:blur-3xl z-0"></div>

{/* Middle Left Extra Blob */}
<div className="absolute top-[55%] left-4 w-36 h-36 sm:w-64 sm:h-64 bg-gradient-to-bl from-yellow-300 to-pink-400 rounded-full opacity-20 blur-xl sm:blur-3xl z-0"></div>

      {/* Main Form Content */}
      <div className="relative z-10 max-w-3xl w-full">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
  Let's connect.
</h1>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            rows="6"
            placeholder="Message..."
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
       <div className="text-center">
  <button
    type="submit"
    className="group mt-4 px-10 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none transition-all duration-300 hover:shadow-lg"

  >
    <span className="inline-flex items-center transform transition-all duration-300 group-hover:-translate-y-1">
      Let's talk
      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        →
      </span>
    </span>
  </button>
</div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
