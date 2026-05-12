"use client";

export function RecyclingFooter() {
  return (
    <footer style={{ backgroundColor: "#0D1F17", color: "#A8C4B4" }}>
      <div className="h-1" style={{ background: "linear-gradient(to right, #1A7A4F, #4CAF82, #1A7A4F)" }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1A7A4F" }}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Eco<span style={{ color: "#4CAF82" }}>Plast</span>
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed" style={{ opacity: 0.65 }}>
              Leader du recyclage plastique en France. Nous transformons les déchets en ressources pour un avenir durable.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { value: "48 000 t", label: "recyclées/an" },
                { value: "72%", label: "CO₂ économisé" },
                { value: "200+", label: "partenaires" },
                { value: "12 ans", label: "d'expertise" },
              ].map((stat) => (
                <div key={stat.label} className="px-3 py-2 rounded-lg" style={{ backgroundColor: "rgba(26,122,79,0.15)" }}>
                  <p className="text-sm font-bold" style={{ color: "#4CAF82" }}>{stat.value}</p>
                  <p className="text-[10px] font-light" style={{ opacity: 0.6 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-semibold mb-5" style={{ color: "#4CAF82" }}>
              Navigation
            </h3>
            <ul className="space-y-3 text-sm font-light">
              {["Notre Processus", "Matériaux Traités", "Impact Environnemental", "Galerie", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors duration-200"
                    style={{ opacity: 0.65 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "1";
                      (e.currentTarget as HTMLElement).style.color = "#4CAF82";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "0.65";
                      (e.currentTarget as HTMLElement).style.color = "#A8C4B4";
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-semibold mb-5" style={{ color: "#4CAF82" }}>
              Certifications
            </h3>
            <ul className="space-y-3 text-sm font-light">
              {["ISO 14001", "ISO 9001", "Certifié Triman", "Label RecyPlast", "Agréé CITEO"].map((item) => (
                <li key={item} className="flex items-center gap-2" style={{ opacity: 0.65 }}>
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#4CAF82" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-semibold mb-5" style={{ color: "#4CAF82" }}>
              Contact
            </h3>
            <div className="space-y-4 text-sm font-light" style={{ opacity: 0.65 }}>
              <p>Zone Industrielle Nord<br />69100 Villeurbanne, France</p>
              <p>+33 4 72 00 00 00</p>
              <p>contact@ecoplast.fr</p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#1A7A4F" }}
            >
              Devenir Partenaire
            </a>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light"
          style={{ borderTop: "1px solid rgba(76,175,130,0.15)", opacity: 0.5 }}
        >
          <p>© {new Date().getFullYear()} EcoPlast. Tous droits réservés. — Certifié ISO 14001</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Mentions légales</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Politique RSE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
