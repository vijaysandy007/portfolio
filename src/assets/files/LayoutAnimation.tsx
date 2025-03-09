
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default class LayoutObject {
    hearoAnimation() {
        gsap.fromTo(".hero-section", {
            x: -400,
            opacity: 0,
            duration: 0.5
        },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 1
            }
        )
    }

    headerAnimation() {
        gsap.fromTo("nav", {
            y: -400,
            opacity: 0,
            duration: 0.5
        },
            {
                y: 0,
                opacity: 1,
                duration: 1
            }
        )
    }

    skillSectionAnimation() {
        gsap.fromTo(
            '.skills-section',

            { x: -400, opacity: 0, duration: 0.5 },
            {
                x: 0,
                opacity: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: '.skills-section',
                    scroller: "main",
                    start: "top 50%",
                    end: "bottom 90%",
                    scrub: true,
                    toggleActions: "restart none restart none",
                    // markers: true,
                },
            }
        );
    }

    skillProjectAnimation() {
        gsap.fromTo(
            ".projects-section-container",

            { x: 600, opacity: 0, duration: 0.5 },
            {
                x: 0,
                opacity: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: ".projects-section-container",
                    scroller: "main",
                    start: "top 50%",
                    end: "bottom 90%",
                    scrub: true,
                    toggleActions: "restart none restart none",
                    // markers: true,

                },
            }
        );
    }

    contactAnimation() {
        gsap.fromTo(
            ".contact-section",

            { opacity: 0, duration: 0.5 },
            {
                opacity: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: ".contact-section",
                    scroller: "main",
                    start: "-250px 50%",
                    end: "bottom 90%",
                    scrub: true,
                    toggleActions: "restart none restart none",
                    // markers: true,

                },
            }
        );
    }
}