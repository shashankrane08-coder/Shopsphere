import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../Supabase";
import { getBadgeColorClass } from "../../lib/badgeColors";

/* ── Star Rating ─────────────────────────────────────────────────── */
function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          viewBox="0 0 12 12"
          className={`w-3 h-3 ${s <= Math.round(rating) ? "fill-[#c9a96e]" : "fill-white/20"}`}
        >
          <path d="M6 0l1.5 4.5H12L8.25 7.5 9.75 12 6 9 2.25 12l1.5-4.5L0 4.5h4.5z" />
        </svg>
      ))}
      <span className="text-white/50 text-[11px] ml-1">{rating}</span>
    </div>
  );
}

/* ── Quick View Modal ────────────────────────────────────────────── */
function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 lg:p-8"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#111111] border border-[#c9a96e]/25 rounded-[36px] overflow-hidden max-w-5xl w-full grid lg:grid-cols-2 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
      >
        {/* Image */}
        <div className="relative bg-black flex items-center justify-center p-10 min-h-[320px] lg:min-h-auto overflow-hidden">
          <div className="absolute w-[280px] h-[280px] rounded-full bg-[#c9a96e]/10 blur-3xl" />
          <img
            src={product.image}
            alt={product.name}
            className="relative z-10 w-full max-w-xs object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          />
          <span className={`absolute top-5 left-5 px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.15em] font-semibold ${product.badgeColor}`}>
            {product.badge}
          </span>
        </div>

        {/* Info */}
        <div className="p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <button
              onClick={onClose}
              className="float-right w-9 h-9 rounded-full bg-white/8 text-white/60 hover:text-white hover:bg-white/15 transition-all flex items-center justify-center text-lg leading-none"
            >
              ×
            </button>

            <p className="text-[#c9a96e] text-xs uppercase tracking-[0.3em] mb-3">
              {product.brand}
            </p>
            <h2
              className="font-serif text-white text-4xl lg:text-5xl leading-tight mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {product.name}
            </h2>

            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={product.rating} />
              <span className="text-white/30 text-xs">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3 mb-6">
              <span className="text-[#c9a96e] text-3xl font-light">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-white/30 text-lg line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-full font-medium">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-8 border-t border-[#c9a96e]/10 pt-6">
              Crafted using premium materials and designed with timeless luxury.
              Every detail is engineered to elevate your lifestyle and provide an
              exceptional ownership experience.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {["Free Shipping", "30-Day Returns", "2 Year Warranty", "Authentic Luxury"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-white/50 text-xs">
                  <span className="w-4 h-4 rounded-full bg-[#c9a96e]/15 text-[#c9a96e] flex items-center justify-center text-[10px]">✓</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => { onAddToCart(product); onClose(); }}
              className="flex-1 bg-[#c9a96e] text-[#151515] px-6 py-4 rounded-full uppercase tracking-[0.15em] text-xs font-bold hover:scale-105 hover:shadow-[0_8px_30px_rgba(201,169,110,0.4)] transition-all duration-300"
            >
              Add To Cart
            </button>
            <button className="w-14 h-14 rounded-full border border-[#c9a96e]/30 text-[#c9a96e] hover:bg-[#c9a96e]/10 transition-all flex items-center justify-center text-base">
              ♡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Product Card ────────────────────────────────────────────────── */
function ProductCard({ product, onQuickView, wishlist, setWishlist, onAddToCart, index }) {
  const isWishlisted = wishlist.includes(product.id);
  const [added, setAdded] = useState(false);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setAdded(true);
    onAddToCart(product);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      className="group relative bg-[#111111] rounded-[28px] overflow-hidden border border-[#c9a96e]/15 hover:border-[#c9a96e]/45 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(201,169,110,0.12)]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* IMAGE */}
      <div className="relative h-[300px] bg-black overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/10 to-transparent" />

        {/* Badge */}
        <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.15em] font-semibold ${product.badgeColor}`}>
          {product.badge}
        </span>

        {/* Discount tag */}
        {discount && (
          <span className="absolute top-4 right-[52px] bg-emerald-500 text-white text-[10px] px-2 py-1 rounded-full font-semibold">
            -{discount}%
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() =>
            setWishlist((prev) =>
              isWishlisted ? prev.filter((id) => id !== product.id) : [...prev, product.id]
            )
          }
          className={`absolute top-4 right-4 w-9 h-9 rounded-full backdrop-blur-sm border flex items-center justify-center text-sm transition-all duration-300 ${
            isWishlisted
              ? "bg-[#c9a96e] border-[#c9a96e] text-[#151515]"
              : "bg-black/50 border-white/10 text-white hover:border-[#c9a96e]/40 hover:text-[#c9a96e]"
          }`}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

        {/* Quick View — slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-all duration-350 flex gap-2">
          <button
            onClick={() => onQuickView(product)}
            className="flex-1 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-[0.15em] hover:bg-white/20 transition-all border border-white/10"
          >
            Quick View
          </button>
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-3 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300 font-semibold ${
              added
                ? "bg-emerald-500 text-white"
                : "bg-[#c9a96e] text-[#151515] hover:scale-105"
            }`}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* INFO */}
      <div className="p-5">
        <p className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase mb-2">
          {product.brand}
        </p>
        <h3
          className="font-serif text-white text-xl leading-tight mb-3 line-clamp-1"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {product.name}
        </h3>

        <StarRating rating={product.rating} />

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#c9a96e]/10">
          <div className="flex items-end gap-2">
            <span className="text-[#c9a96e] text-lg font-light">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-white/30 text-xs line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <span className="text-white/30 text-[11px]">{product.reviews} sold</span>
        </div>
      </div>
    </div>
  );
}

