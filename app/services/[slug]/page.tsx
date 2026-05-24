import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const services: Record<
  string,
  {
    title: string;
    description: string;
    features: string[];
  }
> = {
  "video-editing": {
    title: "Video Editing",
    description:
      "Premium short-form and long-form editing designed to maximize engagement and conversions.",
    features: [
      "Reels Editing",
      "YouTube Editing",
      "Motion Graphics",
      "Color Grading",
      "High Retention Editing",
      "Captions & Hooks",
    ],
  },

  branding: {
    title: "Branding",
    description:
      "Build a premium brand identity people trust and remember.",
    features: [
      "Brand Identity",
      "Logo Design",
      "Typography",
      "Brand Guidelines",
      "Color Systems",
      "Premium Visual Style",
    ],
  },

  "social-media-marketing": {
    title: "Social Media Marketing",
    description:
      "Growth-focused campaigns for creators and modern businesses.",
    features: [
      "Instagram Growth",
      "Content Strategy",
      "Paid Ads",
      "Content Planning",
      "Growth Analytics",
      "Audience Scaling",
    ],
  },

  "website-design": {
    title: "Website Design",
    description:
      "High-converting premium websites built for growth.",
    features: [
      "UI/UX Design",
      "Landing Pages",
      "SEO Structure",
      "Responsive Design",
      "Premium Layouts",
      "Fast Performance",
    ],
  },

  "ai-automation": {
    title: "AI Automation",
    description:
      "Automate repetitive workflows with powerful AI systems.",
    features: [
      "Lead Automation",
      "CRM Automation",
      "AI Chatbots",
      "Business Workflow",
      "Email Automation",
      "Time Saving Systems",
    ],
  },

  analytics: {
    title: "Analytics",
    description:
      "Track performance and optimize your business growth.",
    features: [
      "Growth Tracking",
      "Business Reports",
      "Data Insights",
      "Performance Metrics",
      "Optimization",
      "ROI Monitoring",
    ],
  },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-28 px-6 lg:px-10">

        {/* Glow Effects */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />

        <div className="absolute right-10 bottom-0 w-96 h-96 bg-pink-500/20 blur-[140px] rounded-full" />

        <div className="max-w-6xl mx-auto text-center relative z-10">

          <span className="inline-block bg-white/10 text-purple-300 px-5 py-2 rounded-full text-sm font-medium">
            Premium Service
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-8 leading-tight">
            {service.title}
          </h1>

          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto">
            {service.description}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Get Started
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 lg:px-10 pb-28">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <h2 className="text-5xl font-bold">
              What You Get
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Premium systems designed for serious growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="bg-zinc-900 border border-white/10 rounded-[36px] p-8 hover:border-purple-400/30 transition-all"
              >
                <CheckCircle2
                  className="text-purple-400 mb-6"
                  size={34}
                />

                <h3 className="text-2xl font-semibold">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 lg:px-10 pb-28">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold mb-14">
            Our Process
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              "Discovery & Strategy",
              "Execution & Optimization",
              "Growth & Scaling",
            ].map((step, index) => (
              <div
                key={step}
                className="bg-zinc-900 rounded-[36px] p-10 border border-white/10"
              >
                <span className="text-purple-400 text-lg font-semibold">
                  0{index + 1}
                </span>

                <h3 className="text-3xl font-bold mt-4">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 pb-28">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-purple-600 to-pink-500 rounded-[48px] p-16 text-center">

          <h2 className="text-4xl md:text-6xl font-bold">
            Ready To Grow Faster?
          </h2>

          <p className="mt-6 text-lg opacity-90">
            Let’s build your premium growth system.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold"
          >
            Book Free Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}