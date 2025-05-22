import Link from "next/link";
import React from "react";

function header() {
  return (
    <div>
      <Link href="#">Channel 21</Link>
      <div className="flex item-center w-1/3 text-lg">
        <input
          type="text"
          className="bg-transparent border-b w-full border-white outline-none "
        />
      </div>
      <div className="bg-white flex items-center justify-center text-black h-16">
        <Link
          href="#"
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"
        >
          Home
        </Link>
        <Link
          href="/politics"
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"
        >
          Politics
        </Link>
        <Link
          href="/bussiness"
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"
        >
          Bussiness
        </Link>
        <Link
          href="/sport"
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"
        >
          Sport
        </Link>
      </div>
    </div>
  );
}

export default header;
