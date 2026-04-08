"use client";

import { useState, type FormEvent } from "react";

const industries = [
  "Oil & Gas",
  "Petrochemical",
  "Power Generation",
  "Water & Wastewater",
  "Manufacturing",
  "Mining & Minerals",
  "Marine & Offshore",
  "Construction",
  "Other",
];

const inquiryTypes = [
  "Product Inquiry",
  "Request for Quotation (RFQ)",
  "Technical Support",
  "Partnership / Distribution",
  "General Inquiry",
];

const countries = [
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Bahrain",
  "Kuwait",
  "Oman",
  "Egypt",
  "Jordan",
  "Iraq",
  "India",
  "Pakistan",
  "Other",
];

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-400";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState("");
  const [industry, setIndustry] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to an API route / email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-50 p-10 text-center shadow-sm lg:p-14">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-7 w-7 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="mt-5 text-2xl font-bold text-gray-900">
          Thank You for Reaching Out
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Your inquiry has been received. Our team will review your request and
          get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-gray-50 p-8 shadow-sm lg:p-10">
      <h3 className="text-2xl font-bold text-gray-900">
        Send Us an Inquiry
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Fill out the form below and our team will respond promptly.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {/* Name row */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input id="firstName" name="firstName" type="text" required placeholder="John" className={inputClass} />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input id="lastName" name="lastName" type="text" required placeholder="Doe" className={inputClass} />
          </div>
        </div>

        {/* Company & Job Title */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="company" className="mb-1 block text-sm font-medium text-gray-700">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input id="company" name="company" type="text" required placeholder="Acme Industries" className={inputClass} />
          </div>
          <div>
            <label htmlFor="jobTitle" className="mb-1 block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input id="jobTitle" name="jobTitle" type="text" placeholder="Procurement Manager" className={inputClass} />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
              Business Email <span className="text-red-500">*</span>
            </label>
            <input id="email" name="email" type="email" required placeholder="john@company.com" className={inputClass} />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input id="phone" name="phone" type="tel" placeholder="+966 5x xxx xxxx" className={inputClass} />
          </div>
        </div>

        {/* Country & Industry */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="country" className="mb-1 block text-sm font-medium text-gray-700">
              Country <span className="text-red-500">*</span>
            </label>
            <select id="country" name="country" required={country !== "Other"} value={country} onChange={(e) => setCountry(e.target.value)} className={inputClass}>
              <option value="">Select country</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {country === "Other" && (
              <input
                id="countryOther"
                name="countryOther"
                type="text"
                required
                placeholder="Enter your country"
                className={`${inputClass} mt-2`}
              />
            )}
          </div>
          <div>
            <label htmlFor="industry" className="mb-1 block text-sm font-medium text-gray-700">
              Industry
            </label>
            <select id="industry" name="industry" value={industry} onChange={(e) => setIndustry(e.target.value)} className={inputClass}>
              <option value="">Select industry</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
            {industry === "Other" && (
              <input
                id="industryOther"
                name="industryOther"
                type="text"
                required
                placeholder="Enter your industry"
                className={`${inputClass} mt-2`}
              />
            )}
          </div>
        </div>

        {/* Inquiry Type */}
        <div>
          <label htmlFor="inquiryType" className="mb-1 block text-sm font-medium text-gray-700">
            Inquiry Type <span className="text-red-500">*</span>
          </label>
          <select id="inquiryType" name="inquiryType" required className={inputClass}>
            <option value="">Select inquiry type</option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Please describe your requirements, including quantities, specifications, or any relevant details..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-orange-400 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}
