// Import global styles
import '@/app/ui/global.css';
import { inter } from './ui/fonts';

// Root layout component
export default function RootLayout({

  // Destructure children prop
  children,

}: {

  // Define children type
  children: React.ReactNode;

}) {

  // Return the HTML structure with children components
  return (
    <>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          {children}
        </body>
      </html>
    </>
  );

}
