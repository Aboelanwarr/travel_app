'use client'
import { NAV_LINKS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
interface IProps {}

const Navbar = ({}: IProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/home">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 translation-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          varient="btn_dark_green"
        />
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60"
          onClick={toggleMenu}
        >
          <div
            className="absolute top-0 right-0 h-full w-full bg-white p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="text-2xl">
                ✕
              </button>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-lg text-gray-800 hover:font-bold text-center"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}

            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              varient="btn_dark_green"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
