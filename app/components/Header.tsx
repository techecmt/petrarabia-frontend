"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  HiPhone,
  HiEnvelope,
  HiBars3,
  HiXMark,
  HiChevronDown,
} from "react-icons/hi2";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

const productLinks = [
  {
    label: "Filtration Solutions",
    href: "/solutions/filtration-solutions",
  },
  {
    label: "Hydraulic Hoses & Fittings",
    href: "/solutions/hydraulic-hoses-fittings-assemblies",
  },
  {
    label: "Pneumatic & Instrumentation",
    href: "/solutions/pneumatic-instrumentation-solutions",
  },
  {
    label: "Lubricants & Fluid Management",
    href: "/solutions/lubricants-fluid-management",
  },
  {
    label: "Condition Monitoring Services",
    href: "/solutions/condition-monitoring-services",
  },
  {
    label: "MRO Consumables",
    href: "/solutions/mro-consumables",
  },
  {
    label: "IIoT Consultancy",
    href: "/solutions/iiot-consultancy",
  },
  {
    label: "Steam Trap Performance Audit",
    href: "/solutions/steam-trap-performance-audit",
  },
  {
    label: "Helium Leak Testing",
    href: "/solutions/helium-leak-test-for-equipments",
  },
  {
    label: "Cold Testing for Lines & Equipment",
    href: "/solutions/cold-test-for-lines-equipments",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-[#081422] text-xs text-gray-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
          <span className="hidden sm:inline">
            Trusted Industrial Solutions Partner Across the Middle East
          </span>
          <div className="flex items-center gap-5">
            <a
              href="mailto:sales@petraarabia.com"
              className="flex items-center gap-1.5 transition-colors hover:text-orange-400"
            >
              <HiEnvelope className="h-3.5 w-3.5" />
              sales@petraarabia.com
            </a>
            <span className="hidden h-3 w-px bg-gray-700 sm:inline-block" />
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="#"
                className="transition-colors hover:text-orange-400"
                aria-label="LinkedIn"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="#"
                className="transition-colors hover:text-orange-400"
                aria-label="Twitter"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="transition-colors hover:text-orange-400"
                aria-label="Instagram"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row: Logo + Search + Phone */}
      <div className="bg-[#0d1b2a]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/logo.png"
              alt="Petra Logo"
              width={180}
              height={48}
              priority
              className="h-10 w-auto"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="mx-8 hidden max-w-xl flex-1 lg:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products, Solutions or Services..."
                className="w-full rounded-lg border border-gray-600 bg-[#132238] px-4 py-2.5 pr-10 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              />
              <svg
                className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>

          {/* Phone CTA - Desktop */}
          <a
            href="tel:+966546447060"
            className="hidden shrink-0 items-center gap-3 lg:flex"
          >
            
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <HiXMark className="h-6 w-6 text-white" />
            ) : (
              <HiBars3 className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Bottom Nav Bar - Desktop */}
      <nav className="hidden border-t border-white/5 bg-[#101d2e] lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          <div className="flex items-center">
            {/* Products & Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-2 border-r border-white/10 px-5 py-3 text-sm font-medium text-white transition-colors hover:text-orange-400">
                <HiBars3 className="h-4 w-4" />
                Products &amp; Services
                <HiChevronDown
                  className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {productsOpen && (
                <div className="absolute left-0 top-full z-50 w-72 rounded-b-lg bg-[#0d1b2a] py-2 shadow-xl ring-1 ring-white/10">
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-2.5 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-orange-400"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Main nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-3 text-sm font-medium text-gray-300 transition-colors hover:text-orange-400"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-3 text-sm font-medium text-gray-300 transition-colors hover:text-orange-400"
            >
              Contact Us
            </Link>
          </div>

          <a
            href="tel:+966546447060"
            className="flex items-center gap-2 py-3 text-sm text-gray-400 transition-colors hover:text-orange-400"
          >
            <HiPhone className="h-4 w-4 text-orange-400" />
            Need support? <span className="font-semibold text-orange-400">+966 54 644 7060</span>
          </a>
        </div>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#0d1b2a] px-4 pb-4 lg:hidden">
          {/* Mobile Search */}
          <div className="py-3">
            <input
              type="text"
              placeholder="Search Products, Solutions or Services..."
              className="w-full rounded-lg border border-gray-600 bg-[#132238] px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-orange-400"
            />
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2.5 text-sm font-medium transition-colors hover:text-orange-400"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Products dropdown */}
          <div className="py-1">
            <button
              className="flex w-full items-center justify-between py-2.5 text-sm font-medium transition-colors hover:text-orange-400"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            >
              Products &amp; Services
              <HiChevronDown
                className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileProductsOpen && (
              <div className="border-l-2 border-orange-400/30 pl-4">
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-sm text-gray-400 transition-colors hover:text-orange-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="block py-2.5 text-sm font-medium transition-colors hover:text-orange-400"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>

          <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
            <HiPhone className="h-4 w-4 text-orange-400" />
            <a
              href="tel:+966546447060"
              className="text-sm font-semibold text-orange-400"
            >
              +966 54 644 7060
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
