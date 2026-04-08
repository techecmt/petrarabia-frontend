import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  HiCog6Tooth,
  HiSignal,
  HiCheckCircle,
  HiArrowRight,
  HiBolt,
  HiChartBar,
  HiWrenchScrewdriver,
  HiCpuChip,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Pneumatic & Instrumentation Solutions - Petra Arabia",
  description:
    "Complete pneumatic and instrumentation systems for precise automation and control in industrial and oil & gas sectors.",
};

const pneumaticProducts = [
  {
    icon: HiCog6Tooth,
    title: "Pneumatic Cylinders",
    description:
      "Standard, compact, and heavy-duty cylinders for all automation needs",
  },
  {
    icon: HiBolt,
    title: "Solenoid & Control Valves",
    description:
      "Directional control, proportional, and manifold-mounted valve systems",
  },
  {
    icon: HiWrenchScrewdriver,
    title: "Air Preparation Units (FRL)",
    description:
      "Filters, regulators, and lubricators for clean, controlled air supply",
  },
  {
    icon: HiCpuChip,
    title: "Pneumatic Fittings & Tubing",
    description:
      "Push-in fittings, quick couplers, and polyurethane/nylon tubing",
  },
];

const instrumentationProducts = [
  {
    icon: HiSignal,
    title: "Pressure Gauges & Transmitters",
    description: "Digital and analog, various ranges",
  },
  {
    icon: HiChartBar,
    title: "Temperature Sensors & Indicators",
    description: "RTDs, thermocouples, displays",
  },
  {
    icon: HiCog6Tooth,
    title: "Flow Meters & Controllers",
    description: "For liquid and gas measurement",
  },
  {
    icon: HiWrenchScrewdriver,
    title: "Instrumentation Fittings & Valves",
    description: "Needle valves, manifolds, tube fittings",
  },
];

export default function PneumaticInstrumentationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Banner */}
        <section className="relative bg-[#0d1b2a] py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="/pneumatic-banner.jpg"
              alt="Industrial pressure gauges and instrumentation systems"
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
              Pneumatic &amp; Instrumentation{" "}
              <span className="text-orange-400">Solutions</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Industrial automation &amp; process control — we provide complete
              pneumatic and instrumentation systems for precise automation and
              control in Saudi Arabia&apos;s industrial and oil &amp; gas
              sectors.
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
                Pneumatic &amp; Instrumentation
              </span>
            </p>
          </div>
        </section>

        {/* Pneumatic Systems */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 overflow-hidden rounded-2xl">
                  <Image
                    src="/steel-pipelines-cables-plant.jpg"
                    alt="Pneumatic cylinders and valve systems"
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </div>
                
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Pneumatic{" "}
                  <span className="text-orange-400">Systems</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Complete pneumatic automation components from world-class
                  manufacturers — cylinders, valves, air preparation units, and
                  fittings engineered for reliable performance in demanding
                  industrial environments.
                </p>
                <ul className="mt-8 space-y-4">
                  {pneumaticProducts.map((item) => (
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

        {/* Instrumentation & Control */}
        <section className="bg-orange-400 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-[#0d1b2a] sm:text-4xl">
                  Instrumentation &amp; Control
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#0d1b2a]/80">
                  Precision instrumentation products for monitoring and
                  controlling pressure, temperature, flow, and process variables
                  across critical industrial applications.
                </p>
                <ul className="mt-8 space-y-5">
                  {instrumentationProducts.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <HiCheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-[#0d1b2a]" />
                      <div>
                        <h3 className="text-base font-bold text-[#0d1b2a]">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-sm text-[#0d1b2a]/70">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/Parker_products-1.jpg"
                    alt="Pneumatic and instrumentation components"
                    width={280}
                    height={280}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/Parker_products-3.jpg"
                    alt="Instrumentation valves and fittings"
                    width={280}
                    height={280}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[#0d1b2a] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Why Choose Our{" "}
                <span className="text-orange-400">Solutions?</span>
              </h2>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
              {[
                "OEM-grade pneumatic components from global manufacturers",
                "Certified instrumentation for hazardous area applications",
                "Technical sizing and selection support for your application",
                "Fast regional availability with local stockholding",
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
              Need Pneumatic or Instrumentation{" "}
              <span className="text-orange-400">Products?</span>
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Our team can help you select and source the right pneumatic and
              instrumentation components for your process automation needs.
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
