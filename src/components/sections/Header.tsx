import React from "react";

const Header = () => {
  return (
    <header
      className={
        "sticky inset-x-0 top-0 z-50 flex h-max items-center justify-between bg-white/90 px-5 py-2 shadow-md"
      }
    >
      <h1 className={"text-4xl font-bold"}>Logo</h1>
      <nav>
        <ul className={"flex gap-2"}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
