"use client";

import { Bell, Search, Settings, ChevronDown } from "lucide-react";

export function CrmHeader() {
  return (
    <header className="h-14 border-b border-white/10 bg-[#0F1117] flex items-center justify-between px-6 flex-shrink-0">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-blue-500 flex items-center justify-center">
            <span className="text-white font-black text-xs">AP</span>
          </div>
          <span className="font-bold text-white tracking-tight">AutoParts CRM</span>
        </div>
        <div className="hidden md:flex items-center gap-1 text-xs text-white/40 ml-4">
          <span>Pièces Auto Maghreb</span>
          <ChevronDown className="h-3 w-3" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 h-8 px-3 rounded-lg bg-white/5 border border-white/10 text-white/40 text-xs min-w-[200px]">
          <Search className="h-3.5 w-3.5" />
          <span>Rechercher un client, commande…</span>
        </div>
        <button className="relative h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-blue-500" />
        </button>
        <button className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors">
          <Settings className="h-4 w-4" />
        </button>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xs">
          KA
        </div>
      </div>
    </header>
  );
}
