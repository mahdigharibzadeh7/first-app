import React, { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");
  const changeHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="flex justify-around items-center bg-sky-500 my-16 py-20">
      <div className="text-white font-bold text-6xl">Search What You Want</div>
      <div className="flex flex-col gap-5">
        <input
          className="rounded-lg px-5 py-3 outline-none"
          type="text"
          name=""
          id=""
          placeholder="Search..."
          value={text}
          onChange={changeHandler}
        />
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Search;
