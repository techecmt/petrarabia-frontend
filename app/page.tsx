import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { HiOutlineLightBulb, HiOutlineEye } from "react-icons/hi2";
import {
  HiChartBar,
  HiExclamationTriangle,
  HiBeaker,
  HiArrowTrendingUp,
  HiUsers,
  HiBuildingOffice2,
  HiCube,
  HiFaceSmile,
  HiShieldCheck,
  HiStar,
  HiHandThumbUp,
  HiCheckCircle,
  HiUserGroup,
  HiGlobeAlt,
  HiWrenchScrewdriver,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />

        {/* About Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
            {/* Left: Images */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                {/* IMAGE: Add "about-main.jpg" to public/ — the large industrial plant / worker silhouette photo */}
                <Image
                  src="/resolution.jpg"
                  alt="Industrial plant with worker silhouette"
                  width={640}
                  height={480}
                  className="h-auto w-full object-cover"
                />
              </div>
              {/* Overlapping small image */}
              <div className="absolute -bottom-8 -left-4 w-40 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white sm:w-52 lg:-left-8">
                {/* IMAGE: Add "about-small.jpg" to public/ — the technician with multimeter photo */}
                <Image
                  src="/reader-1.jpg"
                  alt="Technician with multimeter"
                  width={220}
                  height={280}
                  className="h-auto w-full object-cover"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-6 left-28 flex flex-col items-start rounded-xl bg-orange-400 px-5 py-3 text-white shadow-lg sm:left-36">
                <span className="text-3xl font-extrabold leading-none">4+</span>
                <span className="text-sm font-medium leading-tight">
                  Year
                  <br />
                  Experience
                </span>
              </div>
            </div>

            {/* Right: Text content */}
            <div className="pt-8 lg:pt-0">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Engineering Reliability for Saudi{" "}
                <span className="text-orange-400">
                  Arabia&apos;s Industrial Backbone
                </span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-gray-600">
                As the trusted engineering and supply partner for Saudi
                Arabia&apos;s critical infrastructure, Petra Arabia is dedicated
                to fortifying the nation&apos;s industrial backbone with
                unwavering reliability. We specialize in delivering
                precision-engineered filtration systems, fluid power solutions,
                and mission-critical industrial components that ensure
                operational continuity, safety, and peak performance across the
                Kingdom&apos;s vital Oil &amp; Gas sector. By combining global
                technical expertise with local logistical excellence, we
                don&apos;t just supply parts&mdash;we engineer confidence,
                providing the durable, high-performance solutions that keep Saudi
                Arabia&apos;s industries running smoothly, efficiently, and
                without interruption.
              </p>

              {/* Vision */}
              <div className="mt-8 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1a2d42] text-orange-400">
                  <HiOutlineEye className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">
                    To be Saudi Arabia&apos;s most trusted engineering and
                    industrial solutions partner, driving reliability and
                    innovation across the nation&apos;s critical energy sector.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="mt-6 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1a2d42] text-orange-400">
                  <HiOutlineLightBulb className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">
                    To empower our clients&apos; success through exceptional
                    engineering expertise and guaranteed supply chain
                    reliability, guided by our commitment: &quot;Let&apos;s Get
                    It Done.&quot;
                  </p>
                </div>
              </div>

              <Link
                href="/about"
                className="mt-8 inline-block rounded-md bg-orange-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#0d1b2a] py-14">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:grid-cols-4 lg:px-8">
            {[
              { value: "4", suffix: "+", label: "Active Customers", icon: HiUsers },
              { value: "50", suffix: "+", label: "OEM Partners", icon: HiBuildingOffice2 },
              { value: "2", suffix: "+", label: "SKUs in Stock", icon: HiCube },
              { value: "5,000", suffix: "+", label: "Value-Added Engineering Services", icon: HiFaceSmile },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <stat.icon className="mb-3 h-8 w-8 text-orange-400" />
                <p className="text-4xl font-extrabold text-white lg:text-5xl">
                  {stat.value}
                  <span className="text-orange-400">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Services Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Value-Added Engineering{" "}
                <span className="text-orange-400">Services</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                In addition to our core supply capabilities, Petra Arabia
                delivers specialized technical services designed to maximize your
                operational integrity and efficiency. Our expert team provides:
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: HiChartBar,
                  title: "IIoT Consultancy",
                  description:
                    "Implement Industrial Internet of Things technology for real-time monitoring, predictive maintenance, and operational intelligence across your facilities.",
                  image:
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
                },
                {
                  icon: HiExclamationTriangle,
                  title: "Helium Leak Testing",
                  description:
                    "Precision leak detection for critical equipment using helium mass spectrometry, ensuring system integrity and safety compliance.",
                  image:
                    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
                },
                {
                  icon: HiBeaker,
                  title: "Cold Testing",
                  description:
                    "Pre-commissioning verification of pipelines and equipment under operational conditions to validate performance and prevent startup failures.",
                  image:
                    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
                },
                {
                  icon: HiArrowTrendingUp,
                  title: "Steam Trap Performance Audits",
                  description:
                    "Systematic evaluation and optimization of steam trap systems to reduce energy waste, improve efficiency, and lower operational costs.",
                  image:
                    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group overflow-hidden rounded-2xl bg-gray-50 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-400 text-white">
                      <service.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Partners />

        {/* Stories of Trust Section */}
        <section className="relative overflow-hidden bg-[#0d1b2a] py-16 lg:py-24">
          <Image
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&q=80"
            alt="Industrial background"
            fill
            className="object-cover opacity-15"
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Stories of Trust
                <br />
                And <span className="text-orange-400">Excellence.</span>
              </h2>
            </div>

            <div className="mt-14 flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-20">
              {/* Customer Satisfaction */}
              <div className="flex flex-col items-center text-center">
                <div className="relative flex h-40 w-40 items-center justify-center">
                  <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 160 160">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="#1a2d42"
                      strokeWidth="8"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 70 * 0.98} ${2 * Math.PI * 70 * 0.02}`}
                    />
                  </svg>
                  <span className="text-4xl font-extrabold text-white">
                    98<span className="text-orange-400">%</span>
                  </span>
                </div>
                <p className="mt-4 text-lg font-bold text-white">
                  Customer Satisfaction
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Trusted by homes and businesses alike.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety. Excellence. Guaranteed. Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Safety First.
                <br />
                Excellence Always.{" "}
                <span className="text-orange-400">Guaranteed.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                At Petra Arabia, these three principles form the foundation of
                everything we do&mdash;they are our promise, our standard, and
                our guarantee to you.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: HiShieldCheck,
                  title: "Safety First.",
                  description:
                    "We begin every project, supply every component, and deliver every service with an uncompromising commitment to safety. Our products meet the highest international standards, and our processes are designed to protect your personnel, your assets, and your operations\u2014because in the industrial and energy sectors, safety isn\u2019t just a priority; it\u2019s a prerequisite.",
                },
                {
                  icon: HiStar,
                  title: "Excellence Always.",
                  description:
                    "From precision engineering to seamless supply chain execution, we pursue excellence in every detail. Our team of certified engineers and specialists applies deep technical knowledge and meticulous attention to deliver solutions that not only meet but exceed expectations. We don\u2019t just provide products\u2014we deliver performance, reliability, and peace of mind.",
                },
                {
                  icon: HiHandThumbUp,
                  title: "Guaranteed.",
                  description:
                    "Our word is our bond. We stand behind every filtration system, every fluid power component, and every industrial solution with a guarantee of quality, durability, and support. When you partner with Petra Arabia, you gain more than a supplier\u2014you gain a dependable ally committed to your operational success and long-term growth in Saudi Arabia\u2019s evolving industrial landscape.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#0d1b2a] text-orange-400">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Reliability Section */}
        <section className="relative overflow-hidden bg-[#0d1b2a] py-16 lg:py-24">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80"
            alt="Heavy industry background"
            fill
            className="object-cover opacity-10"
          />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-400 text-white">
                  <HiUserGroup className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Expert team</p>
                  <p className="text-4xl font-extrabold text-white">
                    250<span className="text-orange-400">+</span>
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Engineering Reliability for{" "}
                <span className="text-orange-400">Heavy Industries</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-gray-300">
                Petra Saudi Arabia is an industrial solutions partner specialized
                in high quality filtration and Hydraulic &amp; Pneumatic solution
                partner to oil &amp; gas, petrochemical, utilities,
                construction, mining, and heavy equipment operators across Saudi
                Arabia, UAE, and Qatar.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&q=80"
                alt="Industrial heavy machinery"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Petra Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=700&q=80"
                alt="Industrial engineering team"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Why Choose{" "}
                <span className="text-orange-400">PETRA</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-gray-600">
                PETRA is a trusted industrial solutions partner dedicated to
                delivering reliable, high-performance products and services to
                critical industries. With strong technical expertise, a solid
                regional presence, and access to globally recognized
                manufacturers, we provide engineered solutions that improve
                efficiency, reliability, and long-term operational value.
              </p>

              <ul className="mt-8 space-y-4">
                {[
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
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <item.icon className="mt-0.5 h-6 w-6 shrink-0 text-orange-400" />
                    <span className="text-base text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
