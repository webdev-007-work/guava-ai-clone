"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luxury Brand Campaign",
    category: "Video Editing",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Instagram Growth Strategy",
    category: "Social Media Marketing",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "AI Automation System",
    category: "AI Automation",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section className="relative py-32 px-6 lg:px-10 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-500/20 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block bg-white/10 text-purple-300 px-5 py-2 rounded-full text-sm font-medium mb-6">
            Featured Work
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Results That
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Actually Convert
            </span>
          </h2>

          <p className="text-gray-400 text-lg mt-6">
            Explore our best creative projects built for startups,
            creators, and growing brands.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
              className="group bg-zinc-900 rounded-[36px] overflow-hidden border border-white/10"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">

                <span className="inline-block text-sm bg-white/10 text-purple-300 px-4 py-2 rounded-full mb-5">
                  {project.category}
                </span>

                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <button className="mt-8 flex items-center gap-2 text-white font-medium">
                  View Case Study
                  <ArrowUpRight size={18} />
                </button>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}