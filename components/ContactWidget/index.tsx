"use client";

import { useEffect, useRef, useState } from "react";

const ContactRow = ({
  email,
  copyEmail,
}: {
  email: string;
  copyEmail: () => void;
}) => (
  <div className="group mb-2 flex items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-[#131423] hover:bg-neutral-100 focus-within:outline focus-within:outline-2 focus-within:outline-primary-blue">
    <div className="flex gap-3">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-primary-blue"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 3 8 5 8-5"
        />
      </svg>
      <span className="truncate">{email}</span>
    </div>
    <button
      onClick={copyEmail}
      className="ml-2 rounded p-1 text-black hover:bg-primary-blue/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-blue"
      aria-label="Копирай имейл адреса"
      type="button"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <rect
          x="7"
          y="7"
          width="9"
          height="9"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="4"
          y="4"
          width="9"
          height="9"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.5"
        />
      </svg>
    </button>
  </div>
);
const ContactWidget = () => {
  const [open, setOpen] = useState(false);
  const [initialOpen, setInitialOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null); // reference to the popup
  const [copied, setCopied] = useState<string | null>(null);

  const close = () => {
    setOpen(false);
    setTimeout(() => setCopied(null), 300);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      // if click is NOT inside the panel → close
      if (panelRef.current && !panelRef.current?.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const email = "centralbalkan2015@gmail.com";
  const phoneNumber = "+359888366270";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied("Имейлът е копиран!");
    } catch {
      setCopied(null);
    }
  };

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied("Телефонът е копиран!");
    } catch {
      setCopied(null);
    }
  };

  return (
    <div className="fixed z-[9999] right-4 bottom-4 sm:right-6 sm:bottom-6 flex flex-col items-end">
      {/* Panel */}
      {initialOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby="cw-title"
          className={`absolute bottom-20 right-0 w-[92vw] max-w-[360px] rounded-2xl border border-neutral-200 bg-lightPrimary p-4 shadow-xl ring-1 ring-black/5 transition-opacity duration-300 ${
            open
              ? "opacity-100 animate-fade-in"
              : "opacity-0 animate-fade-out pointer-events-none"
          }`}
          style={{ animation: open ? "fadeIn 0.3s" : "fadeOut 0.3s" }}
        >
          <div className="mb-2 flex items-center justify-between gap-3">
            <strong
              id="cw-title"
              className="text-sm sm:text-base text-[#131423]"
            >
              Свържете се с нас
            </strong>
            <button
              onClick={close}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#131423]/70 hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-blue"
              aria-label="Затвори"
            >
              ✕
            </button>
          </div>

          <ContactRow email={email} copyEmail={copyEmail} />
          <ContactRow email={phoneNumber} copyEmail={copyPhoneNumber} />

          {copied && (
            <div className="mt-2 rounded bg-green-100 px-3 py-1 text-xs text-green-700 transition-opacity duration-300">
              {copied}
            </div>
          )}
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(16px);
          }
        }
      `}</style>

      <button
        onClick={() => {
          setOpen(true);
          setInitialOpen(true);
        }}
        aria-expanded={open}
        aria-controls="cw-panel"
        title="Контакти"
        className="grid h-14 w-14 place-items-center rounded-2xl bg-foreground text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue border-2 border-lightPrimary cursor-pointer"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path
            fill="currentColor"
            d="M21 8V6a2 2 0 0 0-2-2H5C3.9 4 3 4.9 3 6v2l9 5 9-5zm0 2-9 5-9-5v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8z"
          />
        </svg>
      </button>
    </div>
  );
};
export default ContactWidget;
