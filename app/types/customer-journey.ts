export interface CustomerStage {
  id: string;
  title: string;
  description: string;
  duration: string;
  touchpoints: string[];
  valueProposition: string;
  painPoints: string[];
  solutions: string[];
  metrics: string[];
  benefits: string[];
}

export type CustomerType = 'B2B' | 'B2C';
export type JourneyStage = CustomerStage;

export const B2B_STAGES: CustomerStage[] = [
  {
    id: 'awareness',
    title: '인지 단계',
    description: '조명제어시스템 필요성 인지',
    duration: '1-2개월',
    touchpoints: ['업계 세미나', '전시회', '온라인 광고'],
    valueProposition: '에너지 효율성과 운영 비용 절감의 중요성 인지',
    painPoints: ['에너지 비용 증가', '수동 관리의 한계', '규제 준수 압박'],
    solutions: ['스마트 조명 솔루션 소개', '성공 사례 공유', 'ROI 분석 제공'],
    metrics: ['웹사이트 방문자 수', '백서 다운로드', '세미나 참석자'],
    benefits: ['에너지 절감', '운영 효율화']
  },
  {
    id: 'consideration',
    title: '검토 단계',
    description: '기술 검토 및 솔루션 비교',
    duration: '2-3개월',
    touchpoints: ['기술 세미나', '사례 연구', '견적 요청'],
    valueProposition: '기술적 우수성과 비즈니스 가치 입증',
    painPoints: ['기술 복잡성', '기존 시스템 통합', '투자 대비 효과'],
    solutions: ['기술 데모', 'POC 진행', '상세한 기술 문서'],
    metrics: ['기술 문의', '데모 요청', '견적 요청'],
    benefits: ['기술 신뢰성 확보', '비용 대비 효과 검증']
  },
  {
    id: 'decision',
    title: '결정 단계',
    description: '최종 구매 결정',
    duration: '1개월',
    touchpoints: ['계약 체결', '프로젝트 계획'],
    valueProposition: '명확한 ROI와 리스크 최소화',
    painPoints: ['예산 확보', '내부 승인', '구현 리스크'],
    solutions: ['단계별 구현 계획', '리스크 관리 방안', '지원 서비스 제공'],
    metrics: ['계약 체결', '프로젝트 승인', '예산 확정'],
    benefits: ['리스크 최소화', 'ROI 극대화']
  },
  {
    id: 'implementation',
    title: '구현 단계',
    description: '시스템 설치 및 구축',
    duration: '3-6개월',
    touchpoints: ['설치', '테스트', '교육'],
    valueProposition: '원활한 구축과 빠른 가치 실현',
    painPoints: ['구축 지연', '기술적 문제', '사용자 적응'],
    solutions: ['전담 PM 배정', '24/7 기술 지원', '사용자 교육 프로그램'],
    metrics: ['구축 완료율', '시스템 안정성', '사용자 만족도'],
    benefits: ['빠른 구축', '안정적 운영']
  }
];

export const B2C_STAGES: CustomerStage[] = [
  {
    id: 'discovery',
    title: '발견 단계',
    description: '스마트 조명 솔루션 발견',
    duration: '1-2주',
    touchpoints: ['소셜미디어', '온라인 검색', '친구 추천'],
    valueProposition: '편리하고 스마트한 조명 경험',
    painPoints: ['기존 조명의 불편함', '에너지 낭비', '복잡한 설정'],
    solutions: ['직관적인 UI/UX', '에너지 절약 기능', '간편한 설치'],
    metrics: ['소셜미디어 노출', '웹사이트 방문', '앱 다운로드'],
    benefits: ['편리함', '에너지 절약']
  },
  {
    id: 'research',
    title: '조사 단계',
    description: '제품 비교 및 리뷰 확인',
    duration: '1-2주',
    touchpoints: ['제품 리뷰', '비교 사이트', '고객 후기'],
    valueProposition: '신뢰할 수 있는 제품과 서비스',
    painPoints: ['제품 선택의 어려움', '가격 비교', '품질 우려'],
    solutions: ['상세한 제품 정보', '가격 비교 도구', '고객 후기 시스템'],
    metrics: ['제품 페이지 조회', '리뷰 읽기', '비교 도구 사용'],
    benefits: ['신뢰성', '합리적 선택']
  },
  {
    id: 'purchase',
    title: '구매 단계',
    description: '온라인 구매 및 결제',
    duration: '1일',
    touchpoints: ['온라인 쇼핑몰', '결제 시스템'],
    valueProposition: '안전하고 편리한 구매 경험',
    painPoints: ['결제 보안', '배송 시간', '환불 정책'],
    solutions: ['안전한 결제 시스템', '빠른 배송', '무료 반품'],
    metrics: ['장바구니 담기', '결제 완료', '구매 전환율'],
    benefits: ['안전성', '신속한 배송']
  },
  {
    id: 'setup',
    title: '설치 단계',
    description: 'DIY 설치 및 설정',
    duration: '1-2일',
    touchpoints: ['설치 가이드', '모바일 앱', '고객 지원'],
    valueProposition: '누구나 쉽게 설치할 수 있는 제품',
    painPoints: ['설치의 어려움', '기술적 문제', '설정 복잡성'],
    solutions: ['단계별 설치 가이드', 'AR 설치 지원', '24/7 고객 지원'],
    metrics: ['설치 완료율', '지원 요청', '사용자 만족도'],
    benefits: ['쉬운 설치', '지속적 지원']
  }
]; 