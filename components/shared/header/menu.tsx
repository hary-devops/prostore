import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ui/theme-changer";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";

const Menu = () => {
    return (
      <div className="">
        <nav className="hidden md:flex items-center gap-4">
        <ModeToggle />
          <Button asChild variant="ghost">
            <Link href="/cart" className="relative">
              <ShoppingCart size={24} /> Chart
              <span className="absolute -top-2 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white mt-2 mr-1">3</span>
            </Link>
          </Button>
          <Button asChild variant="default">
            <Link href="/sign-in">
              <UserIcon size={24} /> Sign In
            </Link>
          </Button>
        </nav>
        <nav className="flex md:hidden items-center gap-4">
          <Sheet>
            <SheetTrigger> 
              <Button variant="ghost" size="icon">
                <EllipsisVertical size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
              <div className="flex flex-col items-start gap-4">
                  <ModeToggle />
                  <Button asChild variant="ghost">
                    <Link href="/cart" className="relative">
                      <ShoppingCart size={24} /> Chart
                      <span className="absolute -top-2 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white mt-2 mr-1">3</span>
                    </Link>
                  </Button>
                  <Button asChild variant="default">
                    <Link href="/sign-in">
                      <UserIcon size={24} /> Sign In
                    </Link>
                  </Button>
                </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    );
}
 
export default Menu;