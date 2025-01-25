import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0F1116] to-transparent" />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Your Ultimate
            <span className="block bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Gaming Universe
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            Discover thousands of games, connect with players worldwide, and
            embark on epic gaming adventures.
          </p>
          <div className="flex items-center space-x-6">
            <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 rounded-full text-lg font-medium transition-colors">
              Explore Games
            </button>
            <button className="group flex items-center text-lg text-gray-300 hover:text-white transition-colors">
              Learn More
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-violet-600/20 rounded-full blur-3xl" />
          <img
            src="/placeholder.svg"
            alt="Featured Game"
            className="relative rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
