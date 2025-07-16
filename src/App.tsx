'use client';

import { useState } from 'react';
import { Introduction } from '@/components/Introduction';
import SystemArchitecture from '@/components/SystemArchitecture';
import ExecutiveDashboard from '@/components/ExecutiveDashboard';
import { CustomerJourney } from '@/components/CustomerJourney';
import { TechnicalArchitecture } from '@/components/TechnicalArchitecture';
import { UseCases } from '@/components/UseCases';

type View = 'intro' | 'architecture' | 'dashboard' | 'journey' | 'technical' | 'cases';

export default function Home() {
  const [currentView, setCurrentView] = useState<View>('intro');

  const renderView = () => {
    switch (currentView) {
      case 'intro':
        return <Introduction />;
      case 'architecture':
        return <SystemArchitecture />;
      case 'dashboard':
        return <ExecutiveDashboard />;
      case 'journey':
        return <CustomerJourney />;
      case 'technical':
        return <TechnicalArchitecture />;
      case 'cases':
        return <UseCases />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 py-4">
            <button onClick={() => setCurrentView('intro')} className={`px-4 py-2 rounded-md ${currentView === 'intro' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>개요</button>
            <button onClick={() => setCurrentView('architecture')} className={`px-4 py-2 rounded-md ${currentView === 'architecture' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>시스템 아키텍처</button>
            <button onClick={() => setCurrentView('dashboard')} className={`px-4 py-2 rounded-md ${currentView === 'dashboard' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>경영진 대시보드</button>
            <button onClick={() => setCurrentView('journey')} className={`px-4 py-2 rounded-md ${currentView === 'journey' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>고객 여정 맵</button>
            <button onClick={() => setCurrentView('technical')} className={`px-4 py-2 rounded-md ${currentView === 'technical' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>관련기술 발전방향</button>
            <button onClick={() => setCurrentView('cases')} className={`px-4 py-2 rounded-md ${currentView === 'cases' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>활용사례</button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderView()}
      </main>
    </div>
  );
} 