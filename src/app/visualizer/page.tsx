"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function VisualizerRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/materials');
  }, [router]);
  
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <p className="text-zinc-400">Redirecting to Materials Guide...</p>
    </div>
  );
}
