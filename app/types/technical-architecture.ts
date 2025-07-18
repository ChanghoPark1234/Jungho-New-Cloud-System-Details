export interface SystemFeature {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  implementation: string;
  technicalDetails: string[];
  businessImpact: string[];
}

export interface MigrationPhase {
  id: string;
  title: string;
  duration: string;
  description: string;
  tasks: string[];
  deliverables: string[];
  risks: string[];
  mitigation: string[];
}

export const CURRENT_SYSTEM_FEATURES: SystemFeature[] = [
  {
    id: 'legacy-control',
    title: '기존 조명 제어 시스템',
    description: '온프레미스 기반 조명 제어 시스템',
    benefits: ['안정성', '직접 제어'],
    implementation: '온프레미스 서버',
    technicalDetails: ['PLC 기반 제어', 'RS485 통신', '수동 설정'],
    businessImpact: ['높은 초기 비용', '확장성 제한', '유지보수 복잡']
  },
  {
    id: 'manual-monitoring',
    title: '수동 모니터링',
    description: '사람이 직접 조명 상태를 확인하고 제어',
    benefits: ['직접 확인', '즉시 대응'],
    implementation: '수동 점검 및 제어',
    technicalDetails: ['현장 점검', '수동 기록', '전화 보고'],
    businessImpact: ['인력 비용 증가', '응답 시간 지연', '인적 오류']
  },
  {
    id: 'local-data',
    title: '로컬 데이터 저장',
    description: '각 현장별로 독립적인 데이터 저장',
    benefits: ['독립성', '보안'],
    implementation: '로컬 데이터베이스',
    technicalDetails: ['SQLite 데이터베이스', '로컬 백업', '독립적 운영'],
    businessImpact: ['데이터 통합 어려움', '분석 한계', '중복 비용']
  }
];

export const FUTURE_SYSTEM_FEATURES: SystemFeature[] = [
  {
    id: 'cloud-control',
    title: '클라우드 기반 제어',
    description: '클라우드에서 중앙 집중식 조명 제어',
    benefits: ['원격 제어', '중앙 관리', '확장성'],
    implementation: 'AWS/Azure 클라우드',
    technicalDetails: ['IoT 게이트웨이', 'MQTT 프로토콜', 'REST API'],
    businessImpact: ['운영 비용 절감', '확장성 확보', '원격 관리 가능']
  },
  {
    id: 'ai-monitoring',
    title: 'AI 기반 자동 모니터링',
    description: '머신러닝을 통한 자동 상태 감지 및 제어',
    benefits: ['자동화', '예측 유지보수', '효율성'],
    implementation: 'AI/ML 모델',
    technicalDetails: ['TensorFlow 모델', '실시간 추론', '자동 학습'],
    businessImpact: ['유지보수 비용 절감', '다운타임 최소화', '효율성 향상']
  },
  {
    id: 'global-data',
    title: '글로벌 데이터 통합',
    description: '전 세계 현장의 데이터를 통합 관리',
    benefits: ['통합 분석', '글로벌 인사이트', '표준화'],
    implementation: '클라우드 데이터 웨어하우스',
    technicalDetails: ['BigQuery', '데이터 파이프라인', 'ETL 프로세스'],
    businessImpact: ['글로벌 인사이트', '표준화', '비용 효율성']
  },
  {
    id: 'real-time-analytics',
    title: '실시간 분석',
    description: '실시간 데이터 수집 및 분석',
    benefits: ['즉시 인사이트', '신속한 대응', '최적화'],
    implementation: '실시간 스트리밍',
    technicalDetails: ['Apache Kafka', '스트리밍 분석', '실시간 대시보드'],
    businessImpact: ['신속한 의사결정', '운영 최적화', '고객 만족도 향상']
  }
];

export const MIGRATION_PHASES: MigrationPhase[] = [
  {
    id: 'phase1',
    title: '1단계: 인프라 구축',
    duration: '3-6개월',
    description: '클라우드 인프라 및 기본 시스템 구축',
    tasks: [
      '클라우드 계정 설정',
      '네트워크 인프라 구축',
      '기본 보안 설정',
      '데이터베이스 마이그레이션'
    ],
    deliverables: [
      '클라우드 인프라 완성',
      '기본 시스템 구축',
      '보안 정책 수립'
    ],
    risks: [
      '클라우드 비용 초과',
      '보안 취약점',
      '데이터 손실'
    ],
    mitigation: [
      '비용 모니터링 시스템',
      '보안 감사 및 테스트',
      '정기 백업 및 복구 계획'
    ]
  },
  {
    id: 'phase2',
    title: '2단계: 시스템 통합',
    duration: '6-9개월',
    description: '기존 시스템과 클라우드 시스템 통합',
    tasks: [
      'API 개발 및 통합',
      '데이터 동기화 시스템 구축',
      '사용자 인터페이스 개발',
      '테스트 및 검증'
    ],
    deliverables: [
      '통합 시스템 완성',
      '사용자 대시보드',
      '데이터 동기화 완료'
    ],
    risks: [
      '시스템 호환성 문제',
      '데이터 손실',
      '사용자 저항'
    ],
    mitigation: [
      '단계적 마이그레이션',
      '데이터 검증 및 백업',
      '사용자 교육 및 지원'
    ]
  },
  {
    id: 'phase3',
    title: '3단계: 고급 기능 구현',
    duration: '9-12개월',
    description: 'AI/ML 기반 고급 기능 구현',
    tasks: [
      'AI 모델 개발',
      '예측 분석 시스템 구축',
      '자동화 기능 구현',
      '성능 최적화'
    ],
    deliverables: [
      'AI 기반 시스템',
      '예측 유지보수',
      '자동화 완료'
    ],
    risks: [
      'AI 모델 정확도 부족',
      '성능 병목',
      '복잡성 증가'
    ],
    mitigation: [
      '지속적인 모델 개선',
      '성능 모니터링',
      '단계적 기능 도입'
    ]
  },
  {
    id: 'phase4',
    title: '4단계: 글로벌 확장',
    duration: '12-18개월',
    description: '글로벌 시장 진출 및 확장',
    tasks: [
      '글로벌 인프라 구축',
      '다국어 지원',
      '현지화 및 규제 준수',
      'B2C 서비스 출시'
    ],
    deliverables: [
      '글로벌 시스템',
      'B2C 플랫폼',
      '완전한 클라우드 전환'
    ],
    risks: [
      '규제 준수 실패',
      '현지화 문제',
      '글로벌 경쟁'
    ],
    mitigation: [
      '현지 법무팀 고용',
      '현지 사용자 테스트',
      '차별화 전략 수립'
    ]
  }
]; 