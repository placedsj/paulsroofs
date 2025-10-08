import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <nav className="sticky top-0 left-0 right-0 backdrop-blur-sm border-b border-zinc-700 z-50" style={{ backgroundColor: '#0a1628' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="h-16 flex items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/assets/paulslogo-official.png"
                alt="Paul's Roofing Logo"
                width={240}
                height={64}
                className="h-16 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="px-4 py-2 rounded border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors font-bold">
              HOME
            </Link>
            <Link href="/#services" className="px-4 py-2 rounded border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors font-bold">
              SERVICES
            </Link>
            <Link href="/materials" className="px-4 py-2 rounded border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors font-bold">
              MATERIALS GUIDE
            </Link>
            <Link href="/handbook" className="px-4 py-2 rounded border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors font-bold">
              HANDBOOK
            </Link>
            <Link href="/#contact" className="px-4 py-2 rounded border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors font-bold">
              CONTACT
            </Link>
            
            {/* STAFF LINK - Leads to the secure Boss Quarters page */}
            <Link 
              href="/boss-quarters" 
              className="px-4 py-2 rounded border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors font-bold"
            >
              STAFF
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
