"use client";

import { ArrowUpRight, Star } from "lucide-react";

const clients = [
  {
    name: "CTM Maroc",
    sector: "Transport & Logistique",
    revenue: "580 000 MAD",
    orders: 48,
    status: "VIP",
    growth: "+24%",
    lastOrder: "Il y a 2 jours",
    avatar: "CM",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Oncf Trains",
    sector: "Ferroviaire",
    revenue: "412 000 MAD",
    orders: 31,
    status: "VIP",
    growth: "+18%",
    lastOrder: "Il y a 5 jours",
    avatar: "OT",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    name: "OCP Khouribga",
    sector: "Industrie minière",
    revenue: "385 000 MAD",
    orders: 27,
    status: "Premium",
    growth: "+31%",
    lastOrder: "Hier",
    avatar: "OC",
    color: "from-violet-600 to-violet-800",
  },
  {
    name: "Marjane Fleet",
    sector: "Grande distribution",
    revenue: "210 000 MAD",
    orders: 19,
    status: "Premium",
    growth: "+9%",
    lastOrder: "Il y a 1 semaine",
    avatar: "MF",
    color: "from-amber-600 to-amber-800",
  },
  {
    name: "Supratours",
    sector: "Transport de voyageurs",
    revenue: "198 000 MAD",
    orders: 22,
    status: "Standard",
    growth: "+5%",
    lastOrder: "Il y a 3 jours",
    avatar: "SP",
    color: "from-rose-600 to-rose-800",
  },
  {
    name: "Royal Air Maroc",
    sector: "Aérien & Maintenance",
    revenue: "175 000 MAD",
    orders: 14,
    status: "Standard",
    growth: "+12%",
    lastOrder: "Il y a 4 jours",
    avatar: "RA",
    color: "from-cyan-600 to-cyan-800",
  },
];

const statusStyle: Record<string, string> = {
  VIP: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Premium: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Standard: "bg-white/10 text-white/50 border-white/15",
};

export function CrmTopClients() {
  return (
    <div className="bg-[#161B27] border border-white/8 rounded-xl p-5 flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-white font-semibold text-sm">Top clients B2B</h2>
          <p className="text-white/40 text-xs mt-0.5">Par chiffre d&apos;affaires — 6 derniers mois</p>
        </div>
        <button className="flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition-colors">
          Voir tous
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="space-y-2 flex-1">
        {clients.map((client, i) => (
          <div
            key={client.name}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
          >
            <span className="text-xs text-white/20 w-4 text-right font-medium">{i + 1}</span>
            <div
              className={`h-8 w-8 rounded-lg bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0`}
            >
              {client.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-white/80 truncate group-hover:text-white transition-colors">
                  {client.name}
                </span>
                {client.status === "VIP" && <Star className="h-3 w-3 text-amber-400 flex-shrink-0 fill-amber-400" />}
              </div>
              <div className="text-[10px] text-white/35 truncate">{client.sector}</div>
            </div>
            <div className="hidden sm:flex flex-col items-end gap-0.5 flex-shrink-0">
              <span className="text-xs font-bold text-white/70">{client.revenue}</span>
              <span className="text-[10px] text-white/30">{client.orders} cmds</span>
            </div>
            <div className="flex flex-col items-end gap-1 ml-2 flex-shrink-0">
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${statusStyle[client.status]}`}
              >
                {client.status}
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold">{client.growth}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
