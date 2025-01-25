import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#0F1116]/80 backdrop-blur-md border-b border-white/5"
          : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent"
          >
            GameVault
          </Link>
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1 px-8">
            <Link
              href="#games"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Games
            </Link>
            <Link
              href="#features"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#blog"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#support"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Support
            </Link>
          </div>
          <button className="px-6 py-2 bg-violet-600 hover:bg-violet-700 rounded-full text-sm font-medium transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
