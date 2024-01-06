import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {};

export default function SideNav({}: Props) {
  return (
    <div>
      <div className="flex flex-col text-sm text-muted-foreground gap-2">
        <Button>Upload</Button>
        <h1 className="text-foreground font-semibold">Navigation</h1>
        <Link href="/" className="hover:underline">
          Map
        </Link>

        <Link href="/" className="hover:underline">
          Table View
        </Link>
      </div>
    </div>
  );
}
