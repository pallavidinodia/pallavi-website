"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="font-sans text-gray-800 bg-white">

      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur border-b z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          <h1 className="font-semibold text-lg md:text-2xl">
            Pallavi Dinodia Gupta
          </h1>
          <nav className="hidden md:flex space-x-6 text-sm md:text-base text-gray-600">
            <a href="#about">About</a>
            <a href="#services">Specializations</a>
            <a href="#insights">Insights</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center py-16 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Chartered Accountant & Tax Advisor
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-6 leading-relaxed">
            Advising global enterprises, listed companies, and family businesses
            on taxation, transfer pricing, and strategic financial matters.
          </p>
          <a href="#contact" className="bg-[#0A2540] text-white px-6 py-3 rounded-full">
            Get in Touch
          </a>
        </motion.div>

        <motion.img
          src="/hero.jpg"
          alt="Pallavi Dinodia Gupta"
          className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
        />
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src="/about.jpg" className="rounded-2xl shadow-md w-full max-w-sm mx-auto" />
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
              About
            </h3>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              With over 25 years of experience, Pallavi Dinodia Gupta advises multinational corporations,
              publicly listed entities, and family businesses across India and global markets.
              Her expertise spans transfer pricing, international taxation, and strategic advisory.
            </p>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 text-center">
            Specializations
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "International & Domestic Tax Advisory",
              "Transfer Pricing",
              "Corporate Advisory",
              "Valuation & Structuring",
              "Succession Planning",
              "Regulatory Compliance",
            ].map((s, i) => (
              <div key={i} className="p-6 border rounded-xl bg-white shadow-sm text-center">
                <p className="text-base md:text-lg">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
            Insights
          </h3>

          {/* Books */}
          <div className="mb-8">
            <h4 className="text-xl md:text-2xl font-semibold mb-4">
              Books Published
            </h4>
            <p className="text-gray-700 text-lg">
              <strong>Transfer Pricing Demystified (Domestic & International Transactions)</strong>
            </p>
            <p className="text-gray-600">• 1st Edition: Published in 2013</p>
            <p className="text-gray-600">• 2nd Edition: Published in 2014</p>
            <p className="text-gray-600">• 3rd Edition: Published in 2019</p>
          </div>

          {/* Recognition */}
          <div>
            <a
              href="https://www.itrworldtax.com/Lawyer/SR-Dinodia-Co/Pallavi-Dinodia/Profile/1975#undefined"
              target="_blank"
              className="text-blue-700 underline text-lg md:text-xl"
            >
              Women in Tax Leader
            </a>
          </div>
        </div>
      </section>

      {/* Board Positions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
            Board Positions
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "IndiaMART Intermesh Ltd.",
              "Lumax Industries Ltd.",
              "Allianz Jio Reinsurance Ltd.",
              "National Engineering Industries Ltd.",
              "Voith Paper Fabrics India Ltd.",
              "Jagsonpal Pharmaceuticals Ltd.",
            ].map((company, i) => (
              <div key={i} className="p-5 border rounded-xl bg-white shadow-sm">
                <p className="text-base md:text-lg">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn */}
      <section className="py-16 px-4 text-center">
        <h3 className="text-2xl md:text-4xl font-semibold mb-4">
          Professional Profile
        </h3>
        <a
          href="https://www.linkedin.com/in/pallavidinodia"
          target="_blank"
          className="text-blue-700 underline text-lg md:text-xl"
        >
          View LinkedIn Profile
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 text-center">
        <h3 className="text-2xl md:text-4xl font-semibold mb-4">
          Contact
        </h3>
        <p className="text-lg md:text-xl">Email: pallavidinodia@srdinodia.com</p>
      </section>

      {/* Disclaimer */}
      <footer className="bg-[#0A2540] text-gray-300 text-sm p-6 text-center">
        <p>
          Disclaimer: This website is for informational purposes only and does not constitute solicitation or professional advice.
        </p>
      </footer>

    </main>
  );
}