"use client";

import { CheckSquare, Square, Clock } from "lucide-react";

const tasks = [
  { done: true, text: "Relancer OCP sur devis amortisseurs", due: "Aujourd'hui", assignee: "KA" },
  { done: false, text: "Préparer offre flotte — CTM renouvellement", due: "Aujourd'hui", assignee: "ML" },
  { done: false, text: "Appel suivi — Supratours négo en cours", due: "Demain", assignee: "KA" },
  { done: false, text: "Envoyer bon de livraison #BL-2248", due: "Demain", assignee: "SF" },
  { done: true, text: "Mettre à jour catalogue pneumatiques Q4", due: "Terminé", assignee: "ML" },
  { done: false, text: "Répondre demande urgente — Mécano Express", due: "Sous 2h", assignee: "KA" },
];

const avatarColors: Record<string, string> = {
  KA: "bg-blue-600",
  ML: "bg-violet-600",
  SF: "bg-emerald-600",
};

export function CrmTasksWidget() {
  return (
    <div className="bg-[#161B27] border border-white/8 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-white font-semibold text-sm">Tâches du jour</h2>
          <p className="text-white/40 text-xs mt-0.5">4 en attente · 2 terminées</p>
        </div>
        <div className="text-xs text-white/30">
          <span className="text-emerald-400 font-bold">2</span>/6
        </div>
      </div>
      <div className="space-y-1.5">
        {tasks.map((task, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 p-2.5 rounded-lg transition-colors cursor-pointer ${
              task.done ? "opacity-50" : "hover:bg-white/5"
            }`}
          >
            {task.done ? (
              <CheckSquare className="h-4 w-4 text-emerald-400 flex-shrink-0" />
            ) : (
              <Square className="h-4 w-4 text-white/25 flex-shrink-0" />
            )}
            <span
              className={`flex-1 text-xs ${task.done ? "line-through text-white/30" : "text-white/70"}`}
            >
              {task.text}
            </span>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-1 text-[10px] text-white/30">
                <Clock className="h-3 w-3" />
                {task.due}
              </div>
              <div
                className={`h-5 w-5 rounded-full ${avatarColors[task.assignee] ?? "bg-slate-600"} flex items-center justify-center text-[9px] font-bold text-white`}
              >
                {task.assignee}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
