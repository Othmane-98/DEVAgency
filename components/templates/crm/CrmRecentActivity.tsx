"use client";

import { CheckCircle2, Clock, FileText, Phone, Mail, Package, AlertCircle } from "lucide-react";

const activities = [
  {
    icon: CheckCircle2,
    color: "text-emerald-400 bg-emerald-400/10",
    title: "Deal signé — CTM Maroc",
    desc: "Contrat cadre annuel 580 000 MAD validé",
    time: "Il y a 12 min",
  },
  {
    icon: Package,
    color: "text-blue-400 bg-blue-400/10",
    title: "Commande expédiée #CMD-4812",
    desc: "Filtres moteur × 500 — Garage Al Amal, Casablanca",
    time: "Il y a 48 min",
  },
  {
    icon: Mail,
    color: "text-violet-400 bg-violet-400/10",
    title: "Devis envoyé — Transport Souss",
    desc: "Batteries 100Ah × 80 — 96 000 MAD",
    time: "Il y a 2h",
  },
  {
    icon: Phone,
    color: "text-amber-400 bg-amber-400/10",
    title: "Appel de relance — Marjane Fleet",
    desc: "Rappel programmé par K. Alami après devis",
    time: "Il y a 3h",
  },
  {
    icon: AlertCircle,
    color: "text-red-400 bg-red-400/10",
    title: "Commande en retard #CMD-4798",
    desc: "Amortisseurs Monroe — livraison dépassée de 2j",
    time: "Il y a 4h",
  },
  {
    icon: FileText,
    color: "text-cyan-400 bg-cyan-400/10",
    title: "Nouveau lead qualifié — Auto Center Fès",
    desc: "Intérêt plaquettes Brembo — 28 500 MAD",
    time: "Il y a 5h",
  },
  {
    icon: Clock,
    color: "text-white/30 bg-white/5",
    title: "Rappel — Oncf Trains",
    desc: "Suivi contrat maintenance — relance programmée",
    time: "Hier 16h00",
  },
];

export function CrmRecentActivity() {
  return (
    <div className="bg-[#161B27] border border-white/8 rounded-xl p-5 flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-white font-semibold text-sm">Activité récente</h2>
          <p className="text-white/40 text-xs mt-0.5">Fil d&apos;actualité de l&apos;équipe commerciale</p>
        </div>
        <span className="text-[10px] text-white/30 bg-white/5 border border-white/10 rounded-full px-2 py-1">
          Aujourd&apos;hui
        </span>
      </div>

      <div className="space-y-0.5 flex-1">
        {activities.map((act, i) => {
          const Icon = act.icon;
          return (
            <div key={i} className="flex gap-3 py-2.5 hover:bg-white/3 rounded-lg px-2 transition-colors cursor-pointer group">
              <div className={`h-7 w-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${act.color}`}>
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-white/75 group-hover:text-white/90 transition-colors truncate">
                  {act.title}
                </div>
                <div className="text-[10px] text-white/35 truncate mt-0.5">{act.desc}</div>
              </div>
              <div className="text-[10px] text-white/25 flex-shrink-0 mt-0.5 whitespace-nowrap">{act.time}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
