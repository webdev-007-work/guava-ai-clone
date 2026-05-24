export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-[40px] p-12 text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold">
            Ready To Grow Your Brand?
          </h2>

          <p className="mt-5 text-lg opacity-90">
            Let’s build a premium growth system together.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold">
            Book Free Call
          </button>
        </div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-3 gap-10 border-t border-white/10 pt-12">

          <div>
            <h2 className="text-3xl font-bold">
              GuavaAI
            </h2>

            <p className="text-gray-400 mt-4">
              Premium creative growth agency powered by AI.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">
              Pages
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              hello@guavaai.com
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}