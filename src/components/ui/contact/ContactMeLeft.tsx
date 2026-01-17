import React from 'react';

export default function ContactMeLeft() {
  return (
    <div className='flex-1 flex flex-col justify-center items-start space-y-6 p-6 text-white'>
      <h2 className='font-epilogue text-3xl md:text-4xl font-bold text-center text-white'>
        Contacto
      </h2>
      <p className='font-epilogue text-base font-medium'>
        ¿Listos para colaborar? Estoy disponible para entrevistas, propuestas o
        dudas.
      </p>
      <div>
        <a
          href='https://calendly.com/natalia-malvicino/30min'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block px-8 py-2 font-epilogue border font-semibold text-sm bg-white text-ink/80 rounded-md hover:bg-transparent hover:border-ink-alt hover:text-ink-alt  transition'
        >
          Solicitar entrevista
        </a>
      </div>
      <div className='flex items-center space-x-6 pt-2'>
        <a
          href='https://www.linkedin.com/in/nataliamalvicino/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:opacity-80 transition'
        >
          <img src='icons/linkedin.svg' alt='LinkedIn' className='w-6 h-6' />
        </a>
        <a
          href='https://github.com/nmalvicino'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:opacity-80 transition'
        >
          <img src='icons/github.svg' alt='GitHub' className='w-6 h-6' />
        </a>
        <a
          href='https://www.behance.net/nataliamalvicino'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:opacity-80 transition'
        >
          <img src='icons/behance.svg' alt='Behance' className='w-6 h-6' />
        </a>
      </div>
    </div>
  );
}
