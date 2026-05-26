"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      business: formData.get("business"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    }
  }

  return (
    <main className="bg-black text-white min-h-screen pt-36 pb-24 px-6 lg:px-10">

      {/* HERO */}
      <section className="max-w-6xl mx-auto text-center">
        <span className="bg-white/10 text-purple-300 px-5 py-2 rounded-full text-sm">
          Contact Us
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mt-8">
          Let’s Build Something Amazing
        </h1>

        <p className="text-gray-400 mt-6 text-xl">
          Book a call or send a message.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-5xl mx-auto mt-20 bg-zinc-900 p-10 rounded-[40px] border border-white/10">

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            name="name"
            placeholder="Your Name"
            className="w-full bg-black p-4 rounded-xl border border-white/10"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full bg-black p-4 rounded-xl border border-white/10"
            required
          />

          <input
            name="business"
            placeholder="Business Type"
            className="w-full bg-black p-4 rounded-xl border border-white/10"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            className="w-full bg-black p-4 rounded-xl border border-white/10"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-4 rounded-xl font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-center">
              Message sent successfully 🚀
            </p>
          )}

        </form>
      </section>

    </main>
  );
}