import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import SkillSection from "../SkillSection/SkillSection";
import ProjectSection from "../projectSection/ProjectSection";
import Contact from "../contactSection/Contact";
import "./Layout.scss";
import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
const Layout = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const layoutRef = useRef<HTMLDivElement | null>(null);


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
                    className={`position-sticky top-0 transition-all ${isScrolled ? "bg-dark" : "bg-transparent"
                        }`}
                    style={{ zIndex: 1000 }}
                >
                    <Header />
                </nav>
                <main>

                    <section className="hero-section">
                        <HeroSection />
                    </section>


                    <section id="skills" className="skills-section block">
                        <SkillSection />
                    </section>


                    <section id="projects" className="projects-section">
                        <ProjectSection />
                    </section>


                    <section id="contact" className="contact-section">
                        <Contact />
                    </section>
                </main>
            </div>

        </>

    )
}

export default Layout;
