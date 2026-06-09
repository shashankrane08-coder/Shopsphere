import React, { useState, useEffect, useRef } from 'react';
import { Footer } from '../Components/Footer';

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: '25k+', label: 'Happy Customers' },
  { value: '8+',   label: 'Years of Craft' },
  { value: '1200+', label: 'Curated Products' },
  { value: '98%',  label: 'Satisfaction Rate' },
];

const values = [
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.09 6.41H21l-5.47 3.97 2.08 6.41L12 14.82l-5.61 3.97 2.08-6.41L3 8.41h6.91z"/>
      </svg>
    ),
    title: 'Timeless Quality',
    desc: "Every product in our collection passes a rigorous selection process. We source only what we'd be proud to own ourselves.",
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    title: 'Crafted with Care',
    desc: 'Thoughtful design over fleeting trends. We curate pieces that grow more beautiful with time, not less.',
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 12a4 4 0 100-8 4 4 0 000 8z"/>
      </svg>
    ),
    title: 'Community First',
    desc: 'Our customers are not a transaction. We build lasting relationships and listen carefully to earn trust over time.',
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
      </svg>
    ),
    title: 'Sustainably Sourced',
    desc: "We work with makers who share our belief that beautiful objects should not come at the planet's expense.",
  },
];

const team = [
  {
    name: 'Arjun Sharma',
    role: 'Founder & Creative Director',
    quote: 'Luxury is the absence of vulgarity.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Priya Desai',
    role: 'Head of Curation',
    quote: 'Every object has a story worth telling.',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&q=80',
  },
  {
    name: 'Rohan Mehta',
    role: 'Design & Experience Lead',
    quote: 'Good design is invisible — it just feels right.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
];

const milestones = [
  { year: '2016', title: 'The Beginning', desc: 'Founded in a small studio in Nagpur, with thirty handpicked products and a belief that India deserved a better luxury buying experience.' },
  { year: '2018', title: 'First 1,000 Customers', desc: 'Word of mouth carried us to our first milestone. Real people, real trust — built without a single paid ad.' },
  { year: '2020', title: 'Digital Expansion', desc: 'Launched our full e-commerce platform, bringing curated collections to customers across India.' },
  { year: '2023', title: 'International Sourcing', desc: 'Partnered with artisans across Europe and Japan to bring the worlds finest craftsmanship home.' },
  { year: '2024', title: 'The Collection Grows', desc: 'Over 1,200 products, 25,000 customers, and one unwavering standard: never compromise on quality.' },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-10 h-px bg-[#c9a96e]" />
      <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#c9a96e]">
        {text}
      </span>
    </div>
  );
}

function StatCard({ value, label, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="font-serif text-5xl text-[#c9a96e] leading-none">{value}</div>
      <div className="mt-2 text-sm tracking-widest uppercase text-[#5e5a52]">{label}</div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export const About = () => {
  const [heroRef, heroVisible] = useInView(0.05);
  const [storyRef, storyVisible] = useInView();
  const [valuesRef, valuesVisible] = useInView();
  const [teamRef, teamVisible] = useInView();

  return (
    <div className="min-h-screen bg-[#f3f1eb] overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#f3f1eb] pt-8 lg:pt-12">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] bg-[#c9a96e]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#ede8df] to-transparent" />

        <div
          ref={heroRef}
          className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 pb-16"
        >
          <div className="min-h-[88vh] flex items-center py-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

              {/* Left */}
              <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <SectionLabel text="About The Brand" />

                <h1 className="font-serif text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-[0.9] text-[#151515] font-light">
                  Crafted for
                  <br />
                  those who
                  <br />
                  appreciate
                  <span className="block text-[#c9a96e] italic">timeless design.</span>
                </h1>

                <div className="w-24 h-px bg-[#c9a96e] my-10" />

                <p className="max-w-xl text-[18px] leading-relaxed text-[#5e5a52]">
                  We believe luxury isn't about excess. It's about thoughtful
                  design, exceptional quality, and creating products that remain
                  beautiful long after trends have disappeared.
                </p>

                <div className="mt-12 flex flex-wrap gap-4">
                  <a
                    href="/products"
                    className="px-8 py-4 bg-[#c9a96e] text-[#151515] rounded-full font-medium hover:bg-[#151515] hover:text-white transition-all duration-300"
                  >
                    Explore Collection
                  </a>
                  <a
                    href="#story"
                    className="px-8 py-4 border border-[#c9a96e] text-[#c9a96e] rounded-full font-medium hover:bg-[#c9a96e] hover:text-[#151515] transition-all duration-300"
                  >
                    Our Story
                  </a>
                </div>
              </div>

              {/* Right — image */}
              <div className={`relative mt-12 lg:mt-0 transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="absolute -top-6 -left-6 w-full h-full border border-[#c9a96e]/50 rounded-[32px]" />
                <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80"
                    alt="Luxury Lifestyle"
                    className="w-full h-[680px] object-cover hover:scale-105 transition-transform duration-1000"
                  />
                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/30 to-transparent" />
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-8 -left-8 bg-white rounded-[24px] shadow-xl border border-[#f0ede8] p-6 max-w-[240px]">
                  <div className="text-[42px] font-serif leading-none text-[#c9a96e]">25k+</div>
                  <p className="mt-2 text-[#5e5a52] text-sm leading-relaxed">
                    Customers who trust our commitment to timeless craftsmanship.
                  </p>
                </div>

                {/* Second floating card */}
                <div className="absolute -top-6 -right-6 bg-[#151515] rounded-[20px] shadow-xl p-5">
                  <div className="text-[#c9a96e] font-serif text-2xl">Est.</div>
                  <div className="text-white font-serif text-3xl leading-none">2016</div>
                  <div className="mt-1 w-8 h-px bg-[#c9a96e]" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section className="bg-[#151515] py-16">
        <div className="max-w-5xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────────────── */}
      <section id="story" className="bg-[#ede8df] py-28">
        <div
          ref={storyRef}
          className="max-w-[1200px] mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Images stack */}
          <div className={`relative transition-all duration-1000 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80"
              alt="Atelier"
              className="w-full h-[500px] object-cover rounded-[28px] shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&q=80"
              alt="Detail"
              className="absolute -bottom-10 -right-10 w-52 h-52 object-cover rounded-[20px] shadow-2xl border-4 border-[#ede8df]"
            />
            {/* Label chip */}
            <div className="absolute top-6 left-6 bg-[#c9a96e] text-[#151515] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
              Nagpur Studio
            </div>
          </div>

          {/* Text */}
          <div className={`transition-all duration-1000 delay-200 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionLabel text="Our Story" />
            <h2 className="font-serif text-5xl lg:text-6xl font-light text-[#151515] leading-[1.05] mb-8">
              A studio born from<br />
              <span className="italic text-[#c9a96e]">conviction.</span>
            </h2>
            <p className="text-[#5e5a52] text-lg leading-relaxed mb-6">
              ShopSphere started with a simple frustration: finding genuinely beautiful,
              well-made things online felt impossible. Everything looked the same.
              Every category was flooded with cheap copies of what was once rare.
            </p>
            <p className="text-[#5e5a52] text-lg leading-relaxed mb-8">
              We built ShopSphere as a curation studio first and a storefront second.
              Every product earns its place. Nothing ships because it fills a quota.
              Each piece is chosen because someone on our team believed it was
              worth living with.
            </p>
            <div className="w-16 h-px bg-[#c9a96e]" />
            <p className="mt-6 text-[#c9a96e] font-serif text-xl italic">
              "The details are not the details — they make the design."
            </p>
            <p className="mt-2 text-xs tracking-widest uppercase text-[#a09890]">— Charles Eames</p>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────────── */}
      <section className="bg-[#f3f1eb] py-28">
        <div className="max-w-[1100px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <SectionLabel text="Our Journey" />
            <h2 className="font-serif text-5xl font-light text-[#151515]">
              Eight years in the making.
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[#c9a96e]/30 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((m, i) => {
                const [ref, vis] = useInView();
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={m.year}
                    ref={ref}
                    className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  >
                    {isLeft ? (
                      <>
                        <div className="text-right pr-8 hidden lg:block">
                          <div className="font-serif text-6xl text-[#c9a96e]/30 leading-none">{m.year}</div>
                          <h3 className="text-xl font-medium text-[#151515] mt-1">{m.title}</h3>
                          <p className="text-[#5e5a52] mt-3 leading-relaxed max-w-sm ml-auto">{m.desc}</p>
                        </div>
                        {/* Center dot */}
                        <div className="hidden lg:flex justify-start pl-0 items-start pt-6">
                          <div className="w-4 h-4 rounded-full bg-[#c9a96e] border-4 border-[#f3f1eb] -ml-2 mt-1 flex-shrink-0" />
                        </div>
                        {/* Mobile */}
                        <div className="lg:hidden border-l-2 border-[#c9a96e]/30 pl-6">
                          <div className="font-serif text-4xl text-[#c9a96e]/50">{m.year}</div>
                          <h3 className="text-lg font-medium text-[#151515]">{m.title}</h3>
                          <p className="text-[#5e5a52] mt-2 leading-relaxed">{m.desc}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="hidden lg:flex justify-end pr-0 items-start pt-6">
                          <div className="w-4 h-4 rounded-full bg-[#c9a96e] border-4 border-[#f3f1eb] -mr-2 mt-1 flex-shrink-0" />
                        </div>
                        <div className="pl-8 hidden lg:block">
                          <div className="font-serif text-6xl text-[#c9a96e]/30 leading-none">{m.year}</div>
                          <h3 className="text-xl font-medium text-[#151515] mt-1">{m.title}</h3>
                          <p className="text-[#5e5a52] mt-3 leading-relaxed max-w-sm">{m.desc}</p>
                        </div>
                        {/* Mobile */}
                        <div className="lg:hidden border-l-2 border-[#c9a96e]/30 pl-6">
                          <div className="font-serif text-4xl text-[#c9a96e]/50">{m.year}</div>
                          <h3 className="text-lg font-medium text-[#151515]">{m.title}</h3>
                          <p className="text-[#5e5a52] mt-2 leading-relaxed">{m.desc}</p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <section className="bg-[#151515] py-28">
        <div
          ref={valuesRef}
          className="max-w-[1200px] mx-auto px-8 lg:px-16"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#c9a96e]" />
              <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#c9a96e]">What We Stand For</span>
              <div className="w-10 h-px bg-[#c9a96e]" />
            </div>
            <h2 className="font-serif text-5xl font-light text-white">Our values.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`group bg-[#1e1e1e] hover:bg-[#c9a96e]/10 border border-[#c9a96e]/10 hover:border-[#c9a96e]/40 rounded-[24px] p-8 transition-all duration-500 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="text-[#c9a96e] mb-5 group-hover:scale-110 transition-transform duration-300">
                  {v.icon}
                </div>
                <h3 className="text-white font-medium text-lg mb-3">{v.title}</h3>
                <p className="text-[#a8a29a] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#ede8df] py-28">
        <div
          ref={teamRef}
          className="max-w-[1100px] mx-auto px-8 lg:px-16"
        >
          <div className="text-center mb-16">
            <SectionLabel text="The People Behind It" />
            <h2 className="font-serif text-5xl font-light text-[#151515]">
              Meet the team.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((person, i) => (
              <div
                key={person.name}
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`group transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="relative overflow-hidden rounded-[24px] mb-6">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/80 text-sm italic font-serif">"{person.quote}"</p>
                  </div>
                </div>
                <h3 className="text-[#151515] font-medium text-lg">{person.name}</h3>
                <p className="text-[#c9a96e] text-xs tracking-widest uppercase mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="bg-[#c9a96e] py-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-5xl lg:text-6xl font-light text-[#151515] leading-tight mb-6">
            Ready to find something<br />
            <span className="italic">truly beautiful?</span>
          </h2>
          <p className="text-[#3a3530] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Browse our curated collection — every piece selected because we
            believed it was worth living with.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/products"
              className="px-10 py-4 bg-[#151515] text-white rounded-full font-medium hover:bg-[#2a2a2a] transition-all duration-300 shadow-lg"
            >
              Shop the Collection
            </a>
            <a
              href="/contact"
              className="px-10 py-4 border-2 border-[#151515] text-[#151515] rounded-full font-medium hover:bg-[#151515] hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
