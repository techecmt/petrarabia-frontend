import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  HiCheckCircle,
  HiArrowRight,
  HiFire,
  HiChartBar,
  HiWrenchScrewdriver,
  HiBanknotes,
  HiShieldCheck,
  HiCog6Tooth,
  HiSignal,
  HiExclamationTriangle,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Steam Trap Performance Audit - Petra Arabia",
  description:
    "Comprehensive steam trap testing and auditing services to eliminate energy loss, reduce emissions, and improve operational efficiency across industrial facilities.",
};

const auditSteps = [
  {
    step: "01",
    title: "Site Survey & Inventory",
    description:
      "Complete documentation of all steam traps, their locations, types, and operating conditions across your facility.",
  },
  {
    step: "02",
    title: "Ultrasonic & Temperature Testing",
    description:
      "Non-invasive testing using ultrasonic leak detectors and infrared thermography to assess trap condition in real time.",
  },
  {
    step: "03",
    title: "Condition Assessment",
    description:
      "Each trap is classified as functioning, failed open, failed closed, or bypassed — with severity ratings for prioritization.",
  },
  {
    step: "04",
    title: "Reporting & Recommendations",
    description:
      "Detailed audit report with energy loss calculations, cost savings projections, and a prioritized replacement/repair action plan.",
  },
];

const benefits = [
  {
    icon: HiBanknotes,
    title: "Reduce Energy Costs",
    description:
      "Failed-open steam traps waste significant energy. Identifying and replacing them can cut steam losses by up to 20%.",
  },
  {
    icon: HiShieldCheck,
    title: "Improve Safety",
    description:
      "Malfunctioning traps cause water hammer, equipment damage, and safety hazards. Regular audits mitigate these risks.",
  },
  {
    icon: HiCog6Tooth,
    title: "Extend Equipment Life",
    description:
      "Proper steam trap operation protects heat exchangers, turbines, and process equipment from condensate-related damage.",
  },
  {
    icon: HiSignal,
    title: "Reduce Emissions",
    description:
      "Eliminating steam leaks directly reduces greenhouse gas emissions and supports environmental compliance goals.",
  },
];

const failureModes = [
  {
    icon: HiExclamationTriangle,
    title: "Failed Open",
    description:
      "Trap allows live steam to pass through continuously — the most costly failure, resulting in massive energy loss.",
  },
  {
    icon: HiFire,
    title: "Failed Closed",
    description:
      "Trap blocks condensate drainage, causing water hammer, reduced heat transfer, and potential equipment damage.",
  },
  {
    icon: HiWrenchScrewdriver,
    title: "Bypassed",
    description:
      "Bypass valve left open, allowing continuous steam loss and defeating the purpose of the trap entirely.",
  },
];

export default function SteamTrapPerformanceAuditPage() {
  return (
    <>
      <Header />
      <main>
        {/* Banner */}
        <section className="relative bg-[#0d1b2a] py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1920&h=800&fit=crop"
              alt="Steam industrial pipes"
              fill
              className="object-cover opacity-15"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/60 via-[#0d1b2a]/80 to-[#0d1b2a]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
            <span className="inline-block rounded-full bg-orange-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
              Testing &amp; Auditing Services
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Steam Trap{" "}
              <span className="text-orange-400">Performance Audit</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Comprehensive testing and auditing to eliminate energy loss, reduce
              emissions, and improve steam system efficiency.
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
                Steam Trap Performance Audit
              </span>
            </p>
          </div>
        </section>

        {/* What Is a Steam Trap Audit */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=450&fit=crop"
                  alt="Steam system inspection"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                  What Is a Steam Trap{" "}
                  <span className="text-orange-400">Performance Audit?</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600">
                  A steam trap performance audit is a systematic evaluation of
                  every steam trap in your facility to identify failures, energy
                  losses, and maintenance priorities. Steam traps are critical
                  components that remove condensate and non-condensable gases
                  from steam systems while preventing live steam loss.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  When traps fail — and studies show that 15–30% of traps in a
                  typical plant are malfunctioning — the result is wasted energy,
                  increased emissions, reduced process efficiency, and potential
                  equipment damage. Our certified auditors use advanced
                  ultrasonic and thermal testing technology to assess every trap
                  and deliver actionable insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Failure Modes */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Common{" "}
                <span className="text-orange-400">Failure Modes</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                Understanding how steam traps fail is key to preventing costly
                energy losses and safety incidents.
              </p>
            </div>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {failureModes.map((mode) => (
                <div
                  key={mode.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:ring-1 hover:ring-orange-400/20"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 transition-colors group-hover:bg-orange-400/10">
                    <mode.icon className="h-7 w-7 text-orange-400" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {mode.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {mode.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Audit Process */}
        <section className="bg-[#0d1b2a] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Our Audit{" "}
                <span className="text-orange-400">Process</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
                A structured, four-step approach to identify every
                underperforming trap and quantify the savings opportunity.
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {auditSteps.map((item) => (
                <div
                  key={item.step}
                  className="group rounded-2xl border border-white/5 bg-[#101d2e] p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="text-4xl font-extrabold text-orange-400/30 transition-colors group-hover:text-orange-400/60">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-white">
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

        {/* Why It Matters */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Steam Trap Audits{" "}
                <span className="text-orange-400">Matter</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                Proactive steam trap management delivers measurable ROI across
                energy, safety, and equipment longevity.
              </p>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all hover:shadow-lg hover:ring-1 hover:ring-orange-400/20"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10 transition-colors group-hover:bg-orange-400/20">
                    <item.icon className="h-7 w-7 text-orange-400" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-gray-900">
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

        {/* Key Stats */}
        <section className="bg-[#0d1b2a] py-14">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              <div className="text-center">
                <span className="text-4xl font-extrabold text-orange-400 sm:text-5xl">
                  15-30%
                </span>
                <p className="mt-2 text-sm font-medium text-gray-400">
                  Typical Trap Failure Rate
                </p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-extrabold text-orange-400 sm:text-5xl">
                  20%
                </span>
                <p className="mt-2 text-sm font-medium text-gray-400">
                  Potential Steam Savings
                </p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-extrabold text-orange-400 sm:text-5xl">
                  &lt;12mo
                </span>
                <p className="mt-2 text-sm font-medium text-gray-400">
                  Typical ROI Payback
                </p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-extrabold text-orange-400 sm:text-5xl">
                  100%
                </span>
                <p className="mt-2 text-sm font-medium text-gray-400">
                  Non-Invasive Testing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Industries{" "}
                <span className="text-orange-400">We Serve</span>
              </h2>
            </div>
            <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Oil & Gas Refineries",
                "Petrochemical Plants",
                "Power Generation",
                "Food & Beverage Processing",
                "Pharmaceutical Manufacturing",
                "District Cooling & Heating",
              ].map((industry) => (
                <div
                  key={industry}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <HiCheckCircle className="h-5 w-5 shrink-0 text-orange-400" />
                  <span className="text-sm font-medium text-gray-700">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d1b2a] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <HiChartBar className="mx-auto h-12 w-12 text-orange-400" />
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Schedule Your{" "}
              <span className="text-orange-400">Steam Trap Audit</span>
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Stop losing energy and money to failed steam traps. Contact our
              team to schedule a comprehensive audit of your facility.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-400 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
            >
              Request an Audit
              <HiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}