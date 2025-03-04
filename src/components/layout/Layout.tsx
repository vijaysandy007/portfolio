import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import SkillSection from "../SkillSection/SkillSection";
import ProjectSection from "../projectSection/ProjectSection";
import Contact from "../contactSection/Contact";
import { motion } from "framer-motion";
import "./Layout.scss";
const Layout = () => {
    return (
        <>
            <nav>
                <Header />
            </nav>
            <main>

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

                {/* SKILL SECTION */}
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
                {/* SKILL SECTION END*/}


                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <section id="projects" className="projects-section">
                        <ProjectSection  />
                    </section>
                </motion.div>


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
            </main>
        </>

    )
}

export default Layout;
