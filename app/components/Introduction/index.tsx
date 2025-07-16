'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const revenueData = [
  { month: '1월', value: 100 },
  { month: '3월', value: 120 },
  { month: '6월', value: 150 },
  { month: '9월', value: 180 },
  { month: '12월', value: 220 },
];

export const Introduction: React.FC = () => {
  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-6 lg:px-8">
      <div className="w-full space-y-16">
        {/* 메인 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="h1-jungho mb-6">
            조명제어 클라우드 시스템 구축계획
          </h1>
          <p className="text-xl text-text-secondary">
            스마트 조명의 미래를 만들어가는 혁신적인 솔루션
          </p>
        </motion.div>

        {/* 왜 클라우드가 필요한가? */}
        <motion.section
          variants={slideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            왜 클라우드 시스템이 필요한가?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-red-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">현재 상황</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="mr-2">⚠️</span>
                    조명제어, 전력제어, FMS 시스템이 개별적으로 운영
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📉</span>
                    데이터 활용 부족으로 비즈니스 기회 놓침
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🌍</span>
                    글로벌 고객(한국, 미국, 캐나다, 대만) 지원 어려움
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-green-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">클라우드 도입 후</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="mr-2">📊</span>
                    데이터 기반 의사결정: 실시간 에너지 사용 분석
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">💰</span>
                    신규 수익 창출: 구독형 에너지 컨설팅 서비스
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🌐</span>
                    글로벌 서비스: 지역별 최적화된 고객 지원
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📱</span>
                    B2C 확장: 가정용 스마트 조명 앱 서비스
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 시스템 구조 */}
        <section className="card w-full">
          <h2 className="h2-jungho mb-8">
            시스템 구조
            <span className="text-lg text-text-secondary ml-4">비기술적 설명</span>
          </h2>

          <div className="relative w-full">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/20 transform -translate-y-1/2" />
            <div className="flex justify-between gap-6 relative w-full">
              {[
                { icon: '🏭', title: '현장', subtitle: '조명, 센서', desc: '공장의 기계가 원자재 생산' },
                { icon: '🚛', title: '수집', subtitle: '실시간 전송', desc: '트럭으로 창고 운반' },
                { icon: '🏢', title: '저장', subtitle: 'AWS/Azure', desc: '거대한 창고' },
                { icon: '⚙️', title: '분석', subtitle: '데이터 처리', desc: '원자재를 가공해 제품 제작' },
                { icon: '🎯', title: '서비스', subtitle: '앱, 대시보드', desc: '완성품 판매' }
              ].map((step, index) => (
                <div key={index} className="card text-center relative flex-1 min-w-0">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="h2-jungho mb-2">{step.title}</h3>
                  <p className="text-primary mb-2 font-medium">{step.subtitle}</p>
                  <p className="text-small-jungho">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 비즈니스 효과 */}
        <motion.section
          variants={slideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-8">비즈니스 효과</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  category: 'B2B 서비스',
                  current: '단순 설치/유지보수',
                  future: '실시간 모니터링 + 에너지 컨설팅',
                  effect: '매출 20-30% 증가'
                },
                {
                  category: 'B2C 확장',
                  current: '없음',
                  future: '가정용 스마트 조명 앱',
                  effect: '신규 시장 진입'
                },
                {
                  category: '운영 효율',
                  current: '수동 관리',
                  future: '예측 유지보수',
                  effect: '비용 20% 절감'
                },
                {
                  category: '고객 만족',
                  current: '기본 지원',
                  future: '24/7 원격 지원 + 가이드',
                  effect: '만족도 90%+'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">{item.category}</h3>
                    <span className="text-green-400 font-bold">{item.effect}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-500/20 rounded-lg p-3">
                      <p className="text-sm text-gray-400">현재</p>
                      <p className="text-white">{item.current}</p>
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-3">
                      <p className="text-sm text-gray-400">도입 후</p>
                      <p className="text-white">{item.future}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">예상 매출 성장</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '0.5rem'
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#10B981"
                      strokeWidth={2}
                      dot={{ fill: '#10B981' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 투자 비용 및 정부 지원 */}
        <motion.section
          variants={slideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-8">투자 비용 및 정부 지원</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">초기 투자</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-gray-400">클라우드 설정</span>
                  <span className="text-white">$10,000-20,000</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-400">월 운영비</span>
                  <span className="text-white">$1,000-2,500</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">정부 지원 (2025년)</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-blue-400 font-bold mb-2">클라우드 바우처 사업</p>
                  <p className="text-2xl font-bold text-white">최대 8,000만원</p>
                </div>
                <div>
                  <p className="text-gray-400">실제 부담</p>
                  <p className="text-white">초기 비용의 20-50% 수준</p>
                </div>
              </div>
            </div>

            <div className="bg-green-900/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">투자 회수</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">예상 기간</p>
                  <p className="text-2xl font-bold text-green-400">12-18개월</p>
                </div>
                <div>
                  <p className="text-gray-400">연간 추가 매출</p>
                  <p className="text-white">기존 대비 20-30% 증가</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}; 