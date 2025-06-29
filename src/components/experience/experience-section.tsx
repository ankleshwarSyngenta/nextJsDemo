import { Star, Briefcase, Apple, Rocket } from "lucide-react";

interface TimelineItemProps {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
  icon: React.ReactNode;
  iconColor: string;
  side: 'left' | 'right';
}

function TimelineItem({ position, company, period, responsibilities, icon, iconColor, side }: TimelineItemProps) {
  const animationClass = side === 'left' ? 'animate-slideInLeft' : 'animate-slideInRight';
  
  return (
    <div className={`relative flex items-start mb-12 ${animationClass}`}>
      <div className={`absolute left-4 w-8 h-8 ${iconColor} rounded-full border-4 border-deep-black flex items-center justify-center`}>
        {icon}
      </div>
      <div className="ml-20 glass-card p-8 rounded-2xl flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className={`text-2xl font-bold ${iconColor.replace('bg-', 'text-')}`}>{position}</h3>
            <h4 className="text-xl text-white mb-2">{company}</h4>
            <p className="text-gray-300">{period}</p>
          </div>
          <div className={`${iconColor.replace('bg-', 'text-')} text-3xl`}>
            {icon}
          </div>
        </div>
        <ul className="text-gray-300 space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start">
              <span className={`${iconColor.replace('bg-', 'text-')} mr-2 mt-1`}>✓</span>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const experiences = [
    {
      position: "Senior Software Engineer",
      company: "EPAM Systems",
      period: "January 2023 - Present",
      responsibilities: [
        "Leading React Native development for enterprise clients",
        "Architecting scalable mobile solutions",
        "Mentoring junior developers and conducting technical reviews",
        "Implementing CI/CD pipelines and DevOps best practices"
      ],
      icon: <Star className="text-black text-sm" />,
      iconColor: "bg-cyan-accent",
      side: 'left' as const
    },
    {
      position: "Senior Consultant",
      company: "Capgemini Technology Services",
      period: "October 2019 - December 2022",
      responsibilities: [
        "Technical requirement analysis and project estimation",
        "Sprint planning and agile methodology implementation",
        "Client communication and delivery management",
        "Team leadership and performance optimization"
      ],
      icon: <Briefcase className="text-black text-sm" />,
      iconColor: "bg-neon-orange",
      side: 'right' as const
    },
    {
      position: "iOS Developer",
      company: "Opiant Tech Solutions",
      period: "November 2016 - October 2019",
      responsibilities: [
        "Native iOS development using Swift and Objective-C",
        "UI/UX implementation and custom component design",
        "API integration and performance optimization",
        "App Store deployment and maintenance"
      ],
      icon: <Apple className="text-black text-sm" />,
      iconColor: "bg-mint-green",
      side: 'left' as const
    },
    {
      position: "iOS Developer",
      company: "High Fly Pvt. Ltd.",
      period: "July 2015 - November 2016",
      responsibilities: [
        "Started career in iOS development",
        "Learned mobile development fundamentals",
        "Developed first commercial applications",
        "Foundation in software engineering practices"
      ],
      icon: <Rocket className="text-white text-sm" />,
      iconColor: "bg-purple-500",
      side: 'right' as const
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="text-cyan-accent">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A decade of progressive growth across leading technology organizations
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-accent via-neon-orange to-mint-green"></div>
            
            {experiences.map((experience, index) => (
              <TimelineItem key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
