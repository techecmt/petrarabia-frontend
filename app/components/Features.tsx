import { HiShieldCheck } from "react-icons/hi2";
import { GoStarFill } from "react-icons/go";
import { HiPresentationChartBar } from "react-icons/hi2";
import { HiBolt } from "react-icons/hi2";

const features = [
  {
    icon: HiShieldCheck,
    title: "Safety & Compliance",
    description:
      "Guaranteed safety in every industrial installation and component supply, meeting Saudi Aramco, SASO, and international standards.",
  },
  {
    icon: GoStarFill,
    title: "System Reliability",
    description:
      "Stable, uninterrupted performance for critical operations in oil & gas, petrochemical, and manufacturing environments",
  },
  {
    icon: HiPresentationChartBar,
    title: "Technical Solutions",
    description:
      "Expert engineering support for complex filtration, hydraulic, pneumatic, and automation system challenges.",
  },
  {
    icon: HiBolt,
    title: "Operational Savings",
    description:
      "Durable systems and optimized solutions that reduce maintenance costs, energy consumption, and total ownership expenses.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#0d1b2a] py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center rounded-xl bg-[#101d2e] px-6 py-10 text-center ring-1 ring-white/5"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#7a6232]/50 ring-2 ring-[#b8923a]/60">
              <feature.icon className="h-7 w-7 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-orange-400">{feature.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
