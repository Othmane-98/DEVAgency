"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { navItems, serviceNavLinks, siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={resolvedTheme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
            alt={siteConfig.name}
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-lg font-semibold text-foreground">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              onFocus={openServices}
            >
              Services
              <svg className="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {servicesOpen ? (
              <div className="absolute left-0 top-full z-50 pt-2">
                <div className="grid min-w-[520px] grid-cols-3 gap-0 overflow-hidden rounded-xl border border-border bg-card p-2 shadow-xl">
                  {serviceNavLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="rounded-lg p-4 transition-colors hover:bg-accent"
                      onClick={() => setServicesOpen(false)}
                    >
                      <p className="font-semibold text-foreground">{s.label}</p>
                      <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent sm:inline-flex"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Commencer
          </Link>
          <button
            type="button"
            className="rounded-lg border border-border p-2 lg:hidden transition-colors hover:bg-accent"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <svg className="h-5 w-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="px-4 py-4 pb-safe sm:pb-4">
              <div className="flex flex-col gap-1">
                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Services
                </p>
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Toutes les solutions
                </Link>
                {serviceNavLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                ))}
                
                <p className="px-3 py-2 mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Entreprise
                </p>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="mt-4 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="rounded-lg border border-border bg-card px-4 py-3 text-center text-sm font-medium text-foreground hover:bg-accent transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Commencer
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
