import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import SkillSection from "../SkillSection/SkillSection";
import ProjectSection from "../projectSection/ProjectSection";
import Contact from "../contactSection/Contact";
import "./Layout.scss";
const Layout = () => {
    return (
        <>
            <nav>
                <Header />
            </nav>
            <main>
                <section className="hero-section">
                    <HeroSection/>
                </section>
                <section id="skills" className="skills-section">
                    <SkillSection/>
                </section>
                <section id="projects" className="projects-section">
                    <ProjectSection/>
                </section>
                <section id="contact" className="contact-section">
                    <Contact/>
                </section>
            </main>
        </>

    )
}

export default Layout;
