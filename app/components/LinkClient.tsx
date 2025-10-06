"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  text: string;
  route: string;
};

export default function LinkClient(props: Props) {
  const pathname = usePathname();

  return (
    <Link
      className={`text-decoration-none colorWhite ${
        pathname === props.route ? "LinkSelect" : ""
      }`}
      href={props.route}
    >
      {props.text}
    </Link>
  );
}
