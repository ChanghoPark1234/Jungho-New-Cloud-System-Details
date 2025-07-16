export interface ScenarioDetail {
  title: string;
  content: string;
}

export interface Scenario {
  title: string;
  icon: string;
  description: string;
  details: ScenarioDetail[];
  benefits: string[];
}

export interface CloudInfo {
  platform: string;
  period: string;
  cost: string;
}

export interface CaseStudy {
  company: string;
  type: string;
  icon: string;
  overview: string;
  cloud: CloudInfo;
  cases: string[];
  applicability: string[];
}

export type TabType = 'scenarios' | 'cases'; 