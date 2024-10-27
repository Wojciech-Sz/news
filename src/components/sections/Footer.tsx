import React from "react";

const Footer = () => {
  return (
    <footer
      className={
        "flex h-max w-full items-center justify-between bg-primary px-5 py-10 text-primary-foreground"
      }
    >
      <h2>Logo</h2>
      <h3>Copyright &copy; {new Date().getFullYear()}</h3>
    </footer>
  );
};
export default Footer;
