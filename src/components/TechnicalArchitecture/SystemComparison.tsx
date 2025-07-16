import React from 'react';
import { motion } from 'framer-motion';
import { SystemFeature } from '../../types/technical-architecture';

interface Props {
  currentFeatures: SystemFeature[];
  futureFeatures: SystemFeature[];
}

export const SystemComparison: React.FC<Props> = ({
  currentFeatures,
  futureFeatures
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const renderFeature = (feature: SystemFeature, isCurrentSystem: boolean) => (
    <motion.div
      key={feature.id}
      variants={featureVariants}
      className={`
        p-6 rounded-xl backdrop-blur-lg
        ${isCurrentSystem ? 'bg-gray-800/50' : 'bg-blue-900/50'}
      `}
    >
      <h3 className="text-xl font-bold text-white mb-2">
        {feature.title}
      </h3>
      <p className="text-gray-300 mb-4">{feature.description}</p>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-blue-400 mb-2">기술 상세</h4>
          <ul className="list-disc list-inside space-y-1">
            {feature.technicalDetails.map((detail, index) => (
              <li key={index} className="text-gray-300 text-sm">
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-green-400 mb-2">비즈니스 영향</h4>
          <ul className="list-disc list-inside space-y-1">
            {feature.businessImpact.map((impact, index) => (
              <li key={index} className="text-gray-300 text-sm">
                {impact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">현재 시스템</h2>
          <p className="text-gray-400">On-premises Infrastructure</p>
        </div>
        {currentFeatures.map(feature => renderFeature(feature, true))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">미래 시스템</h2>
          <p className="text-gray-400">Cloud-based Architecture</p>
        </div>
        {futureFeatures.map(feature => renderFeature(feature, false))}
      </motion.div>
    </div>
  );
}; 