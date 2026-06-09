import React, { useState } from "react";
import { ProductShowcase } from "../components/products/ProductShowcase";
import { ProductGrid } from "../components/products/ProductGrid";
import { Footer } from "../Components/Footer";

function Products() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="min-h-screen bg-[#f3f1eb]">
      <ProductShowcase
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <ProductGrid
        activeFilter={activeFilter}
      />

      <Footer />
    </div>
  );
}

export { Products };