"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    text:
      "The creative strategy and content system completely changed our growth trajectory.",
  },
  {
    name: "Priya Singh",
    role: "Content Creator",
    text:
      "The video editing quality was premium and our engagement increased massively.",
  },
  {
    name: "Amit Verma",
    role: "Business Owner",
    text:
      "Professional team, premium delivery, and excellent communication throughout.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 lg:px-10 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-medium mb-6">
            Client Success
          </span>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            What Clients
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {" "}Say About Us
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[36px] p-8 border border-gray-200"
            >
              <div className="text-5xl mb-6">
                ⭐
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {item.text}
              </p>

              <div>
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}