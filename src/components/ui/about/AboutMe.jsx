import { AnimatedTestimonials } from './AnimatedTestimonials';
import SkillsTabs from '../skills/SkillsTabs';
import { testimonials } from '../../../data/testimonials.data';
import '../../../App.css';

export default function AboutMeSection() {
  return (
    <section className='w-full bg-alt'>
      <div id='skills' className='container-layout md:py-28 py-8'>
        <div className='flex flex-col items-center justify-center md:pb-8 md:py-2 py-8 gap-3'>
          <h2 className='font-epilogue text-3xl md:text-4xl font-bold text-center text-ink'>
            My Skillset & Approach
          </h2>
          <p className='font-epilogue md:text-lg text-base font-medium text-center text-ink'>
            Here’s a look at my skills, mindset and what I care about most in my
            work.
          </p>
        </div>
        <SkillsTabs />
        <section id='about'>
          <AnimatedTestimonials id='about' testimonials={testimonials} />
        </section>
      </div>
    </section>
  );
}
