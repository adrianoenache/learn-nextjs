// Import necessary libraries and components
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

// Define the InvoiceStatus component
export default function InvoiceStatus({ status }: { status: string }) {

  // Render the status with appropriate styles and icons
  return (

    // Use a fragment to wrap the content
    <>

      {/* Render a span with dynamic classes based on the status */}
      <span
        className={clsx(
          'inline-flex items-center rounded-full px-2 py-1 text-xs',
          {
            'bg-gray-100 text-gray-500': status === 'pending',
            'bg-green-500 text-white': status === 'paid',
          },
        )}
      >

        {/* Conditionally render content based on the status */}
        {status === 'pending' ? (
          <>
            Pending
            <ClockIcon className="ml-1 w-4 text-gray-500" />
          </>
        ) : null}
        {status === 'paid' ? (
          <>
            Paid
            <CheckIcon className="ml-1 w-4 text-white" />
          </>
        ) : null}

      </span>

    </>

  );

}
