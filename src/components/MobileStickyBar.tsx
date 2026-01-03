import { Link } from "react-router-dom";

const MobileStickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border p-4 pb-safe">
      <div className="flex gap-3">
        <Link
          to="/products"
          className="flex-1 py-3 text-center text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          Shop Now
        </Link>
        <a
          href="#contact"
          className="flex-1 py-3 text-center text-sm font-medium bg-primary text-primary-foreground"
        >
          Book Visit
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;
