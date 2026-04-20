"use client";

const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
const values =    [210,  185,   240,  290,   320,  275,  310,  280,   360,  420,  380,  480];
const targets =   [200,  200,   250,  280,   300,  300,  320,  300,   350,  400,  400,  450];

const max = Math.max(...values, ...targets);

export function CrmRevenueChart() {
  return (
    <div className="bg-[#161B27] border border-white/8 rounded-xl p-5">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-white font-semibold text-sm">Évolution du CA mensuel</h2>
          <p className="text-white/40 text-xs mt-0.5">2025 — en milliers de MAD</p>
        </div>
        <div className="flex items-center gap-4 text-[10px]">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-3 rounded-sm bg-blue-500" />
            <span className="text-white/40">Réalisé</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-3 rounded-sm bg-white/20" />
            <span className="text-white/40">Objectif</span>
          </div>
        </div>
      </div>

      {/* Chart area */}
      <div className="relative h-40">
        {/* Y-axis grid lines */}
        {[0, 25, 50, 75, 100].map((pct) => (
          <div
            key={pct}
            className="absolute left-0 right-0 border-t border-white/5"
            style={{ bottom: `${pct}%` }}
          />
        ))}

        {/* Bars */}
        <div className="absolute inset-0 flex items-end gap-1 px-1">
          {months.map((month, i) => {
            const barHeight = (values[i] / max) * 100;
            const targetHeight = (targets[i] / max) * 100;
            const isCurrentMonth = i === 10;
            return (
              <div key={month} className="flex-1 flex flex-col items-center justify-end gap-0.5 h-full relative group">
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#0F1117] border border-white/15 rounded-lg px-2 py-1.5 text-[10px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none shadow-xl">
                  <div className="font-bold text-blue-400">{values[i]}k MAD</div>
                  <div className="text-white/40">Obj: {targets[i]}k</div>
                </div>
                {/* Target bar (background) */}
                <div
                  className="w-full rounded-t-sm bg-white/10"
                  style={{ height: `${targetHeight}%` }}
                />
                {/* Actual bar (overlay) */}
                <div
                  className={`absolute bottom-0 w-full rounded-t-sm transition-all ${
                    isCurrentMonth
                      ? "bg-gradient-to-t from-blue-600 to-blue-400 shadow-lg shadow-blue-500/30"
                      : values[i] >= targets[i]
                      ? "bg-gradient-to-t from-emerald-600/80 to-emerald-500/60"
                      : "bg-gradient-to-t from-blue-700/80 to-blue-500/60"
                  }`}
                  style={{ height: `${barHeight}%` }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* X-axis labels */}
      <div className="flex gap-1 px-1 mt-2">
        {months.map((month, i) => (
          <div key={month} className={`flex-1 text-center text-[9px] ${i === 10 ? "text-blue-400 font-bold" : "text-white/25"}`}>
            {month}
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/8">
        {[
          { label: "CA total 2025", value: "3 550k MAD", color: "text-blue-400" },
          { label: "Objectif annuel", value: "3 700k MAD", color: "text-white/50" },
          { label: "Atteinte objectif", value: "95.9%", color: "text-emerald-400" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className={`text-sm font-bold ${s.color}`}>{s.value}</div>
            <div className="text-[10px] text-white/30 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
