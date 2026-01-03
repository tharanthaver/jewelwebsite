import { useState, useMemo, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Heart, SlidersHorizontal, ArrowLeft, Sparkles, Eye, ChevronDown } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const allProducts = [
  { id: "1", name: "Solitaire Diamond Ring", price: 125000, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80", category: "rings", metal: "gold", purity: "18K" },
  { id: "2", name: "Classic Gold Band", price: 45000, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80", category: "rings", metal: "gold", purity: "22K" },
  { id: "3", name: "Emerald Cut Engagement Ring", price: 185000, image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80", category: "rings", metal: "platinum", purity: "Platinum" },
  { id: "4", name: "Pearl Drop Necklace", price: 78000, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80", category: "necklaces", metal: "gold", purity: "18K" },
    { id: "5", name: "Diamond Pendant Chain", price: 156000, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800", category: "necklaces", metal: "gold", purity: "22K" },
    { id: "6", name: "Layered Gold Necklace", price: 92000, image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80", category: "necklaces", metal: "gold", purity: "22K" },
    { id: "7", name: "Diamond Stud Earrings", price: 68000, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80", category: "earrings", metal: "gold", purity: "18K" },
    { id: "8", name: "Gold Jhumka Earrings", price: 42000, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80", category: "earrings", metal: "gold", purity: "22K" },
    { id: "9", name: "Ruby Drop Earrings", price: 95000, image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80", category: "earrings", metal: "gold", purity: "18K" },
    { id: "10", name: "Bridal Choker Set", price: 320000, image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80", category: "bridal", metal: "gold", purity: "22K" },
    { id: "11", name: "Kundan Bridal Necklace", price: 285000, image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80", category: "bridal", metal: "gold", purity: "22K" },
    { id: "12", name: "Diamond Bridal Set", price: 450000, image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=600&q=80", category: "bridal", metal: "gold", purity: "18K" },
    { id: "13", name: "Vintage Rose Ring", price: 89000, image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80", category: "rings", metal: "gold", purity: "18K" },
    { id: "14", name: "Sapphire Statement Ring", price: 210000, image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80", category: "rings", metal: "platinum", purity: "Platinum" },
    { id: "15", name: "Temple Gold Necklace", price: 175000, image: "https://images.unsplash.com/photo-1611107683227-e9060eccd846?w=600&q=80", category: "necklaces", metal: "gold", purity: "22K" },
    { id: "16", name: "Polki Diamond Set", price: 380000, image: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=600&q=80", category: "bridal", metal: "gold", purity: "22K" },
    { id: "17", name: "Chandelier Earrings", price: 125000, image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600&q=80", category: "earrings", metal: "gold", purity: "18K" },
    { id: "18", name: "Minimalist Gold Chain", price: 35000, image: "https://images.unsplash.com/photo-1611085510577-04f1fc29796a?auto=format&fit=crop&q=80&w=800", category: "necklaces", metal: "gold", purity: "18K" },
  { id: "19", name: "Antique Finish Bangles", price: 145000, image: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=600&q=80", category: "bridal", metal: "gold", purity: "22K" },
  { id: "20", name: "Contemporary Pearl Studs", price: 28000, image: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&q=80", category: "earrings", metal: "gold", purity: "18K" },
];

const categories = [
  { id: "all", name: "All Collections", count: allProducts.length },
  { id: "rings", name: "Rings", count: allProducts.filter(p => p.category === "rings").length },
  { id: "necklaces", name: "Necklaces", count: allProducts.filter(p => p.category === "necklaces").length },
  { id: "earrings", name: "Earrings", count: allProducts.filter(p => p.category === "earrings").length },
  { id: "bridal", name: "Bridal", count: allProducts.filter(p => p.category === "bridal").length },
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
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { addItem, removeItem, isInWishlist } = useWishlist();

  useEffect(() => {
    setIsHeroVisible(true);
  }, []);

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
      
      <main>
        <div 
          ref={heroRef}
          className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-champagne via-background to-rose-gold-muted"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-gold-muted/30 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div 
              className={`transition-all duration-1000 delay-100 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra text-primary mb-6 bg-primary/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                Exclusive Collection
              </p>
            </div>
            
            <h1 
              className={`font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-6 transition-all duration-1000 delay-200 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Our
              <br />
              <span className="italic text-gradient">Collections</span>
            </h1>
            
            <p 
              className={`text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-300 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Discover timeless elegance crafted with passion. Each piece tells a story of artistry and heritage.
            </p>
            
            <div 
              className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-400 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-background/80 text-foreground hover:bg-primary/10 border border-border"
                  }`}
                >
                  {cat.name}
                  <span className="ml-2 text-xs opacity-60">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>
          
          </div>

        <div id="products" className="pt-16 pb-24">
          <div className="container-modern">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                  <ArrowLeft className="w-4 h-4" />
                  Home
                </Link>
                <span>/</span>
                <span className="text-foreground">Collections</span>
              </div>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden inline-flex items-center gap-2 px-4 py-2 border border-border text-sm font-medium rounded-full hover:bg-muted transition-all duration-300"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 bg-primary text-primary-foreground text-xs flex items-center justify-center rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              <aside
                className={`lg:w-64 flex-shrink-0 ${
                  showFilters ? "block" : "hidden lg:block"
                }`}
              >
                <div className="sticky top-24 space-y-8 p-6 bg-muted/30 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl">Filters</h3>
                    {activeFiltersCount > 0 && (
                      <button
                        onClick={clearFilters}
                        className="text-sm text-primary hover:underline"
                      >
                        Clear all
                      </button>
                    )}
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-super text-muted-foreground mb-4">
                      Metal Type
                    </h4>
                    <div className="space-y-1">
                      {metals.map((metal) => (
                        <button
                          key={metal.id}
                          onClick={() => setSelectedMetal(metal.id)}
                          className={`block w-full text-left py-2.5 px-3 text-sm transition-all duration-300 rounded-lg ${
                            selectedMetal === metal.id
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {metal.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-super text-muted-foreground mb-4">
                      Price Range
                    </h4>
                    <div className="space-y-1">
                      {priceRanges.map((range) => (
                        <button
                          key={range.id}
                          onClick={() => setSelectedPriceRange(range.id)}
                          className={`block w-full text-left py-2.5 px-3 text-sm transition-all duration-300 rounded-lg ${
                            selectedPriceRange === range.id
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {range.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden w-full py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full"
                  >
                    Apply Filters
                  </button>
                </div>
              </aside>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-8">
                  <p className="text-muted-foreground">
                    Showing <span className="text-foreground font-medium">{filteredProducts.length}</span> pieces
                  </p>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="text-center py-20 bg-muted/30 rounded-2xl">
                    <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">No products match your filters.</p>
                    <button
                      onClick={clearFilters}
                      className="text-primary hover:underline font-medium"
                    >
                      Clear all filters
                    </button>
                  </div>
                ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                      {filteredProducts.map((product, index) => (
                        <div 
                          key={product.id} 
                          className="group animate-fade-up"
                          style={{ animationDelay: `${index * 50}ms` }}
                          onMouseEnter={() => setHoveredProduct(product.id)}
                          onMouseLeave={() => setHoveredProduct(null)}
                        >
                          <Link to={`/product/${product.id}`} className="block">
                            <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4 rounded-xl">
                              <img
                                src={product.image}
                                alt={product.name}
                                className={`w-full h-full object-cover transition-all duration-700 ${
                                  hoveredProduct === product.id ? 'scale-110 brightness-105' : 'scale-100'
                                }`}
                              />
                              
                              <div className={`absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent transition-opacity duration-500 ${
                                hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                              }`} />
                              
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleWishlistToggle(product);
                                }}
                                className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center transition-all duration-300 rounded-full z-10 ${
                                  isInWishlist(product.id)
                                    ? "bg-primary text-primary-foreground scale-110"
                                    : "bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground"
                                }`}
                                aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                              >
                                <Heart
                                  className={`w-5 h-5 transition-transform duration-300 ${isInWishlist(product.id) ? "fill-current scale-110" : ""}`}
                                />
                              </button>

                              <div className={`absolute bottom-4 left-4 right-4 flex items-center justify-center gap-3 transition-all duration-500 ${
                                hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                              }`}>
                                <span className="flex-1 flex items-center justify-center gap-2 py-3 bg-background text-foreground text-sm font-medium rounded-full">
                                  <Eye className="w-4 h-4" />
                                  View Details
                                </span>
                              </div>

                              <div className={`absolute top-4 left-4 transition-all duration-300 ${
                                hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                              }`}>
                                <span className="px-3 py-1.5 bg-background/90 text-xs font-medium uppercase tracking-wider rounded-full">
                                  {product.purity} {product.metal}
                                </span>
                              </div>
                            </div>
                          </Link>

                          <Link to={`/product/${product.id}`} className="block space-y-2">
                            <p className={`text-[10px] uppercase tracking-super text-muted-foreground transition-all duration-300 ${
                              hoveredProduct === product.id ? 'text-primary' : ''
                            }`}>
                              {product.category}
                            </p>
                            <h3 className="font-serif text-lg md:text-xl group-hover:text-primary transition-colors duration-300">
                              {product.name}
                            </h3>
                            <p className="font-medium text-lg">
                              ₹{product.price.toLocaleString("en-IN")}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
