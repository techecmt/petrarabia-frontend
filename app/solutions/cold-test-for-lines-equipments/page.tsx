import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  HiShieldCheck,
  HiCheckCircle,
  HiArrowRight,
  HiBolt,
  HiBeaker,
  HiCog6Tooth,
  HiWrenchScrewdriver,
  HiSignal,
  HiFire,
  HiCpuChip,
  HiFunnel,
  HiCube,
  HiEye,
  HiExclamationTriangle,
  HiChartBar,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Cold Testing for Lines & Equipment - Petra Arabia",
  description:
    "Pre-commissioning verification using chilled media to test pipelines and equipment under actual operating conditions before going live.",
};

const pipelineItems = [
  "Process piping systems",
  "Cooling water lines",
  "Chilled fluid circuits",
  "Cryogenic transfer lines",
  "Utility distribution networks",
];

const equipmentItems = [
  "Heat exchangers & condensers",
  "Chillers & refrigeration units",
  "Vessels & storage tanks",
  "Pumps & valves",
  "Cooling towers",
];

const whyColdTest = [
  {
    step: "01",
    icon: HiExclamationTriangle,
    title: "Prevent Startup Failures",
    description: "Find and fix issues before production begins.",
  },
  {
    step: "02",
    icon: HiChartBar,
    title: "Verify Thermal Performance",
    description: "Ensure systems work correctly at operating temperatures.",
  },
  {
    step: "03",
    icon: HiShieldCheck,
    title: "Validate Material Integrity",
    description:
      "Check for leaks, cracks, or weaknesses under cold conditions.",
  },
  {
    step: "04",
    icon: HiCheckCircle,
    title: "Ensure Safety",
    description: "Confirm safe operation under design conditions.",
  },
];

const moreServices = [
  { icon: HiCpuChip, label: "IIoT Consultancy", href: "/solutions/iiot-consultancy" },
  { icon: HiFunnel, label: "Filtration Solutions", href: "/solutions/filtration-solutions" },
  { icon: HiWrenchScrewdriver, label: "Hydraulic Hoses & Fittings", href: "/solutions/hydraulic-hoses-fittings-assemblies" },
  { icon: HiCube, label: "Lubricants & Fluid Management", href: "/solutions/lubricants-fluid-management" },
  { icon: HiSignal, label: "Condition Monitoring Services", href: "/solutions/condition-monitoring-services" },
  { icon: HiCog6Tooth, label: "MRO Consumables", href: "/solutions/mro-consumables" },
  { icon: HiBolt, label: "Pneumatic & Instrumentation", href: "/solutions/pneumatic-instrumentation-solutions" },
  { icon: HiFire, label: "Steam Trap Performance Audit", href: "/solutions/steam-trap-performance-audit" },
  { icon: HiBeaker, label: "Helium Leak Testing", href: "/solutions/helium-leak-test-for-equipments" },
  { icon: HiEye, label: "Cold Testing for Lines & Equipment", href: "/solutions/cold-test-for-lines-equipments" },
];

export default function ColdTestingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Banner */}
        <section className="relative bg-[#0d1b2a] py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=800&fit=crop"
              alt="Industrial pipeline cold testing"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/60 via-[#0d1b2a]/80 to-[#0d1b2a]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
            <span className="inline-block rounded-full bg-orange-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
              Services
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Cold Testing for Lines{" "}
              <span className="text-orange-400">&amp; Equipment</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Pre-commissioning verification using chilled media to test
              pipelines and equipment under actual operating conditions before
              going live.
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
              <span className="text-orange-400">Cold Testing</span>
            </p>
          </div>
        </section>

        {/* What is Cold Testing */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=450&fit=crop"
                  alt="Industrial pipeline systems for cold testing"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  What is{" "}
                  <span className="text-orange-400">Cold Testing?</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Cold testing is a pre-commissioning verification method that
                  uses chilled media to test pipelines and equipment under actual
                  operating conditions before going live. It validates thermal
                  performance, material integrity, and system readiness under
                  real-world cold operating temperatures.
                </p>
                <div className="mt-8 rounded-xl border border-orange-400/20 bg-orange-400/5 p-6">
                  <p className="text-sm font-medium text-gray-700">
                    Cold testing ensures your systems will perform reliably from
                    the moment of commissioning — catching potential issues when
                    they&apos;re easiest and cheapest to fix.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Test */}
        <section className="bg-[#0d1b2a] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                What We <span className="text-orange-400">Test</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {/* Pipelines & Lines */}
              <div className="rounded-2xl bg-[#101d2e] p-8 ring-1 ring-white/5 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10">
                    <HiBolt className="h-6 w-6 text-orange-400" />
                  </span>
                  <h3 className="text-xl font-bold text-orange-400">
                    For Pipelines &amp; Lines
                  </h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {pipelineItems.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <HiCheckCircle className="h-5 w-5 shrink-0 text-orange-400" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Equipment */}
              <div className="rounded-2xl bg-[#101d2e] p-8 ring-1 ring-white/5 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10">
                    <HiCog6Tooth className="h-6 w-6 text-orange-400" />
                  </span>
                  <h3 className="text-xl font-bold text-orange-400">
                    For Equipment
                  </h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {equipmentItems.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <HiCheckCircle className="h-5 w-5 shrink-0 text-orange-400" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Cold Test */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why <span className="text-orange-400">Cold Test?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                Cold testing is essential for validating system performance and
                safety before commissioning.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {whyColdTest.map((item) => (
                <div
                  key={item.title}
                  className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:ring-1 hover:ring-orange-400/20"
                >
                  <span className="text-4xl font-black text-orange-400/15">
                    {item.step}
                  </span>
                  <span className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10">
                    <item.icon className="h-6 w-6 text-orange-400" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Services */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                More <span className="text-orange-400">Services</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                Explore our full range of industrial solutions and services.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {moreServices.map((svc) => (
                <Link
                  key={svc.label}
                  href={svc.href}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-orange-400/20"
                >
                  <svc.icon className="h-6 w-6 shrink-0 text-orange-400" />
                  <span className="text-sm font-medium text-gray-700">
                    {svc.label}
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
              Need Cold Testing{" "}
              <span className="text-orange-400">Services?</span>
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Contact our team to plan cold testing for your pipelines and
              equipment — we provide on-site testing with full certification and
              reporting.
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
