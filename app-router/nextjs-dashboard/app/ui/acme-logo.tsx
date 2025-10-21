// Import necessary modules and components
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

// Acme logo component
export default function AcmeLogo() {

  // Return the logo structure
  return (

    // Fragment to hold the logo
    <>

      {/* Logo container */}
      <div
        className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
      >
        <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
        <p className="text-[44px]">Acme</p>
      </div>


    </>

  );

}
