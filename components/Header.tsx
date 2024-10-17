import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="py-8 xl:py-6 text-white scrollbar-hide rounded-full">
      <div className=" container mx-auto flex justify-between ">
        <Link href="/">
          <Image
            src="/triage_logo.png"
            alt="triage logo"
            width={70}
            height={70}
            className="text-white"
          />
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />

          <Link
            href={"/contact"}
            className=" border-2 border-indigo-500  py-3 px-5 rounded-lg animate-pulse"
          >
            <span className="text-indigo-500 animate-in animate-out">
              Register
            </span>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
