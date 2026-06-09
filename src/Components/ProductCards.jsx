/* ProductCards.jsx
   Exports an array of JSX cards to be used directly with <Stack cards={productCards} />
   Same structure as before — just cleaner markup, smoother hover, refined typography.
*/

const showcaseProducts = [
  {
    title: "Swiss Prestige",
    subtitle: "Luxury Timepiece",
    badge: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Elite Audio",
    subtitle: "Premium Sound",
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Signature Leather",
    subtitle: "Luxury Collection",
    badge: "Limited",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Executive Style",
    subtitle: "Premium Fashion",
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Designer Sneakers",
    subtitle: "Limited Edition",
    badge: "Exclusive",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
  },
];

/* Inject styles once */
if (typeof document !== "undefined" && !document.getElementById("pc-styles")) {
  const s = document.createElement("style");
  s.id = "pc-styles";
  s.textContent = `
    .pc-wrap {
      position: relative;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }

    /* Image scales subtly on card hover (CardRotate wraps the whole card) */
    .pc-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.04);
      transition: transform 0.9s cubic-bezier(.22,.68,0,1.2),
                  filter 0.6s ease;
      filter: brightness(0.72) saturate(0.82);
      will-change: transform, filter;
    }
    .pc-wrap:hover .pc-img {
      transform: scale(1.10);
      filter: brightness(0.82) saturate(0.95);
    }

    /* Layered overlays */
    .pc-overlay-top {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        rgba(5,4,3,0.28) 0%,
        transparent 35%
      );
    }
    .pc-overlay-btm {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(5,4,3,0.92) 0%,
        rgba(5,4,3,0.40) 30%,
        transparent 58%
      );
      transition: opacity 0.4s ease;
    }
    .pc-wrap:hover .pc-overlay-btm {
      opacity: 0.88;
    }

    /* Badge */
    .pc-badge {
      position: absolute;
      top: 18px;
      left: 18px;
      padding: 4px 10px;
      background: rgba(10,8,6,0.75);
      border: 1px solid rgba(210,172,80,0.35);
      border-radius: 2px;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #d4aa50;
      backdrop-filter: blur(10px);
      z-index: 5;
    }

    /* Gold pulse dot */
    .pc-dot {
      position: absolute;
      top: 18px;
      right: 18px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #d9a441;
      box-shadow: 0 0 0 0 rgba(217,164,65,0.5);
      animation: pcPulse 2.4s ease-in-out infinite;
      z-index: 5;
    }
    @keyframes pcPulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(217,164,65,0.5); }
      50%       { box-shadow: 0 0 0 8px rgba(217,164,65,0); }
    }

    /* Bottom content */
    .pc-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 24px 22px 26px;
      z-index: 5;
    }

    /* Hairline gold separator */
    .pc-line {
      width: 28px;
      height: 1px;
      background: linear-gradient(to right, #d9a441, rgba(217,164,65,0.3));
      margin-bottom: 10px;
      transition: width 0.4s ease;
    }
    .pc-wrap:hover .pc-line {
      width: 44px;
    }

    .pc-subtitle {
      font-size: 9.5px;
      font-weight: 600;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #c9a96e;
      margin-bottom: 5px;
    }

    .pc-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 22px;
      font-weight: 400;
      color: #f0ebe2;
      line-height: 1.2;
      letter-spacing: 0.01em;
    }

    /* Arrow CTA — slides in on hover */
    .pc-cta {
      display: flex;
      align-items: center;
      gap: 7px;
      margin-top: 12px;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(201,169,110,0.0);
      transition: color 0.35s ease, gap 0.35s ease;
    }
    .pc-wrap:hover .pc-cta {
      color: rgba(201,169,110,0.9);
      gap: 10px;
    }
    .pc-cta svg {
      flex-shrink: 0;
      transition: transform 0.35s ease;
    }
    .pc-wrap:hover .pc-cta svg {
      transform: translateX(3px);
    }
  `;
  document.head.appendChild(s);
}

const productCards = showcaseProducts.map((product, index) => (
  <div key={index} className="pc-wrap">

    {/* Image */}
    <img src={product.image} alt={product.title} className="pc-img" />

    {/* Overlays */}
    <div className="pc-overlay-top" />
    <div className="pc-overlay-btm" />

    {/* Badge */}
    <div className="pc-badge">{product.badge}</div>

    {/* Gold dot */}
    <div className="pc-dot" />

    {/* Bottom content */}
    <div className="pc-content">
      <div className="pc-line" />
      <p className="pc-subtitle">{product.subtitle}</p>
      <h3 className="pc-title">{product.title}</h3>
      <div className="pc-cta">
        Explore
        <svg width={12} height={12} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>

  </div>
));

export default productCards;