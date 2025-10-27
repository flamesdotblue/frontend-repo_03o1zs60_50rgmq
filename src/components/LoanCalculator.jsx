import React, { useMemo, useState } from 'react';
import { Calculator } from 'lucide-react';

function computeEMI(p, annualRate, years) {
  const n = Math.round(years * 12);
  const r = annualRate / 12 / 100;
  if (r === 0) return n > 0 ? p / n : 0;
  const pow = Math.pow(1 + r, n);
  return (p * r * pow) / (pow - 1);
}

const LoanCalculator = () => {
  const [amount, setAmount] = useState(15000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(3);

  const emi = useMemo(() => computeEMI(amount, rate, tenure), [amount, rate, tenure]);
  const totalPayment = emi * (tenure * 12);
  const totalInterest = totalPayment - amount;

  return (
    <section className="rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur p-5 shadow ring-1 ring-black/5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-300">
          <Calculator className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Loan & EMI Calculator</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Instantly compute monthly payments.</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <label className="text-sm text-slate-600 dark:text-slate-300">Loan Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-teal-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-600 dark:text-slate-300">Interest Rate (% p.a.)</label>
          <input
            type="number"
            value={rate}
            step="0.1"
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-teal-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-600 dark:text-slate-300">Tenure (years)</label>
          <input
            type="number"
            value={tenure}
            step="0.5"
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-teal-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-gradient-to-br from-white to-teal-50 p-4 ring-1 ring-teal-100 dark:from-slate-800 dark:to-slate-900 dark:ring-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">Monthly EMI</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">${emi.toFixed(2)}</p>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-white to-teal-50 p-4 ring-1 ring-teal-100 dark:from-slate-800 dark:to-slate-900 dark:ring-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">Total Interest</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">${totalInterest.toFixed(2)}</p>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-white to-teal-50 p-4 ring-1 ring-teal-100 dark:from-slate-800 dark:to-slate-900 dark:ring-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">Total Payment</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">${totalPayment.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;
