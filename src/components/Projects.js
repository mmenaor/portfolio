import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import rickMortyFront from "../assets/img/rickandmorty-front.png";
import rickMortyResidents from "../assets/img/rickandmorty-residents.png";
import ecommerceJS from "../assets/img/ecommerce-js.png";
import ecommerceReact from "../assets/img/ecommerce-react.png";
import quotesApp from "../assets/img/quotes-app.png";
import weatherApp from "../assets/img/weather-app.png";
import apiEcommerceCode from "../assets/img/api-ecommerce-code.png";
import apiEcommerce from "../assets/img/api-ecommerce.png";
import apiMealsCode from "../assets/img/api-meals-code.png";
import apiMeals from "../assets/img/api-meals.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const frontEndProjects = [
        {
        title: "Rick and Morty",
        description: "React | Hooks | API consumption | Axios | Pagination",
        imgUrl: rickMortyFront,
        url: 'https://rick-morty-rick.netlify.app'
        },
        {
        title: "Academlo e-commerce",
        description: "Vanilla JavaScript | Loader | LocalStorage | Stringify",
        imgUrl: ecommerceJS,
        url: 'https://academlo-ecommerce.netlify.app'
        },
        {
        title: "Quotes app",
        description: "React | JSON | RandomColor",
        imgUrl: quotesApp,
        url: 'https://quotes-app-mm.netlify.app/'
        },
        {
        title: "Rick and Morty",
        description: "React | Hooks | API consumption | Axios | Pagination",
        imgUrl: rickMortyResidents,
        url: 'https://rick-morty-rick.netlify.app'
        },
        {
        title: "Tech products e-commerce",
        description: "React | Redux | React Router | Loader | API REST | Axios",
        imgUrl: ecommerceReact,
        url: 'https://tech-ecommerce-mariomena.netlify.app'
        },
        {
        title: "Weather app",
        description: "React | Hooks | API consumption | Axios",
        imgUrl: weatherApp,
        url: 'https://local-weather-app94.netlify.app'
        },
    ];

    const backEndProjects = [
        {
        title: "API: e-commerce",
        description: "Design & Development",
        imgUrl: apiEcommerceCode,
        url: ''
        },
        {
        title: "API: e-commerce",
        description: "Design & Development",
        imgUrl: apiEcommerce,
        url: ''
        },
        {
        title: "API: meals (as Uber Eats)",
        description: "Design & Development",
        imgUrl: apiMealsCode,
        url: ''
        },
        {
        title: "API: meals (as Uber Eats)",
        description: "Design & Development",
        imgUrl: apiMeals,
        url: ''
        }
    ];

    return (
        <section className="project" id="projects">
        <Container>
            <Row>
            <Col size={12}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated": ""}>
                    <h2>Projects</h2>
                    <p>These are some projects I have developed in distinct areas of web development. (Click on each of the projects to see more)</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Front-end</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Back-end</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Data visualization</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated" : ""}>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                    frontEndProjects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                    backEndProjects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p>COMING SOON!</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="background"></img>
        </section>
    )
}
