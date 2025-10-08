import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <nav className="sticky top-0 left-0 right-0 backdrop-blur-sm border-b border-zinc-700 z-50" style={{ backgroundColor: '#0a1628' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="h-20 flex items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/assets/paulslogo-official.png"
                alt="Paul's Roofing Logo"
                width={300}
                height={80}
                className="h-20 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="px-4 py-2 rounded-lg text-white font-bold transition-colors hover:opacity-90" style={{ backgroundColor: '#1E54A3' }}>
              HOME
            </Link>
            <Link href="/#services" className="px-4 py-2 rounded-lg text-white font-bold transition-colors hover:opacity-90" style={{ backgroundColor: '#1E54A3' }}>
              SERVICES
            </Link>
            <Link href="/materials" className="px-4 py-2 rounded-lg text-white font-bold transition-colors hover:opacity-90" style={{ backgroundColor: '#1E54A3' }}>
              MATERIALS GUIDE
            </Link>
            <Link href="/handbook" className="px-4 py-2 rounded-lg text-white font-bold transition-colors hover:opacity-90" style={{ backgroundColor: '#1E54A3' }}>
              HANDBOOK
            </Link>
            <Link href="/#contact" className="px-4 py-2 rounded-lg text-white font-bold transition-colors hover:opacity-90" style={{ backgroundColor: '#1E54A3' }}>
              CONTACT
            </Link>
            
            {/* STAFF LINK - Leads to the secure Boss Quarters page */}
            <Link 
              href="/boss-quarters" 
              className="px-4 py-2 rounded-lg text-white font-bold transition-colors hover:opacity-90"
              style={{ backgroundColor: '#1E54A3' }}
            >
              STAFF
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
