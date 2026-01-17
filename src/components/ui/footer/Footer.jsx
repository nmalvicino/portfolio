export default function Footer() {
  return (
    <footer className='w-full bg-[#2e2e2e] backdrop-blur-sm  px-4 sm:px-8 py-8'>
      <div className='max-w-6xl mx-auto flex flex-col gap-6'>
        {/* Top: Logo + Message */}
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
          {/* Left: Logo */}
          <div className='flex items-center gap-2'>
            <img src='icons/logo-nm.svg' alt='Logo' className='h-24 w-auto' />
          </div>

          {/* Right: Signature */}
          <p className='text-sm text-gray-300 font-epilogue text-center sm:text-right'>
            Designed and coded with ❤️
            <br /> by Natalia Malvicino
          </p>
        </div>

        {/* Bottom: Centered copyright */}
        <div className='text-center text-xs text-gray-300'>
          &copy; {new Date().getFullYear()} NM Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
