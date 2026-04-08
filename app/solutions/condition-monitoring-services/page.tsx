import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  HiBeaker,
  HiChartBar,
  HiCog6Tooth,
  HiSignal,
  HiShieldCheck,
  HiCheckCircle,
  HiArrowRight,
  HiBolt,
  HiClock,
  HiExclamationTriangle,
  HiFunnel,
  HiWifi,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Condition Monitoring Services - Petra Arabia",
  description:
    "Predictive maintenance through precision monitoring. Advanced condition monitoring services that detect potential equipment failures before they occur.",
};

const oilMonitoring = [
  {
    icon: HiBeaker,
    title: "Regular Oil Sampling",
    description: "Scheduled fluid analysis from critical systems",
  },
  {
    icon: HiChartBar,
    title: "Contamination Level Tracking",
    description: "Particle count, water content, and viscosity testing",
  },
  {
    icon: HiCog6Tooth,
    title: "Wear Metal Analysis",
    description: "Detection of abnormal component wear patterns",
  },
  {
    icon: HiShieldCheck,
    title: "Oil Degradation Assessment",
    description: "TAN/TBN measurement and additive depletion analysis",
  },
  {
    icon: HiSignal,
    title: "Real-time Oil Sensors",
    description: "Continuous in-line monitoring installations",
  },
];

const filterMonitoring = [
  {
    icon: HiBolt,
    title: "AP Monitoring Systems",
    description: "Real-time filter condition tracking",
  },
  {
    icon: HiExclamationTriangle,
    title: "Clogging Alerts",
    description: "Automated notifications when filters approach saturation",
  },
  {
    icon: HiClock,
    title: "Optimal Change-out Timing",
    description: "Data-driven replacement scheduling",
  },
  {
    icon: HiFunnel,
    title: "Filter Performance Analysis",
    description: "Efficiency tracking and trend analysis",
  },
  {
    icon: HiWifi,
    title: "Mobile Monitoring Solutions",
    description: "Wireless sensor networks for remote assets",
  },
];

export default function ConditionMonitoringPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Banner */}
        <section className="relative bg-[#0d1b2a] py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=800&fit=crop"
              alt="Industrial condition monitoring equipment"
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
              Condition Monitoring{" "}
              <span className="text-orange-400">Services</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Predictive maintenance through precision monitoring — we provide
              advanced condition monitoring services that detect potential
              equipment failures before they occur, minimizing downtime and
              maximizing operational reliability.
            </p>
           
          </div>
        </section>

        {/* Oil Condition & Contamination Monitoring */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Oil Condition &amp; Contamination{" "}
                <span className="text-orange-400">Monitoring</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                Comprehensive oil analysis and real-time monitoring to track
                fluid health, detect contamination, and prevent costly equipment
                failures.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {oilMonitoring.map((item, i) => (
                <div
                  key={item.title}
                  className={`group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:ring-1 hover:ring-orange-400/20 ${
                    i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
                  }`}
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Differential Pressure Monitoring */}
        <section className="bg-[#0d1b2a] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Filter Differential Pressure{" "}
                <span className="text-orange-400">Monitoring</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
                Real-time filter condition tracking and intelligent alerting
                systems to optimize filter performance and replacement
                schedules.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filterMonitoring.map((item) => (
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

        {/* Key Benefits */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Condition{" "}
                <span className="text-orange-400">Monitoring?</span>
              </h2>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
              {[
                "Reduce unplanned downtime by detecting issues early",
                "Extend equipment life with data-driven maintenance",
                "Lower maintenance costs through optimized scheduling",
                "Improve plant safety and operational reliability",
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
              Ready for Predictive{" "}
              <span className="text-orange-400">Maintenance?</span>
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Contact our team to discuss how condition monitoring can improve
              reliability and reduce costs in your operation.
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
