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
  HiMagnifyingGlass,
  HiCloudArrowDown,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Helium Leak Testing - Petra Arabia",
  description:
    "Precision integrity verification using helium gas and mass spectrometry to detect microscopic leaks in critical equipment and systems.",
};

const whyHelium = [
  {
    icon: HiBeaker,
    title: "Smallest Inert Gas Molecule",
    description: "Detects leaks as small as 10⁻¹² mbar·L/s",
  },
  {
    icon: HiShieldCheck,
    title: "Non-toxic & Non-flammable",
    description: "Safe for all environments",
  },
  {
    icon: HiSignal,
    title: "Exceptional Sensitivity",
    description: "1000x more sensitive than pressure decay tests",
  },
];

const oilGasApplications = [
  "Pressure vessels and reactors",
  "Heat exchangers and condensers",
  "Pipeline welds and connections",
  "Storage tanks and separators",
];

const industrialApplications = [
  "Hydraulic and pneumatic systems",
  "Vacuum chambers and furnaces",
  "Compressed air networks",
  "Refrigeration and HVAC systems",
];

const testingMethods = [
  {
    step: "01",
    title: "Sniffing Method",
    description:
      "Mobile probe detects helium escaping from potential leak points. Ideal for large equipment and inaccessible areas.",
    icon: HiMagnifyingGlass,
  },
  {
    step: "02",
    title: "Vacuum Method",
    description:
      "Equipment evacuated and helium sprayed externally. Most sensitive method for critical components.",
    icon: HiCloudArrowDown,
  },
  {
    step: "03",
    title: "Hood/Chamber Method",
    description:
      "Entire component enclosed in helium atmosphere. Comprehensive leak rate measurement.",
    icon: HiCube,
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
  { icon: HiEye, label: "Cold Testing for Lines & Equipment", href: "/solutions/cold-testing" },
];

export default function HeliumLeakTestingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Banner */}
        <section className="relative bg-[#0d1b2a] py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=800&fit=crop"
              alt="Industrial leak testing equipment"
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
              Helium Leak{" "}
              <span className="text-orange-400">Testing</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Precision integrity verification using helium gas and mass
              spectrometry to detect microscopic leaks in critical equipment
              and systems.
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
              <span className="text-orange-400">Helium Leak Testing</span>
            </p>
          </div>
        </section>

        {/* What is Helium Leak Testing + Why Helium */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=450&fit=crop"
                  alt="Helium leak testing equipment in industrial setting"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  What is Helium{" "}
                  <span className="text-orange-400">Leak Testing?</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  A precision integrity verification method using helium gas and
                  mass spectrometry to detect microscopic leaks in critical
                  equipment and systems.
                </p>

                <h3 className="mt-10 text-xl font-bold text-gray-900">
                  Why <span className="text-orange-400">Helium?</span>
                </h3>
                <ul className="mt-5 space-y-4">
                  {whyHelium.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-400/10">
                        <item.icon className="h-5 w-5 text-orange-400" />
                      </span>
                      <div>
                        <h4 className="text-base font-semibold text-gray-900">
                          {item.title}
                        </h4>
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

        {/* Testing Applications */}
        <section className="bg-[#0d1b2a] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Our Testing{" "}
                <span className="text-orange-400">Applications</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {/* Oil & Gas */}
              <div className="rounded-2xl bg-[#101d2e] p-8 ring-1 ring-white/5 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10">
                    <HiFire className="h-6 w-6 text-orange-400" />
                  </span>
                  <h3 className="text-xl font-bold text-orange-400">
                    For Oil &amp; Gas
                  </h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {oilGasApplications.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <HiCheckCircle className="h-5 w-5 shrink-0 text-orange-400" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industrial Equipment */}
              <div className="rounded-2xl bg-[#101d2e] p-8 ring-1 ring-white/5 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10">
                    <HiCog6Tooth className="h-6 w-6 text-orange-400" />
                  </span>
                  <h3 className="text-xl font-bold text-orange-400">
                    For Industrial Equipment
                  </h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {industrialApplications.map((item) => (
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

        {/* Testing Methods */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Testing{" "}
                <span className="text-orange-400">Methods</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                We employ three proven leak detection methods, selected based on
                your equipment type, sensitivity requirements, and site
                conditions.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {testingMethods.map((method) => (
                <div
                  key={method.title}
                  className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:ring-1 hover:ring-orange-400/20"
                >
                  <span className="text-4xl font-black text-orange-400/15">
                    {method.step}
                  </span>
                  <span className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10">
                    <method.icon className="h-6 w-6 text-orange-400" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {method.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {method.description}
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
              Need Leak Testing{" "}
              <span className="text-orange-400">Services?</span>
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Contact our team to discuss helium leak testing for your equipment
              — we provide on-site and workshop-based testing with full
              certification.
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
