"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const textValue = e.currentTarget.value;

    setValue(textValue.toLocaleLowerCase());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search);

    if (!value.trim()) {
      params.delete("search");
    } else {
      params.set("search", value.trim());
    }
    const newPathname = `${window.location.pathname}?${params}`;

    router.push(newPathname);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex">
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        className="w-full h-[38px] bg-white placeholder:text-gray-500 text-gray-600 text-[16px] rounded-l-sm outline-0 pl-4 overflow-x-hidden"
        placeholder="Search"
      />
      <button
        type="submit"
        className="w-11 h-[38px] bg-[#FF607D] rounded-r-sm cursor-pointer"
      >
        <IoSearch className="text-xl mx-auto text-white" />
      </button>
    </form>
  );
};

export default SearchBar;
