'use client';

export default function CustomDivider() {
  return (
    <div className='relative w-full -mt-16 z-10 overflow-hidden'>
      {/* Desktop SVG */}
      <div className='hidden md:block w-full'>
        <img
          src='/dividers/divider-desktop.svg'
          alt='section divider'
          className='w-full h-auto'
          style={{ display: 'block' }}
        />
      </div>

      {/* Mobile SVG */}
      <div className='block md:hidden w-full overflow-hidden'>
        <img
          src='/dividers/divider-mobile.svg'
          alt='section divider'
          className='w-full h-auto'
          style={{ display: 'block' }}
        />
      </div>
    </div>
  );
}
