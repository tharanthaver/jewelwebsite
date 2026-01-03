const SocialProofStrip = () => {
  const marqueeText = "Certified Jewelry • BIS Hallmarked • Lifetime Polish • Free Resizing • Exchange Policy • Expert Craftsmen • ";

  return (
    <section className="py-5 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-xs tracking-super uppercase mx-4">
            {marqueeText}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SocialProofStrip;
