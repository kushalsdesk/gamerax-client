import { motion } from "framer-motion";
import { Feather } from "lucide-react";

const features = [
  {
    icon: "🎮",
    title: "Cross-Platform Gaming",
    description: "Play your favorite games across multiple devices seamlessly.",
  },
  {
    icon: "🏆",
    title: "Global Leaderboards",
    description: "Compete with players worldwide and climb the rankings.",
  },
  {
    icon: "📺",
    title: "Live Streaming",
    description: "Stream your gameplay and build your audience.",
  },
];

const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-violet-900/5" />
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full opacity-25 group-hover:opacity-50 blur transition-opacity" />
              <div className="relative aspect-square rounded-full bg-[#1A1B20] border border-white/5 p-8 flex flex-col items-center justify-center text-center">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
