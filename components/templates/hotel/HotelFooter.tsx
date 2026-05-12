"use client";

export function HotelFooter() {
  return (
    <footer style={{ backgroundColor: "#1A1C1C", color: "#C4C7C7" }}>
      <div className="h-1" style={{ background: "linear-gradient(to right, #775A19, #C9A84C, #775A19)" }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-serif text-xl tracking-[0.12em] text-white mb-1">GRAND PALAIS</p>
            <p className="text-[10px] uppercase tracking-[0.35em] font-light mb-5" style={{ color: "#C9A84C", opacity: 0.8 }}>
              Hôtel & Spa de Luxe
            </p>
            <p className="text-sm leading-relaxed font-light" style={{ opacity: 0.65 }}>
              Un refuge d&apos;excellence au cœur de la ville. Chaque séjour est une expérience inoubliable.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm">
              <span style={{ color: "#C9A84C" }}>★★★★★</span>
              <span className="text-xs font-light" style={{ opacity: 0.6 }}>Hôtel 5 étoiles</span>
            </div>
          </div>

          {/* Hébergement */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-semibold mb-6" style={{ color: "#C9A84C" }}>
              Hébergement
            </h3>
            <ul className="space-y-3 text-sm font-light">
              {["Chambres Classiques", "Suites Prestige", "Suite Royale", "Chambres Familiales", "Offres Spéciales"].map((item) => (
                <li key={item}>
                  <a
                    href="#rooms"
                    className="transition-colors duration-200"
                    style={{ opacity: 0.65 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "1";
                      (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "0.65";
                      (e.currentTarget as HTMLElement).style.color = "#C4C7C7";
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-semibold mb-6" style={{ color: "#C9A84C" }}>
              Services
            </h3>
            <ul className="space-y-3 text-sm font-light">
              {["Spa & Bien-être", "Restaurant Gastronomique", "Piscine Intérieure", "Salle de Fitness", "Conciergerie"].map((item) => (
                <li key={item}>
                  <a
                    href="#amenities"
                    className="transition-colors duration-200"
                    style={{ opacity: 0.65 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "1";
                      (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "0.65";
                      (e.currentTarget as HTMLElement).style.color = "#C4C7C7";
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-semibold mb-6" style={{ color: "#C9A84C" }}>
              Contact
            </h3>
            <div className="space-y-4 text-sm font-light" style={{ opacity: 0.65 }}>
              <p>Place Vendôme<br />75001 Paris, France</p>
              <p>+33 1 40 20 80 80</p>
              <p>reservations@grandpalais.fr</p>
            </div>
            <a
              href="#rooms"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#775A19" }}
            >
              Réserver maintenant
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light"
          style={{ borderTop: "1px solid rgba(201,168,76,0.15)", opacity: 0.5 }}>
          <p>© {new Date().getFullYear()} Grand Palais Hôtel & Spa. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Mentions légales</a>
            <a href="#" className="hover:opacity-100 transition-opacity">CGU</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
