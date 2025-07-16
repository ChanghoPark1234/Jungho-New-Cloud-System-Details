export interface Component {
  name: string;
  engName: string;
  description?: string;
}

export interface SystemSection {
  id: string;
  title: string;
  subtitle: string;
  components: Component[];
  color: string;
}

export interface DataFlowProps {
  from: string;
  to: string;
  description?: string;
} 