import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ROICalculatorProps {
  className?: string;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ className }) => {
  const [investment, setInvestment] = useState(10000);
  const [monthlyBenefit, setMonthlyBenefit] = useState(1000);
  const [governmentSupport, setGovernmentSupport] = useState(8000);

  const [roi, setRoi] = useState(0);
  const [paybackPeriod, setPaybackPeriod] = useState(0);

  useEffect(() => {
    const actualInvestment = investment - governmentSupport;
    const annualBenefit = monthlyBenefit * 12;
    const calculatedRoi = (annualBenefit / actualInvestment) * 100;
    const calculatedPayback = actualInvestment / monthlyBenefit;

    setRoi(calculatedRoi);
    setPaybackPeriod(calculatedPayback);
  }, [investment, monthlyBenefit, governmentSupport]);

  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 ${className}`}>
      <h3 className="text-xl font-bold text-white mb-6">ROI 계산기</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-white mb-2">초기 투자 비용 (만원)</label>
          <input
            type="range"
            min="1000"
            max="50000"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <p className="text-gray-400 mt-1">{investment.toLocaleString()} 만원</p>
        </div>

        <div>
          <label className="block text-white mb-2">월 예상 수익 (만원)</label>
          <input
            type="range"
            min="100"
            max="5000"
            value={monthlyBenefit}
            onChange={(e) => setMonthlyBenefit(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <p className="text-gray-400 mt-1">{monthlyBenefit.toLocaleString()} 만원</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            className="p-4 bg-green-500/10 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-white font-bold">예상 ROI</h4>
            <p className="text-2xl font-bold text-green-400 mt-2">
              {roi.toFixed(1)}%
            </p>
            <p className="text-gray-400 text-sm mt-1">연간 기준</p>
          </motion.div>

          <motion.div
            className="p-4 bg-blue-500/10 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-white font-bold">투자 회수 기간</h4>
            <p className="text-2xl font-bold text-blue-400 mt-2">
              {paybackPeriod.toFixed(1)}개월
            </p>
            <p className="text-gray-400 text-sm mt-1">정부지원금 포함</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator; 