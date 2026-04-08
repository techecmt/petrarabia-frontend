"use client";

import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import ContactForm from "./ContactForm";

export default function RFQFloating() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating badge */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Request for Quote"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-orange-500"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>
        Request a Quote
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
            >
              <HiXMark className="h-5 w-5" />
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}
