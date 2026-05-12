"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Nos Médecins", href: "#doctors" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function MedicalHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div
        className="hidden sm:flex items-center justify-between px-6 lg:px-10 py-2 text-xs font-medium"
        style={{ backgroundColor: "#00687B", color: "rgba(255,255,255,0.9)" }}
      >
        <div className="flex items-center gap-6">
          <span>🕐 Lun–Sam 8h–19h</span>
          <span>📞 +33 1 45 67 89 00</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            Urgences 24h/7j
          </span>
        </div>
      </div>

      <header
        className="sticky top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(246,250,251,0.97)" : "#ffffff",
          boxShadow: scrolled ? "0 1px 12px rgba(0,104,123,0.1)" : "0 1px 0 rgba(0,104,123,0.08)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-6 lg:px-10 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#00687B" }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l7.5-7.5 7.5 7.5M4.5 19.5l7.5-7.5 7.5 7.5" />
              </svg>
            </div>
            <div>
              <p className="text-base font-semibold leading-none" style={{ color: "#2A3436" }}>
                Clinique Saint-Luc
              </p>
              <p className="text-[10px] font-light tracking-wide mt-0.5" style={{ color: "#566163" }}>
                Centre de Santé Avancé
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#566163" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00687B")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#566163")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+33145678900"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: "#00687B" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Urgences
            </a>
            <a
              href="#doctors"
              className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-xl text-white transition-all duration-200"
              style={{ backgroundColor: "#00687B" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = "#005A6A"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = "#00687B"}
            >
              Prendre RDV
            </a>
            <button
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              style={{ color: "#2A3436" }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden"
              style={{ backgroundColor: "#F6FAFB", borderTop: "1px solid rgba(0,104,123,0.1)" }}
            >
              <div className="px-6 py-5 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium py-1"
                    style={{ color: "#2A3436" }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#doctors"
                  onClick={() => setOpen(false)}
                  className="mt-2 text-center py-3 text-sm font-semibold text-white rounded-xl"
                  style={{ backgroundColor: "#00687B" }}
                >
                  Prendre Rendez-vous
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
