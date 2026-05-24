"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-28 px-6 lg:px-10 bg-white">

      {/* Gradient Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-[120px] opacity-30" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full blur-[140px] opacity-30" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-8">
            🚀 AI-Powered Creative Agency
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]">
            We Build
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              {" "}Creative Growth
            </span>
            {" "}Systems
          </h1>

          <p className="text-gray-600 text-xl mt-8 max-w-2xl leading-relaxed">
            We help creators, startups, and businesses grow
            using video editing, AI automation, branding,
            and high-converting marketing strategies.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <button className="bg-black text-white px-8 py-5 rounded-full font-medium hover:scale-105 transition">
              Book Free Strategy Call
            </button>

            <button className="border border-gray-300 px-8 py-5 rounded-full hover:bg-gray-100 transition">
              View Portfolio
            </button>
          </div>

          <div className="flex items-center gap-8 mt-12">
            <div>
              <h3 className="text-3xl font-bold">
                150+
              </h3>

              <p className="text-gray-500">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                10M+
              </h3>

              <p className="text-gray-500">
                Views Generated
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-black rounded-[40px] p-8 text-white shadow-[0_30px_100px_rgba(0,0,0,0.2)]">

            <div className="bg-white/10 rounded-[30px] p-6 mb-5">
              <p className="text-gray-300">
                Revenue Growth
              </p>

              <h2 className="text-5xl font-bold mt-3">
                +245%
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white/10 rounded-[30px] p-6">
                <p className="text-gray-400 text-sm">
                  Projects
                </p>

                <h3 className="text-4xl font-bold mt-2">
                  500+
                </h3>
              </div>

              <div className="bg-white/10 rounded-[30px] p-6">
                <p className="text-gray-400 text-sm">
                  Retention
                </p>

                <h3 className="text-4xl font-bold mt-2">
                  98%
                </h3>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}