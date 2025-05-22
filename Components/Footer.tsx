import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
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
        <div className="grid grid-cols-5 grid-row-1 gap-5 mt-10 max-w-3xl">
          <h1>Carrer</h1>
          <h1>About</h1>
          <h1>Api</h1>
          <h1>Contact</h1>
          <h1>Location</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
