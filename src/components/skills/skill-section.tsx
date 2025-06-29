import { Smartphone, Server, Settings } from "lucide-react";
import { FaFlag, FaGoogle, FaShippingFast, FaChartLine, FaAtlassian, FaMap, FaShieldAlt, FaCogs } from "react-icons/fa";
import { SiFirebase, SiConfluence } from "react-icons/si";

interface SkillBarProps {
  name: string;
  percentage: number;
  color: 'cyan' | 'orange' | 'green';
}

function SkillBar({ name, percentage, color }: SkillBarProps) {
  const colorClasses = {
    cyan: 'from-cyan-accent to-blue-500',
    orange: 'from-neon-orange to-red-500',
    green: 'from-mint-green to-green-500'
  };

  const textColorClasses = {
    cyan: 'text-cyan-accent',
    orange: 'text-neon-orange',
    green: 'text-mint-green'
  };

  return (
    <div className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{name}</span>
        <span className={textColorClasses[color]}>{percentage}%</span>
      </div>
      <div className="skill-bar bg-charcoal rounded-full h-3">
        <div 
          className={`bg-gradient-to-r ${colorClasses[color]} h-3 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface ToolCardProps {
  icon: React.ReactNode;
  name: string;
  color: 'cyan' | 'orange' | 'green';
}

function ToolCard({ icon, name, color }: ToolCardProps) {
  const hoverClasses = {
    cyan: 'group-hover:bg-cyan-accent',
    orange: 'group-hover:bg-neon-orange',
    green: 'group-hover:bg-mint-green'
  };

  return (
    <div className="text-center group hover:scale-110 transition-transform duration-300">
      <div className={`glass-card p-4 rounded-lg mb-2 ${hoverClasses[color]} group-hover:text-black transition-all duration-300`}>
        <div className="text-2xl">{icon}</div>
      </div>
      <span className="text-sm">{name}</span>
    </div>
  );
}

export default function SkillsSection() {
    const frontendSkills = [
        { name: "React Native", percentage: 90, color: 'cyan' as const },
        { name: "TypeScript", percentage: 85, color: 'cyan' as const },
        { name: "React / Next.js", percentage: 85, color: 'cyan' as const },
        { name: "Swift", percentage: 80, color: 'orange' as const },
        { name: "Flutter", percentage: 75, color: 'green' as const },
        { name: "Flutter / Dart", percentage: 80, color: 'green' as const }
      ];

  const backendSkills = [
    { name: "CI/CD", percentage: 95, color: 'green' as const },
    { name: "GraphQL", percentage: 90, color: 'cyan' as const },
    { name: "Python", percentage: 80, color: 'orange' as const },
    { name: "Realm Database", percentage: 80, color: 'green' as const }
  ];

  const tools = [
    { icon: <FaFlag />, name: "LaunchDarkly", color: 'cyan' as const },
    { icon: <FaGoogle />, name: "Firebase", color: 'orange' as const },
    { icon: <SiFirebase />, name: "Firebase", color: 'orange' as const },
    { icon: <FaShippingFast />, name: "Fastlane", color: 'green' as const },
    { icon: <FaChartLine />, name: "CleverTap", color: 'cyan' as const },
    { icon: <FaAtlassian />, name: "JIRA", color: 'orange' as const },
    { icon: <FaMap />, name: "Google Maps", color: 'green' as const },
    { icon: <SiConfluence />, name: "Confluence", color: 'orange' as const },
    { icon: <FaMap />, name: "Google Maps", color: 'green' as const },
    { icon: <FaShieldAlt />, name: "SSL Pinning", color: 'cyan' as const },
    { icon: <FaCogs />, name: "App Performance", color: 'orange' as const },
    { icon: <FaAtlassian />, name: "JIRA", color: 'green' as const }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-cyan-accent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive skill set spanning mobile development, backend technologies, and modern DevOps practices
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Frontend/Mobile Skills */}
          <div className="glass-card p-8 rounded-2xl card-3d animate-slideInLeft">
            <h3 className="text-2xl font-bold mb-8 text-cyan-accent flex items-center">
              <Smartphone className="mr-3" />
              Frontend & Mobile
            </h3>
            
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>
          
          {/* Backend & DevOps Skills */}
          <div className="glass-card p-8 rounded-2xl card-3d animate-slideInRight">
            <h3 className="text-2xl font-bold mb-8 text-neon-orange flex items-center">
              <Server className="mr-3" />
              Backend & DevOps
            </h3>
            
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Tools & Technologies */}
        <div className="glass-card p-8 rounded-2xl animate-fadeInUp">
          <h3 className="text-2xl font-bold mb-8 text-center text-mint-green flex items-center justify-center">
            <Settings className="mr-3" />
            Tools & Technologies
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
