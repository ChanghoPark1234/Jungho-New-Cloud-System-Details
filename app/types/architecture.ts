export interface SystemComponent {
  name: string;
  engName: string;
  description: string;
}

export interface SystemSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  components: SystemComponent[];
  technologies: string[];
  benefits: string[];
  color: string;
}

export interface DataFlowStep {
  id: string;
  title: string;
  description: string;
  source: string;
  destination: string;
  dataType: string;
  frequency: string;
}

export const SYSTEM_SECTIONS: SystemSection[] = [
  {
    id: 'frontend',
    title: '프론트엔드',
    subtitle: 'Frontend',
    description: '사용자 인터페이스 및 대시보드',
    components: [
      { name: 'React Dashboard', engName: 'React Dashboard', description: '관리자 대시보드' },
      { name: 'Mobile App', engName: 'Mobile App', description: '모바일 애플리케이션' },
      { name: 'Admin Panel', engName: 'Admin Panel', description: '관리자 패널' }
    ],
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    benefits: ['반응형 디자인', '실시간 업데이트', '직관적 UI'],
    color: '#007BFF'
  },
  {
    id: 'backend',
    title: '백엔드 API',
    subtitle: 'Backend API',
    description: '비즈니스 로직 및 데이터 처리',
    components: [
      { name: 'REST API', engName: 'REST API', description: 'RESTful API 서비스' },
      { name: 'GraphQL', engName: 'GraphQL', description: 'GraphQL API' },
      { name: 'WebSocket', engName: 'WebSocket', description: '실시간 통신' }
    ],
    technologies: ['Node.js', 'Express', 'TypeScript'],
    benefits: ['확장 가능한 구조', '보안 강화', '성능 최적화'],
    color: '#28A745'
  },
  {
    id: 'database',
    title: '데이터베이스',
    subtitle: 'Database',
    description: '데이터 저장 및 관리',
    components: [
      { name: 'PostgreSQL', engName: 'PostgreSQL', description: '관계형 데이터베이스' },
      { name: 'Redis', engName: 'Redis', description: '캐시 및 세션 저장소' },
      { name: 'TimescaleDB', engName: 'TimescaleDB', description: '시계열 데이터베이스' }
    ],
    technologies: ['PostgreSQL', 'Redis', 'InfluxDB'],
    benefits: ['고성능 쿼리', '데이터 무결성', '백업 및 복구'],
    color: '#FFC107'
  },
  {
    id: 'cloud',
    title: '클라우드 인프라',
    subtitle: 'Cloud Infrastructure',
    description: '클라우드 서비스 및 배포',
    components: [
      { name: 'AWS/Azure', engName: 'AWS/Azure', description: '클라우드 플랫폼' },
      { name: 'Docker', engName: 'Docker', description: '컨테이너화' },
      { name: 'Kubernetes', engName: 'Kubernetes', description: '오케스트레이션' }
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes'],
    benefits: ['자동 확장', '고가용성', '비용 효율성'],
    color: '#DC3545'
  }
];

export const DATA_FLOW_STEPS: DataFlowStep[] = [
  {
    id: 'collection',
    title: '데이터 수집',
    description: 'IoT 센서에서 실시간 데이터 수집',
    source: 'IoT Devices',
    destination: 'Edge Gateway',
    dataType: 'Sensor Data',
    frequency: 'Real-time'
  },
  {
    id: 'processing',
    title: '데이터 처리',
    description: '엣지에서 초기 데이터 처리 및 필터링',
    source: 'Edge Gateway',
    destination: 'Cloud API',
    dataType: 'Processed Data',
    frequency: 'Near real-time'
  },
  {
    id: 'storage',
    title: '데이터 저장',
    description: '클라우드 데이터베이스에 저장',
    source: 'Cloud API',
    destination: 'Database',
    dataType: 'Structured Data',
    frequency: 'Batch'
  },
  {
    id: 'analysis',
    title: '데이터 분석',
    description: 'AI/ML 모델을 통한 인사이트 도출',
    source: 'Database',
    destination: 'Analytics Engine',
    dataType: 'Analytics Results',
    frequency: 'Scheduled'
  },
  {
    id: 'visualization',
    title: '데이터 시각화',
    description: '대시보드에 결과 표시',
    source: 'Analytics Engine',
    destination: 'Frontend',
    dataType: 'Visual Data',
    frequency: 'Real-time'
  }
]; 