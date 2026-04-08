import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  HiCog6Tooth,
  HiWrenchScrewdriver,
  HiShieldCheck,
  HiCheckCircle,
  HiArrowRight,
  HiBolt,
  HiCube,
  HiDocumentCheck,
  HiTruck,
  HiBeaker,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Hydraulic Hoses, Fittings & Assemblies - Petra Arabia",
  description:
    "High-pressure hydraulic and industrial hose systems with precision fittings for demanding industrial applications in Saudi Arabia.",
};

const hoseProducts = [
  {
    icon: HiBolt,
    title: "High-Pressure Hydraulic Hoses",
    description: "SAE, EN, ISO standards",
  },
  {
    icon: HiBeaker,
    title: "Industrial Hose Lines",
    description: "Chemical, fuel, air, and water transfer",
  },
  {
    icon: HiCog6Tooth,
    title: "Specialty Hoses",
    description: "Thermoplastic, PTFE, multi-spiral designs",
  },
  {
    icon: HiWrenchScrewdriver,
    title: "Custom Length Hoses",
    description: "Cut to your exact specifications",
  },
];

const fittingsProducts = [
  {
    icon: HiCube,
    title: "JIC, ORFS, NPT, BSP Thread Fittings",
    description: "Full range of thread configurations for all standards",
  },
  {
    icon: HiCog6Tooth,
    title: "Flange Adaptors & Manifolds",
    description: "High-pressure flange connections and distribution blocks",
  },
  {
    icon: HiBolt,
    title: "Quick-Disconnect Couplings",
    description: "Fast, leak-free connections for efficient changeover",
  },
  {
    icon: HiWrenchScrewdriver,
    title: "Clamps, Ferrules & Sleeves",
    description: "Secure hose retention and protection components",
  },
];

const assemblyServices = [
  {
    icon: HiTruck,
    title: "On-Site Crimping",
    description: "Mobile service capabilities",
  },
  {
    icon: HiWrenchScrewdriver,
    title: "Custom Assembly",
    description: "Built to your pressure and media requirements",
  },
  {
    icon: HiShieldCheck,
    title: "Pressure Testing",
    description: "Each assembly verified before delivery",
  },
  {
    icon: HiDocumentCheck,
    title: "Labeling & Traceability",
    description: "Full documentation provided",
  },
];

export default function HydraulicHosesFittingsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Banner */}
        <section className="relative bg-[#0d1b2a] py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=800&fit=crop"
              alt="Hydraulic hoses and fittings"
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
              Hydraulic Hoses, Fittings{" "}
              <span className="text-orange-400">&amp; Assemblies</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Complete hydraulic solutions — we supply and assemble high-pressure
              hydraulic and industrial hose systems with precision fittings for
              Saudi Arabia&apos;s demanding industrial applications.
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
                Hydraulic Hoses &amp; Fittings
              </span>
            </p>
          </div>
        </section>

        {/* Professional Hose Assembly Services */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=450&fit=crop"
                  alt="Professional hydraulic hose assembly"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Professional Hose{" "}
                  <span className="text-orange-400">Assembly Services</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  From on-site crimping to custom builds, every assembly is
                  pressure-tested and fully documented for traceability and
                  compliance.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {assemblyServices.map((svc) => (
                    <div
                      key={svc.title}
                      className="rounded-xl border border-gray-100 bg-gray-50 p-5 transition-all hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-400/10">
                        <svc.icon className="h-5 w-5 text-orange-400" />
                      </span>
                      <h3 className="mt-3 text-sm font-bold text-gray-900">
                        {svc.title}
                      </h3>
                      <p className="mt-1 text-xs text-gray-600">
                        {svc.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hydraulic & Industrial Hoses */}
        <section className="bg-[#0d1b2a] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Hydraulic &amp; Industrial{" "}
                  <span className="text-orange-400">Hoses</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-400">
                  A full range of hydraulic and industrial hoses meeting
                  international standards for high-pressure, chemical, fuel,
                  air, and specialty applications.
                </p>
                <ul className="mt-8 space-y-5">
                  {hoseProducts.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-400/10">
                        <item.icon className="h-5 w-5 text-orange-400" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-sm text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=450&fit=crop"
                  alt="Hydraulic hose systems"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tube Fittings & Connectors */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Tube Fittings &amp;{" "}
                <span className="text-orange-400">Connectors</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                Precision-engineered fittings and connectors for secure,
                leak-free hydraulic connections across all thread standards.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {fittingsProducts.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:ring-1 hover:ring-orange-400/20"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10">
                    <item.icon className="h-7 w-7 text-orange-400" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-gray-900">
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

        {/* Why Choose Us */}
        <section className="bg-[#0d1b2a] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Why Choose Our{" "}
                <span className="text-orange-400">Hose Solutions?</span>
              </h2>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
              {[
                "Every assembly pressure-tested and certified",
                "On-site and mobile crimping services available",
                "Full range of SAE, EN, and ISO compliant hoses",
                "Complete traceability with labeling and documentation",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <HiCheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-orange-400" />
                  <span className="text-base text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Need Hydraulic Hose{" "}
              <span className="text-orange-400">Solutions?</span>
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Contact our team for custom hose assemblies, fittings, and
              on-site crimping services tailored to your application.
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
