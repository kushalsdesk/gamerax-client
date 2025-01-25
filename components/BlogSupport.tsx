import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BlogSupport = () => (
  <section id="blog" className="py-20">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Recent Blog Posts */}
        <div>
          <h2 className="text-2xl font-medium mb-8">Recent Blog Posts</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((post) => (
              <motion.div
                key={post}
                className="p-6 rounded-2xl bg-[#1A1B20]/30 border border-white/5 hover:border-violet-600/50 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-medium mb-2">
                  Latest Gaming Trends {post}
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  Discover the newest trends in the gaming industry...
                </p>
                <Link
                  href="#"
                  className="text-sm text-violet-400 hover:text-violet-300 inline-flex items-center"
                >
                  Read More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Troubleshooting & Support */}
        <div id="support">
          <h2 className="text-2xl font-medium mb-8">Quick Support</h2>
          <div className="space-y-4">
            {[
              "Common Issues & Solutions",
              "Account Management",
              "Payment Support",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-[#1A1B20]/30 border border-white/5 hover:border-violet-600/50 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#"
                  className="flex items-center justify-between group"
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {item}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlogSupport;
