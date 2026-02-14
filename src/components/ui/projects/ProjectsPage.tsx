import { projects } from '../../../data/projects';
import { Timeline } from './timeline';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { AnimatedTooltip } from './AnimatedTooltip';

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tagStyles: Record<string, { bg: string; text: string }> = {
    'Website Design': { bg: '#C7C7FF', text: '#2B2C69' },
    Branding: { bg: '#BFEFFF', text: '#232121' },
    'Front-end Development': { bg: '#C9FFE1', text: '#072615' },
    'Full Stack Development': { bg: '#C9FFE1', text: '#072615' },
    'Graphic Design': { bg: '#E6C9F4', text: '#3C124E' },
    'UX/UI Improvement': { bg: '#FFD3D4', text: '#480F0F' },
    'UX/UI Design': { bg: '#FFD3D4', text: '#480F0F' },
  };

  const timelineData = projects.map((project) => {
    const toolsData = project.tools.map((tool, index) => ({
      id: index,
      name: tool,
      image: `icons/${tool.toLowerCase().replace(/\s+/g, '-')}.svg`,
    }));

    return {
      title: project.title,
      content: (
        <div className='space-y-5 '>
          <h4 className='font-epilogue text-2xl font-bold text-ink-alt'>
            {project.subtitle}
          </h4>

          {/* Servicios relacionados */}
          <div className='flex flex-wrap gap-2'>
            {project.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: tagStyles[tag]?.bg || '#E5E7EB',
                  color: tagStyles[tag]?.text || '#374151',
                }}
                className='font-sora px-3 py-1 text-xs font-medium rounded-full'
              >
                {tag}
              </span>
            ))}
          </div>

          <p className='font-epilogue text-white/80 whitespace-pre-line '>
            {project.description}
          </p>

          {/* Imágenes */}
          <div className='grid grid-cols-2 md:flex md:flex-wrap gap-4 mt-2'>
            {project.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={project.title}
                onClick={() => setSelectedImage(img)}
                className='w-full md:w-32 h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition'
              />
            ))}
          </div>

          {/* Herramientas utilizadas */}
          <div className='flex flex-col md:flex-row md:items-center md:gap-4'>
            <span className='font-sora font-semibold text-sm text-white/80 dark:text-gray-300 pb-2'>
              Tools used:
            </span>
            <AnimatedTooltip items={toolsData} />
          </div>
        </div>
      ),
    };
  });

  return (
    <div id='portfolio' className='md:py-24 py-14 -mt-1'>
      <div className='flex flex-col items-center justify-center md:pb-16 pb-4 gap-3'>
        <h2 className='font-epilogue text-3xl md:text-4xl font-bold text-center text-white/90'>
          Projects & Case Studies
        </h2>
        <p className='font-sora  md:text-lg text-base font-medium text-center text-white/90'>
          A collection of the work I’ve done as a freelancer.
        </p>
      </div>

      <Timeline data={timelineData} />

      {/* Modal de imagen ampliada */}
      <AnimatePresence>
        {selectedImage && (
          <Dialog
            open={true}
            onClose={() => setSelectedImage(null)}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4'
          >
            <Dialog.Panel className='relative max-w-5xl w-full'>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className='relative'
              >
                {/* ❌ Botón de cerrar */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className='absolute top-4 right-4 z-20 bg-white/80 dark:bg-neutral-800 text-black dark:text-white rounded-full px-2 py-1 hover:bg-white hover:dark:bg-neutral-700 transition'
                  aria-label='Cerrar'
                >
                  ✕
                </button>

                {/* Imagen */}
                <div className='relative'>
                  <img
                    src={selectedImage}
                    alt='preview'
                    className='rounded-lg w-full h-auto object-contain'
                  />

                  {/* View on Behance Button */}
                  {(() => {
                    const selectedProject = projects.find((project) =>
                      project.images?.includes(selectedImage),
                    );
                    const imageIndex = selectedProject?.images?.indexOf(
                      selectedImage || '',
                    );
                    const behanceLink =
                      selectedProject?.behanceLinks?.[imageIndex || 0];

                    return (
                      behanceLink && (
                        <a
                          href={behanceLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='absolute bottom-4 right-4 bg-white/90 hover:bg-white text-black text-sm px-4 py-1.5 rounded-full font-medium shadow-lg transition'
                        >
                          See full project on Behance →
                        </a>
                      )
                    );
                  })()}
                </div>
              </motion.div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
