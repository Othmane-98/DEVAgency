"use client";

export function MedicalFooter() {
  return (
    <footer style={{ backgroundColor: "#2A3436", color: "#C4CBCC" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#00687B" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l7.5-7.5 7.5 7.5M4.5 19.5l7.5-7.5 7.5 7.5" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-none">Clinique Saint-Luc</p>
                <p className="text-[10px] font-light mt-0.5" style={{ opacity: 0.6 }}>Centre de Santé Avancé</p>
              </div>
            </div>
            <p className="text-sm font-light leading-relaxed" style={{ opacity: 0.65 }}>
              Des soins d&apos;excellence pour votre santé et votre bien-être. Une équipe de professionnels à votre service.
            </p>
            <div className="mt-6 flex items-center gap-2 px-4 py-3 rounded-xl" style={{ backgroundColor: "rgba(0,104,123,0.2)" }}>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Urgences 24h/7j</p>
                <p className="text-xs font-light" style={{ opacity: 0.7 }}>+33 1 45 67 89 00</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-semibold mb-5" style={{ color: "#98E6FB" }}>
              Services
            </h3>
            <ul className="space-y-3 text-sm font-light">
              {["Médecine Générale", "Cardiologie", "Pédiatrie", "Dermatologie", "Radiologie", "Chirurgie"].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="transition-colors duration-200"
                    style={{ opacity: 0.65 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "1";
                      (e.currentTarget as HTMLElement).style.color = "#98E6FB";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "0.65";
                      (e.currentTarget as HTMLElement).style.color = "#C4CBCC";
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Médecins */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-semibold mb-5" style={{ color: "#98E6FB" }}>
              Notre Équipe
            </h3>
            <ul className="space-y-3 text-sm font-light">
              {["Pr. Isabelle Fontaine", "Dr. Karim El Mansouri", "Dr. Sophie Marchand", "Dr. Antoine Lefebvre", "Toute l'équipe →"].map((item) => (
                <li key={item}>
                  <a
                    href="#doctors"
                    className="transition-colors duration-200"
                    style={{ opacity: 0.65 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "1";
                      (e.currentTarget as HTMLElement).style.color = "#98E6FB";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "0.65";
                      (e.currentTarget as HTMLElement).style.color = "#C4CBCC";
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
            <h3 className="text-xs uppercase tracking-[0.3em] font-semibold mb-5" style={{ color: "#98E6FB" }}>
              Informations
            </h3>
            <div className="space-y-4 text-sm font-light" style={{ opacity: 0.65 }}>
              <p>15 Avenue de la Santé<br />75014 Paris, France</p>
              <p>reception@sainteluc-clinique.fr</p>
              <div className="space-y-1">
                <p className="font-medium" style={{ opacity: 0.9 }}>Horaires d&apos;ouverture</p>
                <p>Lun – Ven : 8h00 – 19h00</p>
                <p>Samedi : 9h00 – 17h00</p>
              </div>
            </div>
            <a
              href="#doctors"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#00687B" }}
            >
              Prendre RDV en ligne
            </a>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light"
          style={{ borderTop: "1px solid rgba(152,230,251,0.12)", opacity: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Clinique Saint-Luc. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Mentions légales</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Confidentialité RGPD</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Accessibilité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
