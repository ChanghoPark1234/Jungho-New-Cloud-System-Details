'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Legend
} from 'recharts';

const ExecutiveDashboard: React.FC = () => {
  const [roiSliderValue, setRoiSliderValue] = useState(50);

  const revenueData = [
    { month: '1월', before: 100, after: 120 },
    { month: '2월', before: 110, after: 135 },
    { month: '3월', before: 105, after: 140 },
    { month: '4월', before: 115, after: 155 },
    { month: '5월', before: 120, after: 170 },
    { month: '6월', before: 125, after: 190 },
  ];

  const kpiCards = [
    {
      title: '매출 증가율',
      value: '52%',
      description: '클라우드 도입 후 6개월 기준',
      color: '#28A745'
    },
    {
      title: '비용 절감',
      value: '38%',
      description: '운영 비용 감소',
      color: '#007BFF'
    },
    {
      title: '투자 회수 기간',
      value: '1.8년',
      description: '예상 ROI 기준',
      color: '#6C757D'
    }
  ];

  const costData = [
    {
      category: '인프라 비용',
      current: 850000000,
      future: 520000000,
      savings: 330000000,
      governmentSupport: 150000000
    },
    {
      category: '운영 비용',
      current: 720000000,
      future: 480000000,
      savings: 240000000,
      governmentSupport: 100000000
    },
    {
      category: '유지보수',
      current: 450000000,
      future: 280000000,
      savings: 170000000,
      governmentSupport: 80000000
    }
  ];

  const formatCost = (value: number) => {
    return `${(value / 100000000).toFixed(1)}억원`;
  };

  const totalSavings = costData.reduce((acc, curr) => acc + curr.savings, 0);
  const totalSupport = costData.reduce((acc, curr) => acc + (curr.governmentSupport || 0), 0);

  const chartData = costData.map(item => ({
    name: item.category,
    현재: item.current / 100000000,
    미래: item.future / 100000000,
    '정부지원': (item.governmentSupport || 0) / 100000000
  }));

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          경영진 대시보드
          <span className="block text-xl text-gray-400 mt-2">Executive Dashboard</span>
        </h1>

        {/* KPI 카드 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {kpiCards.map((card, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl backdrop-blur-lg"
              style={{
                backgroundColor: `${card.color}15`
              } as any}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
              <p className="text-3xl font-bold mt-2" style={{ color: card.color }}>
                {card.value}
              </p>
              <p className="text-gray-400 mt-2">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 매출 비교 차트 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">매출 성장 비교</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Line type="monotone" dataKey="before" stroke="#6C757D" name="도입 전" />
                <Line type="monotone" dataKey="after" stroke="#28A745" name="도입 후" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 비용 분석 섹션 */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            비용 분석
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-700/50 rounded-lg p-6 text-center"
            >
              <h3 className="text-lg font-medium text-gray-300 mb-2">
                총 절감액
              </h3>
              <p className="text-3xl font-bold text-green-400">
                {formatCost(totalSavings)}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                5년 기준
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-700/50 rounded-lg p-6 text-center"
            >
              <h3 className="text-lg font-medium text-gray-300 mb-2">
                정부 지원금
              </h3>
              <p className="text-3xl font-bold text-blue-400">
                {formatCost(totalSupport)}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                클라우드 바우처 등
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-700/50 rounded-lg p-6 text-center"
            >
              <h3 className="text-lg font-medium text-gray-300 mb-2">
                투자 회수 기간
              </h3>
              <p className="text-3xl font-bold text-purple-400">
                2.3년
              </p>
              <p className="text-sm text-gray-400 mt-2">
                정부 지원금 포함
              </p>
            </motion.div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  dataKey="name"
                  stroke="#9CA3AF"
                  tick={{ fill: '#9CA3AF' }}
                />
                <YAxis
                  stroke="#9CA3AF"
                  tick={{ fill: '#9CA3AF' }}
                  label={{
                    value: '비용 (억원)',
                    angle: -90,
                    position: 'insideLeft',
                    fill: '#9CA3AF'
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#F3F4F6'
                  }}
                />
                <Legend />
                <Bar dataKey="현재" fill="#EF4444" />
                <Bar dataKey="미래" fill="#10B981" />
                <Bar dataKey="정부지원" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-white mb-4">
              비용 절감 효과
            </h3>
            <div className="space-y-4">
              {costData.map(item => (
                <div
                  key={item.category}
                  className="bg-gray-700/50 rounded-lg p-4 flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-medium text-white">{item.category}</h4>
                    <p className="text-sm text-gray-400">
                      현재: {formatCost(item.current)} → 미래: {formatCost(item.future)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-green-400">
                      -{formatCost(item.savings)}
                    </p>
                    {item.governmentSupport && (
                      <p className="text-sm text-blue-400">
                        (정부지원: {formatCost(item.governmentSupport)})
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExecutiveDashboard; 