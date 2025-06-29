"use client";
import { useEffect, useState } from "react";
import { ChevronDown, Code, Mail } from "lucide-react";
import { FaReact, FaSwift } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import Image from "next/image";

export default function HeroSection() {
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Senior Software Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        index = 0;
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div className="text-center lg:text-left animate-slideInLeft">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Hi, I&apos;m <span className="text-cyan-accent animate-glow">Ankleshwar</span>
            </h1>
            
            <div className="text-2xl lg:text-3xl mb-6 h-16">
              <span className="text-neon-orange typewriter font-mono">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              10+ years of experience crafting exceptional mobile applications. 
              Specializing in React Native, iOS, and Flutter development with a passion for 
              innovative solutions and seamless user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="glass-card px-8 py-4 rounded-lg hover:bg-cyan-accent hover:text-black transition-all duration-300 transform hover:scale-105 animate-pulse-glow flex items-center justify-center"
              >
                <Code className="mr-2" size={20} />
                View My Work
              </a>
              <a 
                href="#contact" 
                className="border border-cyan-accent px-8 py-4 rounded-lg hover:bg-cyan-accent hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center animate-slideInRight">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-accent animate-float glass-card">
                <Image 
                  src="/assets/dp.jpg" 
                  alt="Ankleshwar Dwivedi - Professional Profile" 
                  width={320}
                  height={320}
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-spin-slow">
                <FaReact className="text-cyan-accent text-2xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-spin-slow">
                <FaSwift className="text-neon-orange text-2xl" />
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-float">
                <SiFlutter className="text-mint-green text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-accent text-2xl" />
      </div>
    </section>
  );
}
