"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import games from "@/lib/gamaData";

export interface IGame {
  id: string;
  title: string;
  genre: string;
  developer: string;
  releaseYear: number;
  imageUrl: string;
}

interface Props {
  game: IGame;
}

const EachGame: React.FC<Props> = ({ game }) => {
  return (
    <motion.div
      className="flex flex-col h-[350px] w-full max-w-[320px] bg-[#1A1B20]/30 border border-white/5 rounded-xl overflow-hidden shadow-lg hover:border-violet-600/50 transition-colors"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-[65%] w-full">
        <Image
          alt={`${game.title} cover`}
          src={game.imageUrl || "/placeholder.svg"}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
          loading="lazy"
          quality={70}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1116] via-transparent to-transparent" />
      </div>
      <div className="p-4 flex flex-col justify-between h-[35%]">
        <div>
          <h3 className="text-lg font-medium text-white mb-1">{game.title}</h3>
          <p className="text-sm text-gray-400">{game.genre}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-xs text-violet-400">{game.developer}</p>
          <p className="text-xs text-gray-500">{game.releaseYear}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Page() {
  return (
    <div className="container relative top-[100px] mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {games.map((game: IGame) => (
        <EachGame key={game.id} game={game} />
      ))}
    </div>
  );
}
