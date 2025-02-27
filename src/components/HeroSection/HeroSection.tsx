import HeadShotImg from "../../assets/images/hero-headshot.webp";
import "./HeroSection.scss";
const HeroSection = () => {
  return (
    <div className="hero-section-conatiner">
      <div className="text">
                <h2>Hi, I'm Vijay 👋</h2>
                <p>
                    I'm a <b> Full Stack Web Developer </b>with <b>3.5 years </b> of experience in building scalable and
                    efficient web
                    applications. I specialize in frontend and backend development, working with modern technologies to
                    create seamless digital experiences.

                    Passionate about coding and problem-solving, <b>I have expertise in JavaScript, TypeScript, Node.js,
                        Angular, React, MongoDB,</b> and more. I enjoy architecting robust systems, optimizing
                    performance, and
                    ensuring user-friendly interfaces.

                    Whether it's developing RESTful APIs, integrating third-party services, or enhancing UI/UX, I strive
                    to deliver high-quality solutions that meet business needs. Always eager to learn and adapt to new
                    challenges, I thrive in dynamic environments that push my technical skills to the next level.

                    Let’s build something amazing together! 🚀
                </p>
                <div className="links">
                    <div>
                        <a href="#skills"> <i className="fa-solid fa-code"></i> <span>Skills</span> </a>
                    </div>
                    <div>
                        <a href="#projects"> <i className="fa-solid fa-file"></i> <span>Projects</span> </a>

                    </div>
                    <div>
                        <a href="#contact"> <i className="fa-solid fa-envelope"></i> <span>Contact</span> </a>

                    </div>
                </div>

            </div>
            <div className="headshot">
                <img src={HeadShotImg} alt="headshot-img"/>
            </div>
    </div>
  )
}

export default HeroSection;
