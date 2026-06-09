import { useState } from "react";
import LuxuryButton from "./LuxuryButton";

const perks = [
  {
    id: 1,
    title: "Exclusive Member Offers",
    description: "Unlock private discounts and premium promotions.",
  },
  {
    id: 2,
    title: "Early Product Access",
    description: "Shop new arrivals before they become available publicly.",
  },
  {
    id: 3,
    title: "Luxury Collections",
    description: "Curated recommendations tailored to your interests.",
  },
];

function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubscribed(true);
  };

  return (
    <section className="bg-[#f3f1eb] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a96e]">
              Exclusive Membership
            </p>

            <h2 className="font-serif text-5xl leading-tight text-[#151515] md:text-6xl">
              Join The
              <span className="block italic text-[#c9a96e]">
                Luxury Circle
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5e5a52]">
              Receive curated luxury recommendations,
              exclusive member offers, and early access
              to premium collections.
            </p>

            <div className="mt-10 space-y-5">

              {perks.map((perk) => (
                <div
                  key={perk.id}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c9a96e]/20 bg-white shadow-sm">
                    <svg
                      className="h-5 w-5 text-[#c9a96e]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#151515]">
                      {perk.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#5e5a52]">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Right */}
          <div className="mx-auto w-full max-w-xl rounded-[32px] border border-[#d7d1c7] bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:p-10">

            {subscribed ? (

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#c9a96e]/10">
                  <svg
                    className="h-10 w-10 text-[#c9a96e]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h3 className="mt-6 font-serif text-3xl text-[#151515]">
                  Welcome to the Luxury Circle
                </h3>

                <p className="mt-3 text-[#5e5a52]">
                  You're now part of our exclusive community.
                </p>

                <div className="mt-6 rounded-2xl border border-[#d7d1c7] bg-[#faf8f4] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8c8476]">
                    Registered Email
                  </p>

                  <p className="mt-2 font-medium text-[#151515]">
                    {email}
                  </p>
                </div>

                <div className="mt-5 rounded-2xl border border-[#d7d1c7] bg-[#faf8f4] p-4">
                  <p className="text-sm text-[#5e5a52]">
                    Expect exclusive launches, member-only offers,
                    and curated luxury recommendations delivered
                    directly to your inbox.
                  </p>
                </div>

              </div>

            ) : (

              <>
                <div className="mb-8">

                  <h3 className="font-serif text-4xl text-[#151515]">
                    Subscribe
                  </h3>

                  <p className="mt-3 text-[#5e5a52]">
                    Join thousands of luxury shoppers and stay ahead of every collection.
                  </p>

                </div>

                <div className="mb-5">

                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#8c8476]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-[#d7d1c7] bg-[#faf8f4] px-4 py-4 text-[#151515] outline-none focus:border-[#c9a96e]"
                  />

                </div>

                <div className="mb-5">

                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#8c8476]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="you@example.com"
                    className={`w-full rounded-2xl border bg-[#faf8f4] px-4 py-4 text-[#151515] outline-none focus:border-[#c9a96e] ${
                      error ? "border-red-500" : "border-[#d7d1c7]"
                    }`}
                  />

                  {error && (
                    <p className="mt-2 text-sm text-red-500">
                      {error}
                    </p>
                  )}

                </div>

                <div className="mb-8">

                  <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[#8c8476]">
                    Interests
                  </label>

                  <div className="flex flex-wrap gap-2">

                    {[
                      "Electronics",
                      "Fashion",
                      "Accessories",
                      "Furniture",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSelectedInterest(item)}
                        className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                          selectedInterest === item
                            ? "border-[#c9a96e] bg-[#c9a96e]/10 text-[#151515]"
                            : "border-[#d7d1c7] bg-[#faf8f4] text-[#5e5a52]"
                        }`}
                      >
                        {item}
                      </button>
                    ))}

                  </div>

                </div>

                <LuxuryButton
                  className="w-full"
                  onClick={handleSubscribe}
                >
                  Join The Luxury Circle
                </LuxuryButton>

                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[#8c8476]">
                  <svg
                    className="h-4 w-4 text-[#c9a96e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  No spam • Unsubscribe anytime • Privacy protected
                </div>

              </>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export { Newsletter };