'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type TabType = 'scenarios' | 'cases';

export const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('scenarios');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scenarios = [
    {
      title: 'B2B 고객: 백화점 에너지 관리',
      icon: '🏬',
      description: '한국의 대형 백화점이 귀사의 조명제어 및 전력제어 시스템 사용',
      details: [
        {
          title: '데이터 수집',
          content: '1분 단위 데이터를 AWS IoT Core로 전송'
        },
        {
          title: '데이터 저장',
          content: 'S3 로그 파일, TimescaleDB 시계열 데이터'
        },
        {
          title: '분석',
          content: 'Power BI 시각화, SageMaker 피크타임 예측'
        },
        {
          title: '서비스 제공',
          content: '웹 대시보드 분석 결과, 에너지 절감 15% 달성'
        },
        {
          title: '유지보수',
          content: '장치 이상 자동 감지, 비용 20% 절감'
        }
      ],
      benefits: ['고객 충성도 향상', '유지보수 계약 갱신율 증가']
    },
    {
      title: 'B2C 고객: 가정용 스마트 조명',
      icon: '🏠',
      description: '일반 가정 고객이 귀사의 스마트 조명 키트 구매',
      details: [
        {
          title: '플랫폼',
          content: 'AWS Amplify 모바일 앱으로 조명 설정 및 원격 제어'
        },
        {
          title: '설치 가이드',
          content: 'S3/CloudFront 호스팅 동영상 가이드'
        },
        {
          title: '고객 지원',
          content: 'Azure Bot Service 실시간 응답'
        },
        {
          title: '데이터 분석',
          content: '사용 패턴 분석 및 맞춤형 설정 추천'
        }
      ],
      benefits: ['설치 시간 30분 이내', '고객 만족도 90% 이상']
    },
    {
      title: '신규 비즈니스: 구독형 에너지 컨설팅',
      icon: '📊',
      description: '데이터센터 고객에게 에너지 절감 컨설팅 제공',
      details: [
        {
          title: '데이터 분석',
          content: 'Redshift 분석, 월간 보고서 생성'
        },
        {
          title: '예측 유지보수',
          content: 'SageMaker 장치 고장 예측, 스케줄 최적화'
        },
        {
          title: '서비스 제공',
          content: '구독형 서비스로 월 $5,000 수익 창출'
        }
      ],
      benefits: ['안정적 반복 수익', '시장 경쟁력 강화']
    }
  ];

  const cases = [
    {
      company: 'Lutron Electronics',
      type: '조명제어, 글로벌, 중견기업',
      icon: '🌟',
      overview: '미국 기반의 조명제어 솔루션 기업, 스마트 조명 및 빌딩 관리 시스템 제공',
      cloud: {
        platform: 'AWS (IoT Core, S3, Lambda, Aurora)',
        period: '2023~2024년, 12개월 내 구축 완료',
        cost: '초기 설정 약 $50,000, 월 운영 약 $5,000'
      },
      cases: [
        'AWS IoT Core로 실시간 데이터 수집',
        '상업용 빌딩 에너지 절감 20% 달성',
        'AWS Amplify 기반 모바일 앱 서비스',
        '데이터 분석 기반 매출 10% 증가'
      ],
      applicability: [
        'AWS 기반 데이터 수집/분석 시스템',
        'B2C 앱 개발로 고객 지원 강화',
        'FMS 데이터 통합 에너지 컨설팅'
      ]
    },
    {
      company: 'Enel X',
      type: '에너지 관리, 글로벌, SME 적용 가능',
      icon: '⚡',
      overview: '이탈리아 기반 에너지 관리 솔루션 기업, 스마트 빌딩 및 전력 관리 중심',
      cloud: {
        platform: 'Microsoft Azure (IoT Hub, Power BI, Azure SQL)',
        period: '2024년, 9개월 내 구축 완료',
        cost: '초기 설정 약 $30,000, 월 운영 약 $3,000'
      },
      cases: [
        'Azure IoT Hub 데이터 수집',
        '데이터센터 유지보수 비용 15% 절감',
        '빌딩 운영 효율 25% 향상'
      ],
      applicability: [
        'Azure 기반 데이터 통합',
        'B2B 고객 에너지 보고서',
        '유지보수 효율화'
      ]
    },
    {
      company: '한국 중소기업',
      type: '스마트 공장, IoT 기반',
      icon: '🏭',
      overview: '한국의 스마트 공장 솔루션 제공 중소기업, IoT 및 에너지 관리 중심',
      cloud: {
        platform: 'Google Cloud (BigQuery, Cloud IoT Core)',
        period: '2025년, 6개월 내 구축 완료',
        cost: '초기 설정 약 $10,000 (정부 지원 50%), 월 운영 약 $1,200'
      },
      cases: [
        'BigQuery 데이터 분석',
        '챗봇 도입으로 지원 비용 30% 절감',
        '에너지 컨설팅으로 매출 12% 증가'
      ],
      applicability: [
        'Google Cloud 기반 데이터 분석',
        '클라우드 바우처 사업 활용',
        'B2C 챗봇 고객 지원'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            클라우드 활용사례
          </h1>
          <p className="text-xl text-gray-400">
            클라우드 시스템의 실제 활용 시나리오와 구축 사례
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setActiveTab('scenarios')}
            className={`px-6 py-3 rounded-lg text-lg font-medium transition-all
              ${activeTab === 'scenarios'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
          >
            클라우드 활용 업무
          </button>
          <button
            onClick={() => setActiveTab('cases')}
            className={`px-6 py-3 rounded-lg text-lg font-medium transition-all
              ${activeTab === 'cases'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
          >
            구체적 활용사례
          </button>
        </div>

        {activeTab === 'scenarios' ? (
          <div className="grid grid-cols-1 gap-8">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{scenario.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {scenario.title}
                    </h2>
                    <p className="text-gray-400">{scenario.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {scenario.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-700/50 rounded-lg p-4"
                    >
                      <h3 className="text-blue-400 font-medium mb-2">
                        {detail.title}
                      </h3>
                      <p className="text-gray-300">{detail.content}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-900/30 rounded-lg p-4">
                  <h3 className="text-green-400 font-medium mb-2">기대 효과</h3>
                  <div className="flex flex-wrap gap-2">
                    {scenario.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {cases.map((case_, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{case_.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {case_.company}
                    </h2>
                    <p className="text-gray-400">{case_.type}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <h3 className="text-blue-400 font-medium mb-2">회사 개요</h3>
                      <p className="text-gray-300">{case_.overview}</p>
                    </div>

                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <h3 className="text-blue-400 font-medium mb-2">클라우드 구축</h3>
                      <div className="space-y-2">
                        <p className="text-gray-300">
                          <span className="text-gray-400">플랫폼:</span> {case_.cloud.platform}
                        </p>
                        <p className="text-gray-300">
                          <span className="text-gray-400">기간:</span> {case_.cloud.period}
                        </p>
                        <p className="text-gray-300">
                          <span className="text-gray-400">비용:</span> {case_.cloud.cost}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <h3 className="text-green-400 font-medium mb-2">활용 사례</h3>
                      <ul className="list-disc list-inside space-y-2">
                        {case_.cases.map((item, idx) => (
                          <li key={idx} className="text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-900/30 rounded-lg p-4">
                      <h3 className="text-purple-400 font-medium mb-2">귀사 적용 가능성</h3>
                      <ul className="list-disc list-inside space-y-2">
                        {case_.applicability.map((item, idx) => (
                          <li key={idx} className="text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 