import React from 'react';
import {
    Phone,
    Calendar,
    Search,
    FileText,
    Palette,
    Truck,
    Hammer,
    CheckCircle,
    Clock,
    Shield,
    Camera,
    Users,
    Star,
    ArrowRight,
    MapPin,
    DollarSign,
    AlertCircle,
    Award
} from 'lucide-react';

interface ProcessStep {
    id: number;
    title: string;
    duration: string;
    description: string;
    icon: React.ReactNode;
    activities: string[];
    deliverables: string[];
    customerInvolvement: string;
    quality: string;
}

const processSteps: ProcessStep[] = [
    {
        id: 1,
        title: "Initial Consultation",
        duration: "30-60 minutes",
        description: "We begin with a thorough discussion of your needs, concerns, and roofing goals.",
        icon: <Phone className="w-8 h-8" />,
        activities: [
            "Free phone or in-person consultation",
            "Discussion of roofing concerns and goals",
            "Preliminary timeline and budget discussion",
            "Scheduling of professional inspection"
        ],
        deliverables: [
            "Consultation notes and recommendations",
            "Scheduled inspection appointment",
            "Preliminary project timeline"
        ],
        customerInvolvement: "Share your concerns, preferences, and timeline expectations",
        quality: "All consultations handled by experienced roofing professionals"
    },
    {
        id: 2,
        title: "Professional Inspection",
        duration: "45-90 minutes",
        description: "Comprehensive roof assessment using advanced tools and 35+ years of expertise.",
        icon: <Search className="w-8 h-8" />,
        activities: [
            "Complete exterior roof examination",
            "Interior attic and ceiling inspection",
            "Drone photography for detailed assessment",
            "Structural evaluation and measurements",
            "Documentation of existing issues"
        ],
        deliverables: [
            "Detailed inspection report with photos",
            "Problem identification and prioritization",
            "Structural assessment summary",
            "Recommended solutions"
        ],
        customerInvolvement: "Accompany inspector for explanation of findings",
        quality: "Certified inspectors with thermal imaging and drone technology"
    },
    {
        id: 3,
        title: "Custom Proposal",
        duration: "2-3 business days",
        description: "Detailed written estimate with multiple options, transparent pricing, and material specifications.",
        icon: <FileText className="w-8 h-8" />,
        activities: [
            "Precise measurements and calculations",
            "Material research and specification",
            "Good/Better/Best option development",
            "Financing options evaluation",
            "Permit and code compliance review"
        ],
        deliverables: [
            "Comprehensive written proposal",
            "Material specifications and warranties",
            "Project timeline and milestones",
            "Financing options and payment plans"
        ],
        customerInvolvement: "Review proposal and ask questions during presentation",
        quality: "All proposals reviewed by Paul himself for accuracy"
    },
    {
        id: 4,
        title: "Design & Planning",
        duration: "3-5 business days",
        description: "Finalize all project details, secure permits, and coordinate material delivery.",
        icon: <Palette className="w-8 h-8" />,
        activities: [
            "Final material selection and ordering",
            "Permit application and approval",
            "Project scheduling and crew assignment",
            "Supplier coordination and delivery planning",
            "Weather monitoring and contingency planning"
        ],
        deliverables: [
            "Signed contract and permits",
            "Final project schedule",
            "Material delivery confirmation",
            "Crew assignment notification"
        ],
        customerInvolvement: "Final approvals and contract signing",
        quality: "Master-level project planning with contingency protocols"
    },
    {
        id: 5,
        title: "Material Delivery",
        duration: "1-2 days",
        description: "Professional delivery and staging of all materials with property protection.",
        icon: <Truck className="w-8 h-8" />,
        activities: [
            "Coordinated material delivery scheduling",
            "Property protection setup",
            "Material inspection and inventory",
            "Strategic staging for efficient installation",
            "Safety perimeter establishment"
        ],
        deliverables: [
            "All materials delivered and inventoried",
            "Property protection in place",
            "Safety measures implemented",
            "Pre-installation site preparation"
        ],
        customerInvolvement: "Walkthrough of protection measures and staging",
        quality: "Premium materials from certified suppliers only"
    },
    {
        id: 6,
        title: "Professional Installation",
        duration: "1-5 days depending on project",
        description: "Expert installation by certified crews with daily progress updates and quality control.",
        icon: <Hammer className="w-8 h-8" />,
        activities: [
            "Daily safety briefings and setup",
            "Systematic removal and disposal",
            "Professional installation to manufacturer specs",
            "Continuous quality monitoring",
            "Daily cleanup and progress photos"
        ],
        deliverables: [
            "Progress photos and daily updates",
            "Quality control checklists",
            "Waste removal and site cleanup",
            "Installation completion documentation"
        ],
        customerInvolvement: "Daily updates and final walkthrough",
        quality: "Master Elite certified installers with ongoing supervision"
    },
    {
        id: 7,
        title: "Final Inspection & Warranty",
        duration: "2-3 hours",
        description: "Comprehensive quality inspection, cleanup, and warranty activation with ongoing support.",
        icon: <CheckCircle className="w-8 h-8" />,
        activities: [
            "Final quality inspection and testing",
            "Complete site cleanup and restoration",
            "Warranty registration and documentation",
            "Customer walkthrough and education",
            "Maintenance schedule presentation"
        ],
        deliverables: [
            "Quality certification document",
            "Warranty documentation and registration",
            "Maintenance guide and schedule",
            "Emergency contact information",
            "Photo documentation of completed work"
        ],
        customerInvolvement: "Final inspection walkthrough and warranty explanation",
        quality: "100% satisfaction guarantee with lifetime support commitment"
    }
];

