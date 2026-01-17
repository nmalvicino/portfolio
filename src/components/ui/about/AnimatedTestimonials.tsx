import { motion, AnimatePresence } from 'motion/react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import '../../../App.css';

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: AnimatedTestimonialsProps) => {
  const [active, setActive] = useState<number>(0);
  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(next, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const isActive = (i: number) => i === active;
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className='mx-auto px-1 pt-12 md:pb-8 md:pt-8 md:px-10 pb-12 md:max-w-6xl '>
      <div className='relative grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-16 md:gap-x-16'>
        {/* IMAGE COLUMN */}
        <div className='relative order-last md:order-first w-full flex justify-center'>
          <div className='relative aspect-square w-4/5 md:w-full md:max-w-md lg:max-w-lg '>
            <AnimatePresence initial={false} mode='wait'>
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(i) ? 1 : 0.7,
                    scale: isActive(i) ? 1 : 0.95,
                    z: isActive(i) ? 0 : -100,
                    rotate: isActive(i) ? 0 : randomRotateY(),
                    zIndex: isActive(i) ? 40 : testimonials.length + 2 - i,
                    y: isActive(i) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className='absolute inset-0 origin-bottom'
                >
                  <img
                    src={t.src}
                    alt={t.name}
                    draggable={false}
                    className='h-full w-full object-cover rounded-3xl'
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* TEXT COLUMN */}
        <div className='flex flex-col justify-between pt-5 md:col-span-2 md:ml-10'>
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className='font-epilogue text-3xl font-bold text-ink'>
              {testimonials[active].name}
            </h3>

            <motion.p className='font-sora mt-8 md:text-lg text-base text-ink '>
              {testimonials[active].quote.split(' ').map((w, idx) => (
                <motion.span
                  key={idx}
                  initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                  animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 0.02 * idx,
                  }}
                  className='inline-block'
                >
                  {w}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* CONTROLS */}
          <div className='flex gap-4 pt-8'>
            <button
              onClick={prev}
              className='h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center'
            >
              <IconArrowLeft className='h-5 w-5 text-black hover:rotate-12 transition' />
            </button>
            <button
              onClick={next}
              className='h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center'
            >
              <IconArrowRight className='h-5 w-5 text-black hover:-rotate-12 transition' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
