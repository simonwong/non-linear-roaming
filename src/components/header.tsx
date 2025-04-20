"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-semibold">Simon Wong 的非线性漫游</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              关于
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
} 