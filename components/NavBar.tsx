import Link from "next/link";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 mx-auto items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">HedgeStake</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
