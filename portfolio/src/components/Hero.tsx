import React from "react";

import BannerSection from "./Banner";
import ContentParagraph from "./ContentParagraph";
import ContentSection from "./ContentSection";
import DiagonalPattern from "./DiagonalPattern";
import ProfileHeader from "./ProfileHeader";
import Reveal from "./Reveal";
import SectionBorder from "./SectionBorder";
import Navbar from "./Navbar";

const Hero: React.FC = () => {
  return (
    <div
      className="min-h-screen transition-colors duration-300 relative"
      style={{ fontFamily: "var(--font-hk-grotesk)" }}
    >
      {<Navbar />}
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />

        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          {/* Banner */}
          <Reveal delay={0.1}>
            <BannerSection
              bannerImage="/banner.jpg"
              quote="You make your own luck if you stay at it long enough."
            />
          </Reveal>

          {/* Profile Header */}
          <Reveal delay={0.2}>
            <ProfileHeader
              name="Kumar Nirupam"
              age="22"
              title="engineer • developer • builder"
              profileImage="/profile.jpg"
              socialLinks={{
                twitter: "https://x.com/code_kartik",
                github: "https://github.com/KartikLabhshetwar",
                linkedin: "https://www.linkedin.com/in/kartikcode/",
                resume:
                  "https://drive.google.com/file/d/1U8450r8Qsf9Xo1IcQhMdSrdzFY2__JXP/view",
              }}
            />
          </Reveal>

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role */}
              <Reveal delay={0.1}>
                <ContentSection
                  subtitle="AI Engineer | Full-stack Developer"
                  className="mt-6"
                >
                  <div />
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* About */}
              <Reveal delay={0.1}>
                <ContentSection className="pb-6 sm:pb-8 pt-4 sm:pt-6 px-2 sm:px-0">
                  <ContentParagraph className="mb-2 text-base sm:text-lg">
                    <span className="font-medium dark:text-white text-black">
                      I build from zero.
                    </span>{" "}
                    Whether it&apos;s frontend, backend, full-stack applications,
                    or AI-powered experiences, I work across the entire
                    development lifecycle. From UI/UX to deployment to user
                    feedback, I care less about technology debates and more about
                    delivering results that people love using.
                  </ContentParagraph>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-4" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
