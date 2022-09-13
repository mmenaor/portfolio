import gitLogo from "../assets/img/git-logo.png";
import cssLogo from "../assets/img/css-logo.png";
import sequelizeLogo from "../assets/img/sequelize-logo.png";
import reduxLogo from "../assets/img/redux-logo.png";
import reactLogo from "../assets/img/react-logo.png";
import pythonLogo from "../assets/img/python-logo.png";
import postgresqlLogo from "../assets/img/postgresql-logo.png";
import nodejsLogo from "../assets/img/nodejs-logo.png";
import javascriptLogo from "../assets/img/javascript-logo.png";
import htmlLogo from "../assets/img/html-logo.png";
import expressjsLogo from "../assets/img/expressjs-logo.png";
import djangoLogo from "../assets/img/django-logo.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const particlesInit = useCallback(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <section className="skill" >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <Particles
                                id="tsparticles"
                                init={particlesInit}
                                loaded={particlesLoaded}
                                options={{
                                    fullScreen: { enable: false },
                                    background: {
                                        color: {
                                            value: "transparent",
                                        },
                                    },
                                    fpsLimit: 100,
                                    interactivity: {
                                        events: {
                                            onClick: {
                                                enable: false,
                                                mode: "push",
                                            },
                                            onHover: {
                                                enable: true,
                                                mode: "repulse",
                                            },
                                            resize: true,
                                        },
                                        modes: {
                                            push: {
                                                quantity: 2,
                                            },
                                            repulse: {
                                                distance: 150,
                                                duration: 0.4,
                                            },
                                        },
                                    },
                                    particles: {
                                        color: {
                                            value: "#ffffff",
                                        },
                                        links: {
                                            color: "#ffffff",
                                            distance: 150,
                                            enable: true,
                                            opacity: 0.5,
                                            width: 1,
                                        },
                                        collisions: {
                                            enable: true,
                                        },
                                        move: {
                                            directions: "none",
                                            enable: true,
                                            outModes: {
                                                default: "bounce",
                                            },
                                            random: false,
                                            speed: 4,
                                            straight: false,
                                        },
                                        number: {
                                            density: {
                                                enable: true,
                                                area: 800,
                                            },
                                            value: 80,
                                        },
                                        opacity: {
                                            value: 0.5,
                                        },
                                        shape: {
                                            type: "circle",
                                        },
                                        size: {
                                            value: { min: 1, max: 5 },
                                        },
                                    },
                                    detectRetina: true,
                                }}
                            />
                            <h2>Hard Skills</h2>
                            <p>I believe hard skills are a matter of practice and passion.<br></br> I am able to use these languajes/libraries/frameworks but more importantly I have the ability to read documentation and browse the web in order to find a solution.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={gitLogo} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={htmlLogo} alt="Image" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={cssLogo} alt="Image" className="css-logo" />
                                    <h5>CSS3</h5>
                                </div>
                                <div className="item">
                                    <img src={javascriptLogo} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={reactLogo} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={reduxLogo} alt="Image" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejsLogo} alt="Image" />
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item">
                                    <img src={expressjsLogo} alt="Image" />
                                    <h5>Express JS</h5>
                                </div>
                                <div className="item">
                                    <img src={sequelizeLogo} alt="Image" />
                                    <h5>Sequelize</h5>
                                </div>
                                <div className="item">
                                    <img src={postgresqlLogo} alt="Image" />
                                    <h5>PostgreSQL</h5>
                                </div>
                                <div className="item">
                                    <img src={pythonLogo} alt="Image" />
                                    <h5>Python (in progress)</h5>
                                </div>
                                <div className="item">
                                    <img src={djangoLogo} alt="Image" />
                                    <h5>Django (in progress)</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
