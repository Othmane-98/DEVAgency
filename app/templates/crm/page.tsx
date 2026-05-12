import { Metadata } from "next";
import { CrmHeader } from "@/components/templates/crm/CrmHeader";
import { CrmSidebar } from "@/components/templates/crm/CrmSidebar";
import { CrmKpiCards } from "@/components/templates/crm/CrmKpiCards";
import { CrmPipeline } from "@/components/templates/crm/CrmPipeline";
import { CrmTopClients } from "@/components/templates/crm/CrmTopClients";
import { CrmRecentActivity } from "@/components/templates/crm/CrmRecentActivity";
import { CrmRevenueChart } from "@/components/templates/crm/CrmRevenueChart";
import { CrmTasksWidget } from "@/components/templates/crm/CrmTasksWidget";
import { CrmTopBar } from "@/components/templates/crm/CrmTopBar";

export const metadata: Metadata = {
  title: "AutoParts CRM — Pièces Automobiles | WebAgency",
  description:
    "CRM sur mesure pour distributeur de pièces auto : pipeline B2B, gestion commandes, analytique et tableau de bord commercial.",
};

export default function CrmTemplatePage() {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-white flex flex-col font-sans">
      <CrmTopBar />
      <CrmHeader />

      <div className="flex flex-1 overflow-hidden" style={{ minHeight: "calc(100vh - 96px)" }}>
        <CrmSidebar />

        <main className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Page title */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold text-white">Tableau de bord</h1>
              <p className="text-xs text-white/40 mt-0.5">
                Bienvenue, Karim · Lundi 20 avril 2026 — Q2 2026
              </p>
            </div>
            <div className="flex items-center gap-2">
              <select className="bg-white/5 border border-white/10 text-white/50 text-xs rounded-lg px-3 py-1.5 outline-none focus:border-blue-500/50">
                <option>6 derniers mois</option>
                <option>Cette année</option>
                <option>Ce trimestre</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-4 py-1.5 rounded-lg font-medium transition-colors">
                Exporter rapport
              </button>
            </div>
          </div>

          {/* KPI Row */}
          <CrmKpiCards />

          {/* Revenue Chart + Tasks */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            <div className="xl:col-span-2">
              <CrmRevenueChart />
            </div>
            <div>
              <CrmTasksWidget />
            </div>
          </div>

          {/* Pipeline */}
          <CrmPipeline />

          {/* Clients + Activity */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <CrmTopClients />
            <CrmRecentActivity />
          </div>
        </main>
      </div>
    </div>
  );
}
