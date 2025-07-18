import React from 'react';

export const slides = [
  // 슬라이드 1: 표지
  {
    id: 1,
    className: 'slide-1',
    content: (
      <>
        <h1>정호그룹 클라우드 시스템 구축 전략</h1>
        <div className="subtitle">조명/전력제어시스템 전문업체의 데이터 기반 비즈니스 혁신</div>
        <div className="author">정호그룹 자문위원 박창호<br />2025년 7월</div>
      </>
    )
  },
  
  // 슬라이드 2: 도입 및 배경
  {
    id: 2,
    content: (
      <>
        <h2>도입 및 배경</h2>
        <ul>
          <li>한국, 미국, 캐나다, 대만 등 글로벌 시장에서 조명.전력제어시스템 데이터 관리 필요성</li>
          <li>조명제어, 전력제어 및 종합시설관리시스템(SI/FMS) 운영</li>
          <li>데이터 기반 비즈니스 혁신, B2C 시장 진출 목표</li>
        </ul>
        <div className="highlight-box" style={{ marginBottom: '60px' }}>
          <strong>핵심 목표:</strong> 조명, 전력제어 데이터 자산화, 글로벌 확장, 스마트 조명 서비스 창출
        </div>
      </>
    )
  },
  
  // 슬라이드 3: 현장 데이터 관리의 도전과 해법
  {
    id: 3,
    content: (
      <>
        <h2>조명제어 데이터 관리의 도전과 해법</h2>
        <div className="highlight-box">
          <strong>도전:</strong> 조명, 전력, FMS 등 다양한 시스템 데이터의 통합 관리 필요
        </div>
        <ul>
          <li>글로벌 분산 조명제어 데이터의 실시간 처리 및 저장</li>
          <li>대용량 조명 시계열 데이터의 효율적 관리</li>
          <li>조명제어 데이터 보안 및 규제 준수</li>
        </ul>
        <div className="info-box">
          <strong>해법:</strong> 클라우드 기반 중앙화, 시계열 DB, 데이터 압축, 예측 유지보수
        </div>
        <ul>
          <li>클라우드 기반 조명제어 데이터 관리(AWS, Azure, Google Cloud)</li>
          <li>시계열 DB(InfluxDB, TimescaleDB)로 효율적 저장</li>
          <li>중요 조명 데이터 선별/압축, 머신러닝 기반 예측 유지보수</li>
        </ul>
      </>
    )
  },
  
  // 슬라이드 4: 클라우드 시스템 구축 전략
  {
    id: 4,
    content: (
      <>
        <h2 style={{ marginTop: '40px', marginBottom: '30px' }}>정호그룹 클라우드 시스템 구축 전략</h2>
        <div className="phases" style={{ marginBottom: '25px', gap: '15px' }}>
          <div className="phase" style={{ padding: '15px', minHeight: '140px' }}>
            <div className="phase-number">1</div>
            <h3>요구분석 및 계획</h3>
            <p><strong>기간:</strong> 1-2개월</p>
            <p>조명제어 데이터 요구사항 정의, 규제 준수 확인, 비즈니스 목표 설정</p>
          </div>
          <div className="phase" style={{ padding: '15px', minHeight: '140px' }}>
            <div className="phase-number">2</div>
            <h3>하이브리드 클라우드 모델 선택</h3>
            <p><strong>기간:</strong> 3-6개월</p>
            <p>상용 클라우드 기반 하이브리드 모델 구축</p>
          </div>
          <div className="phase" style={{ padding: '15px', minHeight: '140px' }}>
            <div className="phase-number">3</div>
            <h3>데이터 마이그레이션 및 통합</h3>
            <p><strong>기간:</strong> 6-12개월</p>
            <p>기존 조명제어 데이터 클라우드 이전, 시스템 통합</p>
          </div>
          <div className="phase" style={{ padding: '15px', minHeight: '140px' }}>
            <div className="phase-number">4</div>
            <h3>최적화 및 비즈니스 모델 개발</h3>
            <p><strong>기간:</strong> 12-24개월</p>
            <p>조명제어 데이터 분석 서비스, B2C 스마트 조명 플랫폼 출시</p>
          </div>
        </div>
        <div className="highlight-box" style={{ marginBottom: '100px' }}>총 기간: 2년 | 추천: 하이브리드 클라우드 전략</div>
      </>
    )
  },
  
  // 슬라이드 5: 상용/자체/하이브리드 클라우드 비교
  {
    id: 5,
    content: (
      <>
        <h2>클라우드 모델 비교 및 추천</h2>
        <table className="comparison-table">
          <tr>
            <th>구분</th>
            <th>상용 클라우드</th>
            <th>자체 구축</th>
            <th>하이브리드</th>
          </tr>
          <tr>
            <td><strong>초기 비용</strong></td>
            <td>낮음 ($10K-20K)</td>
            <td>매우 높음 ($100K-500K)</td>
            <td>중간 ($20K-100K)</td>
          </tr>
          <tr>
            <td><strong>확장성</strong></td>
            <td>매우 높음</td>
            <td>제한적</td>
            <td>높음</td>
          </tr>
          <tr>
            <td><strong>보안 제어</strong></td>
            <td>표준화</td>
            <td>완전 제어</td>
            <td>균형</td>
          </tr>
          <tr>
            <td><strong>정호그룹 적합성</strong></td>
            <td>매우 적합</td>
            <td>부적합</td>
            <td>적합</td>
          </tr>
        </table>
        <div className="highlight-box">추천: 하이브리드 클라우드 (보안+확장성 균형, 조명제어 전문업체에 최적)</div>
      </>
    )
  },
  
  // 슬라이드 6: 보안 및 규제 준수
  {
    id: 6,
    content: (
      <>
        <h2>조명제어 데이터 보안 및 규제 준수 전략</h2>
        <div className="principles-grid">
          <div className="principle-item">
            <h4>데이터 암호화</h4>
            <p>AWS KMS, Azure Key Vault로 조명제어 데이터 암호화</p>
          </div>
          <div className="principle-item">
            <h4>접근 제어</h4>
            <p>IAM으로 역할 기반 접근 설정</p>
          </div>
          <div className="principle-item">
            <h4>글로벌 규제 준수</h4>
            <p>GDPR, CCPA, 한국 개인정보보호법</p>
          </div>
          <div className="principle-item">
            <h4>지역별 데이터센터</h4>
            <p>조명제어 데이터 주권 문제 해결</p>
          </div>
        </div>
        <div className="highlight-box" style={{ marginBottom: '60px' }}>
          <strong>구현:</strong> 민감한 조명제어 데이터는 온프레미스, 일반 데이터는 클라우드 저장
        </div>
      </>
    )
  },
  
  // 슬라이드 7: 데이터 활용 비즈니스 모델
  {
    id: 7,
    content: (
      <>
        <h2>조명제어 데이터 활용 비즈니스 모델</h2>
        <div className="principles-grid">
          <div className="principle-item">
            <h4>스마트 조명 구독 서비스</h4>
            <p>에너지 절감 보고서, 조명 유지보수 플랜 제공</p>
          </div>
          <div className="principle-item">
            <h4>스마트 빌딩 솔루션</h4>
            <p>조명, 전력, FMS 통합 관리 플랫폼</p>
          </div>
          <div className="principle-item">
            <h4>B2C 스마트 조명 키트</h4>
            <p>DIY 스마트 조명 키트 + 설치 가이드</p>
          </div>
          <div className="principle-item">
            <h4>AI 기반 조명 인사이트</h4>
            <p>머신러닝으로 조명 예측 유지보수</p>
          </div>
        </div>
        <div className="highlight-box">예상 매출 증가: 15-30% (조명제어 업계 사례 기준)</div>
      </>
    )
  },
  
  // 슬라이드 8: B2C 시장 지원 전략
  {
    id: 8,
    content: (
      <>
        <h2>B2C 스마트 조명 시장 지원 전략</h2>
        <div className="flow-diagram">
          <div className="flow-box">스마트 조명 구매</div>
          <div className="flow-arrow">→</div>
          <div className="flow-box">설치 가이드</div>
          <div className="flow-arrow">→</div>
          <div className="flow-box">온라인 지원</div>
          <div className="flow-arrow">→</div>
          <div className="flow-box">조명 커뮤니티</div>
        </div>
        <ul>
          <li>직관적인 조명 설치 가이드: 동영상, AR/VR, QR 코드</li>
          <li>DIY 스마트 조명 키트: 플러그 앤 플레이 방식</li>
          <li>온라인 조명 지원: 실시간 채팅, AI 챗봇</li>
          <li>조명 커뮤니티: 유튜브, SNS, Q&A 운영</li>
        </ul>
        <div className="highlight-box" style={{ marginBottom: '60px' }}>
          <strong>목표:</strong> 비전문 고객도 30분 내 스마트 조명 설치 완료 가능
        </div>
      </>
    )
  },
  
  // 슬라이드 9: 유사 기업 성공 사례
  {
    id: 9,
    content: (
      <>
        <h2>조명제어 업계 성공 사례</h2>
        <div className="phases">
          <div className="phase">
            <div className="phase-number">A</div>
            <h3>스마트 조명 솔루션 (한국)</h3>
            <p><strong>플랫폼:</strong> AWS (IoT Core, S3, Redshift)</p>
            <p><strong>성과:</strong> 매출 15% 증가, 조명 유지보수 요청 30% 감소</p>
          </div>
          <div className="phase">
            <div className="phase-number">B</div>
            <h3>조명 에너지 관리 (미국)</h3>
            <p><strong>플랫폼:</strong> Azure (IoT Hub, Power BI)</p>
            <p><strong>성과:</strong> 매출 20% 증가, 조명 에너지 효율 10-20% 개선</p>
          </div>
          <div className="phase">
            <div className="phase-number">C</div>
            <h3>스마트 조명 마케팅 (한국)</h3>
            <p><strong>플랫폼:</strong> Google Cloud (BigQuery)</p>
            <p><strong>성과:</strong> 전환율 25% 향상, 조명 지원 비용 40% 절감</p>
          </div>
        </div>
        <div className="highlight-box">공통점: 클라우드 도입 후 조명제어 매출 증가, 비용 절감, 고객 지원 강화</div>
      </>
    )
  },
  
  // 슬라이드 10: 비용-편익 분석
  {
    id: 10,
    content: (
      <>
        <h2>정호그룹 비용-편익 분석</h2>
        
        {/* 비용 비교 섹션 */}
        <div style={{ marginTop: '20px', marginBottom: '25px' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '15px', color: '#1E293B' }}>비용 비교</h3>
          <div className="budget-chart">
            <div className="budget-bar phase1" data-label="상용 클라우드"></div>
            <div className="budget-bar phase2" data-label="하이브리드"></div>
            <div className="budget-bar phase3" data-label="정부 지원"></div>
          </div>
          <div className="budget-labels">
            <div className="budget-label">$22K-50K/년</div>
            <div className="budget-label">$38K-160K/년</div>
            <div className="budget-label">최대 8천만원</div>
          </div>
        </div>

        {/* 주요 지표 섹션 - 한 줄로 배치 */}
        <div className="metrics-row" style={{ marginTop: '15px', marginBottom: '15px' }}>
          <div className="metric-item-row">
            <div className="metric-number-row">15-30%</div>
            <div className="metric-label-row">조명제어 매출 증가 예상</div>
          </div>
          <div className="metric-item-row">
            <div className="metric-number-row">20-40%</div>
            <div className="metric-label-row">조명 유지보수 비용 절감</div>
          </div>
          <div className="metric-item-row">
            <div className="metric-number-row">12-18개월</div>
            <div className="metric-label-row">ROI 회수 기간</div>
          </div>
          <div className="metric-item-row">
            <div className="metric-number-row">50-80%</div>
            <div className="metric-label-row">정부 지원 절감</div>
          </div>
        </div>

        <div className="highlight-box" style={{ marginBottom: '60px' }}>
          <strong>정부 지원:</strong> 2025년 중소기업 클라우드 바우처 사업 (최대 8,000만원)
        </div>
      </>
    )
  },
  
  // 슬라이드 11: 경영진 설득 포인트
  {
    id: 11,
    content: (
      <>
        <h2>정호그룹 경영진 설득 포인트</h2>
        <div className="principles-grid">
          <div className="principle-item">
            <h4>조명제어 데이터 기반 성장</h4>
            <p>조명제어 데이터 자산화로 신규 스마트 조명 서비스 창출</p>
          </div>
          <div className="principle-item">
            <h4>글로벌 조명제어 경쟁력</h4>
            <p>지역별 데이터센터, 조명제어 규제 준수</p>
          </div>
          <div className="principle-item">
            <h4>B2C 스마트 조명 시장 진출</h4>
            <p>사용자 친화적 스마트 조명 플랫폼으로 매출 확장</p>
          </div>
          <div className="principle-item">
            <h4>정부 지원 활용</h4>
            <p>조명제어 클라우드 초기 비용 50-80% 절감 가능</p>
          </div>
        </div>
        <div className="highlight-box">
          <strong>핵심:</strong> 조명제어 업계 사례 기반 설득, 리스크 완화, 단계적 접근
        </div>
      </>
    )
  },
  
  // 슬라이드 12: 다음 단계 및 제안
  {
    id: 12,
    content: (
      <>
        <h2>정호그룹 다음 단계 및 제안</h2>
        <div className="phases" style={{ marginTop: '20px', marginBottom: '25px' }}>
          <div className="phase">
            <div className="phase-number">1</div>
            <h3>정부 지원 신청</h3>
            <p>2026년 2월경 클라우드 사업 설명회 참가 및 지원신청</p>
          </div>
          <div className="phase">
            <div className="phase-number">2</div>
            <h3>조명제어 컨설팅 파트너 선정</h3>
            <p>AWS Partner Network, Azure 전문 파트너와 협력</p>
          </div>
          <div className="phase">
            <div className="phase-number">3</div>
            <h3>조명제어 파일럿 프로젝트</h3>
            <p>소규모 조명제어 데이터셋으로 3개월 내 클라우드 테스트</p>
          </div>
          <div className="phase">
            <div className="phase-number">4</div>
            <h3>교육 및 역량 강화</h3>
            <p>IT 팀 대상 클라우드 교육, B2C 스마트 조명 플랫폼 프로토타입</p>
          </div>
        </div>
        <div className="info-box" style={{ marginBottom: '60px' }}>
          <strong>문의:</strong> 정보통신산업진흥원(NIPA) 황은진 책임 (043-931-5772)<br />
          <strong>다음 단계:</strong> 경영진 승인 후 정호그룹 조명제어 시스템 세부 실행 계획 수립
        </div>
      </>
    )
  }
]; 