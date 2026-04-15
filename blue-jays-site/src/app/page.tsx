import { FanExperience } from "@/components/sections/FanExperience";
import { FeaturedPlayers } from "@/components/sections/FeaturedPlayers";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { LatestNews } from "@/components/sections/LatestNews";
import { RosterSection } from "@/components/sections/RosterSection";
import { Schedule } from "@/components/sections/Schedule";
import { Standings } from "@/components/sections/Standings";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LatestNews />
      <FeaturedPlayers />
      <Schedule />
      <Standings />
      <RosterSection />
      <FanExperience />
      <Gallery />
    </>
  );
}
