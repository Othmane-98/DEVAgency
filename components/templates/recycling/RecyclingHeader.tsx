"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Processus", href: "#process" },
  { label: "Matériaux", href: "#materials" },
  { label: "Impact", href: "#impact" },
  { label: "Galerie", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function RecyclingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-400"
      style={{
        backgroundColor: scrolled ? "rgba(248,250,248,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(13,31,23,0.1)" : "none",
      }}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "#1A7A4F" }}
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
          </div>
          <div>
            <span
              className="text-lg font-bold tracking-tight leading-none"
              style={{ color: scrolled ? "#0D1F17" : "#0D1F17" }}
            >
              Eco
              <span style={{ color: "#1A7A4F" }}>Plast</span>
            </span>
            <p className="text-[10px] font-light tracking-wide" style={{ color: "#3A5C46", opacity: 0.8 }}>
              Recyclage & Économie Circulaire
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "#3A5C46" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1A7A4F")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3A5C46")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full text-white transition-all duration-200"
            style={{ backgroundColor: "#1A7A4F" }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = "#145F3D"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = "#1A7A4F"}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
            </svg>
            Devenir Partenaire
          </a>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            style={{ color: "#0D1F17" }}
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
            style={{ backgroundColor: "rgba(248,250,248,0.98)", borderTop: "1px solid rgba(26,122,79,0.15)" }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium"
                  style={{ color: "#0D1F17" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center py-3 text-sm font-semibold text-white rounded-full"
                style={{ backgroundColor: "#1A7A4F" }}
              >
                Devenir Partenaire
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
