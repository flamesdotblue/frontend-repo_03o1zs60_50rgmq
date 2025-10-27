import React, { useMemo, useState } from 'react';
import { Gauge, AlertTriangle } from 'lucide-react';

const ProgressBar = ({ value }) => {
  const pct = Math.min(100, Math.max(0, value));
  return (
    <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-800">
      <div
        className="h-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};

const BudgetPlanner = () => {
  const [limit, setLimit] = useState(6000);
  const [spent, setSpent] = useState(4550);

  const percent = useMemo(() => (limit > 0 ? (spent / limit) * 100 : 0), [limit, spent]);
  const nearLimit = percent >= 85 && percent < 100;
  const overLimit = percent >= 100;

  return (
    <section id="planner" className="rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur p-5 shadow ring-1 ring-black/5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-300">
          <Gauge className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Monthly Budget Planner</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Set a spending limit and track progress.</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <label className="text-sm text-slate-600 dark:text-slate-300">Monthly Limit</label>
          <input
            type="number"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-teal-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-600 dark:text-slate-300">Spent So Far</label>
          <input
            type="number"
            value={spent}
            onChange={(e) => setSpent(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-teal-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 rounded-xl bg-gradient-to-br from-teal-50 to-white p-4 text-sm dark:from-slate-800 dark:to-slate-900">
          <div>
            <p className="text-slate-500 dark:text-slate-400">Remaining</p>
            <p className="mt-1 font-semibold text-slate-900 dark:text-white">${(Math.max(0, limit - spent)).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400">Used</p>
            <p className="mt-1 font-semibold text-slate-900 dark:text-white">{percent.toFixed(1)}%</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <ProgressBar value={percent} />
        {nearLimit && (
          <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 text-amber-700 ring-1 ring-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:ring-amber-800">
            <AlertTriangle className="h-4 w-4" />
            You're nearing your budget limit. Consider reducing non-essential spending.
          </div>
        )}
        {overLimit && (
          <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-rose-50 px-3 py-2 text-rose-700 ring-1 ring-rose-200 dark:bg-rose-900/20 dark:text-rose-300 dark:ring-rose-800">
            <AlertTriangle className="h-4 w-4" />
            You've exceeded your budget. Review your expenses and adjust your limit.
          </div>
        )}
      </div>
    </section>
  );
};

export default BudgetPlanner;
