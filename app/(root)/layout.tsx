import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <section className="p-2 md:p-5">{children}</section>;
}
