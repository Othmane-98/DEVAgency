"use client";

import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Percent } from "lucide-react";

const kpis = [
  {
    label: "Chiffre d'affaires",
    value: "2 847 500 MAD",
    change: "+18.4%",
    trend: "up",
    icon: DollarSign,
    color: "blue",
    sub: "vs mois précédent",
  },
  {
    label: "Deals actifs",
    value: "142",
    change: "+7",
    trend: "up",
    icon: TrendingUp,
    color: "emerald",
    sub: "dans le pipeline",
  },
  {
    label: "Clients B2B",
    value: "384",
    change: "+12",
    trend: "up",
    icon: Users,
    color: "violet",
    sub: "comptes actifs",
  },
  {
    label: "Commandes en cours",
    value: "58",
    change: "-3",
    trend: "down",
    icon: ShoppingCart,
    color: "amber",
    sub: "à traiter",
  },
  {
    label: "Taux de conversion",
    value: "34.7%",
    change: "+2.1%",
    trend: "up",
    icon: Percent,
    color: "cyan",
    sub: "lead → deal signé",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

const iconColorMap: Record<string, string> = {
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  violet: "text-violet-400",
  amber: "text-amber-400",
  cyan: "text-cyan-400",
};

export function CrmKpiCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;
        return (
          <div
            key={kpi.label}
            className="bg-[#161B27] border border-white/8 rounded-xl p-4 hover:border-white/15 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`h-8 w-8 rounded-lg border flex items-center justify-center ${colorMap[kpi.color]}`}>
                <Icon className="h-4 w-4" />
              </div>
              <span
                className={`flex items-center gap-1 text-xs font-semibold ${
                  kpi.trend === "up" ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {kpi.trend === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {kpi.change}
              </span>
            </div>
            <div className={`text-xl font-bold text-white mb-0.5 ${iconColorMap[kpi.color]}`}>
              {kpi.value}
            </div>
            <div className="text-xs text-white/40 font-medium leading-tight">{kpi.label}</div>
            <div className="text-[10px] text-white/25 mt-0.5">{kpi.sub}</div>
          </div>
        );
      })}
    </div>
  );
}
