'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SystemSection } from '@/types/architecture';
import { DataFlow } from './DataFlow';

const SystemArchitecture: React.FC = () => {
  const sections: SystemSection[] = [
    {
      id: 'field-devices',
      title: '현장 장치',
      subtitle: 'Field Devices',
      description: 'IoT 센서 및 조명 제어 장치',
      components: [
        { name: '조명장치', engName: 'Lighting', description: '스마트 조명 제어 시스템' },
        { name: '전력센서', engName: 'Power Sensors', description: '실시간 전력 소비 모니터링' },
        { name: 'IoT 센서', engName: 'IoT Sensors', description: '환경 및 상태 모니터링' },
      ],
      technologies: ['IoT', '센서', '조명제어'],
      benefits: ['실시간 모니터링', '자동 제어', '에너지 절약'],
      color: '#28A745'
    },
    {
      id: 'iot-platform',
      title: 'IoT 플랫폼',
      subtitle: 'IoT Platform',
      description: '클라우드 기반 IoT 관리 플랫폼',
      components: [
        { name: 'AWS IoT Core', engName: 'AWS IoT Core', description: '디바이스 연결 및 관리' },
        { name: 'Azure IoT Hub', engName: 'Azure IoT Hub', description: '하이브리드 클라우드 지원' },
      ],
      technologies: ['AWS IoT', 'Azure IoT', 'MQTT'],
      benefits: ['확장성', '보안', '글로벌 지원'],
      color: '#007BFF'
    },
    {
      id: 'storage',
      title: '데이터 저장소',
      subtitle: 'Cloud Storage',
      description: '대용량 데이터 저장 및 관리',
      components: [
        { name: 'S3', engName: 'Amazon S3', description: '대용량 데이터 저장' },
        { name: 'TimescaleDB', engName: 'TimescaleDB', description: '시계열 데이터 처리' },
        { name: 'PostgreSQL', engName: 'PostgreSQL', description: '관계형 데이터 관리' },
      ],
      technologies: ['S3', 'TimescaleDB', 'PostgreSQL'],
      benefits: ['고성능', '확장성', '데이터 무결성'],
      color: '#007BFF'
    },
    {
      id: 'analytics',
      title: '분석',
      subtitle: 'Analytics',
      description: 'AI/ML 기반 데이터 분석',
      components: [
        { name: 'SageMaker', engName: 'AWS SageMaker', description: '머신러닝 기반 예측' },
        { name: 'Power BI', engName: 'Microsoft Power BI', description: '비즈니스 인텔리전스' },
        { name: 'QuickSight', engName: 'AWS QuickSight', description: '데이터 시각화' },
      ],
      technologies: ['SageMaker', 'Power BI', 'QuickSight'],
      benefits: ['예측 분석', '인사이트 도출', '시각화'],
      color: '#28A745'
    },
    {
      id: 'security',
      title: '보안',
      subtitle: 'Security',
      description: '데이터 보안 및 접근 제어',
      components: [
        { name: 'IAM', engName: 'Identity & Access Management', description: '접근 권한 관리' },
        { name: 'KMS', engName: 'Key Management Service', description: '암호화 키 관리' },
      ],
      technologies: ['IAM', 'KMS', '암호화'],
      benefits: ['보안 강화', '규제 준수', '접근 제어'],
      color: '#DC3545'
    },
    {
      id: 'customer-services',
      title: '고객 서비스',
      subtitle: 'Customer Services',
      description: 'B2B/B2C 고객 서비스 플랫폼',
      components: [
        { name: '실시간 모니터링', engName: 'Real-time Monitoring', description: 'B2B 대시보드' },
        { name: '모바일 앱', engName: 'Mobile App', description: 'B2C 플랫폼' },
      ],
      technologies: ['React', 'React Native', 'WebSocket'],
      benefits: ['실시간 서비스', '사용자 경험', '접근성'],
      color: '#6C757D'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          클라우드 시스템 아키텍처
          <span className="block text-xl text-gray-400 mt-2">Cloud System Architecture</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="h-full p-6 rounded-xl backdrop-blur-lg"
                style={{
                  backgroundColor: `${section.color}15`,
                  borderColor: section.color,
                  borderWidth: '1px',
                }}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {section.title}
                  <span className="block text-sm font-normal text-gray-400">
                    {section.subtitle}
                  </span>
                </h3>

                <div className="space-y-3 mt-4">
                  {section.components.map((component, index) => (
                    <motion.div
                      key={index}
                      className="p-3 bg-white/5 rounded-lg cursor-pointer"
                      whileHover={{ scale: 1.02, backgroundColor: `${section.color}30` }}
                    >
                      <p className="text-white font-medium">
                        {component.name}
                        <span className="block text-sm text-gray-400">
                          {component.engName}
                        </span>
                      </p>
                      {component.description && (
                        <p className="text-sm text-gray-400 mt-1">
                          {component.description}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white/10 backdrop-blur-lg rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            글로벌 센터
            <span className="block text-sm text-gray-400">Global Centers</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: '한국', engName: 'Korea' },
              { name: '미국', engName: 'USA' },
              { name: '캐나다', engName: 'Canada' },
              { name: '대만', engName: 'Taiwan' }
            ].map((country) => (
              <motion.div
                key={country.name}
                className="p-4 bg-white/5 rounded-lg text-center text-white cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <p className="font-bold">{country.name}</p>
                <p className="text-sm text-gray-400">{country.engName}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 시스템 구성도 추가 */}
        <div className="mt-12">
          <DataFlow />
        </div>
      </motion.div>
    </div>
  );
};

export default SystemArchitecture;