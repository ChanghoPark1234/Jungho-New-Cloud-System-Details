export type CustomerType = 'B2B' | 'B2C';

export interface JourneyStage {
  id: string;
  title: string;
  painPoints: string[];
  solutions: string[];
  valueProposition: string;
  benefits: string[];
  icon?: string;
}

export interface CustomerPath {
  type: CustomerType;
  title: string;
  description: string;
  stages: JourneyStage[];
}

export const B2B_STAGES: JourneyStage[] = [
  {
    id: 'awareness',
    title: '문제 인식',
    painPoints: ['에너지 비용 증가', '수동 관리의 비효율성'],
    solutions: ['에너지 사용량 분석', '자동화 솔루션 소개'],
    valueProposition: '운영 비용 절감과 효율적인 시설 관리',
    benefits: ['에너지 비용 25% 절감', '관리 시간 60% 단축']
  },
  {
    id: 'consideration',
    title: '솔루션 검토',
    painPoints: ['기존 시스템 호환성', '투자 대비 효과 불확실'],
    solutions: ['실시간 모니터링 데모', '맞춤형 ROI 분석'],
    valueProposition: '검증된 솔루션으로 안정적인 투자 효과',
    benefits: ['실시간 성과 측정', '커스터마이징 가능']
  },
  {
    id: 'implementation',
    title: '도입',
    painPoints: ['설치 과정 복잡', '업무 중단 우려'],
    solutions: ['전문 설치 서비스', '단계별 구축 계획'],
    valueProposition: '최소한의 업무 중단으로 신속한 구축',
    benefits: ['24시간 내 설치 완료', '즉시 사용 가능']
  },
  {
    id: 'operation',
    title: '운영',
    painPoints: ['시스템 적응 어려움', '데이터 활용 미흡'],
    solutions: ['대시보드 활용', '운영 교육 제공'],
    valueProposition: '직관적인 운영과 데이터 기반 의사결정',
    benefits: ['실시간 에너지 절감', '예측 유지보수']
  },
  {
    id: 'expansion',
    title: '확장',
    painPoints: ['추가 시설 통합', '확장 비용'],
    solutions: ['통합 관리 시스템', '컨설팅 서비스'],
    valueProposition: '손쉬운 확장과 지속적인 최적화',
    benefits: ['시설 간 통합 관리', '지속적 효율 개선']
  }
];

export const B2C_STAGES: JourneyStage[] = [
  {
    id: 'awareness',
    title: '문제 인식',
    painPoints: ['복잡한 조명 설정', '높은 전기료'],
    solutions: ['스마트 조명 소개', '에너지 절약 가이드'],
    valueProposition: '간편한 제어와 에너지 비용 절감',
    benefits: ['월 전기료 20% 절감', '스마트폰 원격 제어']
  },
  {
    id: 'consideration',
    title: '솔루션 검토',
    painPoints: ['제품 선택 어려움', '설치 걱정'],
    solutions: ['앱 다운로드 체험', '상세 제품 정보 제공'],
    valueProposition: '쉽고 편리한 스마트홈 경험',
    benefits: ['무료 체험 앱', '설치 가이드 제공']
  },
  {
    id: 'purchase',
    title: '구매',
    painPoints: ['가격 부담', '설치 서비스'],
    solutions: ['온라인 주문', '전문가 설치 옵션'],
    valueProposition: '합리적인 가격과 편리한 구매 경험',
    benefits: ['무료 배송', '설치 보증']
  },
  {
    id: 'usage',
    title: '사용',
    painPoints: ['앱 사용법', '기기 연결'],
    solutions: ['직관적 UI', '24/7 고객 지원'],
    valueProposition: '스마트폰으로 편리한 제어',
    benefits: ['에너지 사용량 실시간 확인', '자동화 설정']
  },
  {
    id: 'satisfaction',
    title: '만족',
    painPoints: ['지속적 관리', '업그레이드'],
    solutions: ['정기 업데이트', '커뮤니티 지원'],
    valueProposition: '지속적인 가치 제공과 업그레이드',
    benefits: ['리뷰 보상 프로그램', '추천 할인 혜택']
  }
]; 