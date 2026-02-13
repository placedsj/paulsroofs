import React from 'react';
import { posts } from '../lib/posts';

interface BlogIndexProps {
    onHome: () => void;
    onPostSelect: (slug: string) => void;
}

export default function BlogIndex({ onHome, onPostSelect }: BlogIndexProps) {
    return (
        <div className="bg-zinc-900 min-h-screen pt-20">
            {/* Header */}
            <div className="bg-zinc-800 border-b border-zinc-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
                    <div onClick={onHome} className="cursor-pointer h-16 flex items-center hover:opacity-80 transition-opacity">
                        <span className="text-2xl font-black italic text-white tracking-tighter">PAUL'S <span className="text-orange-500">ROOFING</span></span>
                    </div>
                    <div className="text-right">
                        <button onClick={onHome} className="text-zinc-400 hover:text-orange-500 transition-colors font-medium">
                            ← Back to Home
                        </button>
                        <p className="text-zinc-500 text-sm mt-1">Expert Roofing Insights</p>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-5xl font-extrabold text-zinc-50 mb-4 text-center">Roofing Chronicles</h1>
                <p className="text-xl text-zinc-400 mb-12 text-center">Insights, tips, and news from Paul's Roofing.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div
                            key={post.slug}
                            onClick={() => onPostSelect(post.slug)}
                            className="bg-zinc-800 rounded-lg overflow-hidden group border border-zinc-700 hover:border-orange-600 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                        >
                            <div className="relative w-full h-48 overflow-hidden">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-zinc-50 mb-2 group-hover:text-orange-500 transition-colors">{post.title}</h2>
                                <p className="text-zinc-400 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                                <span className="inline-block mt-4 text-[10px] font-black uppercase tracking-widest text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full">{post.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-zinc-900 border-t border-zinc-700 py-12 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-zinc-500">© 2025 Paul's Roofing. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
