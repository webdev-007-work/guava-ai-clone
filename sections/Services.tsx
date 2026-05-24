"use client";

import Link from "next/link";
import {
  Video,
  PenTool,
  Megaphone,
  Globe,
  Bot,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Video Editing",
    slug: "video-editing",
    desc:
      "High-converting short & long-form content for creators and brands.",
    icon: Video,
  },
  {
    title: "Branding",
    slug: "branding",
    desc:
      "Build a memorable premium identity that people trust.",
    icon: PenTool,
  },
  {
    title: "Marketing",
    slug: "social-media-marketing",
    desc:
      "Scale faster with powerful growth-driven strategies.",
    icon: Megaphone,
  },
  {
    title: "Website Design",
    slug: "website-design",
    desc:
      "Modern, conversion-focused digital experiences.",
    icon: Globe,
  },
  {
    title: "AI Automation",
    slug: "ai-automation",
    desc:
      "Automate workflows using intelligent systems.",
    icon: Bot,
  },
  {
    title: "Analytics",
    slug: "analytics",
    desc:
      "Track performance and improve business decisions.",
    icon: BarChart3,
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 lg:px-10 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-medium mb-6">
            Premium Services
          </span>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Everything You Need
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {" "}To Scale Faster
            </span>
          </h2>

          <p className="text-gray-600 text-lg mt-6">
            We help creators, startups, and modern businesses
            grow using creativity, marketing, AI, and premium
            digital experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group relative bg-white rounded-[36px] p-8 border border-gray-200 hover:border-purple-200 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 to-pink-100/40 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10">

                  <div className="w-20 h-20 rounded-[28px] bg-black text-white flex items-center justify-center mb-8">
                    <Icon size={34} />
                  </div>

                  <h3 className="text-3xl font-bold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-2 font-semibold text-purple-600">
                    Learn More
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}