"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const ACCENT_BLUE = '#1E54A3';

export default function ExteriorInspectionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    inspectionDate: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timeframe: 'inspection',
          message: `Visual Exterior Inspection Request\nPreferred Date: ${formData.inspectionDate}\n\nNotes: ${formData.message}`
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', address: '', inspectionDate: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/IMG_20250927_235341_741.jpg"
              alt="Exterior Inspection"
              fill
              className="object-cover opacity-40"
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-50 mb-4">
              VISUAL EXTERIOR INSPECTION
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-4">
              Professional assessment of your roof, siding, and gutters - no obligation
            </p>
            <div className="inline-block bg-orange-600 px-6 py-2 rounded-lg">
              <p className="text-white font-bold">🚁 COMING SOON 2026: Aerial Inspections with Heat Loss Detection</p>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-zinc-50 mb-12">What's Included</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-2xl font-bold text-zinc-50 mb-4">Roof Inspection</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>✓ Shingle/metal panel condition check</li>
                  <li>✓ Flashing and seal inspection</li>
                  <li>✓ Ventilation assessment</li>
                  <li>✓ Age and lifespan estimate</li>
                  <li>✓ Leak potential identification</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-2xl font-bold text-zinc-50 mb-4">Siding Review</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>✓ Material condition check</li>
                  <li>✓ Moisture damage detection</li>
                  <li>✓ Trim and fascia inspection</li>
                  <li>✓ Paint/finish assessment</li>
                  <li>✓ Structural integrity review</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-2xl font-bold text-zinc-50 mb-4">Gutter System</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>✓ Flow and drainage test</li>
                  <li>✓ Blockage identification</li>
                  <li>✓ Attachment security check</li>
                  <li>✓ Downspout assessment</li>
                  <li>✓ Repair recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-zinc-50 mb-8">
              Schedule Your Inspection
            </h2>
            <p className="text-center text-zinc-400 mb-12">
              We'll visit your property, perform a thorough visual inspection, and provide you with a detailed report
            </p>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg">
                <p className="text-green-400 font-semibold text-center">
                  ✓ Inspection request submitted! We'll contact you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-zinc-800 p-8 rounded-lg border border-zinc-700">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded text-zinc-100 placeholder-zinc-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded text-zinc-100 placeholder-zinc-400"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded text-zinc-100 placeholder-zinc-400"
                />
                <input
                  type="text"
                  placeholder="Property Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                  className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded text-zinc-100 placeholder-zinc-400"
                />
                <input
                  type="date"
                  placeholder="Preferred Inspection Date"
                  value={formData.inspectionDate}
                  onChange={(e) => setFormData({ ...formData, inspectionDate: e.target.value })}
                  required
                  className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded text-zinc-100 placeholder-zinc-400"
                />
                <textarea
                  placeholder="Any specific concerns or areas to focus on? (optional)"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded text-zinc-100 placeholder-zinc-400"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full text-white py-3 rounded font-bold transition-colors hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundColor: ACCENT_BLUE }}
                >
                  {status === 'submitting' ? 'SUBMITTING...' : 'REQUEST FREE INSPECTION'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
