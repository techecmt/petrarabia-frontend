import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center">
      {/* Background image */}
      <Image
        src="/abus-1.jpg"
        alt="Industrial plant background"
        fill
        priority
        className="object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d1b2a]/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Your Critical Parts.
          <br />
          <span className="text-orange-400">On Time. Every Time.</span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg">
          Specialized Filters, Fluid Power Systems, and &amp; Industrial Components
        </p>

        <ul className="mt-4 space-y-1 text-sm text-gray-200 sm:text-base">
          <li className="flex items-center gap-2">
            <span className="text-orange-400">•</span> Filtration Solutions
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-400">•</span> Hydraulic/Pneumatic Systems
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-400">•</span> Safety &amp; Instrumentation
          </li>
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Explore Our Solutions
            <span aria-hidden="true">→</span>
          </Link>

          <a href="tel:+966546447060" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </span>
            <span className="text-left text-sm leading-tight">
              <span className="block text-xs text-orange-400">Call Us</span>
              <span className="font-semibold text-white">+966 54 644 7060</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
