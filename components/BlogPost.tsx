import React from 'react';
import { posts } from '../lib/posts';

interface BlogPostProps {
    slug: string;
    onBack: () => void;
    onHome: () => void;
}

export default function BlogPost({ slug, onBack, onHome }: BlogPostProps) {
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="bg-zinc-900 min-h-screen text-center py-20 pt-32">
                <h1 className="text-4xl font-bold text-zinc-50">Post not found</h1>
                <button onClick={onBack} className="hover:underline mt-4 inline-block text-[#1E54A3]">Back to Blog</button>
            </div>
        );
    }

    return (
        <div className="bg-zinc-900 min-h-screen pt-20">
            {/* Header */}
            <div className="bg-zinc-800 border-b border-zinc-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div onClick={onHome} className="cursor-pointer h-16 flex items-center hover:opacity-80 transition-opacity">
                        <span className="text-2xl font-black italic text-white tracking-tighter">PAUL'S <span className="text-orange-500">ROOFING</span></span>
                    </div>
                    <button onClick={onBack} className="text-zinc-400 transition-colors hover:text-white flex items-center gap-2">
                        ← Back to Blog
                    </button>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <article>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">{post.category}</span>
                        <span className="text-zinc-500 text-xs">|</span>
                        <span className="text-zinc-500 text-xs">{post.date}</span>
                    </div>
                    <h1 className="text-5xl font-extrabold text-zinc-50 mb-6 leading-tight">{post.title}</h1>
                    <p className="text-xl text-zinc-300 mb-8 leading-relaxed font-medium">{post.excerpt}</p>

                    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden mb-12 border border-zinc-700 shadow-2xl">
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div
                        className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-li:text-zinc-300 prose-strong:text-white prose-a:text-orange-500"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                </article>
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
