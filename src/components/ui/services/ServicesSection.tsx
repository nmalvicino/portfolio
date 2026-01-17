'use client';
/// <reference types="@headlessui/react" />

import React, { useState } from 'react';
import { services } from '../../../data/services';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import CustomDivider from './divider/CustomDivider';

export default function ServicesSection() {
  type Service = {
    id: string;
    title: string;
    description: string;
    details: string;
    icon: any;
    image: string;
  };

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id='services' className='md:py-20 py-12 w-full -mt-1'>
      <div className='container-layout'>
        <div className='flex flex-col items-center justify-center pb-16 gap-3'>
          <h2 className='font-epilogue text-3xl md:text-4xl font-bold text-center text-ink-alt'>
            From ideas to outcomes
          </h2>
          <p className='font-sora md:text-lg text-base font-medium text-center text-ink-alt'>
            Visual, functional and strategic solutions for brands ready to stand
            out.
          </p>
        </div>

        {/* Bento Grid */}
        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto overflow-y-hidden sm:overflow-visible flex sm:flex-none px-2 -mx-2 scroll-snap-x'>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                onClick={() => setSelectedService(service)}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`relative flex-shrink-0 w-[80%] min-h-[300px] mb-6 sm:mb-0 sm:w-auto snap-start overflow-hidden rounded-xl group cursor-pointer ${
                  index === 3 ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Imagen de fondo */}
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className='absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-65 transition-transform duration-500 scale-100 group-hover:scale-105'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-black/50' />

                {/* Contenido */}
                <div className='relative z-10 p-6 flex flex-col justify-end h-full'>
                  <Icon className='w-10 h-10 text-ink-alt mb-2' />
                  <h3 className='font-epilogue text-2xl font-semibold text-ink-alt mb-2'>
                    {service.title}
                  </h3>
                  <p className='font-sora text-base text-ink-alt/80'>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal de detalles */}
      <AnimatePresence>
        {selectedService && (
          <Dialog
            open={true}
            onClose={() => setSelectedService(null)}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4'
          >
            <Dialog.Panel className='w-full max-w-lg relative'>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className='bg-ink-alt dark:bg-neutral-900 rounded-xl overflow-hidden shadow-xl'
              >
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className='w-full h-48 object-cover'
                />

                <button
                  onClick={() => setSelectedService(null)}
                  className='absolute top-3 right-3 z-20 bg-white/80 hover:bg-white text-black rounded-full px-2 py-1 transition dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-white'
                  aria-label='Cerrar'
                >
                  ✕
                </button>

                <div className='p-6'>
                  <Dialog.Title className='font-epilogue text-2xl font-bold mb-4'>
                    {selectedService.title}
                  </Dialog.Title>

                  <Dialog.Description className='font-sora text-gray-700 dark:text-gray-300 mb-6 leading-relaxed'>
                    {selectedService.details}
                  </Dialog.Description>

                  <div className='font-epilogue flex justify-end gap-4'>
                    <button
                      onClick={() => setSelectedService(null)}
                      className=' px-4 py-2 text-sm rounded-full border-2 text-ink border-ink font-semibold hover:bg-ink-alt dark:border-gray-600 dark:hover:bg-neutral-800 transition'
                    >
                      Close
                    </button>

                    <a
                      href='#contact'
                      onClick={() => setSelectedService(null)}
                      className='px-4 py-2 text-sm rounded-full bg-ink text-ink-alt font-semibold hover:bg-ink/90  transition'
                    >
                      Contact me
                    </a>
                  </div>
                </div>
              </motion.div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
