import { useEffect, useState } from "react";
import { UserCheck, GraduationCap, Award } from "lucide-react";
import { SiFlutter } from "react-icons/si";

export default function AboutSection() {
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    const animateCounter = (target: number, setter: (value: number) => void) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(10, setYearsCount);
            animateCounter(35, setProjectsCount);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const target = document.getElementById('about');
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-cyan-accent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate mobile developer with extensive experience in creating scalable, 
            high-performance applications that serve millions of users worldwide.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="animate-slideInLeft">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-cyan-accent flex items-center">
                <UserCheck className="mr-3" />
                Professional Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Currently serving as a <strong className="text-white">Senior Software Engineer at EPAM Systems</strong>, 
                I bring over 10 years of expertise in mobile application development. My journey spans 
                across various domains including fintech, healthcare, loyalty programs, and enterprise solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I specialize in <strong className="text-cyan-accent">React Native, iOS (Swift/Objective-C), and Flutter</strong> 
                development, with extensive experience in project architecture, team leadership, and agile methodologies.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 glass-card rounded-lg">
                  <div className="text-3xl font-bold text-cyan-accent">{yearsCount}+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-4 glass-card rounded-lg">
                  <div className="text-3xl font-bold text-neon-orange">{projectsCount}+</div>
                  <div className="text-sm text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Education & Certifications */}
          <div className="animate-slideInRight">
            <div className="glass-card p-8 rounded-2xl mb-6">
              <h3 className="text-2xl font-bold mb-6 text-neon-orange flex items-center">
                <GraduationCap className="mr-3" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-accent pl-6">
                  <h4 className="text-lg font-semibold">M.C.A (Computer Science)</h4>
                  <p className="text-gray-300">University of Jhansi • 2015</p>
                </div>
                <div className="border-l-4 border-neon-orange pl-6">
                  <h4 className="text-lg font-semibold">B.Sc. (Science)</h4>
                  <p className="text-gray-300">University of Kanpur • 2012</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-mint-green flex items-center">
                <Award className="mr-3" />
                Certifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <SiFlutter className="text-mint-green text-2xl" />
                  <div>
                    <h4 className="font-semibold">Flutter Certification</h4>
                    <p className="text-gray-300 text-sm">Udemy</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="text-cyan-accent text-2xl" />
                  <div>
                    <h4 className="font-semibold">AGILE Certification</h4>
                    <p className="text-gray-300 text-sm">Udemy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
