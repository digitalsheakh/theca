'use client';

import { useState, useEffect } from 'react';
import { FaTag, FaCalendarAlt } from 'react-icons/fa';

export default function LoanCalculatorPage() {
  const [price, setPrice] = useState<string>('10000');
  const [interestRate, setInterestRate] = useState<string>('6.5');
  const [period, setPeriod] = useState<string>('36');
  const [downPayment, setDownPayment] = useState<string>('1000');

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayments, setTotalPayments] = useState<number>(0);

  useEffect(() => {
    const p = parseFloat(price) || 0;
    const r = parseFloat(interestRate) || 0;
    const n = parseInt(period) || 0;
    const d = parseFloat(downPayment) || 0;

    const principal = p - d;

    if (principal <= 0 || n <= 0) {
      setMonthlyPayment(0);
      setTotalInterest(0);
      setTotalPayments(d > 0 ? d : 0);
      return;
    }

    if (r === 0) {
      const monthly = principal / n;
      setMonthlyPayment(monthly);
      setTotalInterest(0);
      setTotalPayments(principal + d);
      return;
    }

    const monthlyRate = r / 100 / 12;
    const factor = Math.pow(1 + monthlyRate, n);
    const monthly = (principal * monthlyRate * factor) / (factor - 1);
    const totalPaid = monthly * n;
    const interest = totalPaid - principal;

    setMonthlyPayment(monthly);
    setTotalInterest(interest);
    setTotalPayments(totalPaid + d);
  }, [price, interestRate, period, downPayment]);

  const fmt = (val: number) =>
    val.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="min-h-screen bg-[#EEF1F8] pt-[180px] pb-16 flex flex-col items-center justify-start px-4 ">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
        Loan Calculator
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-center max-w-2xl mb-10 text-sm md:text-base leading-relaxed">
        Use our finance calculator to calculate payments over the life of your loan. Enter your
        information to see how much your monthly payments could be. You can adjust length of loan,
        down payment and interest rate to see how those changes raise or lower your payments.
      </p>

      {/* Form */}
      <div className="w-full max-w-2xl bg-[#EEF1F8]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Price */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              Price <span className="text-gray-800">*</span>
            </label>
            <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <span className="flex items-center justify-center w-12 h-12 bg-white border-r border-gray-200 text-gray-800">
                <FaTag className="text-lg" />
              </span>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="flex-1 h-12 px-4 text-gray-800 bg-white focus:outline-none text-base"
                placeholder="10,000"
                min="0"
              />
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              Interest Rate <span className="text-gray-800">*</span>
            </label>
            <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <span className="flex items-center justify-center w-12 h-12 bg-white border-r border-gray-200 text-gray-800 font-bold text-base">
                %
              </span>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="flex-1 h-12 px-4 text-gray-800 bg-white focus:outline-none text-base"
                placeholder="6.5"
                min="0"
                step="0.1"
              />
            </div>
          </div>

          {/* Period */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              Period (months) <span className="text-gray-800">*</span>
            </label>
            <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <span className="flex items-center justify-center w-12 h-12 bg-white border-r border-gray-200 text-gray-800">
                <FaCalendarAlt className="text-lg" />
              </span>
              <input
                type="number"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="flex-1 h-12 px-4 text-gray-800 bg-white focus:outline-none text-base"
                placeholder="36"
                min="1"
              />
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              Down Payment
            </label>
            <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <span className="flex items-center justify-center w-12 h-12 bg-white border-r border-gray-200 text-gray-800 font-bold text-base">
                £
              </span>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className="flex-1 h-12 px-4 text-gray-800 bg-white focus:outline-none text-base"
                placeholder="1,000"
                min="0"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-10 bg-white border border-gray-200 shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-gray-200 text-center gap-4 md:gap-0">
            <div className="px-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">Monthly Payment</p>
              <p className="text-2xl font-medium text-gray-900">£{fmt(monthlyPayment)}</p>
            </div>
            <div className="px-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">Total Interest</p>
              <p className="text-2xl font-medium text-gray-900">£{fmt(totalInterest)}</p>
            </div>
            <div className="px-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">Total Payments</p>
              <p className="text-2xl font-medium text-gray-900">£{fmt(totalPayments)}</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-gray-400 text-center leading-relaxed">
          Title and other fees and incentives are not included in this calculation, which is an
          estimate only. Monthly payment estimates are for informational purpose and do not represent
          a financing offer from the seller of this vehicle. Other taxes may apply.
        </p>
      </div>
    </div>
  );
}
