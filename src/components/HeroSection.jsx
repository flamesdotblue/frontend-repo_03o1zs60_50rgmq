import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 via-white to-teal-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 shadow-sm ring-1 ring-black/5">
      <div className="h-[420px] w-full">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent dark:from-slate-900/70 dark:via-slate-900/20 dark:to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-6 pointer-events-none">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
              FinFlow – Smart Finance Tracker
            </h1>
            <p className="mt-3 sm:mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Take control of your money with a clean, modern dashboard. Track income and expenses,
              plan budgets, calculate EMIs, and get AI-powered insights — all in one place.
            </p>
            <div className="mt-5 sm:mt-6 flex flex-wrap gap-3 pointer-events-auto">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-white shadow hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                Get Started
              </a>
              <a
                href="#planner"
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-teal-700 shadow ring-1 ring-teal-200 backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-slate-800/70 dark:text-teal-300 dark:ring-slate-700"
              >
                Plan Budget
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
