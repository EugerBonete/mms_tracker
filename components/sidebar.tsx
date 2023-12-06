import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Sidebar() {
  return (
    <aside>
      {/* lg screen */}
      <div className="hidden md:flex md:w-[300px] bg-secondary/50 h-full rounded-lg">
        sidebar
      </div>

      {/* sm screen */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <MenuIcon size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </aside>
  );
}
