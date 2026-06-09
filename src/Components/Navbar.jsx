import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const CATEGORIES = ["Electronics", "Fashion", "Accessories", "Furniture"];

// SVG Icons
const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const WishlistIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const CartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const ChevronDown = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

function Navbar() {
  const [catOpen, setCatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const catRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (catRef.current && !catRef.current.contains(e.target)) {
        setCatOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
        bg-[#0c0b09]/95 backdrop-blur-xl border-b border-[#2e2922]
        ${scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : ""}
      `}
    >
      {/* Top luxury strip */}
      <div className="border-b border-[#1e1c18] bg-[#080705]">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex items-center justify-between py-2">
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#6b6459]">
              Free shipping on orders above ₹5,000
            </p>
            <div className="flex items-center gap-6">
              <a href="/contact" className="text-[10px] tracking-[0.15em] uppercase text-[#6b6459] hover:text-[#c9a96e] transition-colors duration-200">
                Support
              </a>
              <span className="h-3 w-px bg-[#2e2922]" />
              <a href="/track" className="text-[10px] tracking-[0.15em] uppercase text-[#6b6459] hover:text-[#c9a96e] transition-colors duration-200">
                Track Order
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex items-center gap-8 h-[70px]">

          {/* Logo */}
          <a
            href="/"
            className="flex-shrink-0 font-serif text-[28px] text-[#f0ebe2] tracking-wide leading-none"
          >
            Shop<span className="italic text-[#c9a96e]">Sphere</span>
          </a>

          {/* Gold divider */}
          <span className="h-6 w-px bg-[#c9a96e]/20 flex-shrink-0" />

          {/* Nav Links */}
          <nav className="flex items-center gap-1 flex-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 rounded-md
                  ${isActive
                    ? "text-[#c9a96e]"
                    : "text-[#9c9288] hover:text-[#e8dfd4] hover:bg-white/[0.04]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-4 bg-[#c9a96e] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Categories Dropdown */}
            <div ref={catRef} className="relative">
              <button
                onClick={() => setCatOpen(!catOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 rounded-md
                  ${catOpen
                    ? "text-[#c9a96e] bg-white/[0.04]"
                    : "text-[#9c9288] hover:text-[#e8dfd4] hover:bg-white/[0.04]"
                  }`}
              >
                Categories
                <span className={`transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`}>
                  <ChevronDown />
                </span>
              </button>

              {catOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-52 rounded-2xl border border-[#2e2922] bg-[#111009] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">

                  {/* Dropdown gold top line */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#c9a96e]/40 to-transparent" />

                  <div className="p-2">
                    {CATEGORIES.map((cat, i) => (
                      <a
                        key={cat}
                        href={`/categories/${cat.toLowerCase()}`}
                        onClick={() => setCatOpen(false)}
                        className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[12px] text-[#a89f94] hover:text-[#f0ebe2] hover:bg-white/[0.05] transition-all duration-150 group"
                      >
                        <span className="tracking-wide">{cat}</span>
                        <span className="text-[#c9a96e]/0 group-hover:text-[#c9a96e]/70 transition-all duration-200 translate-x-0 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-[#2e2922] to-transparent" />

                  {/* View all link */}
                  <div className="p-2 pt-1">
                    <a
                      href="/categories"
                      onClick={() => setCatOpen(false)}
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-[10px] font-semibold uppercase tracking-[0.15em] text-[#c9a96e]/70 hover:text-[#c9a96e] hover:bg-[#c9a96e]/[0.06] transition-all duration-200"
                    >
                      View All Categories
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Search Bar */}
          <div className="relative group">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b6459] group-focus-within:text-[#c9a96e] transition-colors duration-200 pointer-events-none">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search products..."
              className="w-[220px] bg-[#111009] border border-[#2e2922] rounded-xl pl-9 pr-4 py-2.5 text-[12px] text-[#e8dfd4] placeholder:text-[#4a4540]
                outline-none focus:border-[#c9a96e]/50 focus:bg-[#141210] focus:w-[260px]
                transition-all duration-300"
            />
          </div>

          {/* Divider */}
          <span className="h-6 w-px bg-[#2e2922] flex-shrink-0" />

          {/* Action Icons */}
          <div className="flex items-center gap-2">

            {/* Wishlist */}
            <button className="relative flex items-center justify-center w-9 h-9 rounded-xl border border-[#2e2922] text-[#9c9288]
              hover:border-[#c9a96e]/40 hover:text-[#c9a96e] hover:bg-[#c9a96e]/[0.06]
              transition-all duration-200 group">
              <WishlistIcon />
              {/* Badge */}
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#c9a96e] text-[#080705] text-[9px] font-bold flex items-center justify-center leading-none">
                2
              </span>
            </button>

            {/* Cart */}
            <button className="relative flex items-center justify-center w-9 h-9 rounded-xl border border-[#2e2922] text-[#9c9288]
              hover:border-[#c9a96e]/40 hover:text-[#c9a96e] hover:bg-[#c9a96e]/[0.06]
              transition-all duration-200">
              <CartIcon />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#c9a96e] text-[#080705] text-[9px] font-bold flex items-center justify-center leading-none">
                3
              </span>
            </button>

            {/* Sign In Button */}
            <button className="ml-1 px-5 py-2 rounded-xl text-[11px] font-semibold uppercase tracking-[0.12em]
              bg-gradient-to-r from-[#c9a96e] via-[#e4c486] to-[#c9a96e]
              text-[#0c0b09] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,169,110,0.3)]
              transition-all duration-200 active:translate-y-0">
              Sign In
            </button>

          </div>
        </div>
      </div>

      {/* Bottom gold shimmer line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a96e]/20 to-transparent" />
    </header>
  );
}

export { Navbar };