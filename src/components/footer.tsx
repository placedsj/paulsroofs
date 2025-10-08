import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Image
            src="/assets/paulslogo.png"
            alt="Paul's Roofing Logo"
            width={150}
            height={40}
            className="h-10 w-auto mx-auto mb-4"
          />
          <p className="text-zinc-400 mb-4">
            Southern New Brunswick's Premier Metal Roofing Specialist
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="/" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">HOME</Link>
            <Link href="/handbook" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">RESOURCES</Link> 
            <Link href="/boss-quarters" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">STAFF</Link>
          </div>
          <p className="text-zinc-400 mb-2">
            Contact:{" "}
            <a
              href="mailto:info@paulroofs.com" // 🛠️ UPDATED EMAIL
              className="underline hover:text-orange-500"
            >
              info@paulroofs.com
            </a>
          </p>
          <p className="text-zinc-500 text-sm">
            © 2025 Paul's Roofing. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
