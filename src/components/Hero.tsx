import { HeroSection04 } from "@/components/ui/hero-04";

const Hero = ({ isReady = true }: { isReady?: boolean }) => {
  return <HeroSection04 isReady={isReady} />;
};

export default Hero;
