'use client';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Feature from '@/components/Feature';
import Footer from '@/components/Footer';

export default function home() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <Navigation />
      <Hero />
      <Feature />
      <Footer />
    </main>
  );
}