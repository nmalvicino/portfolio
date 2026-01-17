import React from 'react';
import ContactMeLeft from './ContactMeLeft';
import ContactMeRight from './ContactMeRight';

export default function ContactMe() {
  return (
    <section id='contact' className='bg-main'>
      <div className='w-full max-w-6xl mx-auto px-4 md:py-28 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </section>
  );
}
