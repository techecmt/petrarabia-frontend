import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  HiFunnel,
  HiWrenchScrewdriver,
  HiBolt,
  HiCube,
  HiSignal,
  HiCog6Tooth,
  HiCpuChip,
  HiFire,
  HiBeaker,
  HiEye,
  HiArrowRight,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Solutions - Petra Arabia",
  description:
    "Explore Petra Arabia's full range of industrial solutions — filtration, hydraulic systems, pneumatics, fluid management, condition monitoring, and more.",
};

const solutions = [
  {
    icon: HiFunnel,
    title: "Filtration Solutions",
    description:
      "Engine, industrial, hydraulic, and process filtration products for all critical applications.",
    href: "/solutions/filtration-solutions",
  },
  {
    icon: HiWrenchScrewdriver,
    title: "Hydraulic Hoses, Fittings & Assemblies",
    description:
      "High-pressure hydraulic and industrial hose systems with precision fittings and on-site crimping.",
    href: "/solutions/hydraulic-hoses-fittings-assemblies",
  },
  {
    icon: HiBolt,
    title: "Pneumatic & Instrumentation Solutions",
    description:
      "Complete pneumatic automation and instrumentation systems for process control.",
    href: "/solutions/pneumatic-instrumentation-solutions",
  },
  {
    icon: HiCube,
    title: "Lubricants & Fluid Management",
    description:
      "Specialized lubricants and comprehensive fluid management services for industrial performance.",
    href: "/solutions/lubricants-fluid-management",
  },
  {
    icon: HiSignal,
    title: "Condition Monitoring Services",
    description:
      "Predictive maintenance through oil analysis, contamination tracking, and filter monitoring.",
    href: "/solutions/condition-monitoring-services",
  },
  {
    icon: HiCog6Tooth,
    title: "MRO Consumables",
    description:
      "Essential maintenance, repair, and operations supplies including bearings, seals, PPE, and more.",
    href: "/solutions/mro-consumables",
  },
  {
    icon: HiCpuChip,
    title: "IIoT Consultancy",
    description:
      "Strategic implementation of connected sensor technology and data analytics for smart operations.",
    href: "/solutions/iiot-consultancy",
  },
  {
    icon: HiFire,
    title: "Steam Trap Performance Audit",
    description:
      "Comprehensive steam trap testing and auditing to eliminate energy loss and improve efficiency.",
    href: "/solutions/steam-trap-performance-audit",
  },
  {
    icon: HiBeaker,
    title: "Helium Leak Testing",
    description:
      "Precision integrity verification using helium gas and mass spectrometry for critical equipment.",
    href: "/solutions/helium-leak-test-for-equipments",
  },
  {
    icon: HiEye,
    title: "Cold Testing for Lines & Equipment",
    description:
      "Pre-commissioning verification using chilled media to test pipelines and equipment.",
    href: "/solutions/cold-test-for-lines-equipments",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Banner */}
        <section className="bg-[#0d1b2a] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <span className="inline-block rounded-full bg-orange-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
              What We Do
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Our <span className="text-orange-400">Solutions</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Comprehensive industrial products and services engineered for
              reliability and performance across Saudi Arabia&apos;s critical
              industries.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              <Link
                href="/"
                className="transition-colors hover:text-orange-400"
              >
                Home
              </Link>
              <span className="mx-2">–</span>
              <span className="text-orange-400">Solutions</span>
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((sol) => (
                <Link
                  key={sol.href}
                  href={sol.href}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-orange-400/20"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10 transition-colors group-hover:bg-orange-400/20">
                    <sol.icon className="h-7 w-7 text-orange-400" />
                  </span>
                  <h2 className="mt-5 text-lg font-bold text-gray-900">
                    {sol.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {sol.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-400 transition-all group-hover:gap-2.5">
                    Learn More
                    <HiArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d1b2a] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Need a Custom{" "}
              <span className="text-orange-400">Solution?</span>
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Our technical team is ready to help you find the right products
              and services for your specific operational requirements.
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
