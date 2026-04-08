import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  HiCog6Tooth,
  HiFunnel,
  HiWrenchScrewdriver,
  HiBeaker,
  HiShieldCheck,
  HiTruck,
  HiBolt,
  HiCpuChip,
  HiCheckCircle,
  HiArrowRight,
  HiCube,
  HiCloudArrowDown,
  HiFire,
  HiSquare3Stack3D,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Filtration Solutions - Petra Arabia",
  description:
    "Comprehensive filtration solutions for engine, industrial, hydraulic, and process applications. Trusted by critical industries across the region.",
};

const categories = [
  {
    title: "Engine & Vehicle Filtration Solutions",
    icon: HiTruck,
    description:
      "High-performance filtration for all vehicle and engine applications, ensuring optimal performance and extended equipment life.",
    items: [
      "Air Filters",
      "Fuel Filters",
      "Oil (Lube) Filters",
      "Hydraulic Filters",
      "Coolant Filters",
      "Cabin Air Filters",
    ],
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop",
  },
  {
    title: "Industrial Dust, Fume & Mist Collection",
    icon: HiCloudArrowDown,
    description:
      "Industrial-grade dust, fume, and mist collection systems designed for demanding manufacturing and processing environments.",
    items: [
      "Cartridge Filters",
      "Fabric Baghouse Filters",
      "Mist Filters",
      "Panel Filters",
    ],
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
  },
  {
    title: "Hydraulic Filtration Systems",
    icon: HiCog6Tooth,
    description:
      "Complete hydraulic filtration solutions across all pressure ranges, including offline filtration for system maintenance.",
    items: [
      "Low-Pressure Filters",
      "Medium-Pressure Filters",
      "High-Pressure Filters",
      "Offline Filtration Units",
    ],
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
  },
  {
    title: "Process Filtration for Liquids, Steam & Gas",
    icon: HiBeaker,
    description:
      "Precision process filtration for critical liquid, steam, and gas applications in chemical, petrochemical, and industrial operations.",
    items: [
      "Liquid Filter Elements",
      "Steam Filters",
      "Compressed Air & Gas Filters",
      "Tank Vent Filters",
    ],
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop",
  },
];

const industrialSystems = [
  {
    icon: HiBeaker,
    title: "Process Filtration",
    description: "Chemical, water, and gas processing",
  },
  {
    icon: HiBolt,
    title: "Compressed Air Purification",
    description: "Oil, water, and particulate removal",
  },
  {
    icon: HiFunnel,
    title: "Liquid Filtration",
    description: "Coolant, lubricant, and process fluid cleaning",
  },
  {
    icon: HiSquare3Stack3D,
    title: "Bag & Cartridge Filters",
    description: "Custom industrial applications",
  },
];

const moreServices = [
  { icon: HiCpuChip, label: "IIoT Consultancy" },
  { icon: HiFunnel, label: "Filtration Solutions" },
  { icon: HiWrenchScrewdriver, label: "Hydraulic Hoses & Fittings" },
  { icon: HiCube, label: "Lubricants & Fluid Management" },
  { icon: HiShieldCheck, label: "Condition Monitoring Services" },
  { icon: HiCog6Tooth, label: "MRO Consumables" },
  { icon: HiBolt, label: "Pneumatic & Instrumentation Solutions" },
  { icon: HiFire, label: "Steam Trap Performance Audit" },
  { icon: HiBeaker, label: "Helium Leak Testing" },
  { icon: HiWrenchScrewdriver, label: "Cold Testing for Lines & Equipment" },
];

export default function FiltrationSolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Banner */}
        <section className="relative bg-[#0d1b2a] py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#132238] to-[#0d1b2a]" />
          <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
            <span className="inline-block rounded-full bg-orange-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
              Product Range
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Filtration <span className="text-orange-400">Solutions</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              End-to-end filtration products and systems for engine, industrial,
              hydraulic, and process applications — engineered for reliability
              and performance.
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
              <span className="text-orange-400">Filtration Solutions</span>
            </p>
          </div>
        </section>

        {/* Product Categories */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Filtration{" "}
                <span className="text-orange-400">Product Range</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                We supply and service a comprehensive portfolio of filtration
                products across four core areas.
              </p>
            </div>

            <div className="mt-16 space-y-20">
              {categories.map((cat, i) => (
                <div
                  key={cat.title}
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`overflow-hidden rounded-2xl ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10">
                        <cat.icon className="h-6 w-6 text-orange-400" />
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">
                      {cat.description}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <HiCheckCircle className="h-5 w-5 shrink-0 text-orange-400" />
                          <span className="text-sm font-medium text-gray-700">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Filtration Systems */}
        <section className="bg-[#0d1b2a] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Industrial Filtration{" "}
                <span className="text-orange-400">Systems</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
                Integrated filtration systems engineered for large-scale
                industrial and processing operations.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {industrialSystems.map((sys) => (
                <div
                  key={sys.title}
                  className="group rounded-2xl bg-[#101d2e] p-8 ring-1 ring-white/5 transition-all hover:ring-orange-400/30"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10">
                    <sys.icon className="h-7 w-7 text-orange-400" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {sys.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {sys.description}
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
                Beyond filtration, Petra Arabia delivers a full spectrum of
                industrial support services.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {moreServices.map((svc) => (
                <div
                  key={svc.label}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-orange-400/20"
                >
                  <svc.icon className="h-6 w-6 shrink-0 text-orange-400" />
                  <span className="text-sm font-medium text-gray-700">
                    {svc.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d1b2a] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Need a Filtration{" "}
              <span className="text-orange-400">Solution?</span>
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Our technical team is ready to help you select the right
              filtration products for your specific application requirements.
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
