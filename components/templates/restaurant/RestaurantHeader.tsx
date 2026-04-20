"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Galerie", href: "#gallery" },
  { label: "Réservations", href: "#reservations" },
  { label: "Notre Histoire", href: "#histoire" },
];

export function RestaurantHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(18,18,18,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(197,160,89,0.2)" : "none",
      }}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span
            className="font-serif text-xl tracking-[0.15em]"
            style={{ color: "#C5A059" }}
          >
            HERITAGE
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.4em] font-light"
            style={{ color: "#E5D1B0", opacity: 0.7 }}
          >
            Restaurant Gastronomique
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.2em] font-light transition-colors duration-300"
              style={{ color: "#E5D1B0" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#C5A059")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#E5D1B0")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#reservations"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-sm uppercase tracking-[0.2em] font-medium border transition-all duration-300"
            style={{
              borderColor: "#C5A059",
              color: "#C5A059",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#C5A059";
              (e.currentTarget as HTMLElement).style.color = "#121212";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#C5A059";
            }}
          >
            Réserver
          </a>

          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            style={{ color: "#E5D1B0" }}
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
            style={{ backgroundColor: "rgba(18,18,18,0.98)", borderTop: "1px solid rgba(197,160,89,0.2)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] font-light"
                  style={{ color: "#E5D1B0" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#reservations"
                onClick={() => setOpen(false)}
                className="mt-2 text-center py-3 text-sm uppercase tracking-[0.2em] font-medium border"
                style={{ borderColor: "#C5A059", color: "#C5A059" }}
              >
                Réserver une Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
