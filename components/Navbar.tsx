"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Team",
    route: "/team",
  },

  {
    label: "Contact",
    route: "/contact",
  },
];

type Props = object;

const Navbar: React.FC<Props> = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 text-slate-300 rounded-md">
      {links.map((link) => {
        return (
          <Link
            href={link.route}
            key={link.label}
            className={`${
              link.route === pathname
                ? " text-indigo-700 border-b-4 border-indigo-200"
                : ""
            } capitalize font-medium text-xl hover:text-indigo-500 transition-all`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
