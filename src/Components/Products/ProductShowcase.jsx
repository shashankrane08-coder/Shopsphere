import React, { useRef, useState } from "react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    count: "120+",
    label: "Collection",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1200&q=80",
  },
  {
    id: 2,
    name: "Fashion",
    count: "90+",
    label: "Collection",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80",
  },
  {
    id: 3,
    name: "Accessories",
    count: "65+",
    label: "Collection",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=80",
  },
  {
    id: 4,
    name: "Furniture",
    count: "45+",
    label: "Collection",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  },
];

const filters = [
  { label: "All", count: 8 },
  { label: "Trending", count: 2 },
  { label: "New", count: 2 },
  { label: "Premium", count: 2 },
  { label: "Best Seller", count: 2 },
  { label: "Electronics", count: 4 },
  { label: "Fashion", count: 2 },
  { label: "Accessories", count: 1 },
  { label: "Furniture", count: 1 },
];

export const ProductShowcase = ({ activeFilter, setActiveFilter }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scrollFilters = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <>
      {/* ── HERO BANNER ──────────────────────────────────────────── */}
      <section className="pt-10 pb-6">
        <div className="max-w-[1500px] mx-auto px-5 lg:px-10">

          {/* Page title row */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#c9a96e] text-xs uppercase tracking-[0.35em] mb-3">
                Our Collection
              </p>
              <h1
                className="font-serif text-[#151515] text-5xl lg:text-7xl leading-none"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                All Products
              </h1>
            </div>
            {/* Decorative line */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="h-px w-32 bg-gradient-to-l from-[#c9a96e] to-transparent" />
              <span className="text-[#c9a96e]/60 text-xs uppercase tracking-[0.2em]">
                Est. 2024
              </span>
            </div>
          </div>

          {/* Featured Collection Banner */}
          <div className="relative overflow-hidden rounded-[40px] bg-[#111111] border border-[#c9a96e]/25 mb-14">

            {/* Background texture shimmer */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/5 via-transparent to-[#c9a96e]/3 pointer-events-none" />

            <div className="grid lg:grid-cols-2 items-center min-h-[440px]">

              {/* Text side */}
              <div className="p-10 lg:p-16 relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a96e]/40 text-[#c9a96e] text-[11px] uppercase tracking-[0.3em] mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-pulse" />
                  Featured This Season
                </span>

                <h2
                  className="font-serif text-white text-5xl lg:text-6xl leading-[1.05] mb-6"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Luxury
                  <br />
                  <span className="text-[#c9a96e]">Smart Watch</span>
                </h2>

                <p className="text-white/60 text-base leading-relaxed max-w-md mb-10">
                  Precision engineering meets timeless elegance. Crafted for
                  those who appreciate premium design and exceptional performance.
                </p>

                <div className="flex items-center gap-5">
                  <button className="bg-[#c9a96e] text-[#151515] px-8 py-4 rounded-full uppercase tracking-[0.15em] text-xs font-semibold hover:scale-105 hover:shadow-[0_8px_30px_rgba(201,169,110,0.4)] transition-all duration-300">
                    Explore Now
                  </button>
                  <button className="text-white/60 text-xs uppercase tracking-[0.2em] hover:text-[#c9a96e] transition-colors duration-300 flex items-center gap-2">
                    <span className="w-8 h-px bg-current" />
                    View All
                  </button>
                </div>

                {/* Stats row */}
                <div className="flex gap-8 mt-12 pt-10 border-t border-[#c9a96e]/15">
                  {[["4.9★", "Rating"], ["2.4K+", "Reviews"], ["₹7,999", "Starting at"]].map(([val, lbl]) => (
                    <div key={lbl}>
                      <p className="text-white font-semibold text-lg">{val}</p>
                      <p className="text-white/40 text-xs mt-0.5">{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image side */}
              <div className="relative flex items-center justify-center min-h-[340px] lg:min-h-[440px] overflow-hidden">
                {/* Glow */}
                <div className="absolute w-[380px] h-[380px] rounded-full bg-[#c9a96e]/15 blur-3xl" />
                {/* Gold ring decoration */}
                <div className="absolute w-[300px] h-[300px] rounded-full border border-[#c9a96e]/10" />
                <div className="absolute w-[200px] h-[200px] rounded-full border border-[#c9a96e]/20" />

                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80"
                  alt="Luxury Smart Watch"
                  className="relative z-10 w-[70%] max-w-sm object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform duration-700"
                />

                {/* Badge floating */}
                <div className="absolute top-10 right-10 lg:right-16 bg-[#c9a96e] text-[#151515] px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.1em] shadow-lg">
                  Trending #1
                </div>
              </div>
            </div>
          </div>

          {/* ── SHOP BY CATEGORY ───────────────────────────────────── */}
          <div className="flex items-center justify-between mb-8">
            <h2
              className="font-serif text-[#151515] text-3xl lg:text-4xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Shop By Category
            </h2>
            <button className="text-[#c9a96e] text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity flex items-center gap-2">
              View All
              <span className="w-4 h-px bg-[#c9a96e]" />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((cat, i) => (
              <div
                key={cat.id}
                onClick={() => setActiveFilter(cat.name)}
                className={`
                  group relative overflow-hidden rounded-[28px] bg-[#111111]
                  h-[280px] lg:h-[360px] cursor-pointer
                  border transition-all duration-500
                  hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(201,169,110,0.2)]
                  ${activeFilter === cat.name
                    ? "border-[#c9a96e]/70 shadow-[0_0_30px_rgba(201,169,110,0.15)]"
                    : "border-[#c9a96e]/20 hover:border-[#c9a96e]/50"
                  }
                `}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      activeFilter === cat.name
                        ? "bg-[#c9a96e]/10"
                        : "bg-[#151515]/20 group-hover:bg-[#151515]/10"
                    }`}
                  />
                </div>

                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#c9a96e] rounded-tr-[28px] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Active indicator */}
                {activeFilter === cat.name && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#c9a96e] text-[#151515] text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full font-semibold">
                    <span className="w-1 h-1 rounded-full bg-[#151515]" />
                    Active
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-7">
                  <span className="text-[#c9a96e] text-[10px] uppercase tracking-[0.3em] mb-2">
                    {cat.label}
                  </span>
                  <h3
                    className="font-serif text-white text-2xl lg:text-3xl leading-none mb-3"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {cat.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-white/60 text-xs">{cat.count} Products</p>
                    <div
                      className={`
                        w-10 h-10 rounded-full bg-[#c9a96e] text-[#151515]
                        flex items-center justify-center text-sm font-bold
                        transition-all duration-300
                        group-hover:rotate-45 group-hover:scale-110
                      `}
                    >
                      →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY FILTER BAR ────────────────────────────────────── */}
      <section className="sticky top-[72px] z-30 py-5">
        <div className="max-w-[1500px] mx-auto px-5 lg:px-10">
          <div className="relative">

            {/* Left fade + scroll btn */}
            {canScrollLeft && (
              <button
                onClick={() => scrollFilters(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#111111] border border-[#c9a96e]/30 text-[#c9a96e] flex items-center justify-center text-sm shadow-lg"
              >
                ‹
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={() => scrollFilters(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#111111] border border-[#c9a96e]/30 text-[#c9a96e] flex items-center justify-center text-sm shadow-lg"
              >
                ›
              </button>
            )}

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="bg-[#111111] border border-[#c9a96e]/20 rounded-full p-1.5 overflow-x-auto no-scrollbar shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="flex gap-1 min-w-max">
                {filters.map((f) => (
                  <button
                    key={f.label}
                    onClick={() => setActiveFilter(f.label)}
                    className={`
                      flex items-center gap-2 px-5 py-2.5 rounded-full text-xs
                      transition-all duration-300 whitespace-nowrap
                      ${
                        activeFilter === f.label
                          ? "bg-[#c9a96e] text-[#151515] font-semibold shadow-[0_4px_16px_rgba(201,169,110,0.35)]"
                          : "text-white/60 hover:text-white hover:bg-white/8"
                      }
                    `}
                  >
                    <span className="uppercase tracking-[0.12em]">{f.label}</span>
                    <span
                      className={`
                        text-[10px] px-1.5 py-0.5 rounded-full font-medium
                        ${activeFilter === f.label
                          ? "bg-[#151515]/20 text-[#151515]"
                          : "bg-white/10 text-white/50"
                        }
                      `}
                    >
                      {f.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};