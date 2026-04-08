import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  HiBeaker,
  HiCog6Tooth,
  HiShieldCheck,
  HiCheckCircle,
  HiArrowRight,
  HiBolt,
  HiFunnel,
  HiChartBar,
  HiSignal,
  HiCube,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Lubricants & Fluid Management - Petra Arabia",
  description:
    "Specialized lubricants and comprehensive fluid management services to maximize equipment life, efficiency, and reliability in industrial environments.",
};

const industrialLubricants = [
  {
    icon: HiCog6Tooth,
    title: "Hydraulic Oils",
    description: "High-performance, anti-wear formulations",
  },
  {
    icon: HiShieldCheck,
    title: "Gear Oils",
    description: "Extreme pressure protection for gears and transmissions",
  },
  {
    icon: HiBolt,
    title: "Compressor Oils",
    description: "Rotary screw and reciprocating compressor specific",
  },
  {
    icon: HiCube,
    title: "Industrial Greases",
    description: "Multi-purpose and high-temperature grades",
  },
  {
    icon: HiBeaker,
    title: "Specialty Fluids",
    description: "Food-grade, biodegradable, and synthetic options",
  },
];

const fluidManagement = [
  {
    icon: HiBeaker,
    title: "Oil Analysis Kits",
    description: "On-site sampling equipment",
  },
  {
    icon: HiChartBar,
    title: "Testing Services",
    description: "Viscosity, contamination, and wear metal analysis",
  },
  {
    icon: HiSignal,
    title: "Fluid Monitoring Systems",
    description: "Continuous condition monitoring",
  },
  {
    icon: HiFunnel,
    title: "Filtration & Purification",
    description: "Oil cleaning and reconditioning",
  },
];

export default function LubricantsFluidManagementPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Banner */}
        <section className="relative bg-[#0d1b2a] py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=800&fit=crop"
              alt="Industrial lubricants and fluid systems"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/60 via-[#0d1b2a]/80 to-[#0d1b2a]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
            <span className="inline-block rounded-full bg-orange-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
              Products &amp; Services
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Lubricants &amp; Fluid{" "}
              <span className="text-orange-400">Management</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Precision fluid solutions for industrial performance — we provide
              specialized lubricants and comprehensive fluid management services
              to maximize equipment life, efficiency, and reliability in Saudi
              Arabia&apos;s demanding industrial environments.
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
              <span className="text-orange-400">
                Lubricants &amp; Fluid Management
              </span>
            </p>
          </div>
        </section>

        {/* Industrial Lubricants */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=450&fit=crop"
                  alt="Industrial lubricant products"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Industrial{" "}
                  <span className="text-orange-400">Lubricants</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Our range of high-quality industrial lubricants covers every
                  application — from hydraulic systems and gear drives to
                  compressors and specialty environments requiring food-grade or
                  biodegradable solutions.
                </p>
                <ul className="mt-8 space-y-4">
                  {industrialLubricants.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-400/10">
                        <item.icon className="h-5 w-5 text-orange-400" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fluid Management & Testing */}
        <section className="bg-[#0d1b2a] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Fluid Management &amp;{" "}
                <span className="text-orange-400">Testing</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
                Complete fluid management services from sampling and analysis to
                continuous monitoring and purification — keeping your systems
                clean and performing at peak efficiency.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {fluidManagement.map((item) => (
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

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Choose Our{" "}
                <span className="text-orange-400">Fluid Solutions?</span>
              </h2>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
              {[
                "Extended equipment life through optimal lubrication",
                "Reduced unplanned downtime and maintenance costs",
                "OEM-approved formulations for critical applications",
                "Expert on-site testing and fluid analysis support",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <HiCheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-orange-400" />
                  <span className="text-base text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d1b2a] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Optimize Your{" "}
              <span className="text-orange-400">Fluid Systems</span>
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Talk to our specialists about the right lubricants and fluid
              management program for your operation.
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
