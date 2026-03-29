import React from "react";

export default function Button({ Label }) {
  return (
    <>
      <button className="bg-red-900 text-white text-md h-12 w-24 border-red-900 cursor-pointer hover:bg-white hover:text-red-900 hover:border-2 rounded-xl px-1 py-1 m-1">
        {Label}
      </button>
    </>
  );
}