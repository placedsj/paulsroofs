"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const ACCENT_BLUE = '#1E54A3';

export default function ChristmasLightsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
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
          timeframe: 'fall',
          message: `Christmas Light Installation Request\nService Type: ${formData.serviceType}\n\nDetails: ${formData.message}`
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', address: '', serviceType: '', message: '' });
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
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-green-900/50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-50 mb-4">
              🎄 CHRISTMAS LIGHT INSTALLATION 🎄
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Professional holiday lighting installation and removal - stress-free decorating
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-zinc-50 mb-12">Our Holiday Services</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-2xl font-bold text-zinc-50 mb-4">✨ Full Installation</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Design consultation</li>
                  <li>• Professional-grade lights</li>
                  <li>• Complete installation</li>
                  <li>• Safety tested</li>
                  <li>• Removal after season</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-2xl font-bold text-zinc-50 mb-4">🏠 Roofline Lighting</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Classic roofline display</li>
                  <li>• Gutter clips installation</li>
                  <li>• Custom color options</li>
                  <li>• LED energy efficient</li>
                  <li>• Weather resistant</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-2xl font-bold text-zinc-50 mb-4">🌟 Custom Displays</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Trees and bushes</li>
                  <li>• Window frames</li>
                  <li>• Columns and posts</li>
                  <li>• Walkway lighting</li>
                  <li>• Yard decorations</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-2xl font-bold text-zinc-50 mb-4">🔧 Repair Service</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Light string testing</li>
                  <li>• Bulb replacement</li>
                  <li>• Connection repair</li>
                  <li>• Timer programming</li>
                  <li>• Quick turnaround</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-2xl font-bold text-zinc-50 mb-4">📦 Storage Service</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Take down service</li>
                  <li>• Careful packing</li>
                  <li>• Organized storage</li>
                  <li>• Reinstall next year</li>
                  <li>• No clutter at home</li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
                <h3 className="text-2xl font-bold text-zinc-50 mb-4">⚡ Commercial</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Business displays</li>
                  <li>• Large-scale projects</li>
                  <li>• Event lighting</li>
                  <li>• Professional design</li>
                  <li>• Reliable service</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-zinc-50 mb-12">Why Choose Paul's Roofing?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-4xl">🎅</div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-50 mb-2">Safety First</h3>
                  <p className="text-zinc-400">We're roofing experts - we know how to safely work at heights</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">🎁</div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-50 mb-2">Hassle-Free</h3>
                  <p className="text-zinc-400">Installation, maintenance, and removal - we handle everything</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">⭐</div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-50 mb-2">Quality Lights</h3>
                  <p className="text-zinc-400">Commercial-grade LED lights that last season after season</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">🛡️</div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-50 mb-2">Fully Insured</h3>
                  <p className="text-zinc-400">Licensed and insured for your peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 bg-zinc-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-zinc-50 mb-8">
              Book Your Holiday Lighting
            </h2>
            <p className="text-center text-zinc-400 mb-12">
              Get a free quote for your Christmas light installation - Book early for best availability!
            </p>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg">
                <p className="text-green-400 font-semibold text-center">
                  ✓ Request submitted! We'll contact you with a quote shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-lg border border-zinc-700">
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
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  required
                  className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded text-zinc-100"
                >
                  <option value="">Select Service Type</option>
                  <option value="full-install">Full Installation & Removal</option>
                  <option value="roofline">Roofline Only</option>
                  <option value="custom">Custom Display</option>
                  <option value="repair">Repair Existing Lights</option>
                  <option value="commercial">Commercial/Business</option>
                </select>
                <textarea
                  placeholder="Describe your vision or specific requirements..."
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
                  {status === 'submitting' ? 'SUBMITTING...' : 'GET FREE QUOTE'}
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
