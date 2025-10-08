"use client";

import React from 'react';
import Link from 'next/link';

const ACCENT_BLUE = '#1E54A3';

// Placeholder reviews - replace with real reviews later
const placeholderReviews = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    text: "Paul's team did an excellent job on our metal roof installation. Professional, punctual, and the quality is outstanding. Highly recommend!",
    date: "2 weeks ago",
    location: "Saint John, NB"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    text: "We had emergency roof repairs done and they came out the same day! Fixed the leak quickly and cleaned up perfectly. Very impressed with their service.",
    date: "1 month ago",
    location: "Quispamsis, NB"
  },
  {
    id: 3,
    name: "Mike Davidson",
    rating: 5,
    text: "Great experience from start to finish. The estimate was detailed, pricing was fair, and the crew was incredibly skilled. Our new roof looks amazing!",
    date: "3 weeks ago",
    location: "Rothesay, NB"
  },
  {
    id: 4,
    name: "Linda Martinez",
    rating: 5,
    text: "Paul personally came out to inspect our roof and provided honest recommendations. No pressure, just expert advice. The installation was flawless!",
    date: "1 week ago",
    location: "Hampton, NB"
  }
];

export function ReviewsSection() {
  return (
    <section className="py-20 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-50 mb-4">WHAT OUR CUSTOMERS SAY</h2>
          <p className="text-xl text-zinc-400 mb-6">Trusted by homeowners across Southern New Brunswick</p>
          
          {/* Review Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://www.facebook.com/paulsroofing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Visit Us on Facebook
            </a>
            <a
              href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white font-bold rounded-lg transition-colors hover:opacity-90"
              style={{ backgroundColor: ACCENT_BLUE }}
            >
              ⭐ Leave Us a 5-Star Review
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {placeholderReviews.map((review) => (
            <div
              key={review.id}
              className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 shadow-xl hover:border-orange-500 transition-colors"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-zinc-300 mb-4 text-sm leading-relaxed">"{review.text}"</p>
              
              {/* Reviewer Info */}
              <div className="border-t border-zinc-700 pt-4 mt-4">
                <p className="text-zinc-50 font-bold">{review.name}</p>
                <p className="text-zinc-500 text-xs">{review.location} • {review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-zinc-400 mb-4">Had a great experience with Paul's Roofing?</p>
          <a
            href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors"
          >
            Share Your Story - Write a Review
          </a>
        </div>
      </div>
    </section>
  );
}
