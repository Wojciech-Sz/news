import React from "react";

const Header = () => {
  return (
    <header className={"sticky flex justify-between items-center px-5 top-0 inset-x-0 h-max py-2 shadow-md"}>
      <h1 className={"font-bold text-4xl"}>Logo</h1>
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
