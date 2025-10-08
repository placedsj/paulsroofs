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
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
              HOME
            </Link>
            <Link href="/#services" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
              SERVICES
            </Link>
            <Link href="/materials" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
              MATERIALS GUIDE
            </Link>
            <Link href="/handbook" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
              HANDBOOK
            </Link>
            <Link href="/#contact" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
              CONTACT
            </Link>
            
            {/* STAFF LINK - Leads to the secure Boss Quarters page */}
            <Link 
              href="/boss-quarters" 
              className="text-xs font-bold text-orange-500 hover:text-orange-400 px-2 py-1 border-2 border-orange-500 rounded-lg transition-colors"
            >
              STAFF
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
