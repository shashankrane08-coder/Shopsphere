import { useState } from "react";
import { ProductShowcase } from "../Components/Products/ProductShowcase";
import { ProductGrid } from "../Components/Products/ProductGrid";

function Products() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div>
      <ProductShowcase
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <ProductGrid activeFilter={activeFilter} />
    </div>
  );
}

export { Products };
