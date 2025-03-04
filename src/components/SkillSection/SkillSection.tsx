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
import AngularCertificate from "../../assets/files/Angular.png";
import hackerRankCertificate from "../../assets/files/hackerRank.png";
import Tab from 'react-bootstrap/Tab';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tabs from 'react-bootstrap/Tabs';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./SkillSection.scss";
import { useState } from "react";

const SkillSection = () => {
    const [isVisible, setVisible] = useState(false)
    return (
        <div className="skill-section-container">
            <h2>Portfolio ShowCase</h2>

            <Tabs
                defaultActiveKey="Skills"
                id="uncontrolled-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="Skills" title="Skills">
                    <div className="text">
                        I have hands-on experience in building scalable web applications with a strong foundation in both
                        frontend and backend technologies. My skill set includes: I stay updated with the latest industry trends
                        and best practices to develop robust, user-centric applications. My goal is to create scalable solutions
                        that enhance functionality while maintaining a seamless user experience.
                    </div>
                    <div className="cells">
                        <div className="cell">
                            <img src={HtmlLogo} alt="HTML" />
                            <span>HTML</span>
                        </div>
                        <div className="cell">
                            <img src={CssLogo} alt="CSS" />
                            <span>CSS</span>
                        </div>
                        <div className="cell">
                            <img src={JavaScriptLogo} alt="Javascript" />
                            <span>Javascript</span>
                        </div>
                        <div className="cell">
                            <img src={PythonLogo} alt="Python" />
                            <span>Python</span>
                        </div>
                        <div className="cell">
                            <img src={AngularLogo} alt="Angular" />
                            <span>Angular</span>
                        </div>
                        <div className="cell">
                            <img src={ReactLogo} alt="Reactjs" />
                            <span>Reactjs</span>
                        </div>
                        <div className="cell">
                            <img src={NextJsLogo} alt="Next.js" />
                            <span>Next.js</span>
                        </div>
                        <div className="cell">
                            <img src={NodeLogo} alt="Nodejs" />
                            <span>Nodejs</span>
                        </div>
                        <div className="cell">
                            <img src={MongoLogo} alt="MongoDB" />
                            <span>MongoDB</span>
                        </div>
                        <div className="cell">
                            <img src={MySqlLogo} alt="MySql" />
                            <span>MySql</span>
                        </div>
                        <div className="cell">
                            <img src={RabbitMqLogo} alt="RabbitMQ" />
                            <span>RabbitMQ</span>
                        </div>
                        <div className="cell">
                            <img src={RedisLogo} alt="Redis" />
                            <span>Redis</span>
                        </div>
                        <div className="cell">
                            <img src={GitLogo} alt="Git & Github" />
                            <span>Git & Github</span>
                        </div>
                        <div className="cell">
                            <img src={DockerLogo} alt="Docker" />
                            <span>Docker</span>
                        </div>
                        <div className="cell">
                            <img src={CryptoLogo} alt="Crypto Market" />
                            <span>Crypto Market</span>
                        </div>

                    </div>
                </Tab>

                <Tab eventKey="Certification" title="Certifications">
                    <div className="skill-certification_container">
                        <div className="skill-certification_container__certifcate">
                            <img src={AngularCertificate} alt="AngularCertificate" />
                            <a onClick={() => setVisible(true)} className="link-icon" target="_blank" rel="noopener noreferrer">
                                <OverlayTrigger overlay={<Tooltip >View</Tooltip>}>
                                    <i className="fa-regular fa-eye"></i>
                                </OverlayTrigger>
                            </a>
                        </div>

                        <div className="skill-certification_container__certifcate">
                            <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-2c8ac6d0-56c3-445b-a600-6347a2646041.jpg?v=1713546669000" alt="" />

                            <a href="https://www.udemy.com/certificate/UC-2c8ac6d0-56c3-445b-a600-6347a2646041/?trk=public_profile_see-credential" className="link-icon" target="_blank" rel="noopener noreferrer">
                                <OverlayTrigger overlay={<Tooltip >View</Tooltip>}>
                                    <i className="fa-solid fa-link"></i>
                                </OverlayTrigger>
                            </a>

                        </div>
                        <div className="skill-certification_container__certifcate">
                            <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-39df3ad9-91c4-4488-83b6-89878f9d655a.jpg?v=1711302211000" alt="" />
                            <a href="https://www.udemy.com/certificate/UC-39df3ad9-91c4-4488-83b6-89878f9d655a/?trk=public_profile_see-credential" className="link-icon" target="_blank" rel="noopener noreferrer">
                                <OverlayTrigger overlay={<Tooltip >View</Tooltip>}>
                                    <i className="fa-solid fa-link"></i>
                                </OverlayTrigger>
                            </a>

                        </div>


                        <div className="skill-certification_container__certifcate">
                            <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-164ed8ef-d274-4734-88c2-0424b8a07103.jpg?v=1698336431000" alt="" />
                            <a href="https://www.hackerrank.com/certificates/40328c5b9292?trk=public_profile_see-credential" className="link-icon" target="_blank" rel="noopener noreferrer">
                                <OverlayTrigger overlay={<Tooltip >View</Tooltip>}>
                                    <i className="fa-solid fa-link"></i>
                                </OverlayTrigger>
                            </a>
                        </div>
                        <div className="skill-certification_container__certifcate">
                            <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-1e990657-0c38-414b-b744-d2a188975fa7.jpg?v=1666683750000" alt="" />
                            <a href="https://www.udemy.com/certificate/UC-164ed8ef-d274-4734-88c2-0424b8a07103/?trk=public_profile_see-credential" className="link-icon" target="_blank" rel="noopener noreferrer">
                                <OverlayTrigger overlay={<Tooltip >View</Tooltip>}>
                                    <i className="fa-solid fa-link"></i>
                                </OverlayTrigger>
                            </a>
                        </div>
                        <div className="skill-certification_container__certifcate">
                            {/* <iframe src="https://www.hackerrank.com/certificates/iframe/40328c5b9292"></iframe> */}
                            <img src={hackerRankCertificate} alt="hackerRankCertificate" />
                            <a href="https://www.udemy.com/certificate/UC-1e990657-0c38-414b-b744-d2a188975fa7/?trk=public_profile_see-credential" className="link-icon" target="_blank" rel="noopener noreferrer">
                                <OverlayTrigger overlay={<Tooltip >View</Tooltip>}>
                                    <i className="fa-solid fa-link"></i>
                                </OverlayTrigger>
                            </a>
                        </div>
                        <div className="skill-certification_container__certifcate">
                            <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-864e98a4-6891-4b61-917d-15e912c6c298.jpg?v=1695482713000" alt="" />
                            <a href="https://www.udemy.com/certificate/UC-864e98a4-6891-4b61-917d-15e912c6c298/?trk=public_profile_see-credential" className="link-icon" target="_blank" rel="noopener noreferrer">
                                <OverlayTrigger overlay={<Tooltip >View</Tooltip>}>
                                    <i className="fa-solid fa-link"></i>
                                </OverlayTrigger>

                            </a>
                        </div>


                        <div className="skill-certification_container__certifcate">
                            <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-b999b356-7883-40d6-a3cd-ce0e2ae268c0.jpg?v=1692421677000" alt="" />
                            <a href="https://www.udemy.com/certificate/UC-b999b356-7883-40d6-a3cd-ce0e2ae268c0/?trk=public_profile_see-credential" className="link-icon" target="_blank" rel="noopener noreferrer">
                                <OverlayTrigger overlay={<Tooltip >View</Tooltip>}>
                                    <i className="fa-solid fa-link"></i>
                                </OverlayTrigger>
                            </a>
                        </div>

                    </div>
                </Tab>

            </Tabs>

            <Modal
                show={isVisible}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => setVisible(false)}
            >
                <Modal.Header closeButton onClick={() => setVisible(false)} >
                    <Modal.Title id="contained-modal-title-vcenter" className="w-100 text-center fw-bold">
                       OFF Line Certification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container_view">
                        <img src={AngularCertificate} alt="" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setVisible(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default SkillSection
