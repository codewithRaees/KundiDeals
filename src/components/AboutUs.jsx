import React from "react";
import { motion } from "framer-motion";

/**
 * AboutUs component for Kundi Deals website
 * - Tailwind CSS classes are used for styling
 * - Exports a default React component
 * - Props allow small customizations (founderName, establishedYear)
 */

export default function AboutUs({
  founderName = "Raees",
  tribe = "Kundi",
  establishedYear = 2025,
}) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">About Kundi Deals</h1>
            <p className="mt-2 text-slate-600 max-w-xl">
              Kundi Deals is a trusted online hub for thoughtfully chosen products, local stories, and
              deals that matter to families and communities. Our mission is simple: bring honest value
              to your doorstep while celebrating traditions, quality, and the people behind every
              product.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-full bg-slate-100 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4s-3 1.567-3 3.5S10.343 11 12 11zM6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
              </svg>
            </div>
            <div className="text-right md:text-left">
              <p className="text-sm text-slate-500">Founded</p>
              <p className="text-lg font-semibold text-slate-900">{establishedYear}</p>
            </div>
          </div>
        </header>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="col-span-2">
            <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              We aim to make shopping meaningful. At Kundi Deals we handpick products that combine
              practical value with cultural care — from everyday household essentials to speciality
              items sourced from trusted makers. We want our customers to feel confident they’re
              buying items that are useful, affordable, and respectful to the communities that make
              them.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-slate-800">Our Values</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>• <strong>Honesty:</strong> Clear pricing, fair descriptions, no gimmicks.</li>
              <li>• <strong>Community:</strong> Support local makers and thoughtful sourcing.</li>
              <li>• <strong>Quality:</strong> Products that last — not just trends.</li>
              <li>• <strong>Respect:</strong> Stories and listings that honor customers and creators alike.</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-slate-800">What We Offer</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Kundi Deals features curated deals, short brand stories, and useful buying guides so you
              can make better choices quickly. If you’re a busy parent, a student, or someone who
              values smart shopping — we’re designed for you.
            </p>
          </article>

          <aside className="rounded-xl bg-indigo-50 p-5 flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-indigo-700">Meet the Founder</h4>
              <p className="mt-2 text-slate-700">
                {founderName} ({tribe}) brings years of tech and teaching experience to Kundi Deals.
                Raised with community values and a passion for honest work, {founderName} built this
                space to combine practical technology with stories that matter.
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v1H2V5z" />
                    <path fillRule="evenodd" d="M2 8a2 2 0 012-2h10v6a2 2 0 01-2 2H6l-4 2V8z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-slate-600">Customer-first support</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12h6v2H9v-2z" />
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6l-4-4H4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-slate-600">Secure payments</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a href="/contact" className="inline-block w-full text-center py-2 px-4 rounded-lg bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700">Contact Us</a>
            </div>
          </aside>
        </div>

        
     
    </section>
  );
}
