// Single source of truth for badge colors. The DB only stores the
// keyword (e.g. "gold"); the actual Tailwind classes live here, and
// the dropdown options for the Add Product form are derived from this too.
export const BADGE_COLORS = [
  { value: "gold", label: "Gold", className: "bg-[#c9a96e] text-[#151515]" },
  { value: "white", label: "White", className: "bg-white text-[#151515]" },
  { value: "green", label: "Green", className: "bg-emerald-500 text-white" },
];

export function getBadgeColorClass(value) {
  return (
    BADGE_COLORS.find((c) => c.value === value)?.className ||
    BADGE_COLORS[0].className
  );
}