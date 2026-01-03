const AnnouncementBar = () => {
  return (
    <div className="bg-secondary text-secondary-foreground py-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-shimmer opacity-30 animate-shimmer" />
      <div className="container-modern relative z-10">
        <p className="text-[11px] sm:text-xs font-medium tracking-super uppercase text-center">
          Certified & Hallmarked
          <span className="mx-3 text-primary">✦</span>
          Free Lifetime Service
          <span className="mx-3 text-primary">✦</span>
          Trusted Since 1985
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
