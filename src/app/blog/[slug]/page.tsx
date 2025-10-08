import { posts } from '../../../lib/posts';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
        <div className="bg-zinc-900 min-h-screen text-center py-20">
            <h1 className="text-4xl font-bold text-zinc-50">Post not found</h1>
            <Link href="/handbook" className="hover:underline mt-4 inline-block" style={{ color: '#1E54A3' }}>Back to Handbook</Link>
        </div>
    );
  }

  return (
    <div className="bg-zinc-900 min-h-screen">
        {/* Header */}
        <div className="bg-zinc-800 border-b border-zinc-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link href="/" className="h-16 flex items-center hover:opacity-80 transition-opacity">
                    <Image
                        src="/assets/paulslogo-official.png"
                        alt="Paul's Roofing Logo"
                        width={240}
                        height={64}
                        className="h-16 w-auto"
                    />
                </Link>
                <Link href="/handbook" className="text-zinc-400 transition-colors hover:opacity-90" style={{ color: '#1E54A3' }}>
                    Back to Handbook
                </Link>
            </div>
        </div>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <article>
                <h1 className="text-5xl font-extrabold text-zinc-50 mb-4">{post.title}</h1>
                <p className="text-lg text-zinc-400 mb-8">{post.excerpt}</p>
                
                <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8 border border-zinc-700">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>

                 <div dangerouslySetInnerHTML={{ __html: post.content }} />

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
