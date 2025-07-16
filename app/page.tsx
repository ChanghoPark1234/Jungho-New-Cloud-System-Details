import Presentation from '@/components/Presentation';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <Presentation />
    </div>
  );
} 