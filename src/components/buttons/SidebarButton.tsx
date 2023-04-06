import React from "react";
import DummyImageComponent from "../DummyImageComponent";
import Link from "next/link";

const SidebarButton = ({
  text,
  src,
  href,
  className,
}: {
  text: string;
  src: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link href={href} className="space-x-3 flex">
      <img src={src} alt="" className="w-5" />
      <h2 className={`text-xl text-gray-400 ${className}`}>{text}</h2>
    </Link>
  );
};

export default SidebarButton;
