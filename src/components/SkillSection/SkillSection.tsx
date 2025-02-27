import HtmlLogo from "../../assets/images/html-logo.webp";
import CssLogo from "../../assets/images/css-logo.webp";
import JavaScriptLogo from "../../assets/images/javascript-logo.webp";
import PythonLogo from "../../assets/images/python-logo.webp";
import AngularLogo from "../../assets/images/angular.webp";
import ReactLogo from "../../assets/images/react-logo.webp";
import NextJsLogo from "../../assets/images/nextjs-logo.webp";
import NodeLogo from "../../assets/images/node-logo.webp";
import MongoLogo from "../../assets/images/mongodb-logo.webp";
import MySqlLogo from "../../assets/images/mysql-logo.webp";
import RabbitMqLogo from "../../assets/images/rabbitMq-logo.webp";
import RedisLogo from "../../assets/images/redis-logo.webp";
import GitLogo from "../../assets/images/github-logo.webp";
import DockerLogo from "../../assets/images/docker-logo.webp";
import CryptoLogo from "../../assets/images/crypto-logo.webp";
import "./SkillSection.scss";

const SkillSection = () => {
  return (
    <div className="skill-section-container">
        <h2>Skills</h2>
            <div className="text">
                I have hands-on experience in building scalable web applications with a strong foundation in both
                frontend and backend technologies. My skill set includes: I stay updated with the latest industry trends
                and best practices to develop robust, user-centric applications. My goal is to create scalable solutions
                that enhance functionality while maintaining a seamless user experience.
            </div>
            <div className="cells">
                <div className="cell">
                    <img src={HtmlLogo}  alt="HTML"/>
                    <span>HTML</span>
                </div>
                <div className="cell">
                    <img src={CssLogo} alt="CSS"/>
                    <span>CSS</span>
                </div>
                <div className="cell">
                    <img src={JavaScriptLogo}  alt="Javascript"/>
                    <span>Javascript</span>
                </div>
                <div className="cell">
                    <img src={PythonLogo} alt="Python"/>
                    <span>Python</span>
                </div>
                <div className="cell">
                    <img src={AngularLogo} alt="Angular"/>
                    <span>Angular</span>
                </div>
                <div className="cell">
                    <img src={ReactLogo} alt="Reactjs"/>
                    <span>Reactjs</span>
                </div>
                <div className="cell">
                    <img src={NextJsLogo} alt="Next.js"/>
                    <span>Next.js</span>
                </div>
                <div className="cell">
                    <img src={NodeLogo} alt="Nodejs"/>
                    <span>Nodejs</span>
                </div>
                <div className="cell">
                    <img src={MongoLogo} alt="MongoDB"/>
                    <span>MongoDB</span>
                </div>
                <div className="cell">
                    <img src={MySqlLogo} alt="MySql"/>
                    <span>MySql</span>
                </div>
                <div className="cell">
                    <img src={RabbitMqLogo} alt="RabbitMQ"/>
                    <span>RabbitMQ</span>
                </div>
                <div className="cell">
                    <img src={RedisLogo} alt="Redis"/>
                    <span>Redis</span>
                </div>
                <div className="cell">
                    <img src={GitLogo} alt="Git & Github"/>
                    <span>Git & Github</span>
                </div>
                <div className="cell">
                    <img src={DockerLogo} alt="Docker"/>
                    <span>Docker</span> 
                </div>
                <div className="cell">
                    <img src={CryptoLogo} alt="Crypto Market"/>
                    <span>Crypto Market</span>
                </div>

            </div>
    </div>
  )
}

export default SkillSection
