import React, { useEffect, useState } from 'react';
import { Moon, Sun, Bell } from 'lucide-react';
import HeroSection from './components/HeroSection';
import OverviewCards from './components/OverviewCards';
import BudgetPlanner from './components/BudgetPlanner';
import LoanCalculator from './components/LoanCalculator';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(prefersDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100 text-slate-900 transition-colors dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 shadow-inner" />
            <div>
              <p className="text-base font-semibold tracking-tight">FinFlow</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Smart Finance Tracker</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Notifications"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-slate-600 shadow-sm hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
            >
              <Bell className="h-5 w-5" />
            </button>
            <button
              onClick={() => setDark((d) => !d)}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-white shadow hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        <HeroSection />

        <OverviewCards />

        <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2">
          <BudgetPlanner />
          <LoanCalculator />
        </div>

        <footer className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400">
          Designed with a modern teal + white aesthetic. Charts, analytics, auth, and backend will be wired next.
        </footer>
      </main>
    </div>
  );
}

export default App;
