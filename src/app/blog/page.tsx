import Link from 'next/link';
import { posts } from '../../lib/posts';
import Image from 'next/image';

export default function BlogIndex() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      {/* Header */}
      <div className="bg-zinc-800 border-b border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="h-12 flex items-center hover:opacity-80 transition-opacity">
                <Image
                    src="/assets/paulslogo.png"
                    alt="Paul's Roofing Logo"
                    width={180}
                    height={48}
                    className="h-12 w-auto"
                />
            </Link>
            <Link href="/" className="text-zinc-400 hover:text-orange-500 transition-colors">
                Back to Home
            </Link>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-extrabold text-zinc-50 mb-4 text-center">Roofing Chronicles</h1>
        <p className="text-xl text-zinc-400 mb-12 text-center">Insights, tips, and news from Paul's Roofing.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
                <div className="bg-zinc-800 rounded-lg overflow-hidden group border border-zinc-700 hover:border-orange-600 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative w-full h-48">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-zinc-50 mb-2 group-hover:text-orange-500 transition-colors">{post.title}</h2>
                        <p className="text-zinc-400 line-clamp-3">{post.excerpt}</p>
                    </div>
                </div>
            </Link>
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