import { PaymentOptions } from '@/components/PaymentOptions';
import Image from 'next/image';
import Link from 'next/link';

export default function PaymentPage() {
  // In a real app, this would come from URL params or database
  const sampleProject = {
    projectId: "PAULS-2025-001",
    customerName: "Customer Name",
    customerEmail: "customer@example.com",
    projectDescription: "Metal Roofing Installation"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-700 bg-zinc-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/assets/paulslogo-official.png"
                alt="Paul's Roofing Logo"
                width={180}
                height={54}
                className="h-12 w-auto"
              />
            </Link>
            <div className="text-right">
              <p className="text-zinc-300">
                <strong>Paul:</strong> (506) 271-4162
              </p>
              <p className="text-zinc-400 text-sm">paul@paulroofs.com</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-4">
            Secure Payment Portal
          </h1>
          <p className="text-xl text-zinc-300">
            Choose your preferred payment method to complete your roofing project
          </p>
        </div>

        {/* Project Summary (Optional) */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-zinc-50 mb-4">📋 Project Summary</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-zinc-300">
                <strong>Project:</strong> {sampleProject.projectDescription}
              </p>
              <p className="text-zinc-300">
                <strong>Customer:</strong> {sampleProject.customerName}
              </p>
            </div>
            <div>
              <p className="text-zinc-300">
                <strong>Project ID:</strong> {sampleProject.projectId}
              </p>
              <p className="text-zinc-300">
                <strong>Status:</strong> <span className="text-green-400">Ready for Payment</span>
              </p>
            </div>
          </div>
        </div>

        {/* Payment Options Component */}
        <PaymentOptions 
          invoiceAmount={15500} // Example amount
          projectDetails={sampleProject}
        />

        {/* Trust Signals */}
        <div className="mt-12 text-center">
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-zinc-50 mb-4">🔒 Your Payment is Secure</h3>
            <div className="grid md:grid-cols-3 gap-6 text-zinc-300">
              <div>
                <strong className="text-zinc-50">SSL Encrypted</strong>
                <p className="text-sm">Your payment information is protected with bank-level security</p>
              </div>
              <div>
                <strong className="text-zinc-50">Licensed & Insured</strong>
                <p className="text-sm">Paul's Roofing is fully licensed and insured in New Brunswick</p>
              </div>
              <div>
                <strong className="text-zinc-50">35+ Years Experience</strong>
                <p className="text-sm">Trusted by over 1000+ New Brunswick homeowners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link 
            href="/"
            className="text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            ← Back to Paul's Roofing Home
          </Link>
        </div>
      </main>
    </div>
  );
}