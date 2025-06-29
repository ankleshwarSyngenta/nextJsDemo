"use client";
import { useState } from "react";
import { NotebookTabs, Mail, Phone, MapPin, Share2, Send, Linkedin, Github, Twitter, Youtube } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate form submission
    alert("Message Sent! Thank you for your message! I will get back to you soon.");

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-black text-xl" />,
      title: "Email",
      value: "ankleshwar94march@gmail.com",
      bgColor: "bg-cyan-accent"
    },
    {
      icon: <Phone className="text-black text-xl" />,
      title: "Phone", 
      value: "(+91) 7503732194",
      bgColor: "bg-neon-orange"
    },
    {
      icon: <MapPin className="text-black text-xl" />,
      title: "Location",
      value: "Pune, India",
      bgColor: "bg-mint-green"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="text-white text-xl" />,
      bgColor: "bg-blue-600",
      href: "https://linkedin.com/in/ankleshwar-dwivedi"
    },
    {
      icon: <Github className="text-white text-xl" />,
      bgColor: "bg-gray-800",
      href: "https://github.com/ankleshwar"
    },
    {
      icon: <Twitter className="text-white text-xl" />,
      bgColor: "bg-blue-400",
      href: "https://twitter.com/ankleshwar"
    },
    {
      icon: <Youtube className="text-white text-xl" />,
      bgColor: "bg-red-600",
      href: "https://youtube.com/ankleshwar"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s <span className="text-cyan-accent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your next mobile project or explore collaboration opportunities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-slideInLeft">
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-8 text-cyan-accent flex items-center">
                <NotebookTabs className="mr-3" />
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-neon-orange flex items-center">
                <Share2 className="mr-3" />
                Social Media
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${social.bgColor} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slideInRight">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8 text-mint-green flex items-center">
                <Send className="mr-3" />
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name *</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-charcoal border border-glass-border rounded-lg px-4 py-3 text-white focus:border-cyan-accent focus:outline-none transition-colors duration-300" 
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email *</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-charcoal border border-glass-border rounded-lg px-4 py-3 text-white focus:border-cyan-accent focus:outline-none transition-colors duration-300" 
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-charcoal border border-glass-border rounded-lg px-4 py-3 text-white focus:border-cyan-accent focus:outline-none transition-colors duration-300" 
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full bg-charcoal border border-glass-border rounded-lg px-4 py-3 text-white focus:border-cyan-accent focus:outline-none transition-colors duration-300 resize-none" 
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-accent to-mint-green text-black py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 animate-pulse-glow flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
