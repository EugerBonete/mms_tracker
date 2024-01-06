"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import {
  ActivityIcon,
  CircleUserRoundIcon,
  GithubIcon,
  MenuIcon,
} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Logo from "./logo";

export default function Navbar() {
  const path = usePathname();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <nav className="bg-secondary/20 border-b h-14 flex gap-x-5 items-center p-2 md:p-5">
      {/* sm screen */}
      <div className="lg:hidden">
        <Sheet open={sideBarOpen} onOpenChange={setSideBarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <div className="flex flex-col w-full pt-5">
                {siteConfig.navItems.map((item) => (
                  <Link
                    onClick={() => setSideBarOpen(false)}
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "font-semibold justify-start",
                      path === item.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                    key={item.text}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </SheetHeader>
            <SheetFooter className="pt-5">
              <div className="flex">
                <Button variant="ghost" size="icon">
                  <GithubIcon size={20} />
                </Button>

                <Button variant="ghost" size="icon">
                  <CircleUserRoundIcon size={20} />
                </Button>

                <ModeToggle />
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <Link
        href="/"
        className="items-center hidden sm:flex flex-1 lg:flex-none"
      >
        <ActivityIcon className="mr-2" />
        Trackify
      </Link>

      <div className="flex-1 hidden lg:flex">
        {siteConfig.navItems.map((item) => (
          <Link
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "font-semibold",
              path === item.href ? "text-foreground" : "text-muted-foreground"
            )}
            key={item.text}
          >
            {item.text}
          </Link>
        ))}
      </div>

      <Button variant="outline" className="gap-x-5 w-full md:w-fit">
        <span className="md:hidden inline">Seach...</span>
        <span className="hidden md:inline">Seach documentation...</span>
        <Badge variant="secondary" className="rounded-sm">
          Ctrl + K
        </Badge>
      </Button>

      <div className="flex">
        <Button variant="ghost" size="icon">
          <GithubIcon size={20} />
        </Button>

        <Button variant="ghost" size="icon">
          <CircleUserRoundIcon size={20} />
        </Button>

        <ModeToggle />
      </div>
    </nav>
  );
}
