"use client";

import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  TrendingUp,
  Package,
  FileText,
  BarChart2,
  Settings,
  HelpCircle,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Tableau de bord", active: true },
  { icon: TrendingUp, label: "Pipeline", badge: "8" },
  { icon: Users, label: "Clients B2B" },
  { icon: ShoppingCart, label: "Commandes", badge: "3" },
  { icon: Package, label: "Catalogue pièces" },
  { icon: FileText, label: "Devis & Factures" },
  { icon: BarChart2, label: "Analytique" },
];

const bottomItems = [
  { icon: Settings, label: "Paramètres" },
  { icon: HelpCircle, label: "Support" },
];

export function CrmSidebar() {
  return (
    <aside className="w-56 bg-[#0F1117] border-r border-white/10 flex flex-col flex-shrink-0">
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map(({ icon: Icon, label, active, badge }) => (
          <button
            key={label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
              active
                ? "bg-blue-600/20 text-blue-400 font-medium"
                : "text-white/50 hover:text-white/80 hover:bg-white/5"
            }`}
          >
            <Icon className="h-4 w-4 flex-shrink-0" />
            <span className="flex-1 text-left">{label}</span>
            {badge && (
              <span className="h-5 min-w-[20px] rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold flex items-center justify-center px-1.5">
                {badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="px-3 py-4 border-t border-white/10 space-y-0.5">
        {bottomItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/40 hover:text-white/70 hover:bg-white/5 transition-all"
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
