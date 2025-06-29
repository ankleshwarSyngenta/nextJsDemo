"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./navigation.module.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            Ankleshwar<span className={styles.logoDot}>.</span>
          </div>
          
          <div className={styles.desktopNav}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#skills" className={styles.navLink}>Skills</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#experience" className={styles.navLink}>Experience</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </div>
          
          <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className={styles.mobileMenu}>
            <a href="#home" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#experience" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#contact" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
