"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Suites", href: "#suites" },
  { label: "Expériences", href: "#experiences" },
  { label: "Galerie", href: "#gallery" },
  { label: "Réservations", href: "#reservations" },
];

export function RiadHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(28,18,8,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      {/* Moroccan geometric top stripe */}
      <div
        className="h-1"
        style={{ background: "linear-gradient(to right, #C9A84C, #8B1A1A, #C9A84C)" }}
      />

      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg tracking-[0.1em]" style={{ color: "#F5ECD7" }}>
              Riad Dar
            </span>
            <span className="font-serif text-lg italic" style={{ color: "#C9A84C" }}>
              Al Anouar
            </span>
          </div>
          <span
            className="text-[10px] uppercase tracking-[0.5em] font-light mt-0.5"
            style={{ color: "#C9A84C", opacity: 0.8 }}
          >
            مراكش · Marrakech
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.18em] font-light transition-colors duration-300"
              style={{ color: "rgba(245,236,215,0.75)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,236,215,0.75)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#reservations"
            className="hidden sm:inline-flex items-center px-6 py-2.5 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 border"
            style={{ borderColor: "#C9A84C", color: "#C9A84C" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#C9A84C";
              (e.currentTarget as HTMLElement).style.color = "#1C1208";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#C9A84C";
            }}
          >
            Réserver
          </a>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            style={{ color: "#F5ECD7" }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
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
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "rgba(28,18,8,0.98)", borderTop: "1px solid rgba(201,168,76,0.2)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.18em] font-light"
                  style={{ color: "rgba(245,236,215,0.8)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#reservations"
                onClick={() => setOpen(false)}
                className="mt-2 text-center py-3 text-sm uppercase tracking-[0.2em] font-medium border"
                style={{ borderColor: "#C9A84C", color: "#C9A84C" }}
              >
                Réserver votre Séjour
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
