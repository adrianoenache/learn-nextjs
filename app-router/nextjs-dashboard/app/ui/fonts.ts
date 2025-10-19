// Import Google Fonts from Next.js font library
import { Inter, Lusitana } from 'next/font/google';

// Initialize the Inter font with Latin subset
export const inter = Inter({ subsets: ['latin'] });

// Initialize the Lusitana font with Latin subset and specific weights
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700']
});
