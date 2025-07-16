import React from 'react';
import { motion } from 'framer-motion';
import { MigrationPhase } from '../../types/technical-architecture';

interface Props {
  phases: MigrationPhase[];
}

export const MigrationTimeline: React.FC<Props> = ({ phases }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">
        마이그레이션 타임라인
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[45px] top-0 bottom-0 w-0.5 bg-blue-500/30" />

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative flex gap-8"
            >
              {/* Timeline dot */}
              <div className="w-24 flex-shrink-0 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-gray-900" />
                <div className="mt-2 text-blue-400 text-sm font-medium">
                  {phase.duration}
                </div>
              </div>

              <div className="flex-grow">
                <div className="bg-gray-700/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {phase.title}
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-blue-400 mb-2">
                        주요 작업
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {phase.tasks.map((task, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-red-400 mb-2">
                        위험 요소
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {phase.risks.map((risk, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-green-400 mb-2">
                        위험 완화 전략
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {phase.mitigation.map((strategy, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">
                            {strategy}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}; 