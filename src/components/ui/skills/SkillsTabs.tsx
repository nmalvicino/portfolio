import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsTabs } from '../../../data/skillsTabs.data';
import type { Tab } from '../../../data/skillsTabs.data';

export default function SkillsTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab: Tab = skillsTabs[activeTab];

  return (
    <section className='md:px-20 md:pb-10 pb-4'>
      <div className='max-w-screen-lg mx-auto md:py-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12'>
        {/* LEFT */}
        <div>
          {/* TABS */}
          <div className='flex flex-wrap justify-center md:gap-4 gap-2 mb-6'>
            {skillsTabs.map((tab, idx) => {
              const isActive = activeTab === idx;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className='relative px-6 py-2 rounded-full border text-sm  font-medium transition  border-ink/40 bg-white/40 hover:bg-white/60 '
                >
                  <span
                    className={`relative font-epilogue z-10  ${
                      isActive
                        ? 'text-ink font-bold'
                        : 'text-ink-alt text-ink/60 font-semibold '
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

          {/* CONTENT */}
          <div className='border rounded-xl p-6 bg-white h-[380px] sm:h-[280px] overflow-y-auto relative shadow-md'>
            <AnimatePresence mode='wait'>
              {currentTab && (
                <motion.div
                  key={currentTab.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className='text-lg font-semibold mb-12 text-center'>
                    {currentTab.title}
                  </h3>

                  {currentTab.id === 'education' ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:gap-6 gap-12 px-8 text-left text-ink'>
                      <div className='flex items-start gap-4'>
                        <img
                          src='icons/henry.svg'
                          alt='Henry'
                          className='w-6 h-6 mt-1'
                        />
                        <div>
                          <h4 className='text-lg font-epilogue font-bold text-ink'>
                            2023 · HENRY
                          </h4>
                          <p className='text-base font-sora text-ink/80'>
                            Full-stack Developer
                          </p>
                        </div>
                      </div>
                      <div className='flex items-start gap-4'>
                        <img
                          src='icons/ed-it.svg'
                          alt='Ed IT'
                          className='w-6 h-6 mt-1'
                        />
                        <div>
                          <h4 className='font-epilogue text-lg font-bold text-ink'>
                            2020 · Educacion IT
                          </h4>
                          <p className='text-base font-sora text-ink/80'>
                            Web Designer
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 text-sm text-center text-gray-700 md:px-8'>
                      {currentTab.skills.map((skill) => (
                        <div
                          key={skill.label}
                          className='flex flex-col items-center gap-2'
                        >
                          <img
                            src={skill.icon}
                            alt={skill.label}
                            className='h-8'
                          />
                          <span className='font-sora md:text-[14px] font-medium text-ink'>
                            {skill.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT */}
        <div className='flex flex-wrap justify-center lg:flex-col items-start gap-2 md:gap-4 md:mt-16 '>
          {[
            { label: 'Curriculum', file: 'cv-natalia-malvicino.pdf' },
            {
              label: 'Full-Stack Certificate',
              file: 'fullstack-certificate.jpg',
            },
            {
              label: 'Various Certificates',
              file: 'certifications-it-natalia-malvicino.pdf',
            },
            { label: 'SET Certificate', file: 'set-natalia-malvicino.pdf' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.file}
              download
              className='px-6 py-2 text-xs sm:text-sm font-medium rounded-full bg-black/80 hover:bg-black/60 text-white flex items-center gap-2 shadow-md'
            >
              {item.label}
              <img
                src='icons/download.svg'
                alt='Download'
                className='w-4 h-4'
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
