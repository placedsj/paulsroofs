import { posts } from '../../../lib/posts';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
        <div className="bg-zinc-900 min-h-screen text-center py-20">
            <h1 className="text-4xl font-bold text-zinc-50">Post not found</h1>
            <Link href="/blog" className="text-orange-500 hover:underline mt-4 inline-block">Back to Blog</Link>
        </div>
    );
  }

  return (
    <div className="bg-zinc-900 min-h-screen">
        {/* Header */}
        <div className="bg-zinc-800 border-b border-zinc-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link href="/" className="h-12 flex items-center hover:opacity-80 transition-opacity">
                    <Image
                        src="/assets/paulslogo-official.png"
                        alt="Paul's Roofing Logo"
                        width={180}
                        height={48}
                        className="h-12 w-auto"
                    />
                </Link>
                <Link href="/blog" className="text-zinc-400 hover:text-orange-500 transition-colors">
                    Back to Blog
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
                        layout="fill"
                        objectFit="cover"
                        priority // Prioritize loading the main blog image
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
