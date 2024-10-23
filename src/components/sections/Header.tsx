import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={
        "sticky inset-x-0 top-0 z-50 flex h-16 items-center justify-between bg-white/90 px-5 py-2 shadow-md"
      }
    >
      <Link href={"#hero"} scroll>
        <h1 className={"text-4xl font-bold"}>Logo</h1>
      </Link>
      <nav>
        <ul className={"flex gap-2"}>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
