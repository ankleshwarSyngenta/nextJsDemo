"use client";
import { useEffect, useState } from "react";
import { ChevronDown, Code, Mail } from "lucide-react";
import { FaReact, FaSwift } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import Image from "next/image";
import "./hero.css";

export default function HeroSection() {
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimationReady, setIsAnimationReady] = useState(false);
  const fullText = "Senior Software Engineer";
  const typingSpeed = isDeleting ? 50 : 100;

  useEffect(() => {
    // Delay animation start for better performance
    const timer = setTimeout(() => {
      setIsAnimationReady(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAnimationReady) return;

    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      } else if (isDeleting && currentIndex > 0) {
        setTypewriterText(fullText.slice(0, currentIndex - 1));
        setCurrentIndex((prev) => prev - 1);
      } else if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [
    currentIndex,
    isDeleting,
    fullText.length,
    typingSpeed,
    isAnimationReady,
  ]);

  return (
    <section
      id="home"
      className="hero-section bg-gradient-to-br from-deep-black via-gray-900 to-deep-black min-h-screen"
    >
      <div className="container mx-auto px-6 py-12 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[90vh] gap-8">
          {/* Left Side - Hero Content (50%) with Purple/Blue Gradient Background */}
          <div className="flex-1 lg:w-1/2 text-center lg:text-left animate-slideInLeft order-2 lg:order-1 hero-left-section">
            {/* Full Name - Fixed styling */}
            <h1 className="hero-title mb-6 animate-delay-100">
              <span className="animate-glow">Ankleshwar Dwivedi</span>
            </h1>

            {/* Designation with Animation */}
            <div className="text-2xl lg:text-3xl mb-6 h-16 font-mono animate-delay-200">
              <span className="text-neon-orange typewriter-text">
                {typewriterText}
                <span className="animate-pulse text-cyan-accent">|</span>
              </span>
            </div>

            {/* Experience Explanation */}
            <p className="hero-subtitle mb-8 animate-delay-300">
              With 10+ years of extensive experience in mobile application
              development, I specialize in creating innovative solutions using
              React Native, iOS (Swift), and Flutter. Passionate about
              delivering seamless user experiences and cutting-edge technology
              implementations that drive business success.
            </p>

            {/* Call to Action Buttons - Same Row */}
            <div className="flex flex-row gap-4 justify-center lg:justify-start animate-delay-500">
              <a
                href="#projects"
                className="hero-cta flex-1 max-w-[200px] animate-pulse-glow hover-lift will-change-transform text-center"
              >
                <Code className="mr-2" size={20} />
                View My Work
              </a>
              <a
                href="#contact"
                className="hero-cta-secondary flex-1 max-w-[200px] hover-glow will-change-transform text-center"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image & Tech Icons (50%) with Teal/Green Gradient Background */}
          <div className="flex-1 lg:w-1/2 flex justify-center lg:justify-end animate-slideInRight order-1 lg:order-2 hero-right-section">
            <div className="profile-container relative will-change-transform">
              <div className="profile-image animate-float gpu-accelerated">
                <Image
                  src="/assets/dp.jpg"
                  alt="Ankleshwar Dwivedi - Professional Profile"
                  width={380}
                  height={380}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>

              {/* Floating Tech Icons with Same React Animation */}
              <div className="tech-icon tech-icon-react animate-rotate-float animate-delay-700 will-change-transform">
                <FaReact className="text-cyan-accent text-2xl" />
              </div>
              <div className="tech-icon tech-icon-swift animate-rotate-float animate-delay-1000 will-change-transform">
                <FaSwift className="text-neon-orange text-2xl" />
              </div>
              <div className="tech-icon tech-icon-flutter animate-rotate-float animate-delay-500 will-change-transform">
                <SiFlutter className="text-blue-400 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator animate-smooth-bounce will-change-transform">
        <ChevronDown className="text-cyan-accent text-2xl" />
      </div>
    </section>
  );
}
