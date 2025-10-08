"use client";

import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const ACCENT_BLUE = '#1E54A3';
const ORANGE = '#F97316';

export default function MaterialsGuide() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-zinc-800 to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-zinc-50 mb-6">
            PAUL'S GUIDE TO PREMIUM MATERIALS
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Your trusted local expert for the best roofing and exterior materials built for New Brunswick weather. 
            We've partnered with industry leaders to bring you quality that lasts.
          </p>
        </div>
      </section>

      {/* IKO Dynasty Shingles Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-50 mb-4">
              OUR TRUSTED SHINGLES: IKO DYNASTY ADVANTAGE
            </h2>
            <p className="text-lg text-zinc-300 max-w-4xl mx-auto">
              For New Brunswick homes, we need a shingle that can handle high winds, coastal air, and dramatic temperature swings. 
              That's why we exclusively recommend <span className="text-orange-500 font-bold">IKO Dynasty shingles</span>. 
              They offer superior performance and an iron-clad warranty, giving you peace of mind from the ground up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Features Column */}
            <div>
              <h3 className="text-3xl font-bold mb-8" style={{ color: ACCENT_BLUE }}>Why We Choose Dynasty</h3>
              
              <div className="space-y-6">
                <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                  <h4 className="text-xl font-bold text-zinc-50 mb-3">🛡️ ArmourZone® Strip</h4>
                  <p className="text-zinc-300">
                    A wider, tougher nailing area that provides superior fastener holding power against wind uplift. 
                    The best defense against Nor'easters.
                  </p>
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                  <h4 className="text-xl font-bold text-zinc-50 mb-3">🌬️ High-Wind Resistance</h4>
                  <p className="text-zinc-300">
                    With an available warranty covering winds up to 210 km/h, these shingles stay put when it matters most.
                  </p>
                </div>

                <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                  <h4 className="text-xl font-bold text-zinc-50 mb-3">🌿 Algae Resistance</h4>
                  <p className="text-zinc-300">
                    Built-in copper-coated granules inhibit the growth of unsightly blue-green algae, keeping your roof looking new for longer.
                  </p>
                </div>
              </div>
            </div>

            {/* Color Palette Column */}
            <div>
              <h3 className="text-3xl font-bold mb-8" style={{ color: ACCENT_BLUE }}>Popular Colour Choices</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Frostone Grey', color: '#8B9299' },
                  { name: 'Glacier', color: '#D4D8DB' },
                  { name: 'Driftshake', color: '#8A7B6C' },
                  { name: 'Appalachian', color: '#5C5449' },
                  { name: 'Castle Grey', color: '#6B7178' },
                  { name: 'Cornerstone', color: '#998675' },
                ].map((color) => (
                  <div key={color.name} className="bg-zinc-800 p-4 rounded-lg border border-zinc-700 hover:border-orange-500 transition-colors cursor-pointer">
                    <div 
                      className="w-full h-24 rounded mb-3" 
                      style={{ backgroundColor: color.color }}
                    ></div>
                    <p className="text-zinc-200 font-semibold text-center">{color.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Warranty Comparison Table */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8" style={{ color: ACCENT_BLUE }}>
              The Paul's Roofing Promise: A Better Warranty
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-zinc-800 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-zinc-700">
                    <th className="px-6 py-4 text-left text-zinc-50">Feature</th>
                    <th className="px-6 py-4 text-left text-zinc-50">IKO Dynasty Iron Clad Protection</th>
                    <th className="px-6 py-4 text-left text-zinc-50">Standard Limited Warranty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700">
                  <tr>
                    <td className="px-6 py-4 text-zinc-300 font-semibold">100% Coverage Period</td>
                    <td className="px-6 py-4 text-green-400 font-bold">15 Years (Non-Prorated)</td>
                    <td className="px-6 py-4 text-zinc-400">5-10 Years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-300 font-semibold">Tear-Off Costs</td>
                    <td className="px-6 py-4 text-green-400 font-bold">✓ Covered</td>
                    <td className="px-6 py-4 text-red-400">✗ Not Covered</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-300 font-semibold">Disposal Costs</td>
                    <td className="px-6 py-4 text-green-400 font-bold">✓ Covered</td>
                    <td className="px-6 py-4 text-red-400">✗ Not Covered</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-300 font-semibold">Installation Labour</td>
                    <td className="px-6 py-4 text-green-400 font-bold">✓ Covered</td>
                    <td className="px-6 py-4 text-red-400">✗ Not Covered</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-300 font-semibold">Transferable?</td>
                    <td className="px-6 py-4 text-green-400 font-bold">✓ Yes</td>
                    <td className="px-6 py-4 text-red-400">Often Limited or Not Transferable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Community Metal Section */}
      <section className="py-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-50 mb-4">
              METAL ROOFING: LOCAL & DURABLE
            </h2>
            <p className="text-2xl font-bold text-orange-500 mb-4">Community Metal New Brunswick & Dairytown Exteriors</p>
            <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
              Built in New Brunswick, for New Brunswick weather. Our partnerships with Community Metal and Dairytown Exteriors (Sussex) ensure you get 
              premium metal roofing designed specifically for our coastal climate.
            </p>
          </div>

          {/* Metal Profiles */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-700">
              <h3 className="text-2xl font-bold text-zinc-50 mb-4">Standing Seam Metal</h3>
              <p className="text-zinc-300 mb-4">Premium concealed fastener system. Sleek, modern appearance with superior weather protection.</p>
              <ul className="space-y-2 text-zinc-400">
                <li>✓ No exposed fasteners</li>
                <li>✓ Thermal expansion panels</li>
                <li>✓ Multiple color options</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-700">
              <h3 className="text-2xl font-bold text-zinc-50 mb-4">Exposed Fastener (R-Panel)</h3>
              <p className="text-zinc-300 mb-4">Cost-effective and durable. Perfect for residential and commercial applications.</p>
              <ul className="space-y-2 text-zinc-400">
                <li>✓ Budget-friendly option</li>
                <li>✓ Quick installation</li>
                <li>✓ Proven durability</li>
              </ul>
            </div>
          </div>

          {/* Metal vs Shingles Comparison */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8" style={{ color: ACCENT_BLUE }}>
              The Lifetime Roof: Metal vs. Shingles
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-zinc-900 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-zinc-700">
                    <th className="px-6 py-4 text-left text-zinc-50">Factor</th>
                    <th className="px-6 py-4 text-left text-zinc-50">Community Metal</th>
                    <th className="px-6 py-4 text-left text-zinc-50">Asphalt Shingles</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700">
                  <tr>
                    <td className="px-6 py-4 text-zinc-300 font-semibold">Lifespan</td>
                    <td className="px-6 py-4 text-green-400 font-bold">50+ Years</td>
                    <td className="px-6 py-4 text-zinc-400">20-25 Years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-300 font-semibold">Maintenance</td>
                    <td className="px-6 py-4 text-green-400 font-bold">Minimal / None</td>
                    <td className="px-6 py-4 text-zinc-400">Potential repairs</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-300 font-semibold">Energy Efficiency</td>
                    <td className="px-6 py-4 text-green-400 font-bold">High (Reflects heat)</td>
                    <td className="px-6 py-4 text-zinc-400">Moderate</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-zinc-300 font-semibold">Upfront Cost</td>
                    <td className="px-6 py-4 text-zinc-400">Higher</td>
                    <td className="px-6 py-4 text-green-400 font-bold">Lower</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Siding & Exteriors Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-50 mb-4">
              SIDING & EXTERIORS
            </h2>
            <p className="text-2xl font-bold text-orange-500 mb-4">Mitten Siding</p>
            <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
              Complete your home's exterior with premium Mitten vinyl siding. Low maintenance, high curb appeal, 
              sourced locally for quality you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-zinc-50 mb-3">No Painting Required</h3>
              <p className="text-zinc-300">Permanent color that won't fade, chip, or peel. Save time and money on maintenance.</p>
            </div>

            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-zinc-50 mb-3">Built to Last</h3>
              <p className="text-zinc-300">Engineered to withstand harsh coastal weather, high winds, and temperature extremes.</p>
            </div>

            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-zinc-50 mb-3">Endless Styles</h3>
              <p className="text-zinc-300">From classic to contemporary, choose from a wide range of colors and textures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Partners Section */}
      <section className="py-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-50 mb-4">
              OUR FOUNDATION: VALUED SUPPLY PARTNERS
            </h2>
            <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
              Strong relationships with major suppliers like <span className="font-bold">Kent.ca</span> and <span className="font-bold">HomeDepot.ca</span> mean 
              we have immediate access to all necessary components—from specialized flashing and vents to the best underlayment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-700">
              <h3 className="text-2xl font-bold text-zinc-50 mb-4">The Right Materials, On Time</h3>
              <p className="text-zinc-300">
                Our established partnerships ensure we always have the materials needed to complete your project without delays. 
                No waiting, no substitutions, no excuses.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-700">
              <h3 className="text-2xl font-bold text-zinc-50 mb-4">Your Project Stays on Schedule</h3>
              <p className="text-zinc-300">
                A strong supply chain is a direct benefit to you. When we commit to a timeline, our partnerships help us deliver on that promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-zinc-50 mb-6">
            Ready to Choose the Best Materials for Your Home?
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            Let's discuss your project and find the perfect solution for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+15062714162"
              className="px-8 py-4 text-white font-bold rounded-lg transition-colors hover:opacity-90"
              style={{ backgroundColor: ACCENT_BLUE }}
            >
              CALL (506) 271-4162
            </a>
            <a 
              href="/#contact"
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors"
            >
              REQUEST A QUOTE
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
