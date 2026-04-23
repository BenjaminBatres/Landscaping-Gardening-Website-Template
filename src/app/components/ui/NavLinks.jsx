import Link from "next/link";
import React from "react";

export default function NavLinks({ link, setIsOpen }) {
  return (
    <Link
      // onClick={() => setIsOpen(false)}
      href={link.path}
      className=" tracking-widest text-white tablet:text-Primary text-lg tablet:text-base"
    >
      {link.name}
    </Link>
  );
}
