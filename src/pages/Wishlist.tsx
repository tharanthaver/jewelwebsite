import { Link } from "react-router-dom";
import { Heart, Trash2, ArrowLeft, ShoppingBag, ShoppingCart, Sparkles } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Wishlist = () => {
  const { items, removeItem, clearWishlist } = useWishlist();
  const { addItem: addToCart, isInCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (item: typeof items[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
      metal: item.metal,
    });
    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-8 pb-24">
        <div className="container-modern">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Wishlist</span>
          </div>

          <div className="flex items-end justify-between mb-12">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
                Your
                <br />
                <span className="italic text-gradient">Wishlist</span>
              </h1>
              <p className="text-muted-foreground">
                {items.length} {items.length === 1 ? "piece" : "pieces"} saved
              </p>
            </div>

            {items.length > 0 && (
              <button
                onClick={clearWishlist}
                className="text-sm text-muted-foreground hover:text-destructive transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Clear all
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="text-center py-20 bg-muted/30 rounded-2xl">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-muted rounded-full mb-8">
                <Heart className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="font-serif text-2xl mb-4">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Start adding pieces you love to your wishlist. They'll be saved here for you to revisit.
              </p>
              <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Browse Collections
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {items.map((item) => (
                <div key={item.id} className="group">
                  <Link to={`/product/${item.id}`}>
                    <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4 rounded-xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          removeItem(item.id);
                        }}
                        className="absolute top-4 right-4 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-destructive hover:text-white transition-colors"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </Link>

                  <div>
                    <p className="text-[10px] uppercase tracking-super text-muted-foreground mb-1">
                      {item.metal}
                    </p>
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-serif text-lg mb-2 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="font-medium mb-3">₹{item.price.toLocaleString("en-IN")}</p>
                    
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`w-full py-2.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
                        isInCart(item.id)
                          ? "bg-green-500 text-white"
                          : "border border-border hover:border-primary hover:bg-primary/5"
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {isInCart(item.id) ? "In Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {items.length > 0 && (
            <div className="mt-16 p-8 bg-muted/30 text-center rounded-2xl">
              <h3 className="font-serif text-2xl mb-4">Ready to make it yours?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Visit our showroom or book an appointment to see these pieces in person.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact" className="btn-primary inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Book Appointment
                </Link>
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20some%20pieces%20from%20my%20wishlist."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
