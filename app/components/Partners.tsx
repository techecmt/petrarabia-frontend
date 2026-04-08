import Image from "next/image";

const partners = [
  { src: "/parker-logo.png", alt: "Parker" },
  { src: "/Donaldson-logo.png", alt: "Donaldson" },
];

export default function Partners() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our <span className="text-orange-400">Partners</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            We partner with globally recognized manufacturers to deliver
            best-in-class solutions.
          </p>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-12 opacity-70">
          {partners.map((partner) => (
            <Image
              key={partner.alt}
              src={partner.src}
              alt={partner.alt}
              width={140}
              height={50}
              className="h-10 w-auto object-contain"
              style={{ width: "auto", height: "auto" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
