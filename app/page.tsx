"use client";

import Features from "@/components/Features";
import BlogSupport from "@/components/BlogSupport";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GameShowcase from "@/components/GameShowCase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <GameShowcase />
      <Features />
      <BlogSupport />
      <Footer />
    </>
  );
}
