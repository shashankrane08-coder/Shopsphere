import { useEffect, useState } from "react";
import { supabase } from "../Supabase";
import { Footer } from "../Components/Footer";
import { BADGE_COLORS, getBadgeColorClass } from "../lib/badgeColors";

const CATEGORY_OPTIONS = ["Electronics", "Fashion", "Accessories", "Furniture"];
const BADGE_OPTIONS = ["Trending", "New", "Premium", "Best Seller"];

/* ── Small shared bits ───────────────────────────────────────────── */
function SectionLabel({ text, light = false }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <div className="w-10 h-px bg-[#c9a96e]" />
      <span
        className={`text-[11px] tracking-[0.25em] uppercase font-semibold ${
          light ? "text-[#c9a96e]" : "text-[#c9a96e]"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

function FieldLabel({ children }) {
  return (
    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#8c8476]">
      {children}
    </label>
  );
}

function StarRating({ rating = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          viewBox="0 0 12 12"
          className={`w-3 h-3 ${s <= rating ? "fill-[#c9a96e]" : "fill-white/20"}`}
        >
          <path d="M6 0l1.5 4.5H12L8.25 7.5 9.75 12 6 9 2.25 12l1.5-4.5L0 4.5h4.5z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────── */
function AddYourProduct() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0]);
  const [price, setPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageError, setImageError] = useState(false);
  const [badge, setBadge] = useState(BADGE_OPTIONS[0]);
  const [badgeColor, setBadgeColor] = useState(BADGE_COLORS[0].value);

  const [formError, setFormError] = useState("");
  const [toast, setToast] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProducts() {
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      setLoading(false);
      return;
    }

    setProducts(data || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(null), 2400);
  }

  async function submitProduct() {
    if (!name.trim() || !price) {
      setFormError("Give your product a name and a price before adding it.");
      return;
    }

    setFormError("");
    setSubmitting(true);

    const { error } = await supabase.from("products").insert([
      {
        name: name.trim(),
        brand: brand.trim(),
        category,
        price: Number(price),
        original_price: originalPrice ? Number(originalPrice) : null,
        image: image.trim(),
        badge,
        badge_color: badgeColor,
        rating: 5,
        reviews: 0,
      },
    ]);

    setSubmitting(false);

    if (error) {
      console.log(error);
      setFormError("Something went wrong saving that — please try again.");
      return;
    }

    showToast(`Added to your collection — ${name.trim()}`);

    setName("");
    setBrand("");
    setCategory(CATEGORY_OPTIONS[0]);
    setPrice("");
    setOriginalPrice("");
    setImage("");
    setImageError(false);
    setBadge(BADGE_OPTIONS[0]);
    setBadgeColor(BADGE_COLORS[0].value);

    fetchProducts();
  }

  async function deleteProduct(product) {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", product.id);

    if (error) {
      console.log(error);
      showToast("Couldn't remove that — please try again.");
      return;
    }

    showToast(`Removed from your collection — ${product.name}`);
    fetchProducts();
  }

  const discount =
    originalPrice && price && Number(originalPrice) > Number(price)
      ? Math.round(((Number(originalPrice) - Number(price)) / Number(originalPrice)) * 100)
      : null;

  return (
    <div className="min-h-screen bg-[#f3f1eb] overflow-x-hidden">
      {/* ── Toast ───────────────────────────────────────────────── */}
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] bg-[#151515] border border-[#c9a96e]/30 text-white px-6 py-3.5 rounded-full shadow-xl flex items-center gap-3 text-sm">
          <span className="w-5 h-5 rounded-full bg-[#c9a96e] text-[#151515] flex items-center justify-center text-xs font-bold shrink-0">
            ✓
          </span>
          <span className="text-white/90">{toast}</span>
        </div>
      )}

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#f3f1eb] pt-16 pb-10 lg:pt-20">
        <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] bg-[#c9a96e]/10 rounded-full blur-3xl" />

        <div
          className={`relative z-10 max-w-[1300px] mx-auto px-6 lg:px-10 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <SectionLabel text="Seller Studio" />
          <h1 className="font-serif text-[2.75rem] md:text-6xl leading-[1.05] text-[#151515] font-light">
            List something
            <span className="block italic text-[#c9a96e]">worth owning.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#5e5a52]">
            Fill in the details below and watch the listing take shape on the
            right, exactly as it will appear in the collection.
          </p>
        </div>
      </section>

      {/* ── Form + Live Preview ────────────────────────────────────── */}
      <section className="px-6 lg:px-10 pb-24">
        <div
          className={`max-w-[1300px] mx-auto grid lg:grid-cols-[1.35fr_1fr] gap-8 items-start transition-all duration-1000 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Form card */}
          <div className="rounded-[32px] border border-[#d7d1c7] bg-white p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <FieldLabel>Product Name</FieldLabel>
                <input
                  type="text"
                  placeholder="Luxury Smart Watch"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-[#d7d1c7] bg-[#faf8f4] px-4 py-3.5 text-[#151515] outline-none focus:border-[#c9a96e] transition-colors"
                />
              </div>

              <div>
                <FieldLabel>Brand</FieldLabel>
                <input
                  type="text"
                  placeholder="Aurum"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full rounded-2xl border border-[#d7d1c7] bg-[#faf8f4] px-4 py-3.5 text-[#151515] outline-none focus:border-[#c9a96e] transition-colors"
                />
              </div>

              <div>
                <FieldLabel>Image URL</FieldLabel>
                <input
                  type="text"
                  placeholder="https://..."
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                    setImageError(false);
                  }}
                  className="w-full rounded-2xl border border-[#d7d1c7] bg-[#faf8f4] px-4 py-3.5 text-[#151515] outline-none focus:border-[#c9a96e] transition-colors"
                />
              </div>

              <div>
                <FieldLabel>Price</FieldLabel>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c8476] text-sm">
                    ₹
                  </span>
                  <input
                    type="number"
                    placeholder="7999"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full rounded-2xl border border-[#d7d1c7] bg-[#faf8f4] pl-8 pr-4 py-3.5 text-[#151515] outline-none focus:border-[#c9a96e] transition-colors"
                  />
                </div>
              </div>

              <div>
                <FieldLabel>Original Price (optional)</FieldLabel>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c8476] text-sm">
                    ₹
                  </span>
                  <input
                    type="number"
                    placeholder="9999"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    className="w-full rounded-2xl border border-[#d7d1c7] bg-[#faf8f4] pl-8 pr-4 py-3.5 text-[#151515] outline-none focus:border-[#c9a96e] transition-colors"
                  />
                </div>
              </div>

              {/* Category pills */}
              <div className="sm:col-span-2">
                <FieldLabel>Category</FieldLabel>
                <div className="flex flex-wrap gap-2">
                  {CATEGORY_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setCategory(opt)}
                      className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                        category === opt
                          ? "border-[#c9a96e] bg-[#c9a96e]/10 text-[#151515]"
                          : "border-[#d7d1c7] bg-[#faf8f4] text-[#5e5a52] hover:border-[#c9a96e]/50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Badge pills */}
              <div className="sm:col-span-2">
                <FieldLabel>Badge</FieldLabel>
                <div className="flex flex-wrap gap-2">
                  {BADGE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setBadge(opt)}
                      className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                        badge === opt
                          ? "border-[#c9a96e] bg-[#c9a96e]/10 text-[#151515]"
                          : "border-[#d7d1c7] bg-[#faf8f4] text-[#5e5a52] hover:border-[#c9a96e]/50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Badge color swatches */}
              <div className="sm:col-span-2">
                <FieldLabel>Badge Color</FieldLabel>
                <div className="flex items-center gap-3">
                  {BADGE_COLORS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      title={opt.label}
                      onClick={() => setBadgeColor(opt.value)}
                      className={`w-9 h-9 rounded-full border-2 transition-all ${opt.className} ${
                        badgeColor === opt.value
                          ? "border-[#151515] scale-110"
                          : "border-transparent hover:scale-105"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-[#8c8476] ml-1">
                    {BADGE_COLORS.find((c) => c.value === badgeColor)?.label}
                  </span>
                </div>
              </div>
            </div>

            {formError && (
              <p className="mt-5 text-sm text-red-500">{formError}</p>
            )}

            <button
              onClick={submitProduct}
              disabled={submitting}
              className="mt-8 w-full rounded-2xl bg-[#090909] text-[#f6d58b] font-bold text-sm uppercase tracking-[0.1em] py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {submitting ? "Adding…" : "Add To Collection"}
            </button>
          </div>

          {/* Live preview card */}
          <div className="lg:sticky lg:top-28">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8c8476]">
              How it will look
            </p>
            <div className="bg-[#111111] rounded-[28px] overflow-hidden border border-[#c9a96e]/20 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <div className="relative h-[240px] bg-black overflow-hidden">
                {image && !imageError ? (
                  <img
                    src={image}
                    alt={name || "Product preview"}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-white/25">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16l5-5 4 4 5-6 4 5M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[11px] uppercase tracking-[0.15em]">
                      {imageError ? "Image couldn't load" : "Image preview"}
                    </span>
                  </div>
                )}

                <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.15em] font-semibold ${getBadgeColorClass(badgeColor)}`}>
                  {badge}
                </span>

                {discount && (
                  <span className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] px-2 py-1 rounded-full font-semibold">
                    -{discount}%
                  </span>
                )}
              </div>

              <div className="p-5">
                <p className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase mb-2">
                  {brand || "Your Brand"}
                </p>
                <h3 className="font-serif text-white text-xl leading-tight mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  {name || "Your product name"}
                </h3>

                <StarRating rating={5} />

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#c9a96e]/10">
                  <div className="flex items-end gap-2">
                    <span className="text-[#c9a96e] text-lg font-light">
                      ₹{price ? Number(price).toLocaleString() : "0"}
                    </span>
                    {originalPrice && (
                      <span className="text-white/30 text-xs line-through">
                        ₹{Number(originalPrice).toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className="text-white/30 text-[11px]">{category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Your Collection ────────────────────────────────────── */}
      <section className="bg-[#151515] py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-10 h-px bg-[#c9a96e]" />
              <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#c9a96e]">
                Your Collection
              </span>
              <div className="w-10 h-px bg-[#c9a96e]" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
              Manage what you've listed.
            </h2>
          </div>

          {loading && (
            <div className="space-y-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-20 rounded-2xl bg-[#1e1e1e] border border-[#c9a96e]/10 animate-pulse"
                />
              ))}
            </div>
          )}

          {!loading && products.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-[#c9a96e]/10 flex items-center justify-center text-2xl mb-5 text-[#c9a96e]">
                ∅
              </div>
              <h3 className="font-serif text-white/70 text-2xl mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                Your shelf is empty
              </h3>
              <p className="text-white/30 text-sm">
                Add your first product above to see it here.
              </p>
            </div>
          )}

          {!loading && products.length > 0 && (
            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group flex items-center gap-4 rounded-2xl bg-[#1e1e1e] border border-[#c9a96e]/10 hover:border-[#c9a96e]/30 px-5 py-4 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-black overflow-hidden shrink-0">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => (e.currentTarget.style.display = "none")}
                      />
                    ) : null}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium truncate">{product.name}</p>
                    <p className="text-white/40 text-xs mt-0.5">
                      {product.brand} · ₹{Number(product.price).toLocaleString()}
                    </p>
                  </div>

                  <span className={`hidden sm:inline-flex shrink-0 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.15em] font-semibold ${getBadgeColorClass(product.badge_color)}`}>
                    {product.badge}
                  </span>

                  <button
                    onClick={() => deleteProduct(product)}
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white/40 border border-white/10 hover:border-red-400/60 hover:text-red-400 transition-all duration-300"
                    title="Remove product"
                  >
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0l-1 14a2 2 0 01-2 2H7a2 2 0 01-2-2L4 6h16z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export { AddYourProduct };
