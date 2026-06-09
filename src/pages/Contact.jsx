import React, { useState } from "react";
import { Footer } from "../Components/Footer";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Orders are processed within 24–48 hours. Delivery typically takes 3–7 business days depending on your location across India.",
  },
  {
    question: "Can I return an item?",
    answer:
      "Yes — hassle-free returns are available within 14 days of delivery. Items must be unused and in original packaging.",
  },
  {
    question: "Do you offer premium support?",
    answer:
      "Absolutely. Our dedicated support team handles orders, product guidance, and special requests with priority response.",
  },
  {
    question: "Can I place a custom or bulk request?",
    answer:
      "Yes. We welcome custom orders and bulk inquiries. Reach out via the form or email and we'll get back within 24 hours.",
  },
];

const channels = [
  {
    label: "Email Us",
    value: "hello@shopsphere.in",
    sub: "Response within 24 hours",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon–Sat, 10am–7pm IST",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Our Studio",
    value: "Nagpur, Maharashtra",
    sub: "India — 440001",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const reasons = [
  { title: "Product Guidance", desc: "Expert advice on every item in our catalogue." },
  { title: "Order Support", desc: "Real-time updates on your shipment and delivery." },
  { title: "Custom Requests", desc: "Bespoke sourcing for exclusive or bulk orders." },
  { title: "Returns & Refunds", desc: "Smooth, no-questions-asked return assistance." },
];

export const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSent(true);
  };

  return (
    <div className="bg-[#f3f1eb] min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-10 pb-0">

        {/* background glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#c9a96e]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c9a96e]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">

          {/* eyebrow */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-px bg-[#c9a96e]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#c9a96e]">
              Contact Us
            </span>
          </div>

          {/* two-column headline + channel cards */}
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-end pb-0">

            {/* left: big heading */}
            <div>
              <h1 className="font-serif text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.88] text-[#151515] font-light">
                Let's make
                <span className="block italic text-[#c9a96e]">something</span>
                great together.
              </h1>

              <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-[#5e5a52]">
                Whether it's a question about an order, a special request, or simply wanting to know more — we're here and genuinely happy to help.
              </p>
            </div>

            {/* right: channel cards stacked */}
            <div className="flex flex-col gap-4 pb-2">
              {channels.map((ch) => (
                <div
                  key={ch.label}
                  className="group flex items-center gap-5 bg-white rounded-[24px] border border-[#ece7df] px-6 py-5 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,169,110,0.12)] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-[#c9a96e]/10 flex items-center justify-center text-[#c9a96e]">
                    {ch.icon}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.22em] uppercase text-[#c9a96e] font-semibold mb-0.5">{ch.label}</p>
                    <p className="text-[#151515] font-medium text-[15px]">{ch.value}</p>
                    <p className="text-[#9e9890] text-[12px]">{ch.sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* full-width gold hairline */}
        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/30 to-transparent" />
      </section>

      {/* ── FORM + WHY REACH OUT ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

          <div className="grid lg:grid-cols-[1fr_480px] gap-14 items-start">

            {/* left: form */}
            <div className="bg-white rounded-[36px] border border-[#ece7df] p-10 lg:p-14 shadow-[0_8px_48px_rgba(0,0,0,0.04)]">

              {sent ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#c9a96e]/12 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#c9a96e]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-4xl text-[#151515] mb-3">Message received.</h3>
                  <p className="text-[#5e5a52] leading-relaxed max-w-sm mx-auto">
                    Thank you, {form.name.split(" ")[0]}. We'll get back to you at <span className="text-[#151515] font-medium">{form.email}</span> within 24 hours.
                  </p>
                  <div className="mt-8 w-16 h-px bg-[#c9a96e] mx-auto" />
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <p className="text-[10px] tracking-[0.28em] uppercase text-[#c9a96e] font-semibold mb-3">Send a Message</p>
                    <h2 className="font-serif text-[2.8rem] leading-tight text-[#151515]">
                      We'd love to hear from you.
                    </h2>
                  </div>

                  <div className="space-y-7">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#9e9890] mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-[#faf8f4] border border-[#e5e0d8] rounded-2xl px-5 py-4 text-[#151515] placeholder:text-[#c2bdb5] outline-none focus:border-[#c9a96e] transition-colors duration-200 text-[15px]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#9e9890] mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full bg-[#faf8f4] border border-[#e5e0d8] rounded-2xl px-5 py-4 text-[#151515] placeholder:text-[#c2bdb5] outline-none focus:border-[#c9a96e] transition-colors duration-200 text-[15px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#9e9890] mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Order query, product question…"
                        className="w-full bg-[#faf8f4] border border-[#e5e0d8] rounded-2xl px-5 py-4 text-[#151515] placeholder:text-[#c2bdb5] outline-none focus:border-[#c9a96e] transition-colors duration-200 text-[15px]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#9e9890] mb-2">Your Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us how we can help…"
                        className="w-full bg-[#faf8f4] border border-[#e5e0d8] rounded-2xl px-5 py-4 text-[#151515] placeholder:text-[#c2bdb5] outline-none focus:border-[#c9a96e] transition-colors duration-200 resize-none text-[15px]"
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <button
                      onClick={handleSubmit}
                      className="px-10 py-4 bg-[#151515] text-white rounded-full text-[12px] font-semibold uppercase tracking-[0.18em] hover:bg-[#c9a96e] hover:text-[#151515] transition-all duration-300"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* right: why reach out + location block */}
            <div className="flex flex-col gap-6">

              {/* reasons */}
              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-[#c9a96e] font-semibold mb-6">Why Reach Out</p>
                <div className="grid grid-cols-2 gap-4">
                  {reasons.map((r, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-[24px] border border-[#ece7df] p-6 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(201,169,110,0.10)] transition-all duration-300"
                    >
                      <div className="w-8 h-px bg-[#c9a96e] mb-4" />
                      <h4 className="font-serif text-[#151515] text-[1.15rem] mb-2">{r.title}</h4>
                      <p className="text-[#7a7570] text-[13px] leading-relaxed">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* location block — dark card, no image */}
              <div className="bg-[#151515] rounded-[32px] p-9 relative overflow-hidden">
                {/* ambient glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#c9a96e]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#c9a96e]" />
                    <span className="text-[10px] tracking-[0.28em] uppercase text-[#c9a96e] font-semibold">Our Location</span>
                  </div>

                  <h3 className="font-serif text-white text-[2.2rem] leading-tight mb-3">
                    Based in the<br />heart of India.
                  </h3>

                  <p className="text-white/60 text-[14px] leading-relaxed mb-8">
                    Proudly operating from Nagpur, Maharashtra — we serve customers across India with curated luxury products and exceptional care.
                  </p>

                  {/* city row */}
                  <div className="flex flex-wrap gap-3">
                    {["Nagpur", "Mumbai", "Delhi", "Bengaluru"].map((city, i) => (
                      <div
                        key={city}
                        className={`px-4 py-2 rounded-full text-[12px] border transition-all ${
                          i === 0
                            ? "bg-[#c9a96e] text-[#151515] border-[#c9a96e] font-semibold"
                            : "border-white/15 text-white/60"
                        }`}
                      >
                        {city}
                      </div>
                    ))}
                  </div>

                  {/* map grid decorative */}
                  <div
                    className="absolute bottom-0 right-0 w-36 h-36 opacity-[0.04]"
                    style={{
                      backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "12px 12px",
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-16 pb-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

          <div className="grid lg:grid-cols-[280px_1fr] gap-16 items-start">

            {/* left label */}
            <div className="lg:sticky lg:top-28">
              <div className="w-10 h-px bg-[#c9a96e] mb-5" />
              <h2 className="font-serif text-[2.8rem] leading-tight text-[#151515]">
                Common<br />Questions
              </h2>
              <p className="mt-4 text-[#7a7570] text-[14px] leading-relaxed">
                Can't find your answer? Send us a message and we'll get back to you.
              </p>
            </div>

            {/* right: accordions */}
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-[24px] border overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "border-[#c9a96e]/40 shadow-[0_8px_32px_rgba(201,169,110,0.08)]" : "border-[#ece7df]"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center px-8 py-6 text-left"
                  >
                    <span className="text-[#151515] font-medium text-[16px] pr-4">{faq.question}</span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openFaq === i ? "bg-[#c9a96e] text-[#151515]" : "bg-[#f0ede8] text-[#9e9890]"
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className={`transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}
                      >
                        <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="px-8 pb-7 text-[#5e5a52] leading-relaxed text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── BOTTOM BANNER ───────────────────────────────────────────── */}
      <section className="px-8 lg:px-16 pb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-[#151515] rounded-[40px] px-12 py-20 relative overflow-hidden">

            {/* gold orbs */}
            <div className="absolute -top-20 left-1/3 w-64 h-64 bg-[#c9a96e]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 right-1/4 w-48 h-48 bg-[#c9a96e]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-8 h-px bg-[#c9a96e]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] font-semibold">Premium Service</span>
                </div>
                <h2 className="font-serif text-white text-[3rem] lg:text-[3.8rem] leading-tight max-w-xl">
                  Exceptional products deserve exceptional service.
                </h2>
              </div>
              <button className="flex-shrink-0 px-10 py-5 rounded-full bg-[#c9a96e] text-[#151515] text-[12px] font-semibold uppercase tracking-[0.18em] hover:bg-white transition-all duration-300 hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]">
                Contact Our Team
              </button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};