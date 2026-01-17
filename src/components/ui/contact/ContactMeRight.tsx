import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success');
        formRef.current!.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };
  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className='space-y-4 p-6 bg-white backdrop-blur-md rounded shadow'
    >
      <input
        required
        name='name'
        placeholder='Tu nombre'
        className='w-full p-2 rounded-md border border-gray-300 bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-surface-development focus:border-surface-ring-surface-development  transition placeholder:text-gray-400 text-sm'
      />
      <input
        name='company'
        placeholder='Empresa'
        className='w-full p-2 rounded-md border border-gray-300 bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-surface-development focus:border-surface-ring-surface-development transition placeholder:text-gray-400 text-sm'
      />
      <textarea
        required
        name='message'
        rows={4}
        placeholder='Tu mensaje'
        className='w-full p-2 rounded-md border border-gray-300 bg-white/90 shadow-sm focus:outline-none focus:ring-2 focus:ring-surface-development focus:border-surface-ring-surface-development  transition placeholder:text-gray-400 text-sm'
      />

      {status === 'success' && (
        <p className='text-sm text-green-600'>¡Mensaje enviado!</p>
      )}
      {status === 'error' && (
        <p className='text-sm text-red-600'>
          Error al enviar. Intenta más tarde.
        </p>
      )}
      <button
        type='submit'
        className='w-full  py-2 font-epilogue font-semibold text-sm border-2 bg-black/80 text-ink-alt rounded-md hover:bg-transparent hover:border-ink hover:text-ink shadow-md transition'
      >
        Send message
      </button>
    </form>
  );
}
