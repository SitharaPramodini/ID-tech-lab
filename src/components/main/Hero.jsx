import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden" id="home">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover grayscale"
      >
        <source src="blackhole.webm" type="video/webm" />
        <source src="blackhole.mp4" type="video/mp4" />
      </video>

      {/* Tint the footage into the brand red, whatever colour it was shot in. */}
      <div className="absolute top-[-340px] h-full w-full left-0 z-[2] bg-brand-600 mix-blend-multiply pointer-events-none" />

      {/* Settle the footage back into the page's black. */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-transparent via-transparent to-ink-950 pointer-events-none" />

      <HeroContent />
    </div>
  );
};

export default Hero;
