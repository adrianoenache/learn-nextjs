// Import components
import SideNav from '@/app/ui/dashboard/sidenav';

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

    // Fragment wrapper
    <>

      {/* Sidebar */}
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>

    </>

  );

}
