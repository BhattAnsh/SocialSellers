import React from "react";
import Link from "next/link";
type Props = {
  name: string;
  href: string;
  className: string;
  color?: string;
};

function Button({ name, href, className, color }: Props) {
  return (
    <>
      {color === "white" ? (
        <Link
          href={href}
          className={`rounded-[100px] bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out bg-[white] text-[black] hover:bg-[#eaeaea]${className}`}
        >
          {name}
        </Link>
      ) : (
        <Link
          href={href}
          className={`rounded-[100px] bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 ${className}`}
        >
          {name}
        </Link>
      )}
    </>
  );
}

export default Button;
