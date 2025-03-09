import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import SkillSection from "../SkillSection/SkillSection";
import ProjectSection from "../projectSection/ProjectSection";
import Contact from "../contactSection/Contact";
import "./Layout.scss";
// import { useState, useEffect, useRef } from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LayoutAnimation from "../../assets/files/LayoutAnimation";  
const {headerAnimation,hearoAnimation,skillSectionAnimation,skillProjectAnimation,contactAnimation} =new LayoutAnimation()
const Layout = () => {
    // const [isScrolled, setIsScrolled] = useState(false);
    const layoutRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (layoutRef.current && layoutRef.current.scrollTop > 0) {
    //             setIsScrolled(true);
    //         } else {
    //             setIsScrolled(false);
    //         }
    //     };

    //     const layoutElement = layoutRef.current;
    //     if (layoutElement) {
    //         layoutElement.addEventListener("scroll", handleScroll);
    //     }

    //     return () => {
    //         if (layoutElement) {
    //             layoutElement.removeEventListener("scroll", handleScroll);
    //         }
    //     };
    // }, [])

    useEffect(() => {

        const mm = gsap.matchMedia();
        mm.add("(min-width: 769px)", () => {
        hearoAnimation();
        headerAnimation();
        skillSectionAnimation();
        skillProjectAnimation();
        contactAnimation();

        });
        return () => mm.revert();

    }, [])



    return (
        <>
            <div className="layout-container" ref={layoutRef}>
                <nav
                    className="bg-dark position-sticky top-0 w-100"
                >
                    <Header />
                </nav>
                <main>

                    <section className="hero-section">
                        <HeroSection />
                    </section>


                    <section id="skills" className="skills-section" >
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
