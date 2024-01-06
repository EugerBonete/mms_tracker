import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MSquareIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-x-5 font-bold", className)}
    >
      <MSquareIcon size={30} color="#dc2626" /> {siteConfig.title}
    </Link>
  );
}
