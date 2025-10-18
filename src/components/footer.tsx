import Link from "next/link";
import Image from "next/image";
import { trackPhoneCall } from './MetaPixel';
import { FacebookPagePlugin } from './FacebookPagePlugin';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer aria-labelledby="footer-heading" className="mt-12">
      {/* Decorative wave */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-6 md:h-12 block" style={{ transform: 'translateY(1px)' }}>
        <path d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z" fill="#071429" />
      </svg>

      <div className="bg-[#0a1628] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            {/* Brand & quick stats */}
            <div className="col-span-1">
              <Link href="/" className="inline-block" aria-label="Paul's Roofing home">
                <Image
                  src="/assets/paulslogo-official.png"
                  alt="Paul's Roofing Logo"
                  width={280}
                  height={84}
                  className="h-20 w-auto mb-4"
                />
              </Link>
              <p className="text-zinc-300">
                Southern New Brunswick's trusted metal & shingle roofing specialists. Licensed & insured.
              </p>

              <div className="mt-4 flex items-center space-x-3">
                <span className="inline-flex items-center rounded-full bg-[#1E54A3] px-3 py-1 text-sm font-bold">35+ Years</span>
                <span className="inline-flex items-center rounded-full bg-[#123865] px-3 py-1 text-sm">1000+ Roofs</span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-zinc-200 font-semibold mb-3">Get a Free Quote</h3>
              <p className="text-zinc-400 mb-4">
                Fast estimates. Honest pricing. Book a free exterior inspection or ask about our metal roofing options.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-[#1E54A3] hover:bg-[#154280] transition-colors text-white font-bold py-3 px-4 rounded-lg shadow-md"
                aria-label="Request a quote"
              >
                Request Quote
              </Link>
            </div>

            {/* Contact & socials */}
            <div>
              <h3 className="text-zinc-200 font-semibold mb-3">Contact</h3>
              <p className="text-zinc-400">
                Phone: <a 
                  href="tel:+15062714162" 
                  className="text-white font-bold"
                  onClick={() => trackPhoneCall()}
                >(506) 271-4162</a>
              </p>
              <p className="text-zinc-400">
                Email: <a href="mailto:paul@paulroofs.com" className="text-white underline">paul@paulroofs.com</a>
              </p>
              <p className="text-zinc-400 mt-2">Hours: Mon–Sat, 8am–6pm</p>

              <div className="mt-4 flex space-x-3">
                <a href="https://www.facebook.com/profile.php?id=722683144257830" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-md bg-[#0d2a47] hover:bg-[#12395f] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="https://www.instagram.com/" aria-label="Instagram" className="p-2 rounded-md bg-[#0d2a47] hover:bg-[#12395f] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.5-3.6a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2zM12 10.5A1.5 1.5 0 1 1 10.5 9 1.5 1.5 0 0 1 12 10.5z"/></svg>
                </a>
              </div>
            </div>

            {/* Links & payment icons */}
            <div>
              <h3 className="text-zinc-200 font-semibold mb-3">Quick Links</h3>
              <ul className="text-zinc-400 space-y-2">
                <li><Link href="/materials" className="hover:text-white">Materials Guide</Link></li>
                <li><Link href="/handbook" className="hover:text-white">Handbook</Link></li>
                <li><Link href="/#project-gallery" className="hover:text-white">Project Gallery</Link></li>
                <li><Link href="/boss-quarters" className="hover:text-white">Staff / Boss Quarters</Link></li>
              </ul>

              <div className="mt-6 text-zinc-400 text-sm">
                <p>Payment methods accepted:</p>
                <div className="flex items-center space-x-3 mt-2">
                  <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center text-xs">V</div>
                  <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center text-xs">M</div>
                  <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center text-xs">E</div>
                </div>
              </div>
            </div>

            {/* Facebook Page Plugin */}
            <div className="hidden md:block">
              <FacebookPagePlugin 
                pageId="722683144257830"
                width={300}
                height={280}
                showFacepile={true}
                showPosts={false}
              />
            </div>
          </div>

          <div className="border-t border-zinc-700 mt-8 pt-6 text-center text-zinc-500 text-sm">
            <div className="max-w-2xl mx-auto">
              <p>© {year} Paul's Roofing. All rights reserved. | <span className="font-medium text-white">Licensed & Insured</span> | <Link href="/privacy" className="underline">Privacy Policy</Link></p>
              <p className="mt-2">Call us: <a href="tel:+15062714162" className="text-white font-bold">(506) 271-4162</a> • <a href="https://paulsroofing.ca" className="text-white underline">paulsroofing.ca</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}