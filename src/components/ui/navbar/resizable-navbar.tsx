'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { cn } from '../../../lib/utils';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Overlay fondo oscuro */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-30 bg-[#131313]/60 backdrop-blur-sm lg:hidden'
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Navbar fijo y centrado */}
      <div className='fixed top-0 left-0 z-50 w-full bg-[#131313]/60 backdrop-blur-md shadow-md'>
        <div className='container-layout flex items-center justify-between px-4 py-3'>
          {/* Logo */}
          <a href='#home'>
            <img
              src='/icons/logo-nm.svg'
              alt='Logo'
              className='md:h-16 h-14 w-auto cursor-pointer'
            />
          </a>

          {/* Navegación desktop */}
          <div className='hidden gap-6 lg:flex'>
            {['Services', 'Portfolio', 'Skills', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='text-ink-alt dark:text-gray-300 hover:underline'
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className='hidden lg:block'>
            <a href='#contact' className='btn-main'>
              Contact me
            </a>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className='lg:hidden text-white dark:text-white'
          >
            {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>

      {/* Drawer móvil fijo y ancho completo */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className='fixed top-[78px] left-0 z-50 w-full bg-[#1F1F1F]/80 backdrop-blur-md px-4 py-10 flex flex-col items-center text-center gap-4 shadow-md lg:hidden font-sora'
          >
            {[
              { name: 'Services', link: '#services' },
              { name: 'Portfolio', link: '#portfolio' },
              { name: 'Skills', link: '#skills' },
              { name: 'About', link: '#about' },
              { name: 'Contact me', link: '#contact', isCTA: true },
            ].map((item, index) => (
              <motion.a
                key={item.name}
                href={item.link}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  delay: 0.05 * index,
                  duration: 0.3,
                }}
                className={cn(
                  item.isCTA
                    ? 'w-full px-6 py-2 rounded-full font-sora text-sm font-semibold text-black bg-white hover:bg-gray-200 transition'
                    : 'text-white dark:text-gray-300 hover:underline'
                )}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
