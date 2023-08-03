"use client";
import { useState } from "react";

export default function Callout(props: any) {
  return (
    <div className="-mt-3">
      {props.title ? (
        <div className="bg-stone-700 px-2 text-white w-fit p-1 rounded-lg font-sans relative left-7 font-bold top-4  ">
          {props.title}
        </div>
      ) : null}
      <div className="bg-blue-200 border-2 border-stone-700 p-5 rounded-lg">
        {props.children}
      </div>
    </div>
  );
}

export function CalloutDetails(props: any) {
  const [open, setOpen] = useState(false);
  if (open) {
    return (
      <div className="font-sans mt-3">
        {props.children}
        <button
          onClick={() => setOpen(false)}
          className="block text-black font-bold text-lg mt-3"
        >
          Hide
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 inline relative bottom-[1px] ml-1 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
    );
  }
  return (
    <button
      onClick={() => setOpen(true)}
      className="font-sans mt-3 font-bold text-lg"
    >
      Show more
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 relative bottom-[1px] h-5 ml-1 inline"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
}
