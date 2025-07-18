'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CustomerType, JourneyStage as JourneyStageType } from '@/types/customer-journey';
import { JourneyStage } from './JourneyStage';

interface Props {
  type: CustomerType;
  stages: JourneyStageType[];
  isActive: boolean;
}

export const JourneyPath: React.FC<Props> = ({ type, stages, isActive }) => {
  const [activeStageIndex, setActiveStageIndex] = useState<number | null>(null);

  const pathVariants = {
    hidden: { opacity: 0, x: type === 'B2B' ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const getPathTitle = () => {
    if (type === 'B2B') {
      return {
        title: '기업 고객 여정',
        subtitle: '백화점, 데이터센터 등 대규모 시설',
        color: 'blue'
      };
    }
    return {
      title: '개인 고객 여정',
      subtitle: '가정, 소상공인을 위한 솔루션',
      color: 'green'
    };
  };

  const { title, subtitle, color } = getPathTitle();

  return (
    <motion.div
      className={`w-full ${isActive ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}
      variants={pathVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={`mb-8 p-6 rounded-xl bg-${color}-50`}>
        <h2 className={`text-2xl font-bold text-${color}-700`}>{title}</h2>
        <p className={`text-${color}-600 mt-2`}>{subtitle}</p>
      </div>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
        
        <div className="space-y-6">
          {stages.map((stage, index) => (
            <JourneyStage
              key={stage.id}
              stage={stage}
              index={index}
              isActive={index === activeStageIndex}
              onClick={() => setActiveStageIndex(index === activeStageIndex ? null : index)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}; 