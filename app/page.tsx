import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Video Editing",
    slug: "video-editing",
    description:
      "Premium short-form and long-form content editing.",
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    description:
      "Scale faster with growth-focused social campaigns.",
  },
  {
    title: "AI Automation",
    slug: "ai-automation",
    description:
      "Automate workflows using intelligent systems.",
  },
  {
    title: "Branding",
    slug: "branding",
    description:
      "Build a memorable premium brand identity.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-36 pb-24 px-6 lg:px-10">

      {/* Hero */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-medium">
          Premium Services
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mt-8">
          Services Built
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            {" "}For Growth
          </span>
        </h1>

        <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
          We help creators, startups, and brands
          grow using premium creative systems.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Link
            key={index}
            href={`/services/${service.slug}`}
            className="group border border-gray-200 rounded-[36px] p-10 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2"
          >
            <h2 className="text-3xl font-bold">
              {service.title}
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              {service.description}
            </p>

            <div className="flex items-center gap-2 mt-8 text-purple-600 font-semibold">
              Explore Service
              <ArrowUpRight size={18} />
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto mt-28 bg-black text-white rounded-[40px] p-14 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Need Something Custom?
        </h2>

        <p className="text-gray-300 mt-5 text-lg">
          Let’s build a custom growth system for your business.
        </p>

        <button className="mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold">
          Book Consultation
        </button>
      </div>

    </main>
  );
}