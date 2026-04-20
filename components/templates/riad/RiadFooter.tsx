"use client";

export function RiadFooter() {
  return (
    <footer style={{ backgroundColor: "#130D05", color: "#D4C5A0" }}>
      {/* Geometric stripe */}
      <div className="h-1" style={{ background: "linear-gradient(to right, #C9A84C, #8B1A1A, #C9A84C)" }} />

      {/* Moroccan ornamental divider */}
      <div className="flex items-center justify-center py-8">
        <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3))" }} />
        <svg className="mx-6 w-8 h-8 flex-shrink-0" viewBox="0 0 40 40" fill="none">
          <path d="M20 2L22.9 12.1H33.5L24.8 18.4L27.6 28.5L20 22.2L12.4 28.5L15.2 18.4L6.5 12.1H17.1L20 2Z" fill="#C9A84C" fillOpacity="0.6" />
        </svg>
        <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.3))" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-16">
        {/* Top section */}
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.5em] mb-3" style={{ color: "#C9A84C", opacity: 0.8 }}>
            مراكش · Marrakech
          </p>
          <p className="font-serif text-3xl md:text-4xl" style={{ color: "#F5ECD7" }}>
            Riad Dar{" "}
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Al Anouar</span>
          </p>
          <p className="text-sm font-light mt-3 max-w-md mx-auto" style={{ opacity: 0.55 }}>
            Une maison d&apos;hôtes d&apos;exception au cœur de la médina, où l&apos;art de vivre marocain rencontre le luxe contemporain.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3 mb-12">
          {/* Navigation */}
          <div className="text-center lg:text-left">
            <h3 className="text-xs uppercase tracking-[0.35em] font-semibold mb-5" style={{ color: "#C9A84C" }}>
              Explorer
            </h3>
            <ul className="space-y-3 text-sm font-light">
              {["Nos Suites", "Expériences & Hammam", "Piscine & Terrasse", "Galerie Photos", "Réservations"].map((item) => (
                <li key={item} className="text-center lg:text-left">
                  <a
                    href="#"
                    className="transition-colors duration-200"
                    style={{ opacity: 0.6 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "1";
                      (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "0.6";
                      (e.currentTarget as HTMLElement).style.color = "#D4C5A0";
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-xs uppercase tracking-[0.35em] font-semibold mb-5" style={{ color: "#C9A84C" }}>
              Contact
            </h3>
            <div className="space-y-4 text-sm font-light" style={{ opacity: 0.6 }}>
              <p>Derb Sidi Ali Tair, Médina<br />40000 Marrakech, Maroc</p>
              <p>+212 5 24 00 00 00</p>
              <p>contact@riad-al-anouar.ma</p>
            </div>
            <a
              href="#reservations"
              className="mt-6 inline-flex items-center px-6 py-2.5 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 border"
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
          </div>

          {/* Practical info */}
          <div className="text-center lg:text-right">
            <h3 className="text-xs uppercase tracking-[0.35em] font-semibold mb-5" style={{ color: "#C9A84C" }}>
              Informations
            </h3>
            <div className="space-y-3 text-sm font-light" style={{ opacity: 0.6 }}>
              <p>Check-in : 14h00<br />Check-out : 12h00</p>
              <p>8 suites disponibles</p>
              <p>Transfert aéroport disponible</p>
              <p>Petit-déjeuner inclus</p>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-4 mb-10">
          {["Instagram", "Facebook", "TripAdvisor"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="px-4 py-2 text-xs uppercase tracking-[0.2em] border transition-all duration-300"
              style={{ borderColor: "rgba(201,168,76,0.3)", color: "rgba(212,197,160,0.7)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#C9A84C";
                (e.currentTarget as HTMLElement).style.color = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                (e.currentTarget as HTMLElement).style.color = "rgba(212,197,160,0.7)";
              }}
            >
              {platform}
            </a>
          ))}
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light"
          style={{ borderTop: "1px solid rgba(201,168,76,0.12)", opacity: 0.45 }}
        >
          <p>© {new Date().getFullYear()} Riad Dar Al Anouar. Tous droits réservés.</p>
          <p>Mentions légales · Confidentialité</p>
        </div>
      </div>
    </footer>
  );
}
