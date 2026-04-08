import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  HiSignal,
  HiCpuChip,
  HiBolt,
  HiChartBar,
  HiCheckCircle,
  HiArrowRight,
  HiShieldCheck,
  HiEye,
  HiCog6Tooth,
  HiLightBulb,
  HiUserGroup,
  HiGlobeAlt,
  HiDocumentCheck,
  HiArrowLongRight,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "IIoT Consultancy - Petra Arabia",
  description:
    "Strategic implementation of connected sensor technology, data analytics, and cloud computing to transform industrial operations into predictive, automated, and optimized systems.",
};

const offerings = [
  {
    icon: HiSignal,
    title: "Smart Monitoring & Predictive Maintenance",
    items: [
      "Deploy wireless sensors on critical equipment (pumps, compressors, valves)",
      "Monitor vibration, temperature, pressure, and flow in real time",
      "Predict failures before they occur, reducing unplanned downtime by up to 50%",
    ],
  },
  {
    icon: HiCpuChip,
    title: "Digital Twin Creation",
    items: [
      "Build virtual replicas of your physical assets and processes",
      "Simulate scenarios, optimize performance, and test changes digitally",
      "Enable remote expert diagnostics and troubleshooting",
    ],
  },
  {
    icon: HiBolt,
    title: "Energy & Resource Optimization",
    items: [
      "Real-time tracking of steam, water, electricity, and compressed air consumption",
      "Identify leaks, inefficiencies, and waste patterns instantly",
      "Automated alerts when consumption exceeds thresholds",
    ],
  },
  {
    icon: HiChartBar,
    title: "Asset Performance Management",
    items: [
      "Centralized dashboard for all equipment health metrics",
      "Lifecycle tracking and maintenance scheduling automation",
      "Spare parts inventory optimization based on actual usage data",
    ],
  },
];

const advantages = [
  {
    icon: HiEye,
    title: "Transparency",
    description:
      "Clear pricing and detailed project timelines from start to finish.",
  },
  {
    icon: HiDocumentCheck,
    title: "Certified Experts",
    description:
      "Licensed engineers and technicians with specialized industrial training.",
  },
  {
    icon: HiShieldCheck,
    title: "High Safety Standards",
    description:
      "Full compliance with Saudi and international industrial safety regulations.",
  },
  {
    icon: HiUserGroup,
    title: "Customer-Centric Approach",
    description:
      "Tailored engineering approaches for your specific operational needs.",
  },
  {
    icon: HiGlobeAlt,
    title: "Sustainable Solutions",
    description:
      "Energy-efficient systems and environmentally responsible solutions.",
  },
];

const processSteps = [
  "Assessment & Scope Definition",
  "Sensor Strategy & Architecture Design",
  "Hardware/Software Selection & Integration",
  "Pilot Deployment & Data Validation",
  "Full-Scale Implementation",
  "Training & Continuous Support",
];

export default function IIoTConsultancyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Banner */}
        <section className="relative bg-[#0d1b2a] py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=800&fit=crop"
              alt="IIoT industrial technology"
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
              IIoT <span className="text-orange-400">Consultancy</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-gray-400">
              Transform raw facility data into actionable intelligence with
              connected sensor technology, data analytics, and cloud computing.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              <Link
                href="/"
                className="transition-colors hover:text-orange-400"
              >
                Home
              </Link>
              <span className="mx-2">–</span>
              <span className="text-orange-400">IIoT Consultancy</span>
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Image */}
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=450&fit=crop"
                  alt="Engineers monitoring IIoT systems on screens"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  What is{" "}
                  <span className="text-orange-400">IIoT Consultancy?</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-gray-600">
                  <strong className="text-gray-900">
                    Industrial Internet of Things (IIoT) Consultancy
                  </strong>{" "}
                  is the strategic implementation of connected sensor technology,
                  data analytics, and cloud computing within industrial
                  operations to transform raw facility data into actionable
                  intelligence.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  We help you move from reactive maintenance and manual
                  monitoring to{" "}
                  <strong className="text-gray-900">
                    predictive, automated, and optimized operations
                  </strong>
                  .
                </p>
                <div className="mt-8 flex items-center gap-4 rounded-xl border border-orange-400/20 bg-orange-400/5 p-5">
                  <HiLightBulb className="h-8 w-8 shrink-0 text-orange-400" />
                  <p className="text-sm font-medium text-gray-700">
                    Reduce unplanned downtime by up to 50% with smart sensor
                    deployment and predictive analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="bg-[#0d1b2a] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                What We <span className="text-orange-400">Offer</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
                End-to-end IIoT solutions from sensor deployment to centralized
                asset management.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {offerings.map((offer) => (
                <div
                  key={offer.title}
                  className="rounded-2xl bg-[#101d2e] p-8 ring-1 ring-white/5 transition-all hover:ring-orange-400/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10">
                      <offer.icon className="h-6 w-6 text-orange-400" />
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {offer.title}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {offer.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <HiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Key Advantages of{" "}
                <span className="text-orange-400">Petra Arabia</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((adv) => (
                <div
                  key={adv.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:ring-1 hover:ring-orange-400/20"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10">
                    <adv.icon className="h-7 w-7 text-orange-400" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {adv.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {adv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our IIoT Implementation{" "}
                <span className="text-orange-400">Process</span>
              </h2>
            </div>

            <div className="mt-14">
              {/* Desktop: horizontal flow */}
              <div className="relative hidden lg:block">
                {/* Connecting line */}
                <div className="absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-orange-400/20 via-orange-400 to-orange-400/20" />

                <div className="relative grid grid-cols-6 gap-4">
                  {processSteps.map((step, i) => (
                    <div key={step} className="flex flex-col items-center">
                      {/* Number circle */}
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 text-lg font-bold text-white shadow-lg shadow-orange-400/25">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      {/* Card */}
                      <div className="mt-6 w-full rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-orange-400/20">
                        <p className="text-sm font-semibold leading-snug text-gray-800">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile: vertical flow */}
              <div className="relative space-y-0 lg:hidden">
                {/* Vertical connecting line */}
                <div className="absolute bottom-4 left-5 top-4 w-0.5 bg-gradient-to-b from-orange-400 to-orange-400/20" />

                {processSteps.map((step, i) => (
                  <div key={step} className="relative flex items-start gap-5 py-4">
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 text-sm font-bold text-white shadow-md">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                      <p className="text-sm font-semibold text-gray-800">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d1b2a] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Go{" "}
              <span className="text-orange-400">Digital?</span>
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Contact our IIoT specialists to discuss how connected technology
              can transform your industrial operations.
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
