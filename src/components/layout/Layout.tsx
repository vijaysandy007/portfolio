import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import SkillSection from "../SkillSection/SkillSection";
import ProjectSection from "../projectSection/ProjectSection";
import Contact from "../contactSection/Contact";
import { motion } from "framer-motion";
import "./Layout.scss";
import { useState, useEffect, useRef } from "react";
const Layout = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const layoutRef = useRef<HTMLDivElement | null>(null); // Reference to layout-container
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust based on your mobile breakpoint
        };

        handleResize(); // Check on initial render
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (layoutRef.current && layoutRef.current.scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const layoutElement = layoutRef.current;
        if (layoutElement) {
            layoutElement.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (layoutElement) {
                layoutElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, [])

    return (
        <>
            <div className="layout-container" ref={layoutRef}>
                <nav
                    className={`position-sticky top-0 transition-all ${isScrolled ? "bg-white text-white shadow" : "bg-transparent"
                        }`}
                    style={{ zIndex: 1000 }}
                >
                    <Header />
                </nav>
                <main>
                    {!isMobile ? (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <section className="hero-section">
                                <HeroSection />
                            </section>
                        </motion.div>
                    ) : (
                        <section className="hero-section">
                            <HeroSection />
                        </section>
                    )}

                    {/* SKILL SECTION */}
                    {!isMobile ? (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <section id="skills" className="skills-section block">
                                <SkillSection />
                            </section>
                        </motion.div>
                    ) : (
                        <section id="skills" className="skills-section block">
                            <SkillSection />
                        </section>
                    )}

                    {/* PROJECT SECTION */}
                    {!isMobile ? (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <section id="projects" className="projects-section">
                                <ProjectSection />
                            </section>
                        </motion.div>
                    ) : (
                        <section id="projects" className="projects-section">
                            <ProjectSection />
                        </section>
                    )}

                    {/* CONTACT SECTION */}
                    {!isMobile ? (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <section id="contact" className="contact-section">
                                <Contact />
                            </section>
                        </motion.div>
                    ) : (
                        <section id="contact" className="contact-section">
                            <Contact />
                        </section>
                    )}
                </main>
            </div>

        </>

    )
}

export default Layout;
