import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import {
  HiEye,
  HiLightBulb,
  HiCheckCircle,
  HiArrowRight,
  HiShieldCheck,
  HiGlobeAlt,
  HiUserGroup,
  HiWrenchScrewdriver,
  HiChatBubbleLeftRight,
  HiStar,
  HiBuildingOffice2,
  HiCog6Tooth,
  HiBanknotes,
  HiBeaker,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "About Us - Petra Arabia",
  description:
    "Learn about Petra Arabia — a trusted industrial solutions partner delivering reliable, high-performance products and services to critical industries across the Middle East.",
};

const values = [
  {
    icon: HiShieldCheck,
    title: "Reliability",
    description:
      "We deliver products and services you can count on, ensuring uninterrupted operations.",
  },
  {
    icon: HiStar,
    title: "Excellence",
    description:
      "We pursue the highest standards in every solution, from sourcing to delivery.",
  },
  {
    icon: HiUserGroup,
    title: "Partnership",
    description:
      "We work alongside our clients as trusted partners, not just suppliers.",
  },
  {
    icon: HiLightBulb,
    title: "Innovation",
    description:
      "We embrace smart technologies and modern approaches to solve industrial challenges.",
  },
  {
    icon: HiGlobeAlt,
    title: "Integrity",
    description:
      "We operate with transparency, honesty, and accountability in every engagement.",
  },
  {
    icon: HiCog6Tooth,
    title: "Safety",
    description:
      "We prioritize the safety of people, equipment, and the environment in all our solutions.",
  },
];

const stats = [
  { value: "4+", label: "Years of Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Industrial Clients" },
  { value: "3", label: "Regional Offices" },
];

