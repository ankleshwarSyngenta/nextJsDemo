import { ExternalLink, Github, Gift, Building, Newspaper, Heart } from "lucide-react";
import Image from "next/image";
import "./projects.css";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  icon: React.ReactNode;
  titleColor: string;
  demoLink?: string;
  codeLink?: string;
}

function ProjectCard({ title, description, image, technologies, icon, titleColor, demoLink, codeLink }: ProjectCardProps) {
  return (
    <div className="project-card glass-card hover-lift animate-fadeInUp">
      <div className="project-image-container">
        <Image 
          src={image} 
          alt={`${title} Interface`} 
          width={400} 
          height={192} 
          className="project-image" 
        />
        <div className="project-overlay">
          <div className="project-icon">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className={`project-title ${titleColor}`}>
          {title}
        </h3>
        <p className="project-description">
          {description}
        </p>
        
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-links">
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link demo-link"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
          {codeLink && (
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link code-link"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

interface SmallProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  titleColor: string;
}

function SmallProjectCard({ title, description, image, technologies, titleColor }: SmallProjectCardProps) {
  return (
    <div className="glass-card p-6 rounded-xl group hover:scale-105 transition-transform duration-300">
      <div className="mb-4">
        <Image src={image} alt={`${title} App`} width={300} height={128} className="w-full h-32 object-cover rounded-lg" />
      </div>
      <h4 className={`text-lg font-bold mb-2 ${titleColor}`}>{title}</h4>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex space-x-2">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className={`px-2 py-1 rounded text-xs ${
              index % 3 === 0 ? 'bg-neon-orange text-black' :
              index % 3 === 1 ? 'bg-mint-green text-black' :
              'bg-cyan-accent text-black'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const featuredProjects = [
    {
      title: "Aura Loyalty Platform",
      description: "B2C loyalty application enabling users to collect points and redeem rewards. Features QR code scanning, tier-based benefits, and personalized offers across multiple merchants.",
      image: "/assets/Aura.png",
      technologies: ["React Native", "Redux", "QR Integration", "Push Notifications"],
      icon: <Gift className="mr-3" />,
      titleColor: "text-cyan-accent",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Cariparma Banking",
      description: "Comprehensive banking application for Credit Agricola Italia customers. Provides secure account management, transfers, bill payments, and investment tracking.",
      image: "/assets/caripharma.png",
      technologies: ["React Native", "Biometric Auth", "SSL Pinning", "Real-time Data"],
      icon: <Building className="mr-3" />,
      titleColor: "text-neon-orange",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Invisibly News Platform",
      description: "Ad-free news application providing premium content access through point-earning surveys. Features curated articles from premier publishers and personalized content discovery.",
      image: "/assets/Invisibly .png",
      technologies: ["React Native", "Content API", "Survey System", "Machine Learning"],
      icon: <Newspaper className="mr-3" />,
      titleColor: "text-mint-green",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Fresenius Medical Care",
      description: "Healthcare tablet application for chronic kidney failure patients. Provides medical tracking, treatment schedules, and procurement management features.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Healthcare", "Tablet UI", "HIPAA Compliant"],
      icon: <Heart className="mr-3" />,
      titleColor: "text-cyan-accent",
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const additionalProjects = [
    {
      title: "Hascombe Stud",
      description: "iOS app for horse breeding management with comprehensive data tracking.",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      technologies: ["iOS", "Swift"],
      titleColor: "text-neon-orange"
    },
    {
      title: "Enterprise Analytics",
      description: "Cross-platform analytics dashboard for enterprise data visualization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      technologies: ["Flutter", "Charts"],
      titleColor: "text-cyan-accent"
    },
    {
      title: "E-commerce Platform",
      description: "Multi-vendor marketplace with advanced filtering and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      technologies: ["React Native", "Payments"],
      titleColor: "text-mint-green"
    },
    {
      title: "FinTech Trading App",
      description: "Real-time stock trading platform with advanced charting and portfolio management.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      technologies: ["React Native", "WebSocket"],
      titleColor: "text-cyan-accent"
    },
    {
      title: "HealthCare Portal",
      description: "Telemedicine app connecting patients with healthcare providers globally.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      technologies: ["Flutter", "WebRTC"],
      titleColor: "text-neon-orange"
    },
    {
      title: "Supply Chain Manager",
      description: "IoT-enabled logistics platform for real-time shipment tracking and optimization.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      technologies: ["React Native", "IoT"],
      titleColor: "text-mint-green"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-cyan-accent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Showcasing 10+ innovative mobile applications that have served millions of users across various industries
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        {/* Additional Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeInUp">
          {additionalProjects.map((project, index) => (
            <SmallProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
