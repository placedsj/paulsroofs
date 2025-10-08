"use client";

import { useState } from 'react';

const ACCENT_BLUE = '#1E54A3';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    timeframe: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', address: '', timeframe: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000); // Reset after 5 seconds
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-700 shadow-xl">
      <h3 className="text-2xl font-bold text-zinc-50 mb-6">REQUEST A QUOTE</h3>
      
      {status === 'success' && (
        <div className="mb-4 p-4 bg-green-900/30 border border-green-700 rounded-lg">
          <p className="text-green-400 font-semibold">✓ Success! We'll contact you soon.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-4 p-4 bg-red-900/30 border border-red-700 rounded-lg">
          <p className="text-red-400">{errorMessage}</p>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input 
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
          className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded text-zinc-100 placeholder-zinc-400 disabled:opacity-50"
        />
        <input 
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
          className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded text-zinc-100 placeholder-zinc-400 disabled:opacity-50"
        />
        <input 
          type="tel"
          name="phone"
          placeholder="Your Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
          disabled={status === 'submitting'}
          className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded text-zinc-100 placeholder-zinc-400 disabled:opacity-50"
        />
        <input 
          type="text"
          name="address"
          placeholder="Property Address"
          value={formData.address}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
          className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded text-zinc-100 placeholder-zinc-400 disabled:opacity-50"
        />
        <select
          name="timeframe"
          value={formData.timeframe}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
          className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded text-zinc-100 disabled:opacity-50"
        >
          <option value="">When do you need this done?</option>
          <option value="emergency">Emergency - ASAP</option>
          <option value="soon">Soon - Within 2 weeks</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
          <option value="winter">Winter</option>
        </select>
        <textarea
          name="message"
          placeholder="Describe your roofing needs..."
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
          className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded text-zinc-100 placeholder-zinc-400 disabled:opacity-50"
        ></textarea>
        <button 
          type="submit"
          disabled={status === 'submitting'}
          className="w-full text-white py-3 rounded font-bold transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: ACCENT_BLUE }}
        >
          {status === 'submitting' ? 'SENDING...' : 'SEND REQUEST'}
        </button>
      </form>
    </div>
  );
}
