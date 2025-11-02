// Client component
'use client';

// Import icons
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// Import Next.js components
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Import clsx for conditional class names
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: HomeIcon
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Customers',
    href: '/dashboard/customers',
    icon: UserGroupIcon
  },
];

// Navigation links component
export default function NavLinks() {

  // Get the current pathname
  const pathname = usePathname();

  // Return the list of navigation links
  return (

    // Fragment to hold the links
    <>

      {/* Map through the links and create a link for each one */}
      {links.map((link) => {

        // Destructure icon component
        const LinkIcon = link.icon;

        // Return individual link
        return (

          // Link component from Next.js for client-side navigation
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <span className="hidden md:block">{link.name}</span>
          </Link>

        );

      })}

    </>

  );

}
