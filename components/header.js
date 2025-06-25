'use client';

import { useState } from 'react';
import Image from "next/image";
import logo from "@/public/kelly-logo.svg";
import Link from "next/link";
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-4">
      <nav className="mx-auto flex items-center justify-between py-6 px-4">
        {/* Logo */}
        <Link href="/">
          <Image width={71} height={35} src={logo} alt="kelly-logo" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-12 text-xl text-black font-[400] tracking-wider">
          <Link href="/" className="hover:text-[#00b142]">About Kelly</Link>
          <Link href="/the-team" className="hover:text-[#00b142]">The Kelly Team</Link>
          <Link href="/" className="hover:text-[#00b142]">News & Insight</Link>
          <Link href="/" className="hover:text-[#00b142]">Investors</Link>
          <Link href="/job-listing" className="hover:text-[#00b142]">Find a Job</Link>
        </div>

        {/* CTA Button (Desktop Only) */}
        <div className="hidden md:flex w-[109.5px] h-[30px] text-[12px] font-[700] items-center justify-center border-2 border-[#333] bg-white">
          <Link href="/">CONTACT US</Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-6 text-left text-[16px] font-medium bg-white border-t border-gray-200">
          <Link href="/" className="hover:text-[#00b142]">About Kelly</Link>
          <Link href="/the-team" className="hover:text-[#00b142]">The Kelly Team</Link>
          <Link href="/" className="hover:text-[#00b142]">News & Insight</Link>
          <Link href="/" className="hover:text-[#00b142]">Investors</Link>
          <Link href="/" className="hover:text-[#00b142]">Find a Job</Link>
          <Link
            href="/"
            className="mt-4 w-fit border-2 border-[#333] px-4 py-2 text-xs font-bold hover:bg-[#00b142] hover:text-white"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
}
