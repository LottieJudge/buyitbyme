'use client'
import Navigation from '@/components/Navigation';
import Productlist from '@/components/Productlist';
import Footer from '@/components/Footer';

export default function ProductSearch() {
    return (
        <main className="min-h-screen bg-gray-50 p-10">
        <Navigation />
        <Productlist />
        <Footer />
        </main>
    );
    }