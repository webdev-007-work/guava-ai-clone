"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    number: 150,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    number: 500,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    number: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    number: 10,
    suffix: "M+",
    label: "Views Generated",
  },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Trusted Text */}
        <div className="text-center mb-14">
          <p className="text-gray-500 uppercase tracking-[3px] text-sm">
            Trusted By Growing Brands
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-8 text-2xl font-bold text-gray-400">
            <span>BRANDIFY</span>
            <span>CREATEX</span>
            <span>VISIONIQ</span>
            <span>BOOSTLAB</span>
            <span>NEXTWAVE</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-[30px] p-8 text-center border border-gray-100"
            >
              <h3 className="text-5xl font-bold mb-3">
                <CountUp
                  end={item.number}
                  duration={3}
                />
                {item.suffix}
              </h3>

              <p className="text-gray-600 text-lg">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}