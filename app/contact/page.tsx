import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  HiCheckCircle,
  HiGlobeAlt,
  HiWrenchScrewdriver,
  HiChatBubbleLeftRight,
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiClock,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Contact Us - Petra Arabia",
  description:
    "Get in touch with Petra Arabia. Find our offices in Saudi Arabia, Dubai, and Qatar.",
};

const offices = [
  {
    city: "Saudi Address",
    address:
      "Khobar Business Gate 8668+XH4, King Faisal Ibn Abd Al Aziz, Al Bandariyah, Al Khobar 34423, Saudi Arabia",
    phone: "+971 04 2619008",
    email: "info@superiorauditandtax.com",
    hours: "Sun - Thu: 8:00 AM - 6:00 PM",
  },
  {
    city: "Qatar Address",
    address:
      "Office # 2, 5th Floor, Transworld Tower 2, Street # 840, Zone #18 Building # 76, Doha",
    phone: "+974 5200 0821",
    email: "hello@skylinegroupqatar.com",
    hours: "Sun - Thu: 8:00 AM - 6:00 PM",
  },
  {
    city: "Dubai Address",
    address:
      "Office # 306, 204th Road, Al Nahda 2, Salim Ali Al Mazroua Building, Dubai, UAE",
    phone: "+971 04 2619008",
    email: "info@superiorauditandtax.com",
    hours: "Sun - Thu: 8:00 AM - 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Banner */}
        <section className="bg-[#0d1b2a] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Contact
            </h1>
            <p className="mt-3 text-sm text-gray-400">
              <Link href="/" className="transition-colors hover:text-orange-400">
                Home
              </Link>
              <span className="mx-2">–</span>
              <span className="text-orange-400">Contact</span>
            </p>
          </div>
        </section>

        {/* Why Choose Petra + Contact Form */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
            {/* Left: Why Choose */}
            <div>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Why Choose <span className="text-orange-400">PETRA</span>
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

            {/* Right: Contact Form */}
            <div className="rounded-2xl bg-gray-50 p-8 shadow-sm lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900">
                Send Us a Message
              </h3>
              <form className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-orange-400 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Where to Find Us 
        <section className="bg-[#0d1b2a] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Where to <span className="text-orange-400">Find Us</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {offices.map((office, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-[#101d2e] p-8 ring-1 ring-white/5"
                >
                  <h3 className="text-xl font-bold text-orange-400">
                    {office.city}
                  </h3>

                  <ul className="mt-5 space-y-4">
                    <li className="flex gap-3 text-sm text-gray-300">
                      <HiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                      <span>{office.address}</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <HiPhone className="h-5 w-5 shrink-0 text-orange-400" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="transition-colors hover:text-orange-400"
                      >
                        {office.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <HiEnvelope className="h-5 w-5 shrink-0 text-orange-400" />
                      <a
                        href={`mailto:${office.email}`}
                        className="transition-colors hover:text-orange-400"
                      >
                        {office.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <HiClock className="h-5 w-5 shrink-0 text-orange-400" />
                      <span>{office.hours}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}