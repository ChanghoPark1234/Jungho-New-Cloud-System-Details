'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SystemComparison } from './SystemComparison';
import { MigrationTimeline } from './MigrationTimeline';
import {
  CURRENT_SYSTEM_FEATURES,
  FUTURE_SYSTEM_FEATURES,
  MIGRATION_PHASES
} from '@/types/technical-architecture';

export const TechnicalArchitecture: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            관련기술 발전방향
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            현재 시스템과 클라우드 기반 미래 시스템 비교
          </motion.p>
        </div>

        <div className="space-y-16">
          <section>
            <SystemComparison
              currentFeatures={CURRENT_SYSTEM_FEATURES}
              futureFeatures={FUTURE_SYSTEM_FEATURES}
            />
          </section>

          <section>
            <MigrationTimeline phases={MIGRATION_PHASES} />
          </section>
        </div>
      </div>
    </div>
  );
}; 