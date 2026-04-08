import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiMapPin, HiEnvelope, HiPhone } from "react-icons/hi2";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Filtration Solutions", href: "/solutions/filtration-solutions" },
  { label: "IIoT Consultancy", href: "/solutions/iiot-consultancy" },
  { label: "MRO Consumables", href: "/solutions/mro-consumables" },
  { label: "Condition Monitoring Services", href: "/solutions/condition-monitoring-services" },
  { label: "Cold Test for Lines & Equipments", href: "/solutions/cold-test-for-lines-equipments" },
  { label: "Hydraulic Hoses, Fittings & Assemblies", href: "/solutions/hydraulic-hoses-fittings-assemblies" },
  { label: "Helium Leak Test for Equipments", href: "/solutions/helium-leak-test-for-equipments" },
  { label: "Lubricants & Fluid Management", href: "/solutions/lubricants-fluid-management" },
  { label: "Pneumatic & Instrumentation Solutions", href: "/solutions/pneumatic-instrumentation-solutions" },
  { label: "Steam Trap Performance Audit", href: "/solutions/steam-trap-performance-audit" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1624] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Petra Logo"
                width={180}
                height={48}
                className="h-12 w-auto"
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              Powering Saudi industry with precision filtration, fluid systems,
              and reliable industrial supply. Engineering solutions delivered
              with expertise and integrity.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-orange-400 hover:text-white"
              >
                <FaFacebookF className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-orange-400 hover:text-white"
              >
                <FaTwitter className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-orange-400 hover:text-white"
              >
                <FaYoutube className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-orange-400">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-orange-400">Services</h4>
            <ul className="mt-4 space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-bold text-orange-400">Get in Touch</h4>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3 text-sm">
                <HiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                <span>
                  Khobar Business Gate 8668+XH4, King Faisal Ibn Abd Al Aziz, Al
                  Bandariyah, Al Khobar 34423, Saudi Arabia
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <HiEnvelope className="h-5 w-5 shrink-0 text-orange-400" />
                <a
                  href="mailto:Sales@petrarabia.com"
                  className="transition-colors hover:text-orange-400"
                >
                  Sales@petrarabia.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <HiPhone className="h-5 w-5 shrink-0 text-orange-400" />
                <a
                  href="tel:+966546447060"
                  className="transition-colors hover:text-orange-400"
                >
                  +966 54 644 7060
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
        Copyright &copy; {new Date().getFullYear()} Petra. All Rights Reserved.
      </div>
    </footer>
  );
}
