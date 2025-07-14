"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuDropdown from "./MenuDropdown";

export default function NavBar() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        setScrollDirection("down");
      } else if (currentY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-sm transition-all duration-300 ${
        scrollDirection === "down"
          ? "opacity-0 -translate-y-full"
          : "opacity-100 bg-white/80"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-rose-500 transition-colors font-bold"
          >
            Início
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-rose-500 transition-colors font-bold"
          >
            Sobre
          </Link>
          <Link
            href="/acting"
            className="text-gray-600 hover:text-rose-500 transition-colors font-bold"
          >
            Nossa atuação
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-rose-500 transition-colors font-bold"
          >
            Contato
          </Link>
          <Link
            href="/parters"
            className="text-gray-600 hover:text-rose-500 transition-colors font-bold"
          >
            Parceiros
          </Link>
          <MenuDropdown />
        </nav>

        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 border-t px-4 pb-4">
          <Link
            href="/"
            className="block py-2 text-gray-700 font-bold hover:text-rose-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Início
          </Link>
          <Link
            href="/about"
            className="block py-2 text-gray-700 font-bold hover:text-rose-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link
            href="/acting"
            className="block py-2 text-gray-700 font-bold hover:text-rose-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Nossa atuação
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-gray-700 font-bold hover:text-rose-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contato
          </Link>
          <Link
            href="/parters"
            className="block py-2 text-gray-700 font-bold hover:text-rose-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Parceiros
          </Link>
          <div className="pt-2">
            <MenuDropdown />
          </div>
        </div>
      )}
    </header>
  );
}
