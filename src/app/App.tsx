import { Navigation } from "@/app/components/Navigation";
import { HeroSection } from "@/app/components/HeroSection";
import { SkillsSection } from "@/app/components/SkillsSection";
import { ExperienceSection } from "@/app/components/ExperienceSection";
import { EducationSection } from "@/app/components/EducationSection";
import { CertificationsSection } from "@/app/components/CertificationsSection";
import { ProjectsSection } from "@/app/components/ProjectsSection";
import { ContactSection } from "@/app/components/ContactSection";
import { Footer } from "@/app/components/Footer";
import { CustomCursor } from "@/app/components/CustomCursor";
import { LoadingScreen } from "@/app/components/LoadingScreen";
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0e17]">
      <CustomCursor />
      <Navigation />
      
      <main className="overflow-x-hidden">
        <div id="home">
          <HeroSection />
        </div>
        
        <div id="skills">
          <SkillsSection />
        </div>
        
        <div id="experience">
          <ExperienceSection />
        </div>
        
        <div id="education">
          <EducationSection />
        </div>
        
        <div id="certifications">
          <CertificationsSection />
        </div>
        
        <div id="projects">
          <ProjectsSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}