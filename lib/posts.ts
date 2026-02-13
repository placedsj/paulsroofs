export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    imageUrl: string;
    date: string;
    category: string;
    author: string;
    tags: string[];
}

export const posts: BlogPost[] = [
    {
        slug: 'nb-eavestrough-maintenance-guide',
        title: "Dad's Fix #1: The New Brunswick Homeowner's Guide to Eavestrough Maintenance",
        date: '2025-10-01',
        excerpt: "Stop the Rot! Your gutters are the unsung heroes of your roof. Learn Dad Paul's essential tips to prevent thousands in water damage.",
        content: `
            <div class="prose prose-invert prose-lg mx-auto">
                <div class="bg-blue-50 p-6 rounded-2xl mb-8 border-l-8 border-blue-500 shadow-sm text-slate-900">
                    <h4 class="text-blue-800 font-bold text-lg mb-2">💡 Storage Tip</h4>
                    <p class="text-slate-700 mb-2">Don't clutter your garage with gutter cleaning tools (ladders, scoops, hoses).</p> 
                    <a href="#tools" class="text-blue-600 hover:underline font-bold text-lg">Check out our specialized storage sheds</a> to keep your maintenance gear organized and accessible.
                </div>
                <h2 class="text-3xl font-bold text-slate-900 mb-4">Stop the Rot: Why Your Gutters are the Unsung Heroes</h2>
                <p class="text-slate-600 text-xl mb-6">Listen up, New Brunswick homeowners! After 30+ years in the roofing game, I can tell you one thing: water is the enemy. Your eavestroughs are the first line of defense.</p>
                <p class="text-slate-600 text-lg mb-4">When leaves and debris clog your system, water backs up. In our climate, that freezes, expands, and rips your fascia apart. I've seen a $50 cleaning job turn into a $5,000 repair overnight.</p>
            </div>
        `,
        tags: ["maintenance", "gutters", "storage-tips"],
        imageUrl: "https://images.unsplash.com/photo-1621255761899-73d8a5948cb3?auto=format&fit=crop&q=80&w=1000",
        category: "Maintenance",
        author: "Dad Paul"
    },
    {
        slug: 'winter-roof-preparation-checklist-nb',
        title: "Winter-Proof Your Roof: New Brunswick's Essential Pre-Winter Checklist",
        date: '2025-10-20',
        excerpt: "Don't let winter catch you unprepared! Follow this comprehensive checklist to protect your NB home from ice dams and snow loads.",
        content: `
            <div class="prose prose-invert prose-lg mx-auto">
                <div class="bg-amber-50 p-6 rounded-2xl mb-8 border-l-8 border-amber-500 shadow-sm text-slate-900">
                    <h4 class="text-amber-800 font-bold text-lg mb-2">❄️ Winter Ready?</h4>
                    <p class="text-slate-700 mb-2">Protect your summer furniture, lawnmower, and BBQ from the harsh NB winter. Don't leave them under a tarp.</p> 
                    <a href="#tools" class="text-amber-700 hover:underline font-bold text-lg">Browse our weather-proof sheds</a> designed for heavy snow loads.
                </div>
                <h2 class="text-3xl font-bold text-slate-900 mb-4">The Calm Before the Storm</h2>
                <p class="text-slate-600 text-xl mb-6">November is your last chance. Once the snow flies, it's too late for shingles and sealant. Here is my personal checklist for every homeowner.</p>
                <ul class="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                    <li><strong>Check your flashing:</strong> Look where the chimney meets the shingles.</li>
                    <li><strong>Clear the valleys:</strong> Leaves trap moisture here.</li>
                    <li><strong>Trim overhanging branches:</strong> Ice storms will bring these down on your roof.</li>
                </ul>
            </div>
        `,
        tags: ["winter-prep", "seasonal", "outdoor-storage"],
        imageUrl: "https://images.unsplash.com/photo-1547623644-8aa59c2567c9?auto=format&fit=crop&q=80&w=1000",
        category: "Seasonal",
        author: "Dad Paul"
    },
    {
        slug: 'tools-of-the-trade',
        title: "The Right Tool for the Job: Why Professional Roofers Don't Use Big Box Shingle",
        date: '2025-11-05',
        excerpt: "Not all asphalt is created equal. Understanding the difference between retail and architectural grade materials.",
        content: `
             <div class="prose prose-invert prose-lg mx-auto">
                <h2 class="text-3xl font-bold text-slate-900 mb-4">Quality Matters</h2>
                <p class="text-slate-600 text-xl mb-6">You might save $200 on materials now, but you'll pay $10,000 in 10 years when they fail. We use architectural IKO shingles for a reason.</p>
                
                 <div class="bg-slate-100 p-8 rounded-3xl mb-8 text-center text-slate-900">
                    <h3 class="text-2xl font-black text-slate-900 mb-4">Need a Workshop?</h3>
                    <p class="text-slate-500 mb-6">Stop working on your kitchen table. Build a dedicated space for your projects.</p>
                    <a href="#tools" class="inline-block px-8 py-3 bg-slate-900 text-white font-bold rounded-xl">Design Your Workshop</a>
                </div>
            </div>
        `,
        tags: ["materials", "expert-advice"],
        imageUrl: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1000",
        category: "Materials",
        author: "Dad Paul"
    },
    {
        slug: '2026-shed-price-guide-nb',
        title: "2026 Shed Price Guide: Honest Numbers from 8x8 to 12x28",
        date: '2025-11-15',
        excerpt: "Transparency is key. We've published our full 2026 pricing model so you can budget for your backyard upgrade with confidence.",
        content: `
             <div class="prose prose-invert prose-lg mx-auto">
                <h2 class="text-3xl font-bold text-slate-900 mb-4">No More Guesswork</h2>
                <p class="text-slate-600 text-xl mb-6">Most contractors hide their pricing. We don't. Here is a snapshot of our 2026 pricing for our most popular models.</p>
                
                <div class="overflow-x-auto mb-8">
                    <table class="min-w-full bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm text-slate-900">
                        <thead class="bg-slate-900 text-white font-bold">
                            <tr>
                                <th class="py-3 px-4 text-left">Size</th>
                                <th class="py-3 px-4 text-left">A-Frame Standard</th>
                                <th class="py-3 px-4 text-left">Hi-Wall Barn</th>
                                <th class="py-3 px-4 text-left">Quaker</th>
                            </tr>
                        </thead>
                        <tbody class="text-slate-700">
                            <tr class="border-b border-slate-100"><td class="py-3 px-4 font-bold">8x8</td><td class="py-3 px-4">$3,124</td><td class="py-3 px-4">$3,671</td><td class="py-3 px-4">$2,207</td></tr>
                            <tr class="border-b border-slate-100 bg-slate-50"><td class="py-3 px-4 font-bold">10x12</td><td class="py-3 px-4">$4,647</td><td class="py-3 px-4">$5,788</td><td class="py-3 px-4">$5,210</td></tr>
                            <tr class="border-b border-slate-100"><td class="py-3 px-4 font-bold">12x16</td><td class="py-3 px-4">$6,311</td><td class="py-3 px-4">$7,162</td><td class="py-3 px-4">$6,975</td></tr>
                            <tr class="border-b border-slate-100 bg-slate-50"><td class="py-3 px-4 font-bold">12x24</td><td class="py-3 px-4">$8,611</td><td class="py-3 px-4">$9,694</td><td class="py-3 px-4">$9,396</td></tr>
                        </tbody>
                    </table>
                </div>
                 <div class="bg-emerald-50 p-8 rounded-3xl mb-8 text-center border border-emerald-200 text-emerald-900">
                    <h3 class="text-2xl font-black text-emerald-900 mb-4">See Your Payment Options</h3>
                    <p class="text-emerald-700 mb-6">We offer rent-to-own plans starting at just $150/month.</p>
                    <a href="#tools" class="inline-block px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-colors">Calculate Your ROI</a>
                </div>
            </div>
        `,
        tags: ["pricing", "sustainability", "guide"],
        imageUrl: "https://images.unsplash.com/photo-1628135804795-94e82df4236a?auto=format&fit=crop&q=80&w=1000",
        category: "Pricing",
        author: "Placed Team"
    },
    {
        slug: 'hidden-costs-diy-shed-building',
        title: "The Hidden Costs of DIY Shed Building: A 2026 Analysis",
        date: '2025-11-20',
        excerpt: "Think you can save money by building it yourself? We crunched the numbers. The answer might surprise you.",
        content: `
             <div class="prose prose-invert prose-lg mx-auto">
                <h2 class="text-3xl font-bold text-slate-900 mb-4">The DIY Illusion</h2>
                <p class="text-slate-600 text-xl mb-6">We recently analyzed the material costs for a standard 12x16 Garden Shed. The results are eye-opening.</p>
                
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 text-slate-900">
                    <h3 class="text-xl font-bold text-yellow-800">The Hard Numbers</h3>
                    <ul class="list-disc pl-6 space-y-2 mt-2 text-yellow-900">
                        <li><strong>Materials Only:</strong> $2,948.85 (Lumber, Shingles, Siding)</li>
                        <li><strong>Overhead & Delivery:</strong> $500.00</li>
                        <li><strong>Labor (Your Time @ $25/hr):</strong> $1,200.00</li>
                        <li><strong>Total Estimated Cost:</strong> $4,648.85</li>
                    </ul>
                </div>
                <p class="text-slate-600 text-lg mb-6">Our retail price for a professionally built, warrantied version of this shed is just <strong>$6,749</strong>. For a difference of ~$2,000, you save 48+ hours of labor, gain a warranty, and avoid the risk of construction errors.</p>
                <h3 class="text-2xl font-bold text-slate-900 mb-4">What You Get With Us</h3>
                <ul class="list-disc pl-6 space-y-2 text-slate-600 mb-8">
                    <li>Professional Framing (16" O.C.)</li>
                    <li>Architectural Shingles (Standard)</li>
                    <li>Double Doors & Windows Included</li>
                    <li><strong>0% Headache Guarantee</strong></li>
                </ul>
                 <div class="bg-slate-900 p-8 rounded-3xl text-center text-white">
                    <h3 class="text-2xl font-black mb-4 uppercase tracking-tighter">Don't Waste Your Weekends</h3>
                    <p class="text-slate-400 mb-6">Get a custom quote today and have your shed delivered fully assembled.</p>
                    <a href="#tools" class="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">Start Designing</a>
                </div>
            </div>
        `,
        tags: ["diy-vs-buy", "cost-analysis", "sheds"],
        imageUrl: "https://images.unsplash.com/photo-1518709328221-a434d28434f0?auto=format&fit=crop&q=80&w=1000",
        category: "Analysis",
        author: "Placed Team"
    }
];
