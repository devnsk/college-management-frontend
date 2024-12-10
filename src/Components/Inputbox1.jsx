import React from "react";

const Inputbox1 = ({ label, id, type, icon, value, onChange }) => {
  return (
    <div className="w-full relative">
      <input
        className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 font-medium rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-500 focus:border-blue-500"
        type={type}
        placeholder=""
        name="username"
        id={id}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      <label
        className="absolute text-gray-500 text-lg font-medium duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-500"
        htmlFor={id}
      >
        {label}
      </label>
      <span>{icon}</span>
      <label className="hidden pt-1 text-gray-500 text-sm"> Text helper </label>
    </div>
  );
};

export default Inputbox1;