/* ── Product Grid ─────────────────────────────────────────────────── */
export const ProductGrid = ({ activeFilter }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visible, setVisible] = useState(8);
  const [sortBy, setSortBy] = useState("default");
  const [cartCount, setCartCount] = useState(0);
  const [cartToast, setCartToast] = useState(null);

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

    // Adapt DB rows (snake_case) to the shape this UI was built around (camelCase).
    const formatted = (data || []).map((p) => ({
      ...p,
      originalPrice: p.original_price,
      badgeColor: getBadgeColorClass(p.badge_color),
    }));

    setProducts(formatted);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCartCount((c) => c + 1);
    setCartToast(product.name);
    setTimeout(() => setCartToast(null), 2200);
  };

  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchFilter =
        activeFilter === "All" ||
        p.category === activeFilter ||
        p.badge === activeFilter;
      return matchSearch && matchFilter;
    });

    if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [products, search, activeFilter, sortBy]);

  return (
    <>
      {/* Cart toast */}
      {cartToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] bg-[#111111] border border-[#c9a96e]/30 text-white px-6 py-3.5 rounded-full shadow-xl flex items-center gap-3 text-sm animate-bounce">
          <span className="w-5 h-5 rounded-full bg-[#c9a96e] text-[#151515] flex items-center justify-center text-xs font-bold">✓</span>
          <span className="text-white/80">Added to cart —</span>
          <span className="text-[#c9a96e] font-medium">{cartToast}</span>
        </div>
      )}

      <section className="pb-28">
        <div className="max-w-[1500px] mx-auto px-5 lg:px-10">

          {/* ── CONTROLS ROW ─────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 items-stretch sm:items-center">

            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 text-base pointer-events-none">
                ⌕
              </div>
              <input
                type="text"
                placeholder="Search luxury products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#111111] border border-[#c9a96e]/20 rounded-full pl-12 pr-6 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#c9a96e]/50 transition-colors text-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors text-lg leading-none"
                >
                  ×
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#111111] border border-[#c9a96e]/20 rounded-full pl-5 pr-10 py-4 text-white/70 text-xs uppercase tracking-[0.15em] outline-none focus:border-[#c9a96e]/50 transition-colors cursor-pointer"
              >
                <option value="default">Sort: Featured</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#c9a96e] text-xs pointer-events-none">▾</span>
            </div>

            {/* Wishlist & Cart counters */}
            <div className="flex gap-3 shrink-0">
              <div className="flex items-center gap-2 bg-[#111111] border border-[#c9a96e]/20 rounded-full px-4 py-3 text-white/60 text-xs">
                <span>♥</span>
                <span>{wishlist.length} saved</span>
              </div>
              <div className="flex items-center gap-2 bg-[#c9a96e] rounded-full px-4 py-3 text-[#151515] text-xs font-semibold">
                <span>🛒</span>
                <span>{cartCount} items</span>
              </div>
            </div>
          </div>

          {/* Result info */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-white/30 text-xs uppercase tracking-[0.2em]">
              {filteredProducts.length > 0
                ? `Showing ${Math.min(visible, filteredProducts.length)} of ${filteredProducts.length} products`
                : "No products found"}
            </p>
            <div className="h-px flex-1 mx-6 bg-[#c9a96e]/10" />
          </div>

          {/* ── GRID ─────────────────────────────────────────── */}
          {loading ? (
            <div className="flex items-center justify-center py-28 text-white/40 text-sm">
              Loading products…
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.slice(0, visible).map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  onQuickView={setSelectedProduct}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-28 text-center">
              <div className="w-20 h-20 rounded-full bg-[#c9a96e]/10 flex items-center justify-center text-3xl mb-6">
                ∅
              </div>
              <h3
                className="font-serif text-white/60 text-3xl mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                No Products Found
              </h3>
              <p className="text-white/30 text-sm mb-8">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => setSearch("")}
                className="bg-[#c9a96e] text-[#151515] px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold hover:scale-105 transition-all"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* ── LOAD MORE ────────────────────────────────────── */}
          {visible < filteredProducts.length && (
            <div className="flex flex-col items-center mt-16 gap-4">
              <p className="text-white/30 text-xs">
                {filteredProducts.length - visible} more products
              </p>
              <button
                onClick={() => setVisible((prev) => prev + 8)}
                className="group flex items-center gap-3 bg-[#111111] border border-[#c9a96e]/30 text-[#c9a96e] px-10 py-4 rounded-full uppercase tracking-[0.15em] text-xs font-semibold hover:bg-[#c9a96e] hover:text-[#151515] hover:border-transparent hover:scale-105 hover:shadow-[0_8px_30px_rgba(201,169,110,0.3)] transition-all duration-300"
              >
                Load More Products
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] group-hover:rotate-90 transition-transform duration-300">
                  ↓
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </>
  );
};