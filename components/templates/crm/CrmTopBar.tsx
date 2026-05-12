"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { TemplateBackButton } from "@/components/templates/TemplateBackButton";

export function CrmTopBar() {
  return (
    <div className="bg-[#0A0D14] border-b border-white/10 px-6 py-2.5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <TemplateBackButton
          fixed={false}
          className="rounded-lg border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/40 shadow-none backdrop-blur-0 hover:translate-y-0 hover:bg-white/10 hover:text-white/70"
        />
        <span className="text-white/15">·</span>
        <span className="text-xs text-white/30">
          Démo interactive — CRM Pièces Automobiles
        </span>
      </div>
      <Link
        href="/contact?template=crm"
        className="flex items-center gap-1.5 text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
      >
        Utiliser ce modèle
        <ExternalLink className="h-3 w-3" />
      </Link>
    </div>
  );
}
