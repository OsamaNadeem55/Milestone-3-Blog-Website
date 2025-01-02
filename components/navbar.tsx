"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-red-900 shadow-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-gray-100 hover:text-gray-500">
            OSAMA BLOG
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
        <Link
            href="/"
            className="text-white hover:text-gray-100 group relative transition-colors"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-100 transition-all group-hover:w-full group-hover:h-0.5"></span>
          </Link>
          <Link
            href="/blog"
            className="text-white hover:text-gray-100 group relative transition-colors"
          >
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-100 transition-all group-hover:w-full group-hover:h-0.5"></span>
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-100 group relative transition-colors"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-100 transition-all group-hover:w-full group-hover:h-0.5"></span>
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-100 group relative transition-colors"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-100 transition-all group-hover:w-full group-hover:h-0.5"></span>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-gray-100 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-red-900">
            <SheetHeader />
            <nav className="mt-6 flex flex-col space-y-4 text-lg text-white">
            <Link
                href="/"
                className="hover:text-gray-100 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="hover:text-gray-100 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-100 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-100 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
