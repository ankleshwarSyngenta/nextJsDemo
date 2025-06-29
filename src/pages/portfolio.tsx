"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Navigation from "../navigation/navigation";
import HeroSection from "../components/hero/hero-section";
import styles from "./portfolio.module.css";

// Lazy load components for better performance
const AboutSection = dynamic(() => import("../components/about/about-section"), {
  loading: () => <div className={styles.loadingCard} />,
});
const SkillsSection = dynamic(() => import("../components/skills/skill-section"), {
  loading: () => <div className={styles.loadingCard} />,
});
const ProjectsSection = dynamic(() => import("../components/project/project-section"), {
  loading: () => <div className={styles.loadingCard} />,
});
const ExperienceSection = dynamic(() => import("../components/experience/experience-section"), {
  loading: () => <div className={styles.loadingCard} />,
});
const ContactSection = dynamic(() => import("../components/contact/contact-section"), {
  loading: () => <div className={styles.loadingCard} />,
});
const ParticlesBackground = dynamic(() => import("../components/particles/particles-background"), {
  ssr: false,
  loading: () => null,
});

export default function Portfolio() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes("#")) {
        e.preventDefault();
        const id = target.href.split("#")[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation', styles.keyboardNavigation);
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation', styles.keyboardNavigation);
    };

    document.addEventListener("click", handleAnchorClick);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);
    
    // Force dark background - using CSS custom properties
    document.documentElement.style.setProperty('--background', '#0a0a0a');
    document.documentElement.style.setProperty('--foreground', '#ededed');
    document.documentElement.classList.add('dark', styles.darkTheme);
    
    // Preload critical resources
    const preloadLinks = document.querySelectorAll('link[rel="preload"]');
    preloadLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const img = new Image();
        img.src = href;
      }
    });
    
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <main 
      className={styles.mainContainer}
    >
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      
      {/* Background Effects */}
      <ParticlesBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content Sections */}
      <div id="main-content" className={styles.mainContent}>
        <section id="home" className={styles.sectionSpacing}>
          <HeroSection />
        </section>
        
        <section id="about" className={`${styles.sectionSpacing} ${styles.sectionContent}`}>
          <AboutSection />
        </section>
        
        <section id="skills" className={`${styles.sectionSpacing} ${styles.sectionContent}`}>
          <SkillsSection />
        </section>
        
        <section id="projects" className={`${styles.sectionSpacing} ${styles.sectionContent}`}>
          <ProjectsSection />
        </section>
        
        <section id="experience" className={`${styles.sectionSpacing} ${styles.sectionContent}`}>
          <ExperienceSection />
        </section>
        
        <section id="contact" className={`${styles.sectionSpacing} ${styles.sectionContent}`}>
          <ContactSection />
        </section>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            {/* Logo/Brand */}
            <div className={styles.footerBrand}>
              <h2 className={styles.footerTitle}>
                Ankleshwar<span className={styles.footerTitleDot}>.</span>
              </h2>
              <p className={styles.footerDescription}>
                Senior Software Engineer specializing in mobile application
                development with a passion for creating innovative solutions
              </p>
            </div>
            
            {/* Navigation Links */}
            <nav className={styles.footerNav} aria-label="Footer navigation">
              <a
                href="#home"
                className={styles.footerNavLink}
                aria-label="Go to Home section"
              >
                Home
              </a>
              <a
                href="#about"
                className={styles.footerNavLink}
                aria-label="Go to About section"
              >
                About
              </a>
              <a
                href="#skills"
                className={styles.footerNavLink}
                aria-label="Go to Skills section"
              >
                Skills
              </a>
              <a
                href="#projects"
                className={styles.footerNavLink}
                aria-label="Go to Projects section"
              >
                Projects
              </a>
              <a
                href="#experience"
                className={styles.footerNavLink}
                aria-label="Go to Experience section"
              >
                Experience
              </a>
              <a
                href="#contact"
                className={styles.footerNavLink}
                aria-label="Go to Contact section"
              >
                Contact
              </a>
            </nav>
            
            {/* Copyright */}
            <div className={styles.footerCopyright}>
              <p className={styles.footerCopyrightText}>
                © {new Date().getFullYear()} Ankleshwar Dwivedi. All rights reserved. | Built with
                passion for mobile innovation
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
