import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/coding.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    // const [index, setIndex] = useState(1);
    const period = 1500;
    
    useEffect(() => {
        const tick = () => {
            const toRotate = [ "FullStack Developer", "FrontEnd Developer", "BackEnd Developer" ];
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
            setText(updatedText);
    
            if (isDeleting) {
                setDelta(prevDelta => prevDelta / 1.8);
            }
    
            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                // setIndex(prevIndex => prevIndex - 1);
                setDelta(period);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                // setIndex(1);
                setDelta(500);
            } else {
                // setIndex(prevIndex => prevIndex + 1);
                if (updatedText.length === 1){
                    setDelta(200 - Math.random() * 100);
                }
            }
        }

        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta, isDeleting, loopNum])

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={7} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>
                                        {`Hi! I'm Mario Mena`} 
                                        <br></br>
                                        <span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                                            <span className="wrap">
                                                {text}
                                            </span>
                                        </span>
                                    </h1>
                                    <p>Analytical full stack developer who always seeks to learn about new technologies with a great passion for numbers, programming and data visualization. Very curious about the digital transformation such as fintech, data science, machine learning and artificial intelligence</p>
                                    Starting my programmer career as a Web Full Stack Developer. Passionate about what I do and always excels what has to be done. I will become an ML/AI developer.
                                    <button>
                                        <a href="#connect">
                                            Let’s Code Together <ArrowRightCircle size={25} />
                                        </a>
                                    </button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={5} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <div id="skills"></div>
        </section>
    )
}
