"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
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
    label: "Contact Us",
    route: "/contact",
  },
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <Link href="/">
          <Image
            src="/triage_logo.png"
            alt="triage logo"
            width={70}
            height={70}
          />
        </Link>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className={`${
                link.route === pathname && "text-white border-b-4 border-accent"
              } capitalize font-medium text-xl hover:text-accent transition-all `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
