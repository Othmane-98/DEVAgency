"use client";

import { MoreHorizontal, Plus } from "lucide-react";

const stages = [
  {
    name: "Nouveau lead",
    color: "bg-slate-500",
    count: 24,
    value: "480 000 MAD",
    deals: [
      { name: "Garage Al Amal", part: "Filtres moteur × 500", amount: "45 000 MAD", priority: "high", avatar: "GA" },
      { name: "Auto Center Fès", part: "Plaquettes Brembo × 200", amount: "28 500 MAD", priority: "medium", avatar: "AC" },
      { name: "Mécano Express", part: "Courroies distribution × 150", amount: "18 000 MAD", priority: "low", avatar: "ME" },
    ],
  },
  {
    name: "Qualification",
    color: "bg-blue-500",
    count: 18,
    value: "720 000 MAD",
    deals: [
      { name: "Flotte OCP Khouribga", part: "Freins + Amortisseurs", amount: "185 000 MAD", priority: "high", avatar: "OC" },
      { name: "Transport Souss", part: "Batteries 100Ah × 80", amount: "96 000 MAD", priority: "high", avatar: "TS" },
      { name: "Garage Atlas", part: "Pneus Michelin × 120", amount: "54 000 MAD", priority: "medium", avatar: "GA" },
    ],
  },
  {
    name: "Devis envoyé",
    color: "bg-amber-500",
    count: 12,
    value: "1 200 000 MAD",
    deals: [
      { name: "CTM Maroc", part: "Kit embrayage flotte", amount: "320 000 MAD", priority: "high", avatar: "CM" },
      { name: "Royal Air Maroc", part: "Huile moteur 20L × 500", amount: "175 000 MAD", priority: "medium", avatar: "RA" },
    ],
  },
  {
    name: "Négociation",
    color: "bg-violet-500",
    count: 8,
    value: "950 000 MAD",
    deals: [
      { name: "Marjane Fleet", part: "Batterie + Alternateur × 60", amount: "210 000 MAD", priority: "high", avatar: "MF" },
      { name: "Supratours", part: "Amortisseurs Monroe × 200", amount: "148 000 MAD", priority: "medium", avatar: "SP" },
    ],
  },
  {
    name: "Gagné",
    color: "bg-emerald-500",
    count: 31,
    value: "3 100 000 MAD",
    deals: [
      { name: "Oncf Trains", part: "Kit entretien complet", amount: "580 000 MAD", priority: "high", avatar: "OT" },
      { name: "Brico Wafa", part: "Outillage atelier", amount: "92 000 MAD", priority: "low", avatar: "BW" },
    ],
  },
];

const priorityDot: Record<string, string> = {
  high: "bg-red-400",
  medium: "bg-amber-400",
  low: "bg-emerald-400",
};

export function CrmPipeline() {
  return (
    <div className="bg-[#161B27] border border-white/8 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-white font-semibold text-sm">Pipeline commercial</h2>
          <p className="text-white/40 text-xs mt-0.5">93 deals actifs — 6 450 000 MAD en jeu</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-1.5">
          <Plus className="h-3.5 w-3.5" />
          Nouveau deal
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {stages.map((stage) => (
          <div key={stage.name} className="flex-shrink-0 w-56">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${stage.color}`} />
                <span className="text-xs font-semibold text-white/70">{stage.name}</span>
                <span className="text-xs text-white/30 bg-white/5 rounded-full px-1.5 py-0.5">
                  {stage.count}
                </span>
              </div>
              <button className="text-white/30 hover:text-white/60 transition-colors">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
            <div className="text-xs text-white/30 mb-3 font-medium">{stage.value}</div>

            <div className="space-y-2">
              {stage.deals.map((deal) => (
                <div
                  key={deal.name}
                  className="bg-[#1E2535] border border-white/6 rounded-lg p-3 hover:border-white/15 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <div className="h-6 w-6 rounded-md bg-blue-600/30 text-blue-400 flex items-center justify-center text-[9px] font-bold flex-shrink-0">
                      {deal.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-white/80 truncate group-hover:text-white transition-colors">
                        {deal.name}
                      </div>
                      <div className="text-[10px] text-white/35 truncate mt-0.5">{deal.part}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white/70">{deal.amount}</span>
                    <span className={`h-2 w-2 rounded-full ${priorityDot[deal.priority]}`} />
                  </div>
                </div>
              ))}
              <button className="w-full flex items-center justify-center gap-1.5 py-2 text-[11px] text-white/25 hover:text-white/50 hover:bg-white/5 rounded-lg border border-dashed border-white/10 hover:border-white/20 transition-all">
                <Plus className="h-3 w-3" />
                Ajouter
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
