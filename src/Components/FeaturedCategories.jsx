import { ArrowRight } from "lucide-react";
import LuxuryButton from "./LuxuryButton";
import { useNavigate } from "react-router-dom";

const CATEGORIES = [
  {
    id: 1,
    name: "Electronics",
    desc: "Premium devices & cutting-edge technology",
    count: 320,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    path: "/categories/electronics",
  },
  {
    id: 2,
    name: "Fashion",
    desc: "Luxury styles crafted for every occasion",
    count: 540,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80",
    path: "/categories/fashion",
  },
  {
    id: 3,
    name: "Accessories",
    desc: "Timeless pieces that complete your look",
    count: 215,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=80",
    path: "/categories/accessories",
  },
  {
    id: 4,
    name: "Furniture",
    desc: "Elegant interiors for modern living",
    count: 180,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    path: "/categories/furniture",
  },
];

const STATS = [
  { value: "1,200+", label: "Products" },
  { value: "10K+", label: "Customers" },
  { value: "80+", label: "Brands" },
  { value: "4", label: "Categories" },
];

export function FeaturedCategories() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#f3f1eb] py-24">

      {/* Soft Luxury Glow */}
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#c9a96e]/5 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#c9a96e]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a96e]">
              Shop by Category
            </p>

            <h2 className="font-serif text-5xl leading-tight text-[#151515] md:text-6xl">
              Find Your{" "}
              <span className="italic text-[#c9a96e]">
                Style
              </span>
            </h2>

            <p className="mt-5 max-w-md leading-relaxed text-[#5e5a52]">
              Browse our curated collections — from cutting-edge technology
              to timeless luxury essentials.
            </p>
          </div>

          <LuxuryButton
            variant="dark"
            onClick={() => navigate("/categories")}
          >
            All Categories
          </LuxuryButton>

        </div>

        {/* Categories Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(category.path)}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-3xl
                border border-[#c9a96e]/15
                bg-white
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              "
            >

              <div className="relative h-[340px] overflow-hidden">

                <img
                  src={category.image}
                  alt={category.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Items Badge */}
                <div
                  className="
                    absolute
                    right-4
                    top-4
                    rounded-full
                    border border-[#d4b16a]/30
                    bg-black/70
                    px-4
                    py-1.5
                    text-xs
                    font-medium
                    text-[#d4b16a]
                    backdrop-blur-md
                  "
                >
                  {category.count}+ Items
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6">

                  <h3 className="font-serif text-3xl text-white drop-shadow-lg">
                    {category.name}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm text-white/80">
                    {category.desc}
                  </p>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-widest
                      text-[#d4b16a]
                      transition-all
                      duration-300
                      group-hover:gap-4
                    "
                  >
                    Explore
                    <ArrowRight size={14} />
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Luxury Stats */}
        <div
          className="
            mt-16
            grid
            grid-cols-2
            overflow-hidden
            rounded-3xl
            border border-[#c9a96e]/15
            bg-white
            shadow-[0_15px_50px_rgba(0,0,0,0.06)]
            lg:grid-cols-4
          "
        >

          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="
                relative
                p-8
                transition-all
                duration-300
                hover:bg-[#f8f7f4]
              "
            >

              <div className="absolute left-8 top-0 h-[2px] w-10 bg-[#c9a96e]" />

              <h3 className="font-serif text-4xl text-[#151515]">
                {stat.value}
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#8c8476]">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}