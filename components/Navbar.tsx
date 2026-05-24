"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`rounded-full transition-all duration-300 px-7 ${
            scrolled
              ? "bg-white/90 backdrop-blur-lg shadow-lg border border-gray-200"
              : "bg-transparent"
          }`}
        >
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold"
            >
              GuavaAI
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium transition-colors duration-300 ${
                      active
                        ? "text-black"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <button className="hidden md:block bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
              Book Call
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-[30px] p-6 shadow-xl border transition-all duration-300">
            <div className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium"
                >
                  {item.name}
                </Link>
              ))}

              <button className="bg-black text-white py-4 rounded-full">
                Book Call
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}