import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, MessageCircle, ArrowLeft, Check, Shield, Truck, RotateCcw, Sparkles, ChevronRight } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const allProducts = [
  { id: "1", name: "Solitaire Diamond Ring", price: 125000, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80", category: "rings", metal: "gold", purity: "18K", description: "A stunning solitaire diamond ring featuring a brilliant-cut diamond set in 18K gold. Perfect for engagements or special occasions.", weight: "4.2g", stone: "Diamond (0.5 ct)" },
  { id: "2", name: "Classic Gold Band", price: 45000, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80", category: "rings", metal: "gold", purity: "22K", description: "A timeless 22K gold band with a smooth, polished finish. Ideal for daily wear or as a wedding band.", weight: "5.8g", stone: "None" },
  { id: "3", name: "Emerald Cut Engagement Ring", price: 185000, image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80", category: "rings", metal: "platinum", purity: "Platinum", description: "An elegant emerald-cut diamond ring set in platinum with side baguettes for added brilliance.", weight: "6.1g", stone: "Diamond (1.2 ct)" },
  { id: "4", name: "Pearl Drop Necklace", price: 78000, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", category: "necklaces", metal: "gold", purity: "18K", description: "Graceful pearl drop necklace with South Sea pearl pendant on an 18K gold chain.", weight: "8.5g", stone: "South Sea Pearl" },
  { id: "5", name: "Diamond Pendant Chain", price: 156000, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80", category: "necklaces", metal: "gold", purity: "22K", description: "A dazzling diamond pendant suspended on a delicate 22K gold chain. Features a solitaire diamond in a bezel setting.", weight: "7.2g", stone: "Diamond (0.8 ct)" },
  { id: "6", name: "Layered Gold Necklace", price: 92000, image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80", category: "necklaces", metal: "gold", purity: "22K", description: "Modern layered necklace with multiple chains at varying lengths for a trendy, stacked look.", weight: "12.3g", stone: "None" },
  { id: "7", name: "Diamond Stud Earrings", price: 68000, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", category: "earrings", metal: "gold", purity: "18K", description: "Classic diamond stud earrings featuring brilliant-cut diamonds in 18K gold settings.", weight: "2.8g", stone: "Diamond (0.4 ct each)" },
  { id: "8", name: "Gold Jhumka Earrings", price: 42000, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80", category: "earrings", metal: "gold", purity: "22K", description: "Traditional jhumka earrings handcrafted in 22K gold with intricate filigree work.", weight: "9.5g", stone: "None" },
  { id: "9", name: "Ruby Drop Earrings", price: 95000, image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80", category: "earrings", metal: "gold", purity: "18K", description: "Elegant drop earrings featuring natural rubies surrounded by a halo of diamonds.", weight: "5.2g", stone: "Ruby & Diamond" },
  { id: "10", name: "Bridal Choker Set", price: 320000, image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80", category: "bridal", metal: "gold", purity: "22K", description: "Complete bridal set including choker necklace, matching earrings, and maang tikka in traditional design.", weight: "85g", stone: "Kundan & Polki" },
  { id: "11", name: "Kundan Bridal Necklace", price: 285000, image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80", category: "bridal", metal: "gold", purity: "22K", description: "Exquisite Kundan necklace with intricate meenakari work on the reverse. A masterpiece of Indian craftsmanship.", weight: "62g", stone: "Kundan" },
  { id: "12", name: "Diamond Bridal Set", price: 450000, image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&q=80", category: "bridal", metal: "gold", purity: "18K", description: "Luxurious diamond bridal set with necklace and earrings featuring VVS clarity diamonds.", weight: "48g", stone: "Diamond (5 ct total)" },
  { id: "13", name: "Vintage Rose Ring", price: 89000, image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80", category: "rings", metal: "gold", purity: "18K", description: "Vintage-inspired rose gold ring with floral motifs and milgrain detailing.", weight: "4.8g", stone: "Diamond accent" },
  { id: "14", name: "Sapphire Statement Ring", price: 210000, image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80", category: "rings", metal: "platinum", purity: "Platinum", description: "Stunning blue sapphire center stone surrounded by a double halo of diamonds.", weight: "7.2g", stone: "Sapphire (2 ct) & Diamond" },
  { id: "15", name: "Temple Gold Necklace", price: 175000, image: "https://images.unsplash.com/photo-1611107683227-e9060eccd846?w=800&q=80", category: "necklaces", metal: "gold", purity: "22K", description: "Traditional temple jewelry necklace with Lakshmi pendant and elaborate gold work.", weight: "35g", stone: "Ruby & Emerald" },
  { id: "16", name: "Polki Diamond Set", price: 380000, image: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=800&q=80", category: "bridal", metal: "gold", purity: "22K", description: "Heritage polki diamond set featuring uncut diamonds in traditional jadau setting.", weight: "72g", stone: "Polki Diamond" },
  { id: "17", name: "Chandelier Earrings", price: 125000, image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80", category: "earrings", metal: "gold", purity: "18K", description: "Glamorous chandelier earrings with cascading diamonds perfect for evening occasions.", weight: "12g", stone: "Diamond (1.5 ct total)" },
  { id: "18", name: "Minimalist Gold Chain", price: 35000, image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80", category: "necklaces", metal: "gold", purity: "18K", description: "Delicate, minimalist chain in 18K gold. Perfect for layering or wearing alone.", weight: "4.2g", stone: "None" },
  { id: "19", name: "Antique Finish Bangles", price: 145000, image: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=800&q=80", category: "bridal", metal: "gold", purity: "22K", description: "Set of 4 bangles with antique matte finish and traditional nakshi work.", weight: "48g", stone: "Ruby accent" },
  { id: "20", name: "Contemporary Pearl Studs", price: 28000, image: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=800&q=80", category: "earrings", metal: "gold", purity: "18K", description: "Modern pearl stud earrings featuring freshwater pearls in minimalist gold settings.", weight: "2.4g", stone: "Freshwater Pearl" },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();
  const { addItem: addToCart, isInCart } = useCart();
  const [isLoaded, setIsLoaded] = useState(false);

  const product = allProducts.find((p) => p.id === id);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-24">
          <div className="container-modern text-center">
            <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/products" className="btn-primary">
              Browse Collections
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      metal: product.metal,
    });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from Wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        metal: product.metal,
      });
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  const handleEnquiry = () => {
    const message = `Hi, I'm interested in the ${product.name} (₹${product.price.toLocaleString("en-IN")}). Please share more details.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      metal: product.metal,
    });
    navigate("/cart");
  };

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-8 pb-24">
        <div className="container-modern">
          <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-primary transition-colors">Collections</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className={`transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button
                  onClick={handleWishlistToggle}
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isInWishlist(product.id)
                      ? "bg-primary text-primary-foreground"
                      : "bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>

            <div className={`transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-ultra text-primary mb-4 bg-primary/10 px-3 py-1.5 rounded-full">
                <Sparkles className="w-3 h-3" />
                {product.category}
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
                {product.name}
              </h1>

              <p className="text-3xl font-medium text-primary mb-6">
                ₹{product.price.toLocaleString("en-IN")}
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-muted/50 rounded-xl">
                <div>
                  <p className="text-xs uppercase tracking-super text-muted-foreground mb-1">Metal</p>
                  <p className="font-medium">{product.purity} {product.metal}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-super text-muted-foreground mb-1">Weight</p>
                  <p className="font-medium">{product.weight}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-super text-muted-foreground mb-1">Stone</p>
                  <p className="font-medium">{product.stone}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-super text-muted-foreground mb-1">Certification</p>
                  <p className="font-medium">BIS Hallmarked</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 mb-8">
                <button
                  onClick={handleBuyNow}
                  className="w-full py-4 bg-primary text-primary-foreground font-medium rounded-full hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Buy Now
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleAddToCart}
                    className={`py-4 font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
                      isInCart(product.id)
                        ? "bg-green-500 text-white"
                        : "border border-border hover:border-primary hover:bg-primary/5"
                    }`}
                  >
                    {isInCart(product.id) ? (
                      <>
                        <Check className="w-4 h-4" />
                        In Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={handleEnquiry}
                    className="py-4 border border-border font-medium rounded-full hover:border-green-500 hover:bg-green-500/5 hover:text-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enquire
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Shield, text: "BIS Hallmarked for certified purity" },
                  { icon: Truck, text: "Free insured delivery across India" },
                  { icon: RotateCcw, text: "15-day easy exchange policy" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Icon className="w-4 h-4 text-primary" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className={`mt-24 transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="font-serif text-2xl md:text-3xl mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    className="group"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <h3 className="font-serif text-lg group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-medium">₹{item.price.toLocaleString("en-IN")}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
