import React from "react";
import Link from "next/link";
import { headerLinks, socialLinks } from "~/data";
import { Button } from "~/components/ui/button";

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
      <nav className={"flex gap-2"}>
        <ul className={"flex items-center gap-2 text-lg font-semibold"}>
          {headerLinks.map((link) => (
            <li key={link.id} className={"header-li"}>
              <Link href={link.href} className={"relative block px-2"} scroll>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          className={
            "header-li h-7 text-lg font-semibold hover:text-foreground"
          }
        >
          <div className={"relative"}>Kontakt</div>
        </Button>
      </nav>
      <ul className={"flex items-center justify-center gap-3"}>
        {socialLinks.map((link) => (
          <li key={link.id} className={"hover:text-primary"}>
            <a href={link.href} rel={"noreferrer"}>
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Header;
