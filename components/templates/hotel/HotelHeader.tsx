"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Chambres & Suites", href: "#rooms" },
  { label: "Spa & Bien-être", href: "#amenities" },
  { label: "Restaurant", href: "#restaurant" },
  { label: "Offres", href: "#offres" },
];

export function HotelHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(249,249,249,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(119,90,25,0.12)" : "none",
      }}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span
            className="font-serif text-xl tracking-[0.12em]"
            style={{ color: scrolled ? "#775A19" : "#ffffff" }}
          >
            GRAND PALAIS
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.35em] font-light mt-0.5"
            style={{ color: scrolled ? "#775A19" : "rgba(255,255,255,0.7)", opacity: 0.8 }}
          >
            Hôtel & Spa de Luxe
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide transition-colors duration-300"
              style={{ color: scrolled ? "#444748" : "rgba(255,255,255,0.85)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#775A19")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled ? "#444748" : "rgba(255,255,255,0.85)")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#rooms"
            className="hidden sm:inline-flex items-center px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300"
            style={{
              backgroundColor: "#775A19",
              color: "#ffffff",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget as HTMLElement).style.backgroundColor = "#5C4313"
            }
            onMouseLeave={(e) =>
              (e.currentTarget as HTMLElement).style.backgroundColor = "#775A19"
            }
          >
            Réserver
          </a>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            style={{ color: scrolled ? "#1A1C1C" : "#ffffff" }}
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
            style={{ backgroundColor: "rgba(249,249,249,0.98)", borderTop: "1px solid rgba(119,90,25,0.12)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-wide"
                  style={{ color: "#444748" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#rooms"
                onClick={() => setOpen(false)}
                className="mt-2 text-center py-3 text-sm font-medium text-white"
                style={{ backgroundColor: "#775A19" }}
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
