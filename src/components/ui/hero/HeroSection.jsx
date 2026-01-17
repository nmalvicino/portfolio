'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useIsMobile from '../../../hooks/useIsMobile';

const buttonColorMap = {
  'front-end': {
    bg: '#5DA07B',
    border: '#5DA07B',
    text: '#ffffff',
  },
  web: {
    bg: '#8B5DA0',
    border: '#8B5DA0',
    text: '#ffffff',
  },

  graphicDesign: {
    bg: '#689BAC',
    border: '#689BAC',
    text: '#ffffff',
  },
};

const labelMap = {
  'front-end': 'Front-End Development',
  web: 'Web Design',
  graphicDesign: 'Graphic Design',
};

const subtitleMap = {
  'front-end':
    'Transforming design into pixel-perfect, high-performing front-end code.',
  web: 'Designing impactful digital spaces that connect brands and users.',
  graphicDesign:
    'From branding to multimedia, I design with emotion and intention.',
};

export default function HeroBanner() {
  const [selected, setSelected] = useState('front-end');
  const isMobile = useIsMobile();

  return (
    <section
      id='home'
      className='bg-main mx-auto min-h-screen relative overflow-hidden flex flex-col items-center justify-center'
    >
      <div className='absolute inset-0 w-full h-full pointer-events-none z-0'>
        <AnimatePresence>
          {Object.entries(labelMap).map(([key]) =>
            selected === key ? (
              <motion.img
                key={key}
                src={`/backgrounds/${key}.jpg`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className='absolute inset-0 w-full h-full object-cover'
              />
            ) : null,
          )}
        </AnimatePresence>
      </div>

      <div className='relative z-10 max-w-4xl container-layout text-center'>
        <div className='flex flex-wrap justify-center gap-3 mb-6'>
          {Object.entries(labelMap).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              style={
                selected === key
                  ? {
                      backgroundColor: buttonColorMap[key].bg,
                      borderColor: buttonColorMap[key].border,
                      color: buttonColorMap[key].text,
                    }
                  : {}
              }
              className={`px-4 py-2 rounded-full md:text-xs text-xs font-sora font-semibold transition border ${
                selected === key
                  ? ''
                  : 'border-white/10 bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Título */}
        <h1 className='font-epilogue text-5xl md:text-8xl font-bold leading-[55px] md:leading-[90px] text-center text-white'>
          Bring your <br /> vision to
          <span className='inline-flex items-center gap-2'>
            <span className='italic font-epilogue md:pl-5 md:pr-1 pl-3 py-1 rounded-md text-white'>
              life
            </span>
            <img
              src='diamond.svg'
              alt='diamond'
              className='w-3 h-3 md:w-5 md:h-5 translate-y-2 md:translate-y-5'
            />
          </span>
        </h1>

        {/* Subtítulo dinámico */}
        <AnimatePresence mode='wait'>
          <motion.p
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className='font-sora text-base md:text-lg text-white text-center mt-6 px-4'
          >
            {subtitleMap[selected]}
          </motion.p>
        </AnimatePresence>

        {/* Botones "ver más" y "contacto" */}
        <div className='mt-10 flex justify-center gap-8 z-10'>
          <a href='#services' className='btn-alt'>
            See more
          </a>
          <a href='#contact' className='btn-main'>
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
