import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  HiCog6Tooth,
  HiWrenchScrewdriver,
  HiShieldCheck,
  HiCheckCircle,
  HiArrowRight,
  HiCube,
  HiBolt,
  HiBeaker,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "MRO Consumables - Petra Arabia",
  description:
    "Essential Maintenance, Repair & Operations supplies. Comprehensive MRO consumables to keep your operations running smoothly.",
};

const mechanicalComponents = [
  {
    icon: HiCog6Tooth,
    title: "Bearings",
    description:
      "Ball, roller, mounted units for industrial applications",
  },
  {
    icon: HiCube,
    title: "Seals & Gaskets",
    description:
      "Hydraulic, pneumatic, and static sealing solutions",
  },
  {
    icon: HiBolt,
    title: "Belts & Drives",
    description:
      "V-belts, timing belts, and power transmission components",
  },
];

const safetyEssentials = [
  {
    icon: HiShieldCheck,
    title: "Personal Protective Equipment (PPE)",
    description: "Safety gear for industrial environments",
  },
  {
    icon: HiWrenchScrewdriver,
    title: "Workshop Consumables",
    description: "Cutting tools, abrasives, adhesives, and lubricants",
  },
  {
    icon: HiBeaker,
    title: "Cleaning & Maintenance Supplies",
    description: "Industrial cleaners, degreasers, and absorbents",
  },
];

export default function MROConsumablesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Banner */}
        <section className="relative bg-[#0d1b2a] py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#132238] to-[#0d1b2a]" />
          <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
            <span className="inline-block rounded-full bg-orange-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
              Products &amp; Services
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              MRO <span className="text-orange-400">Consumables</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Essential Maintenance, Repair &amp; Operations Supplies — we
              provide comprehensive MRO consumables to keep your operations
              running smoothly, reducing downtime and ensuring continuous
              productivity.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              <Link
                href="/"
                className="transition-colors hover:text-orange-400"
              >
                Home
              </Link>
              <span className="mx-2">–</span>
              <Link
                href="/solutions"
                className="transition-colors hover:text-orange-400"
              >
                Solutions
              </Link>
              <span className="mx-2">–</span>
              <span className="text-orange-400">MRO Consumables</span>
            </p>
          </div>
        </section>

        {/* Mechanical Components */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Mechanical{" "}
                <span className="text-orange-400">Components</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                High-quality mechanical components engineered for reliability
                and extended service life in demanding industrial environments.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {mechanicalComponents.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:ring-1 hover:ring-orange-400/20"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10">
                    <item.icon className="h-7 w-7 text-orange-400" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  <div className="mt-5">
                    <HiCheckCircle className="inline h-5 w-5 text-orange-400" />
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      Industrial grade
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Workshop Essentials */}
        <section className="bg-[#0d1b2a] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Safety &amp; Workshop{" "}
                <span className="text-orange-400">Essentials</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
                Complete range of safety equipment and workshop consumables to
                support safe and efficient daily operations.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {safetyEssentials.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl bg-[#101d2e] p-8 ring-1 ring-white/5 transition-all hover:ring-orange-400/30"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10">
                    <item.icon className="h-7 w-7 text-orange-400" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Need MRO{" "}
              <span className="text-orange-400">Supplies?</span>
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Our team can help you source the right maintenance, repair, and
              operations consumables for your facility requirements.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-400 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
            >
              Contact Us
              <HiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
