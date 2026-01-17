import { motion } from 'framer-motion';
import type { Tab } from './types';

type TabsProps = {
  tabs: Tab[];
  activeIndex: number;
  onChange: (index: number) => void;
};

export function Tabs({ tabs, activeIndex, onChange }: TabsProps) {
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-6'>
      {tabs.map((tab, idx) => {
        const isActive = activeTab === idx;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(idx)}
            className='relative px-6 py-2 rounded-full border text-sm font-medium transition  border-ink/10 bg-ink/20 hover:bg-white/20'
          >
            <span
              className={`relative font-epilogue z-10 ${
                isActive
                  ? 'text-ink font-bold'
                  : 'text-ink-alt/90  font-semibold'
              }`}
            >
              {tab.label}
            </span>

            {isActive && (
              <motion.span
                layoutId='activeTab'
                className='absolute inset-0 bg-white/90 border-2 border-ink rounded-full shadow-sm'
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
