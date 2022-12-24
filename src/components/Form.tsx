import React, { useState, useEffect } from "react";

  const Form = ()  => {

  return (
    <form className="py-5" action="https://formspree.io/f/mrgvzoqo" method="POST">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-[90%] md:w-[65%] mb-0 md:-mb-[29px]">
          <input
            type="email"
            name="email"
            className={"select-all w-full placeholder:text-gray-500 rounded-full py-3 px-6 bg-transparent dark:text-white"}
            placeholder="Your email address..."
            required
          />
          <p className="text-left h-7 pt-1 text-sm pl-5 text-red-600"></p>
        </div>
        <button
          type="submit"
          className="w-[90%] md:w-[30%] py-3 px-6 bg-blue text-white hover:opacity-70 rounded-full mx-auto shadow-xl shadow-light-blue"
        >
          Notify me
        </button>
      </div>
    </form>
  );
}

export default Form;
