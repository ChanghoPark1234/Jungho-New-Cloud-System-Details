'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { JourneyStage as JourneyStageType } from '@/types/customer-journey';

interface Props {
  stage: JourneyStageType;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export const JourneyStage: React.FC<Props> = ({ stage, index, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const stageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.2 
      }
    }
  };

  const detailsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: 'auto', 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className={`relative p-6 rounded-xl ${
        isActive ? 'bg-blue-50 shadow-lg' : 'bg-white'
      } hover:shadow-xl transition-all duration-300`}
      variants={stageVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 cursor-pointer">
        <div className={`
          w-10 h-10 rounded-full flex items-center justify-center
          ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'}
        `}>
          {index + 1}
        </div>
        <h3 className="text-xl font-semibold">{stage.title}</h3>
      </div>

      <motion.div
        variants={detailsVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="overflow-hidden"
      >
        <div className="mt-4 space-y-4">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-medium text-blue-600 mb-2">가치 제안</h4>
            <p>{stage.valueProposition}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-medium text-red-600 mb-2">Pain Points</h4>
              <ul className="list-disc list-inside">
                {stage.painPoints.map((point, idx) => (
                  <li key={idx} className="text-sm">{point}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-medium text-green-600 mb-2">Solutions</h4>
              <ul className="list-disc list-inside">
                {stage.solutions.map((solution, idx) => (
                  <li key={idx} className="text-sm">{solution}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-medium text-purple-600 mb-2">Benefits</h4>
            <div className="flex gap-4">
              {stage.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-purple-50 rounded-lg px-3 py-2 text-sm"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {isHovered && !isActive && (
        <div className="absolute inset-0 bg-black/5 rounded-xl flex items-center justify-center">
          <span className="text-blue-500">클릭하여 자세히 보기</span>
        </div>
      )}
    </motion.div>
  );
}; 