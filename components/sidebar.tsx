"use client";

import { buttonVariants } from "./ui/button";
import {
  HelpingHandIcon,
  HomeIcon,
  MapPinnedIcon,
  PcCaseIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

interface SidebarItemProps {
  Icon: LucideIcon;
  text: string;
  path: string;
}

function SidebarItem({ Icon, text, path }: SidebarItemProps) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "justify-start gap-x-5 font-semibold",
        pathname === path ? "text-foreground" : "text-muted-foreground"
      )}
    >
      <Icon size={20} /> {text}
    </Link>
  );
}

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-[400px] shadow-md dark:bg-secondary/50 bg-secondary  rounded-lg">
      {/* lg screen */}
      <div className="px-3 py-2 md:p-5 space-y-5 flex flex-col w-full ">
        <Logo />
        <SidebarItem Icon={HomeIcon} text="Home" path="/" />
        <SidebarItem Icon={SearchIcon} text="Search" path="/search" />
        <Link
          href="/upload"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full justify-between"
          )}
        >
          <div className="flex items-center">
            <PcCaseIcon size={25} className="mr-2" /> Add Asset
          </div>
          <PlusIcon size={25} />
        </Link>
        <SidebarItem Icon={MapPinnedIcon} text="School Map" path="/search" />
        <SidebarItem Icon={HelpingHandIcon} text="Lend Item" path="/search" />
        <ModeToggle />
      </div>
    </aside>
  );
}
