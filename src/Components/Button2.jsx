import React from "react";

const Button2 = ({ btntext, onClick }) => {
  return (
    <button
      className="w-full h-12 font-bold relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-blue-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:text-white transition-all duration-500"
      onClick={onClick}
    >
      {btntext}
    </button>
  );
};

export default Button2;
