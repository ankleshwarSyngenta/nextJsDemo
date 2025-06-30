"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    particlesJS: (id: string, config: object) => void;
  }
}

export default function ParticlesBackground() {
  const particlesLoaded = useRef(false);

  useEffect(() => {
    if (particlesLoaded.current) return;

    const loadParticles = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.onload = () => {
        if (window.particlesJS) {
          window.particlesJS('particles-js', {
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 1200
                }
              },
              color: {
                value: ["#00e1ff", "#ff6b35", "#00ff88"]
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.8,
                  opacity_min: 0.2,
                  sync: false
                }
              },
              size: {
                value: 2.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1.5,
                  size_min: 0.8,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 120,
                color: "#00e1ff",
                opacity: 0.3,
                width: 1
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 100,
                  line_linked: {
                    opacity: 0.8
                  }
                },
                bubble: {
                  distance: 200,
                  size: 20,
                  duration: 1.5,
                  opacity: 6,
                  speed: 2
                },
                repulse: {
                  distance: 100,
                  duration: 0.3
                },
                push: {
                  particles_nb: 2
                },
                remove: {
                  particles_nb: 1
                }
              }
            },
            retina_detect: true
          });
          particlesLoaded.current = true;
        }
      };
      document.head.appendChild(script);
    };

    loadParticles();
  }, []);

  return <div id="particles-js" className="fixed inset-0 z-0 opacity-60" />;
}
