'use client';

import Hero from '@/components/Hero';
import Searchbar from '@/components/Searchbar'; 
export default function ComponentPreviewPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-2xl font-bold mb-6"></h1>
      <Hero />
      <Searchbar />
    </main>
  );
}