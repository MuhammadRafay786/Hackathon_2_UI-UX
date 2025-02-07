"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RiArrowDropDownLine, RiErrorWarningLine } from "react-icons/ri";
import { ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/Sheet";

const navigationItems = [
  { href: "/", label: "Home", isActive: true },
  { href: "/shop", label: "Shop" },
  { href: "/product", label: "Product" },
  { href: "/pages", label: "Pages" },
  { href: "/about", label: "About" },
];

const TopBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    "English",
    "Urdu",
    "Sindhi",
    "Balochi",
    "Pashtu",
    "Punjabi",
    "Saraiki",
    "Kashmiri",
  ];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLanguageChange = (language: string): void => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="bg-[#272343] w-full py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/check 1.png"
              alt="check"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <p className="font-inter font-normal text-xs sm:text-sm text-white text-center">
              Free shipping on all orders over $50
            </p>
          </div>

          <div
            className="flex flex-wrap items-center gap-4 relative"
            ref={dropdownRef}
          >
            <div
              className="flex items-center text-white cursor-pointer"
              onClick={toggleDropdown}
            >
              <p className="font-inter font-normal text-xs sm:text-sm">
                {selectedLanguage}
              </p>
              <div className="text-lg sm:text-xl">
                <RiArrowDropDownLine />
              </div>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-lg py-2 w-28 sm:w-32 z-10">
                  {languages.map((lang) => (
                    <div
                      key={lang}
                      className="px-4 py-2 text-xs sm:text-sm text-[#272343] cursor-pointer hover:bg-gray-100"
                      onClick={() => handleLanguageChange(lang)}
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/faq"
              className="font-inter font-normal text-xs sm:text-sm text-white"
            >
              Faqs
            </Link>
            <Link href="/need-help" className="flex items-center gap-1">
              <div className="text-white/70 text-base sm:text-lg">
                <RiErrorWarningLine />
              </div>
              <p className="font-inter font-normal text-xs sm:text-sm text-white">
                Need Help
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Section with Logo and Burger Menu */}
      <div className="w-full bg-[#F0F2F3] py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-4 md:gap-0">
          {/* Logo and Name */}
          <div className="flex items-center gap-2">
            <Image
              src="/Logo Icon.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-8 sm:w-10 h-auto"
            />
            <Link
              href="/"
              className="font-inter font-medium text-lg sm:text-xl lg:text-2xl text-[#272343]"
            >
              Comforty
            </Link>
          </div>

          {/* Cart Section (Desktop Only) */}
          <div className="hidden md:flex items-center">
            <div className="bg-white px-4 py-3 rounded-md flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-[#272343]" />
              <Link
                href="/cart"
                className="font-inter font-medium text-sm text-[#272343]"
              >
                Cart
              </Link>
              <div className="w-5 h-5 bg-[#007580] rounded-full flex items-center justify-center">
                <p className="font-medium text-[10px] text-white">2</p>
              </div>
            </div>
          </div>

          {/* Burger Menu (Mobile Only) */}
          <Sheet open={isBurgerMenuOpen} onOpenChange={setIsBurgerMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="flex md:hidden items-center justify-center p-2"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex justify-center items-center gap-2">
                    <Image
                      src="/Logo Icon.png"
                      alt="Logo"
                      width={40}
                      height={40}
                      className="w-8 sm:w-10 h-auto"
                    />
                    <Link
                      href="/"
                      onClick={() => setIsBurgerMenuOpen(false)}
                      className="font-inter font-medium text-xl sm:text-2xl lg:text-[26px] text-[#272343]"
                    >
                      Comforty
                    </Link>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-8 font-inter font-medium text-sm leading-[15.4px] items-center mt-4">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsBurgerMenuOpen(false)}
                        className={`hover:scale-110 hover:underline ${
                          item.isActive ? "text-[#007580]" : "text-[#636270]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="/contact"
                      onClick={() => setIsBurgerMenuOpen(false)}
                      className="text-[#636270] font-inter font-normal text-sm leading-[15.4px] hover:scale-110 hover:underline"
                    >
                      Contact
                    </Link>
                    {/* Cart Section in Mobile Menu */}
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 sm:w-5 h-auto" />
                      <Link
                        href="/cart"
                        onClick={() => setIsBurgerMenuOpen(false)}
                        className="font-inter font-medium text-xs sm:text-sm text-[#272343]"
                      >
                        Cart
                      </Link>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default TopBar;