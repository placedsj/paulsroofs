import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
// Assuming your blog post data is located here:
import { posts } from '../../lib/posts'; 

export default function HandbookPage() {
    return (
        <div className="bg-zinc-900 min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-5xl font-extrabold text-zinc-50 mb-4 text-center">Homeowner's Handbook & Resources</h1>
                <p className="text-xl text-zinc-400 mb-12 text-center">Your complete guide to roofing care, maintenance, and project insights.</p>

                {/* --- Static Handbook Content --- */}
                <div className="prose prose-invert prose-lg max-w-none mx-auto text-zinc-300 mb-20 border-b border-zinc-700 pb-12">
                    <p>
                        Welcome to the Paul's Roofing Homeowner's Handbook! This section is designed to help you understand and care for your roof. Proper maintenance will ensure your roof lasts a lifetime, protecting your home and family for decades to come.
                    </p>
                    <h2 className="text-3xl font-bold text-zinc-50 mt-12 mb-4">Understanding Your Roof System</h2>
                    <p>
                        Your new roof is a complex system of components. Here are the key parts you should know about:
                    </p>
                    <ul>
                        <li><strong>Roofing Material:</strong> The outermost layer (metal panels, asphalt shingles, etc.), your first line of defense against the elements.</li>
                        <li><strong>Underlayment:</strong> A waterproof barrier beneath the roofing material, providing secondary protection against water intrusion.</li>
                        <li><strong>Flashing:</strong> Metal pieces installed at joints, valleys, and vents to prevent water from seeping into the structure.</li>
                        <li><strong>Ventilation:</strong> A system allowing air to circulate, preventing damaging heat and moisture buildup in your attic.</li>
                    </ul>
                    <h2 className="text-3xl font-bold text-zinc-50 mt-12 mb-4">Top Maintenance Tips</h2>
                    <p>Regular maintenance is crucial for maximizing your roof's lifespan:</p>
                    <ul>
                        <li><strong>Inspect Regularly:</strong> Twice a year (spring and fall), visually inspect your roof for loose shingles, damaged flashing, or blocked vents.</li>
                        <li><strong>Keep Gutters Clean:</strong> Clogged gutters cause water to back up, leading to fascia and roof deck damage. Clean them at least twice a year.</li>
                        <li><strong>Trim Branches:</strong> Keep overhanging tree branches trimmed back to prevent scraping, which can damage roofing materials over time.</li>
                        <li><strong>Avoid Foot Traffic:</strong> Minimize walking on the roof, as foot traffic can damage materials, especially shingles in cold weather.</li>
                    </ul>
                </div>

                {/* --- Dad's Jokes Section --- */}
                <div className="bg-gradient-to-r from-orange-900/20 to-zinc-800/50 border border-orange-500/30 rounded-xl p-8 mb-16">
                    <h2 className="text-3xl font-extrabold text-orange-500 mb-6 text-center">😂 Dad's Roofing Jokes</h2>
                    <p className="text-center text-zinc-400 mb-8">Because even roofing should have a sense of humor! Share these with your crew.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        <div className="bg-zinc-900/80 p-6 rounded-lg border border-zinc-700">
                            <p className="text-zinc-300 text-lg mb-2">What's a roofer's favorite candy?</p>
                            <p className="text-orange-500 font-bold text-xl">...Shingles! 🍫</p>
                        </div>
                        <div className="bg-zinc-900/80 p-6 rounded-lg border border-zinc-700">
                            <p className="text-zinc-300 text-lg mb-2">Why did the shingle break up with the wood sheathing?</p>
                            <p className="text-orange-500 font-bold text-xl">...Because he felt too much pressure! 💔</p>
                        </div>
                        <div className="bg-zinc-900/80 p-6 rounded-lg border border-zinc-700">
                            <p className="text-zinc-300 text-lg mb-2">How many roofers does it take to change a lightbulb?</p>
                            <p className="text-orange-500 font-bold text-xl">...None, we work better in the dark! 💡</p>
                        </div>
                        <div className="bg-zinc-900/80 p-6 rounded-lg border border-zinc-700">
                            <p className="text-zinc-300 text-lg mb-2">Why did the roof go to therapy?</p>
                            <p className="text-orange-500 font-bold text-xl">...It had too many issues up top! 😅</p>
                        </div>
                    </div>
                    <p className="text-center text-zinc-400 mt-6 text-sm">Got a better one? Share it on our Facebook page! #BetterCallPaul</p>
                </div>

                {/* --- Dynamic Blog/Resource Post Grid --- */}
                <h2 className="text-4xl font-extrabold text-zinc-50 mb-10 text-center border-b border-orange-500 pb-3">Dad's Fix of the Week: Roofing Articles & Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link href={`/handbook/${post.slug}`} key={post.slug} legacyBehavior>
                            <div className="bg-zinc-800 rounded-lg overflow-hidden group border border-zinc-700 hover:border-orange-600 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                                <div className="relative w-full h-48">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-zinc-50 mb-2 group-hover:text-orange-500 transition-colors">{post.title}</h3>
                                    <p className="text-zinc-400 line-clamp-3">{post.excerpt}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
