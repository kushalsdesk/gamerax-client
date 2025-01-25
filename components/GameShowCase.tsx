"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const games = {
  upcoming: [
    {
      id: 1,
      title: "Cyber Nexus",
      image: "/placeholder.svg",
      rating: 4.8,
      releaseDate: "2024",
    },
    {
      id: 2,
      title: "Stellar Odyssey",
      image: "/placeholder.svg",
      rating: 4.5,
      releaseDate: "2024",
    },
    {
      id: 3,
      title: "Neon Samurai",
      image: "/placeholder.svg",
      rating: 4.2,
      releaseDate: "2024",
    },
    {
      id: 4,
      title: "Quantum Breach",
      image: "/placeholder.svg",
      rating: 4.9,
      releaseDate: "2024",
    },
    {
      id: 5,
      title: "Ethereal Realms",
      image: "/placeholder.svg",
      rating: 4.6,
      releaseDate: "2024",
    },
  ],
  latest: [
    {
      id: 6,
      title: "Void Explorers",
      image: "/placeholder.svg",
      rating: 4.1,
      releaseDate: "2023",
    },
    {
      id: 7,
      title: "Chrono Shift",
      image: "/placeholder.svg",
      rating: 4.7,
      releaseDate: "2023",
    },
    {
      id: 8,
      title: "Nebula Warriors",
      image: "/placeholder.svg",
      rating: 4.4,
      releaseDate: "2023",
    },
    {
      id: 9,
      title: "Synthwave Racer",
      image: "/placeholder.svg",
      rating: 4.3,
      releaseDate: "2023",
    },
    {
      id: 10,
      title: "Dark Echo",
      image: "/placeholder.svg",
      rating: 4.5,
      releaseDate: "2023",
    },
  ],
  top: [
    {
      id: 11,
      title: "Astral Legacy",
      image: "/placeholder.svg",
      rating: 4.9,
      players: "1M+",
    },
    {
      id: 12,
      title: "Cyber Knights",
      image: "/placeholder.svg",
      rating: 4.8,
      players: "800K+",
    },
    {
      id: 13,
      title: "Neo Dynasty",
      image: "/placeholder.svg",
      rating: 4.8,
      players: "750K+",
    },
    {
      id: 14,
      title: "Quantum Wars",
      image: "/placeholder.svg",
      rating: 4.7,
      players: "500K+",
    },
    {
      id: 15,
      title: "Solar Empire",
      image: "/placeholder.svg",
      rating: 4.7,
      players: "450K+",
    },
  ],
};

const GameCard = ({ title, image, rating, releaseDate, players }: any) => (
  <motion.div
    layout
    className="group relative overflow-hidden rounded-2xl bg-[#1A1B20]/30 border border-white/5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <img
      src={image || "/placeholder.svg"}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1116] via-transparent to-transparent" />
    <div className="absolute bottom-0 left-0 p-4">
      <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
      <div className="flex items-center space-x-3">
        <div className="flex items-center">
          <span className="text-yellow-400">★</span>
          <span className="ml-1 text-sm text-gray-400">{rating}</span>
        </div>
        {releaseDate && (
          <div className="text-sm text-gray-400">Release: {releaseDate}</div>
        )}
        {players && (
          <div className="text-sm text-gray-400">{players} Players</div>
        )}
      </div>
    </div>
  </motion.div>
);

export default function GameShowcase() {
  const [activeCategory, setActiveCategory] = useState("upcoming");

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-medium text-white mb-8">
            Featured Games
          </h2>
          <div className="flex justify-center space-x-4">
            {["upcoming", "latest", "top"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-violet-600 text-white"
                    : "bg-[#1A1B20]/30 text-gray-300 hover:bg-violet-600/20"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {games[activeCategory as keyof typeof games].map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center mt-8">
          <Link
            href="/games"
            className="group flex items-center text-sm text-violet-400 hover:text-violet-300 transition-colors"
          >
            View All Games
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
