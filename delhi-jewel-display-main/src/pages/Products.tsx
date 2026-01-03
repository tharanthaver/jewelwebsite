import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Heart, SlidersHorizontal, X, ArrowLeft } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample product data
const allProducts = [
  { id: "1", name: "Solitaire Diamond Ring", price: 125000, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80", category: "rings", metal: "gold", purity: "18K" },
  { id: "2", name: "Classic Gold Band", price: 45000, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80", category: "rings", metal: "gold", purity: "22K" },
  { id: "3", name: "Emerald Cut Engagement Ring", price: 185000, image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80", category: "rings", metal: "platinum", purity: "Platinum" },
  { id: "4", name: "Pearl Drop Necklace", price: 78000, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80", category: "necklaces", metal: "gold", purity: "18K" },
  { id: "5", name: "Diamond Pendant Chain", price: 156000, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80", category: "necklaces", metal: "gold", purity: "22K" },
  { id: "6", name: "Layered Gold Necklace", price: 92000, image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80", category: "necklaces", metal: "gold", purity: "22K" },
  { id: "7", name: "Diamond Stud Earrings", price: 68000, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80", category: "earrings", metal: "gold", purity: "18K" },
  { id: "8", name: "Gold Jhumka Earrings", price: 42000, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80", category: "earrings", metal: "gold", purity: "22K" },
  { id: "9", name: "Ruby Drop Earrings", price: 95000, image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80", category: "earrings", metal: "gold", purity: "18K" },
  { id: "10", name: "Bridal Choker Set", price: 320000, image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80", category: "bridal", metal: "gold", purity: "22K" },
  { id: "11", name: "Kundan Bridal Necklace", price: 285000, image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80", category: "bridal", metal: "gold", purity: "22K" },
  { id: "12", name: "Diamond Bridal Set", price: 450000, image: "https://images.unsplash.com/photo-1601121141418-c1cc62685158?w=600&q=80", category: "bridal", metal: "gold", purity: "18K" },
];

const categories = [
  { id: "all", name: "All" },
  { id: "rings", name: "Rings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "earrings", name: "Earrings" },
  { id: "bridal", name: "Bridal" },
];

const metals = [
  { id: "all", name: "All Metals" },
  { id: "gold", name: "Gold" },
  { id: "platinum", name: "Platinum" },
];

const priceRanges = [
  { id: "all", name: "All Prices", min: 0, max: Infinity },
  { id: "under50k", name: "Under ₹50,000", min: 0, max: 50000 },
  { id: "50k-100k", name: "₹50,000 - ₹1,00,000", min: 50000, max: 100000 },
  { id: "100k-200k", name: "₹1,00,000 - ₹2,00,000", min: 100000, max: 200000 },
  { id: "above200k", name: "Above ₹2,00,000", min: 200000, max: Infinity },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedMetal, setSelectedMetal] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  
  const { addItem, removeItem, isInWishlist } = useWishlist();

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
      const metalMatch = selectedMetal === "all" || product.metal === selectedMetal;
      const priceRange = priceRanges.find((r) => r.id === selectedPriceRange);
      const priceMatch = priceRange && product.price >= priceRange.min && product.price <= priceRange.max;
      return categoryMatch && metalMatch && priceMatch;
    });
  }, [selectedCategory, selectedMetal, selectedPriceRange]);

  const handleWishlistToggle = (product: typeof allProducts[0]) => {
    if (isInWishlist(product.id)) {
      removeItem(product.id);
    } else {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        metal: product.metal,
      });
    }
  };

  const activeFiltersCount = [
    selectedCategory !== "all",
    selectedMetal !== "all",
    selectedPriceRange !== "all",
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedMetal("all");
    setSelectedPriceRange("all");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8 pb-24">
        <div className="container-modern">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Collections</span>
          </div>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
                Our
                <br />
                <span className="italic">Collections</span>
              </h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} pieces available
              </p>
            </div>
            
            {/* Filter toggle for mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden inline-flex items-center gap-2 px-4 py-3 border border-border text-sm font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Filters Sidebar */}
            <aside
              className={`lg:w-64 flex-shrink-0 ${
                showFilters ? "block" : "hidden lg:block"
              }`}
            >
              <div className="sticky top-24 space-y-8">
                {/* Clear filters */}
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:underline"
                  >
                    Clear all filters
                  </button>
                )}

                {/* Category */}
                <div>
                  <h3 className="text-xs uppercase tracking-super text-muted-foreground mb-4">
                    Category
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`block w-full text-left py-2 text-sm transition-colors ${
                          selectedCategory === category.id
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Metal */}
                <div>
                  <h3 className="text-xs uppercase tracking-super text-muted-foreground mb-4">
                    Metal
                  </h3>
                  <div className="space-y-2">
                    {metals.map((metal) => (
                      <button
                        key={metal.id}
                        onClick={() => setSelectedMetal(metal.id)}
                        className={`block w-full text-left py-2 text-sm transition-colors ${
                          selectedMetal === metal.id
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {metal.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h3 className="text-xs uppercase tracking-super text-muted-foreground mb-4">
                    Price Range
                  </h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.id}
                        onClick={() => setSelectedPriceRange(range.id)}
                        className={`block w-full text-left py-2 text-sm transition-colors ${
                          selectedPriceRange === range.id
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {range.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile close button */}
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden w-full py-3 bg-primary text-primary-foreground text-sm font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-muted-foreground mb-4">No products match your filters.</p>
                  <button
                    onClick={clearFilters}
                    className="text-primary hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="group">
                      {/* Image */}
                      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Wishlist button */}
                        <button
                          onClick={() => handleWishlistToggle(product)}
                          className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                            isInWishlist(product.id)
                              ? "bg-primary text-primary-foreground"
                              : "bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground"
                          }`}
                          aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                        >
                          <Heart
                            className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-current" : ""}`}
                          />
                        </button>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/10 transition-colors duration-300" />
                      </div>

                      {/* Info */}
                      <div>
                        <p className="text-[10px] uppercase tracking-super text-muted-foreground mb-1">
                          {product.purity} {product.metal}
                        </p>
                        <h3 className="font-serif text-lg mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="font-medium">
                          ₹{product.price.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
