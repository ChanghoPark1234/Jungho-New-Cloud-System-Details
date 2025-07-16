import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import mermaid from 'mermaid';

export const DataFlow: React.FC = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
        padding: 50,
        nodeSpacing: 100,
        rankSpacing: 120
      },
      maxTextSize: 5000
    });
    mermaid.contentLoaded();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          클라우드 시스템 구성도
        </h2>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-50 rounded-xl"></div>
          <pre className="mermaid text-xl p-4 overflow-x-auto">
            {`
              %%{
                init: {
                  'theme': 'base',
                  'themeVariables': {
                    'primaryColor': '#fff',
                    'primaryTextColor': '#000000',
                    'primaryBorderColor': '#000000',
                    'lineColor': '#000000',
                    'secondaryColor': '#fff',
                    'tertiaryColor': '#fff',
                    'fontSize': '24px',
                    'fontWeight': 'bold',
                    'messageFontSize': '16px',
                    'messageTextColor': '#000000'
                  }
                }
              }%%
              flowchart LR
                subgraph 현장["🏭 현장"]
                  A(("현장장치<br/><small style='font-size:20px;color:#000000;font-weight:700'>조명/전력 제어기<br/>센서</small>"))
                end

                subgraph IoT["📡 IoT 플랫폼"]
                  B(("IoT 플랫폼<br/><small style='font-size:20px;color:#000000;font-weight:700'>AWS IoT Core<br/>Azure IoT Hub</small>"))
                end

                subgraph Storage["💾 데이터저장소"]
                  C(("데이터저장소<br/><small style='font-size:20px;color:#000000;font-weight:700'>S3, TimescaleDB<br/>실시간/이력</small>"))
                end

                subgraph Analytics["📊 분석엔진"]
                  D(("분석엔진<br/><small style='font-size:20px;color:#000000;font-weight:700'>SageMaker<br/>Power BI</small>"))
                end

                subgraph Service["👥 고객서비스"]
                  E(("고객서비스<br/><small style='font-size:20px;color:#000000;font-weight:700'>대시보드<br/>모바일 앱</small>"))
                end

                subgraph Global["🌎 글로벌센터"]
                  F(("글로벌센터<br/><small style='font-size:20px;color:#000000;font-weight:700'>24/7 모니터링<br/>기술지원</small>"))
                end

                classDef default fill:#f9f9f9,stroke:#666,stroke-width:2.5px;
                classDef highlight fill:#e3f2fd,stroke:#1976d2,stroke-width:3px;
                classDef storage fill:#fff3e0,stroke:#f57c00,stroke-width:2.5px;
                classDef analytics fill:#e8f5e9,stroke:#2e7d32,stroke-width:2.5px;
                classDef service fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2.5px;
                classDef global fill:#fce4ec,stroke:#c2185b,stroke-width:2.5px;

                class A,현장 highlight;
                class B,IoT highlight;
                class C,Storage storage;
                class D,Analytics analytics;
                class E,Service service;
                class F,Global global;

                A --> |"실시간 데이터"| B;
                B --> |"데이터 수집"| C;
                C --> |"데이터 처리"| D;
                D --> |"분석 결과"| E;
                E --> |"알림/보고"| F;
                F -.-> |"원격 제어"| A;

                linkStyle default stroke:#4a4a4a,stroke-width:2.5px;
                linkStyle 5 stroke-dasharray: 5 5;
            `}
          </pre>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-semibold text-blue-800 mb-2">데이터 흐름</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>현장 데이터 실시간 수집 (1분 주기)</li>
              <li>IoT 프로토콜 기반 안전한 전송</li>
              <li>시계열 데이터베이스 저장</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-semibold text-green-800 mb-2">분석 프로세스</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>머신러닝 기반 예측 분석</li>
              <li>실시간 모니터링 및 알림</li>
              <li>에너지 효율 최적화</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-semibold text-purple-800 mb-2">서비스 제공</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>웹/모바일 대시보드</li>
              <li>글로벌 기술 지원</li>
              <li>원격 제어 및 설정</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}; 