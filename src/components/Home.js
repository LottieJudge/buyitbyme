'use client';
import { useState } from "react";
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Feature from '@/components/Feature';
import Footer from "@/components/Footer";

export default function Home() {


  const handleSearch = async (query, postcode) => {
    console.log("search query:", query)
    if(!query || !postcode)return;

    try {
      const response = await fetch(`/api/shops?search=${query}&postcode=${postcode}`)
      const data = await response.json();
      if (response.ok){
        console.log("Search results:", data)
      } else {
        console.error("No products found:", error)
      }
    } catch (error){
      console.error("Error fetching products:", error)
    }
  }
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <Navigation />
      <Hero onSearch={handleSearch}/>
      <Feature />
      <Footer />
    </main>
  );
}