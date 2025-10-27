import React from 'react';
import { Wallet, TrendingUp, TrendingDown, PiggyBank } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, change, positive }) => (
  <div className="rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur p-5 shadow ring-1 ring-black/5">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
        <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{value}</p>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-300">
        <Icon className="h-6 w-6" />
      </div>
    </div>
    {change != null && (
      <div className={`mt-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${
        positive ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-300' : 'bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-300'
      }`}>
        {positive ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
        <span>{change}</span>
      </div>
    )}
  </div>
);

const OverviewCards = () => {
  // Mocked sample values for a delightful demo experience
  const totalIncome = 8200;
  const totalExpenses = 5630;
  const totalSavings = totalIncome - totalExpenses;
  const balance = totalSavings;

  return (
    <section id="overview" className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard icon={Wallet} label="Total Balance" value={`$${balance.toLocaleString()}`} change={"+3.1%"} positive />
      <StatCard icon={TrendingUp} label="Total Income" value={`$${totalIncome.toLocaleString()}`} change={"+5.4%"} positive />
      <StatCard icon={TrendingDown} label="Total Expenses" value={`$${totalExpenses.toLocaleString()}`} change={"-1.8%"} />
      <StatCard icon={PiggyBank} label="Savings" value={`$${totalSavings.toLocaleString()}`} />
    </section>
  );
};

export default OverviewCards;
