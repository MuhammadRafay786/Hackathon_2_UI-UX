"use client";

import Link from "next/link";

const navigationItems = [
  { href: "/", label: "Home", isActive: true },
  { href: "/shop", label: "Shop" },
  { href: "/product", label: "Product" },
  { href: "/pages", label: "Pages" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-300 hidden md:block">
      {/* Only visible on medium (md) screens and larger */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[60px]">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-inter font-medium text-sm leading-[15.4px] items-center">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-all duration-200 hover:scale-110 hover:underline ${
                  item.isActive ? "text-[#007580]" : "text-[#636270]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Information for Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="font-inter text-[#636270] font-normal text-sm leading-[15.4px] hover:underline hover:text-[#007580] transition-all duration-200"
            >
              Contact:
            </Link>
            <Link
              href="/contact"
              className="font-inter text-[#272343] font-medium text-sm leading-[15.4px] hover:text-[#007580] transition-all duration-200"
            >
              (808) 555-0111
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;