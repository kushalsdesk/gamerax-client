import { motion } from "framer-motion";

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

export default GameCard;