const qualityAssurances = [
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Master Elite Certification",
        description: "Top 2% of contractors nationwide"
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: "35+ Years Experience",
        description: "Proven track record of excellence"
    },
    {
        icon: <Camera className="w-6 h-6" />,
        title: "Photo Documentation",
        description: "Before, during, and after photos"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Certified Crews",
        description: "Ongoing training and safety programs"
    }
];

const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl ${className}`}>{children}</div>
);

const CardContent: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
    <div className={`${className}`}>{children}</div>
);

const Badge: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${className}`}>{children}</span>
);

export default function ProcessPage({ onContact }: { onContact: () => void }) {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-blue-900 text-white">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Our Proven
                            <span className="block text-orange-400">7-Step Process</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto mb-8">
                            Transparent, professional, and stress-free roofing from consultation to completion.
                            Know exactly what to expect every step of the way.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-orange-400" />
                                <span>Clear Timelines</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-orange-400" />
                                <span>Transparent Pricing</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-orange-400" />
                                <span>Quality Guaranteed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-orange-400" />
                                <span>Expert Communication</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Overview */}
            <section className="py-16 bg-zinc-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-zinc-900 mb-4">
                            Why Our Process Works
                        </h2>
                        <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                            Over 35 years, we've refined our approach to eliminate surprises,
                            reduce stress, and deliver exceptional results every time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {qualityAssurances.map((item, index) => (
                            <Card key={index} className="text-center bg-white shadow-lg overflow-hidden">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-zinc-900 mb-2">{item.title}</h3>
                                    <p className="text-zinc-600 text-sm">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Timeline Overview */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
                            Typical Project Timeline
                        </h3>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="text-center mb-4 md:mb-0">
                                <div className="text-3xl font-bold text-orange-600">Day 1</div>
                                <div className="text-zinc-600">Consultation & Inspection</div>
                            </div>
                            <ArrowRight className="w-6 h-6 text-zinc-400 rotate-90 md:rotate-0" />
                            <div className="text-center mb-4 md:mb-0">
                                <div className="text-3xl font-bold text-blue-600">Days 2-5</div>
                                <div className="text-zinc-600">Proposal & Planning</div>
                            </div>
                            <ArrowRight className="w-6 h-6 text-zinc-400 rotate-90 md:rotate-0" />
                            <div className="text-center mb-4 md:mb-0">
                                <div className="text-3xl font-bold text-green-600">Days 6-10</div>
                                <div className="text-zinc-600">Installation & Completion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Process Steps */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {processSteps.map((step, index) => (
                            <div key={step.id} className="relative">
                                {/* Step Connector Line */}
                                {index < processSteps.length - 1 && (
                                    <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-orange-400 to-blue-400 hidden lg:block"></div>
                                )}

                                <Card className="bg-white shadow-xl border-l-4 border-orange-400 relative z-10">
                                    <CardContent className="p-8">
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                            {/* Step Header */}
                                            <div className="lg:col-span-3">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white shadow-lg">
                                                        {step.icon}
                                                    </div>
                                                    <div>
                                                        <Badge className="bg-orange-100 text-orange-800 mb-2">Step {step.id}</Badge>
                                                        <h3 className="text-2xl font-bold text-zinc-900">{step.title}</h3>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-zinc-600 mb-4">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="font-medium">{step.duration}</span>
                                                </div>
                                                <p className="text-zinc-700">{step.description}</p>
                                            </div>

                                            {/* Step Details */}
                                            <div className="lg:col-span-9">
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                    {/* Activities */}
                                                    <div>
                                                        <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                                                            <Hammer className="w-4 h-4 text-orange-600" />
                                                            What We Do
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {step.activities.map((activity, actIndex) => (
                                                                <li key={actIndex} className="flex items-start gap-2 text-sm text-zinc-600">
                                                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                                    {activity}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Deliverables */}
                                                    <div>
                                                        <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                                                            <FileText className="w-4 h-4 text-blue-600" />
                                                            You Receive
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {step.deliverables.map((deliverable, delIndex) => (
                                                                <li key={delIndex} className="flex items-start gap-2 text-sm text-zinc-600">
                                                                    <Star className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                                                    {deliverable}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Customer Involvement & Quality */}
                                                    <div className="space-y-4">
                                                        <div>
                                                            <h4 className="font-bold text-zinc-900 mb-2 flex items-center gap-2">
                                                                <Users className="w-4 h-4 text-purple-600" />
                                                                Your Role
                                                            </h4>
                                                            <p className="text-sm text-zinc-600 bg-purple-50 p-3 rounded-lg">
                                                                {step.customerInvolvement}
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <h4 className="font-bold text-zinc-900 mb-2 flex items-center gap-2">
                                                                <Shield className="w-4 h-4 text-green-600" />
                                                                Quality Assurance
                                                            </h4>
                                                            <p className="text-sm text-zinc-600 bg-green-50 p-3 rounded-lg">
                                                                {step.quality}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Communication Promise */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Our Communication Promise
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        We believe great communication is just as important as great craftsmanship.
                        Here's what you can expect throughout your project.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/10 rounded-lg p-6">
                            <Phone className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Always Available</h3>
                            <p>Direct phone line to your project manager during business hours</p>
                        </div>

                        <div className="bg-white/10 rounded-lg p-6">
                            <Camera className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Daily Updates</h3>
                            <p>Photo updates and progress reports sent to you every day</p>
                        </div>

                        <div className="bg-white/10 rounded-lg p-6">
                            <AlertCircle className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">No Surprises</h3>
                            <p>Immediate notification of any changes or unexpected discoveries</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="py-16 bg-zinc-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-zinc-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-zinc-600">
                            Common questions about our roofing process
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                question: "How long does a typical roofing project take?",
                                answer: "Most residential projects take 1-3 days for installation, with the entire process from consultation to completion typically taking 1-2 weeks depending on weather and material availability."
                            },
                            {
                                question: "What happens if weather delays the project?",
                                answer: "We monitor weather closely and will reschedule if conditions aren't safe. Your materials are protected, and we'll communicate new timelines immediately. Safety is our top priority."
                            },
                            {
                                question: "Do you clean up debris and materials?",
                                answer: "Absolutely. Complete cleanup is included in every project. We use magnetic sweepers to collect nails and ensure your property is left cleaner than we found it."
                            },
                            {
                                question: "What if I need to make changes during the project?",
                                answer: "We'll discuss any changes immediately, provide updated pricing, and get your approval before proceeding. Clear communication prevents surprises."
                            },
                            {
                                question: "How do you protect my landscaping and property?",
                                answer: "We use protective tarps, plywood walkways, and magnetic sweepers. Our crews are trained in property protection, and we'll restore anything that's damaged."
                            }
                        ].map((faq, index) => (
                            <Card key={index} className="bg-white shadow-lg">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-bold text-zinc-900 mb-3">{faq.question}</h3>
                                    <p className="text-zinc-600">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get Started Section */}
            <section className="py-16 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Ready to Experience the Paul's Roofing Difference?
                            </h2>
                            <p className="text-xl text-zinc-300 mb-8">
                                Start your stress-free roofing journey today. Our transparent process
                                and expert team are ready to protect your most important investment.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Start with a Free Consultation</h3>
                                        <p className="text-zinc-400">No obligations, just expert advice</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                                        <Calendar className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Flexible Scheduling</h3>
                                        <p className="text-zinc-400">We work around your timeline</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Guaranteed Results</h3>
                                        <p className="text-zinc-400">100% satisfaction promise</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 flex items-center justify-center text-center">
                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Book Your Inspection</h3>
                                <button onClick={onContact} className="bg-orange-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-xl">
                                    Contact Us Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
