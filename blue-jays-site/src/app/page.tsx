import { AnyoneCanBuild } from "@/components/devnet/sections/AnyoneCanBuild";
import { CoreBeliefs } from "@/components/devnet/sections/CoreBeliefs";
import { DevNetHero } from "@/components/devnet/sections/DevNetHero";
import { EventsHome } from "@/components/devnet/sections/EventsHome";
import { FaqSection } from "@/components/devnet/sections/FaqSection";
import { FeaturePipeline } from "@/components/devnet/sections/FeaturePipeline";
import { FeaturedProjectsTeaser } from "@/components/devnet/sections/FeaturedProjectsTeaser";
import { FinalCta } from "@/components/devnet/sections/FinalCta";
import { ForBuildersHome } from "@/components/devnet/sections/ForBuildersHome";
import { ForChaptersHome } from "@/components/devnet/sections/ForChaptersHome";
import { NetworkMapSection } from "@/components/devnet/sections/NetworkMap";
import { ParticipationPaths } from "@/components/devnet/sections/ParticipationPaths";
import { TwoSides } from "@/components/devnet/sections/TwoSides";
import { WhatIsDevNet } from "@/components/devnet/sections/WhatIsDevNet";

export default function HomePage() {
  return (
    <>
      <DevNetHero />
      <WhatIsDevNet />
      <TwoSides />
      <AnyoneCanBuild />
      <CoreBeliefs />
      <ForBuildersHome />
      <ForChaptersHome />
      <FeaturedProjectsTeaser />
      <FeaturePipeline />
      <NetworkMapSection />
      <EventsHome />
      <ParticipationPaths />
      <FaqSection />
      <FinalCta />
    </>
  );
}
