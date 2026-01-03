import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, Sparkles, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  const handleCheckout = () => {
    const itemsList = items
      .map((item) => `- ${item.name} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString("en-IN")}`)
      .join("\n");
    const message = `Hi, I'd like to place an order for:\n\n${itemsList}\n\nTotal: ₹${totalPrice.toLocaleString("en-IN")}\n\nPlease confirm availability and payment details.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
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
            <span className="text-foreground">Cart</span>
          </div>

          <div className="flex items-end justify-between mb-12">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
                Your
                <br />
                <span className="italic text-gradient">Cart</span>
              </h1>
              <p className="text-muted-foreground">
                {totalItems} {totalItems === 1 ? "item" : "items"} in cart
              </p>
            </div>

            {items.length > 0 && (
              <button
                onClick={clearCart}
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
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="font-serif text-2xl mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Discover our exquisite collections and find the perfect piece for you.
              </p>
              <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Browse Collections
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 md:gap-6 p-4 md:p-6 bg-muted/30 rounded-xl group"
                  >
                    <Link to={`/product/${item.id}`} className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg bg-muted">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>

                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.id}`}>
                        <p className="text-[10px] uppercase tracking-super text-muted-foreground mb-1">
                          {item.category}
                        </p>
                        <h3 className="font-serif text-lg md:text-xl mb-2 group-hover:text-primary transition-colors truncate">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-lg font-medium text-primary">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-border rounded-full hover:border-primary hover:bg-primary/5 transition-all"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-border rounded-full hover:border-primary hover:bg-primary/5 transition-all"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 p-6 bg-muted/30 rounded-2xl">
                  <h3 className="font-serif text-xl mb-6">Order Summary</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                      <span>₹{totalPrice.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Insurance</span>
                      <span className="text-green-600">Included</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between font-medium text-lg">
                        <span>Total</span>
                        <span className="text-primary">₹{totalPrice.toLocaleString("en-IN")}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Including GST</p>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 bg-primary text-primary-foreground font-medium rounded-full hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 mb-3"
                  >
                    <Sparkles className="w-4 h-4" />
                    Proceed to Checkout
                  </button>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 border border-green-500 text-green-600 font-medium rounded-full hover:bg-green-500/5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Order via WhatsApp
                  </button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Secure checkout • 100% authentic products
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
