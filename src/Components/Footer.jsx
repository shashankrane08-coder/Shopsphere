import { useState } from "react";

const links = {
  Shop: [
    { label: "New Arrivals", path: "/products" },
    { label: "Best Sellers", path: "/products" },
    { label: "Electronics", path: "/categories/electronics" },
    { label: "Fashion", path: "/categories/fashion" },
    { label: "Accessories", path: "/categories/accessories" },
    { label: "Furniture", path: "/categories/furniture" },
  ],
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Press", path: "/press" },
    { label: "Blog", path: "/blog" },
  ],
  Support: [
    { label: "Contact Us", path: "/contact" },
    { label: "Track Order", path: "/track" },
    { label: "Returns", path: "/returns" },
    { label: "FAQs", path: "/faqs" },
  ],
  Legal: [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
    { label: "Cookie Policy", path: "/cookies" },
  ],
};

const socials = [
  {
    label: "Instagram",
    path: "#",
    icon: "IG",
  },
  {
    label: "X",
    path: "#",
    icon: "X",
  },
  {
    label: "YouTube",
    path: "#",
    icon: "YT",
  },
  {
    label: "LinkedIn",
    path: "#",
    icon: "IN",
  },
];

const payments = [
  { label: "Visa" },
  { label: "Mastercard" },
  { label: "UPI" },
  { label: "Net Banking" },
];

const trustBadges = [
  {
    label: "Secure Payments",
    description: "Encrypted & protected checkout",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2L4 5v6c0 5.25 3.44 10.74 8 12 4.56-1.26 8-6.75 8-12V5l-8-3z"
        />
      </svg>
    ),
  },
  {
    label: "Easy Returns",
    description: "Hassle-free return process",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h12M3 10l4-4M3 10l4 4M21 14H9m12 0l-4-4m4 4l-4 4"
        />
      </svg>
    ),
  },
  {
    label: "Free Shipping",
    description: "Fast delivery on all orders",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7h13v8H3V7zm13 3h3l2 2v3h-5v-5z"
        />
      </svg>
    ),
  },
  {
    label: "Premium Support",
    description: "Available whenever you need us",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 10a6 6 0 10-12 0v4a2 2 0 002 2h1l2 3h2l2-3h1a2 2 0 002-2v-4z"
        />
      </svg>
    ),
  },
];

function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <footer className="bg-[#0b0b0b] text-[#a8a29a]">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">

        <div className="grid gap-14 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <h2 className="font-serif text-5xl tracking-wide text-white">
              Shop
              <span className="italic text-[#c9a96e]">Sphere</span>
            </h2>

            <p className="mt-5 max-w-sm leading-relaxed text-[#a8a29a]">
              Discover curated collections crafted for modern lifestyles.
              Luxury, elegance, and timeless quality in every purchase.
            </p>

            <div className="mt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a96e]">
                Follow Us
              </p>

              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.path}
                    onMouseEnter={() => setHoveredSocial(social.label)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${
                      hoveredSocial === social.label
                        ? "border-[#c9a96e] bg-[#c9a96e]/10 text-[#c9a96e] -translate-y-1"
                        : "border-[#c9a96e]/10 bg-[#151515] text-white"
                    }`}
                  >
                    <span className="text-xs font-semibold">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a96e]">
                {section}
              </h4>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.path}
                      className="inline-block text-sm transition-all duration-300 hover:translate-x-1 hover:text-[#c9a96e]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-[#c9a96e]/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <p className="text-xs text-[#7b746b]">
              © {new Date().getFullYear()} ShopSphere.
              All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-xs text-[#7b746b]">
                Accepted Payments
              </span>

              {payments.map((payment) => (
                <div
                  key={payment.label}
                  className="rounded-lg border border-[#c9a96e]/10 bg-[#151515] px-3 py-2 text-xs text-white"
                >
                  {payment.label}
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}

export { Footer };