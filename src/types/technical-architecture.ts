export interface SystemFeature {
  id: string;
  title: string;
  description: string;
  technicalDetails: string[];
  businessImpact: string[];
}

export interface MigrationPhase {
  id: string;
  title: string;
  duration: string;
  tasks: string[];
  risks: string[];
  mitigation: string[];
}

export const CURRENT_SYSTEM_FEATURES: SystemFeature[] = [
  {
    id: 'server',
    title: '온프레미스 서버',
    description: '자체 데이터센터 운영',
    technicalDetails: [
      'Dell PowerEdge 서버',
      'Windows Server 2019',
      'SQL Server 2019',
      '로컬 스토리지'
    ],
    businessImpact: [
      '높은 초기 투자 비용',
      '유지보수 인력 필요',
      '확장성 제한'
    ]
  },
  {
    id: 'data-collection',
    title: '수동 데이터 수집',
    description: '현장 방문 기반 데이터 수집',
    technicalDetails: [
      'USB 데이터 로거',
      '수동 데이터 입력',
      '주간 데이터 동기화',
      '로컬 백업'
    ],
    businessImpact: [
      '데이터 수집 지연',
      '인적 오류 가능성',
      '실시간 대응 불가'
    ]
  },
  {
    id: 'analytics',
    title: '제한된 분석',
    description: '기본 보고서 및 차트',
    technicalDetails: [
      'Excel 기반 분석',
      'Power BI Desktop',
      '정적 보고서',
      '수동 업데이트'
    ],
    businessImpact: [
      '심층 분석 제한',
      '예측 분석 불가',
      '의사결정 지연'
    ]
  },
  {
    id: 'support',
    title: '개별 고객 지원',
    description: '전화/이메일 기반 지원',
    technicalDetails: [
      '티켓 시스템',
      '이메일 기반 알림',
      'VPN 원격 접속',
      '수동 모니터링'
    ],
    businessImpact: [
      '대응 시간 지연',
      '고객 만족도 저하',
      '운영 비용 증가'
    ]
  }
];

export const FUTURE_SYSTEM_FEATURES: SystemFeature[] = [
  {
    id: 'cloud',
    title: 'AWS/Azure 클라우드',
    description: '하이브리드 클라우드 아키텍처',
    technicalDetails: [
      'AWS EC2/Azure VM',
      'Kubernetes 오케스트레이션',
      'Auto Scaling',
      '지역 분산 배포'
    ],
    businessImpact: [
      '탄력적 확장/축소',
      '운영 비용 최적화',
      '글로벌 서비스 가능'
    ]
  },
  {
    id: 'iot-data',
    title: '실시간 IoT 데이터 수집',
    description: '자동화된 데이터 수집 및 처리',
    technicalDetails: [
      'AWS IoT Core',
      'Azure IoT Hub',
      'MQTT 프로토콜',
      'Apache Kafka'
    ],
    businessImpact: [
      '실시간 모니터링',
      '자동화된 대응',
      '데이터 정확성 향상'
    ]
  },
  {
    id: 'ai-analytics',
    title: 'AI 기반 분석 및 예측',
    description: '머신러닝 기반 인사이트',
    technicalDetails: [
      'AWS SageMaker',
      'Azure ML Studio',
      'TensorFlow',
      'MLOps 파이프라인'
    ],
    businessImpact: [
      '예측적 유지보수',
      '에너지 사용 최적화',
      '비용 절감'
    ]
  },
  {
    id: 'platform',
    title: '통합 B2B/B2C 플랫폼',
    description: '단일 플랫폼 기반 서비스',
    technicalDetails: [
      'React 프론트엔드',
      'GraphQL API',
      'Microservices',
      'CI/CD 파이프라인'
    ],
    businessImpact: [
      '통합 관리 효율화',
      '신속한 기능 출시',
      '고객 경험 향상'
    ]
  }
];

export const MIGRATION_PHASES: MigrationPhase[] = [
  {
    id: 'assessment',
    title: '현황 분석 및 계획',
    duration: '2개월',
    tasks: [
      '현재 시스템 분석',
      '요구사항 정의',
      '클라우드 전략 수립',
      '예산 및 일정 계획'
    ],
    risks: [
      '불완전한 시스템 분석',
      '누락된 요구사항'
    ],
    mitigation: [
      '상세한 시스템 감사 수행',
      '이해관계자 인터뷰 진행'
    ]
  },
  {
    id: 'pilot',
    title: '파일럿 구축',
    duration: '3개월',
    tasks: [
      '클라우드 환경 구성',
      'PoC 시스템 개발',
      '성능 테스트',
      '보안 검증'
    ],
    risks: [
      '기술적 호환성 문제',
      '성능 저하'
    ],
    mitigation: [
      '사전 기술 검증',
      '단계적 마이그레이션'
    ]
  },
  {
    id: 'migration',
    title: '단계적 마이그레이션',
    duration: '6개월',
    tasks: [
      '데이터 이전',
      '시스템 전환',
      '통합 테스트',
      '사용자 교육'
    ],
    risks: [
      '데이터 손실',
      '서비스 중단'
    ],
    mitigation: [
      '이중화 운영',
      '롤백 계획 수립'
    ]
  },
  {
    id: 'optimization',
    title: '안정화 및 최적화',
    duration: '3개월',
    tasks: [
      '성능 모니터링',
      '시스템 최적화',
      '운영 프로세스 정립',
      '매뉴얼 작성'
    ],
    risks: [
      '운영 비용 증가',
      '사용자 저항'
    ],
    mitigation: [
      '비용 모니터링 도구 도입',
      '지속적인 교육 제공'
    ]
  }
]; 