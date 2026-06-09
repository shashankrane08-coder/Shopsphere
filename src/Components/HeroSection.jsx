import { useNavigate } from "react-router-dom";

import GoldenBackground from "./GoldenBackground";
import LuxuryButton from "./LuxuryButton";
import Stack from "./Stack";

import productCards from "./ProductCards";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505]">

      <GoldenBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Content */}

          <div>

            {/* Badge */}

            <div className="mb-8 inline-flex items-center rounded-full border border-[#d4aa50]/30 bg-[#0c0c0c]/70 px-5 py-2 backdrop-blur-xl">

              <span className="mr-2 h-2 w-2 rounded-full bg-[#d4aa50]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4aa50]">
                Curated Luxury Collection
              </span>

            </div>

            {/* Heading */}

            <h1 className="font-serif text-6xl font-light leading-[0.95] text-white md:text-7xl xl:text-8xl">

              Luxury

              <span className="block text-[#d4aa50]">
                Redefined
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">

              Discover exceptional products crafted with
              precision, elegance, and timeless design.
              Elevate your lifestyle with our premium
              collections.

            </p>

            {/* Collection Pills */}

            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "Luxury Watches",
                "Premium Audio",
                "Designer Fashion",
                "Exclusive Collection",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-[#d4aa50]/20 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <LuxuryButton
                onClick={() => navigate("/products")}
              >
                Shop Collection
              </LuxuryButton>

              <LuxuryButton
                secondary
                onClick={() => navigate("/about")}
              >
                Explore Luxury
              </LuxuryButton>

            </div>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-3 gap-8">

              <div>
                <h3 className="text-3xl font-semibold text-white">
                  10K+
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Customers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-white">
                  500+
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Products
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-white">
                  4.9★
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Rating
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative flex justify-center">

            <div className="h-[560px] w-[380px]">

              <Stack
                cards={productCards}
                autoplay
                autoplayDelay={3500}
                randomRotation
              />

            </div>

          </div>

        </div>

        {/* Brand Strip */}

        <div className="mt-24 border-t border-white/10 pt-10">

          <div className="flex flex-wrap items-center justify-center gap-10 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">

            <span>Rolex</span>
            <span>Gucci</span>
            <span>Prada</span>
            <span>Apple</span>
            <span>Sony</span>
            <span>Samsung</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export { HeroSection };