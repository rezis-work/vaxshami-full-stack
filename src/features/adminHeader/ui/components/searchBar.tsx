"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="hidden w-[350px] h-[40px] md:flex bg-[#ECF0FA] dark:bg-[#19202F] dark:border border-gray-700 rounded-full px-2"
    >
      <input
        type="text"
        className="w-full h-full font-medium placeholder:text-[#a8b3c567] text-[#4d5157] dark:text-white text-[14px] outline-0 pl-2 overflow-x-hidden"
        placeholder="Search for anything..."
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" className="w-11 cursor-pointer">
        <IoSearch className="text-xl mx-auto text-[#abb3c0]" />
      </button>
    </form>
  );
};

export default SearchBar;