const whyChoose = [
  {
    icon: HiCheckCircle,
    text: "Proven expertise in filtration, fluid power, and industrial consumables",
  },
  {
    icon: HiGlobeAlt,
    text: "Strong regional presence with global sourcing capabilities",
  },
  {
    icon: HiWrenchScrewdriver,
    text: "OEM-compliant, application-engineered solutions",
  },
  {
    icon: HiChatBubbleLeftRight,
    text: "Responsive technical and commercial support",
  },
  {
    icon: HiBuildingOffice2,
    text: "Offices in Saudi Arabia, Dubai, and Qatar",
  },
  {
    icon: HiShieldCheck,
    text: "Full compliance with Saudi and international safety regulations",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Banner */}
        <section className="relative bg-[#0d1b2a] py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&h=800&fit=crop"
              alt="Industrial facility"
              fill
              className="object-cover opacity-15"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/60 via-[#0d1b2a]/80 to-[#0d1b2a]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
            <span className="inline-block rounded-full bg-orange-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
              Who We Are
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              About <span className="text-orange-400">Petra Arabia</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              Engineering reliability for Saudi Arabia&apos;s industrial
              backbone since day one.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              <Link
                href="/"
                className="transition-colors hover:text-orange-400"
              >
                Home
              </Link>
              <span className="mx-2">–</span>
              <span className="text-orange-400">About Us</span>
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Images */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/resolution.jpg"
                    alt="Industrial plant operations"
                    width={640}
                    height={480}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-4 w-40 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white sm:w-52 lg:-left-8">
                  <Image
                    src="/reader-1.jpg"
                    alt="Technician at work"
                    width={220}
                    height={280}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 left-28 flex flex-col items-start rounded-xl bg-orange-400 px-5 py-3 text-white shadow-lg sm:left-36">
                  <span className="text-3xl font-extrabold leading-none">
                    4+
                  </span>
                  <span className="text-sm font-medium leading-tight">
                    Year
                    <br />
                    Experience
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-12 lg:pt-0">
                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                  Engineering Reliability for Saudi{" "}
                  <span className="text-orange-400">
                    Arabia&apos;s Industrial Backbone
                  </span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600">
                  As the trusted engineering and supply partner for Saudi
                  Arabia&apos;s critical infrastructure, Petra Arabia is
                  dedicated to fortifying the nation&apos;s industrial backbone
                  with unwavering reliability. We specialize in delivering
                  precision-engineered filtration systems, fluid power solutions,
                  and mission-critical industrial components that ensure
                  operational continuity, safety, and peak performance across the
                  Kingdom&apos;s vital Oil &amp; Gas sector.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  By combining global technical expertise with local logistical
                  excellence, we don&apos;t just supply parts — we engineer
                  confidence, providing the durable, high-performance solutions
                  that keep Saudi Arabia&apos;s industries running smoothly,
                  efficiently, and without interruption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety First. Excellence Always. Guaranteed. */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Safety First. Excellence Always.{" "}
                <span className="text-orange-400">Guaranteed.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
                At Petra Arabia, these three principles form the foundation of
                everything we do — they are our promise, our standard, and our
                guarantee to you.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {/* Safety First */}
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:ring-1 hover:ring-orange-400/20">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10 transition-colors group-hover:bg-orange-400/20">
                  <HiShieldCheck className="h-7 w-7 text-orange-400" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Safety First.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  We begin every project, supply every component, and deliver
                  every service with an uncompromising commitment to safety. Our
                  products meet the highest international standards, and our
                  processes are designed to protect your personnel, your assets,
                  and your operations — because in the industrial and energy
                  sectors, safety isn&apos;t just a priority; it&apos;s a
                  prerequisite.
                </p>
              </div>

              {/* Excellence Always */}
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:ring-1 hover:ring-orange-400/20">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10 transition-colors group-hover:bg-orange-400/20">
                  <HiStar className="h-7 w-7 text-orange-400" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Excellence Always.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  From precision engineering to seamless supply chain execution,
                  we pursue excellence in every detail. Our team of certified
                  engineers and specialists applies deep technical knowledge and
                  meticulous attention to deliver solutions that not only meet
                  but exceed expectations. We don&apos;t just provide products —
                  we deliver performance, reliability, and peace of mind.
                </p>
              </div>

              {/* Guaranteed */}
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:ring-1 hover:ring-orange-400/20">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10 transition-colors group-hover:bg-orange-400/20">
                  <HiCheckCircle className="h-7 w-7 text-orange-400" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Guaranteed.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Our word is our bond. We stand behind every filtration system,
                  every fluid power component, and every industrial solution with
                  a guarantee of quality, durability, and support. When you
                  partner with Petra Arabia, you gain more than a supplier — you
                  gain a dependable ally committed to your operational success
                  and long-term growth in Saudi Arabia&apos;s evolving industrial
                  landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#0d1b2a] py-14">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="text-4xl font-extrabold text-orange-400 sm:text-5xl">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-sm font-medium text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Excellence – Core Principles */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Left – heading + stat */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
                  <HiUserGroup className="h-4 w-4" />
                  Expert Team
                </span>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-6xl font-extrabold leading-none text-[#0d1b2a] sm:text-7xl">
                    250
                  </span>
                  <span className="mb-1 text-3xl font-bold text-orange-400">+</span>
                </div>
                <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                  Engineering Excellence Built on{" "}
                  <span className="text-orange-400">Core Principles</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  At Petra Arabia, our approach is built on four fundamental
                  pillars that define how we serve Saudi Arabia&apos;s industrial
                  sector. These principles guide every project, partnership, and
                  solution we deliver — ensuring you receive not just products,
                  but performance, safety, and lasting value.
                </p>
              </div>

              {/* Right – 4 pillars grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d1b2a]">
                    <HiShieldCheck className="h-6 w-6 text-orange-400" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-gray-900">
                    Safety &amp; Compliance
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Guaranteed safety in every industrial installation and
                    component supply, meeting Saudi Aramco, SASO, and
                    international standards.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d1b2a]">
                    <HiCog6Tooth className="h-6 w-6 text-orange-400" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-gray-900">
                    System Reliability
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Stable, uninterrupted performance for critical operations in
                    oil &amp; gas, petrochemical, and manufacturing
                    environments.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d1b2a]">
                    <HiBeaker className="h-6 w-6 text-orange-400" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-gray-900">
                    Technical Solutions
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Expert engineering support for complex filtration, hydraulic,
                    pneumatic, and automation system challenges.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d1b2a]">
                    <HiBanknotes className="h-6 w-6 text-orange-400" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-gray-900">
                    Operational Savings
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Durable systems and optimized solutions that reduce
                    maintenance costs, energy consumption, and total ownership
                    expenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Vision */}
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm lg:p-10">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0d1b2a]">
                    <HiEye className="h-7 w-7 text-orange-400" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </h2>
                </div>
                <p className="mt-5 text-base leading-relaxed text-gray-600">
                  To be Saudi Arabia&apos;s most trusted engineering and
                  industrial solutions partner, driving reliability and
                  innovation across the nation&apos;s critical energy sector. We
                  aspire to set the benchmark for quality, technical excellence,
                  and customer-centric service in the region&apos;s industrial
                  supply chain.
                </p>
              </div>

              {/* Mission */}
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm lg:p-10">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0d1b2a]">
                    <HiLightBulb className="h-7 w-7 text-orange-400" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="mt-5 text-base leading-relaxed text-gray-600">
                  To empower our clients&apos; success through exceptional
                  engineering solutions, reliable industrial supply, and
                  responsive technical support. We are committed to delivering
                  OEM-compliant products, innovative technologies, and
                  sustainable practices that drive operational efficiency and
                  long-term value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Core <span className="text-orange-400">Values</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                The principles that guide everything we do — from sourcing
                products to delivering solutions on site.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:ring-1 hover:ring-orange-400/20"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10 transition-colors group-hover:bg-orange-400/20">
                    <val.icon className="h-7 w-7 text-orange-400" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Petra */}
        <section className="bg-[#0d1b2a] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=450&fit=crop"
                  alt="Industrial engineering team"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Why Choose{" "}
                  <span className="text-orange-400">Petra Arabia?</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-400">
                  A trusted industrial solutions partner dedicated to delivering
                  reliable, high-performance products and services to critical
                  industries.
                </p>
                <ul className="mt-8 space-y-4">
                  {whyChoose.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <item.icon className="mt-0.5 h-6 w-6 shrink-0 text-orange-400" />
                      <span className="text-base text-gray-300">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Partners */}
        <Partners />

        {/* CTA */}
        <section className="bg-[#0d1b2a] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s Work{" "}
              <span className="text-orange-400">Together</span>
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Partner with Petra Arabia for reliable industrial solutions
              tailored to your operational needs.
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
