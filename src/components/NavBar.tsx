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
          ? "opacity-0 translate-y-[-100%]"
          : "opacity-100 bg-white/80"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-rose-500 transition-colors font-bold"
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-rose-500 transition-colors font-bold"
          >
            Sobre
          </Link>
          {/* <Link
            href="/impact"
            className="text-gray-600 hover:text-rose-500 transition-colors font-bold"
          >
            Nossos projetos
          </Link> */}
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
      </div>
    </header>
  );
}
