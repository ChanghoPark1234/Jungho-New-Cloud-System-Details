'use client';

import React from 'react';
import { useState } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { B2B_STAGES, B2C_STAGES, CustomerType } from '../../types/customer-journey';
import { JourneyPath } from './JourneyPath';

export const CustomerJourney: FC = () => {
  const [activeType, setActiveType] = useState<CustomerType>('B2B');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            고객 여정 맵
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            조명 제어 클라우드 시스템 도입부터 활용까지
          </motion.p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {(['B2B', 'B2C'] as CustomerType[]).map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`
                px-6 py-3 rounded-lg font-medium text-lg
                transition-all duration-300
                ${activeType === type
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
                }
              `}
            >
              {type === 'B2B' ? '기업 고객' : '개인 고객'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <JourneyPath
            type="B2B"
            stages={B2B_STAGES}
            isActive={activeType === 'B2B'}
          />
          <JourneyPath
            type="B2C"
            stages={B2C_STAGES}
            isActive={activeType === 'B2C'}
          />
        </div>
      </div>
    </div>
  );
}; 