import { Nav } from '@/components/Nav';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EngineeringLabSection } from '@/components/EngineeringLabSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <HeroSection />
        <ProjectsSection />
        <EngineeringLabSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
