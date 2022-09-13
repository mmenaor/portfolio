import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import marioMena from "../assets/img/mario-mena.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import emailjs from '@emailjs/browser';
import ModalEmailSend from './ModalEmailSend';

export const Contact = () => {
    const [ userName, setUserName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    // const [buttonText, setButtonText] = useState('Send');
    const form = useRef();
    
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(true);
    const [validation, setValidation] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendEmail = (e) => {
        e.preventDefault();

        if(userName==='' || email==='' || message===''){
            setSuccess(true);
            setValidation(true);
            handleShow();
            return;
        }

        setValidation(false);
    
        // emailjs.sendForm('service_9r9lp1b', 'template_ggh2oai', form.current, 'fUNAEM_vpc0RiI7yq')
        //     .then((result) => {
        //         console.log(result.text);
        //         setSuccess(true);
        //         handleShow();
        //         setUserName('');
        //         setEmail('');
        //         setMessage('');
        //     }, (error) => {
        //         console.log(error.text);
        //         setSuccess(false);
        //         handleShow();
        //     });
        
        setSuccess(true);
        handleShow();
        setUserName('');
        setEmail('');
        setMessage('');
        console.log("object");
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" value={userName} placeholder="Company / First Name" onChange={(e) => setUserName(e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea value={message} rows="6" placeholder="Message" onChange={(e) => setMessage(e.target.value)} ></textarea>
                                                <button type="submit"><span>Send</span></button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={marioMena} alt="Contact Us"/>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <ModalEmailSend show={show} handleClose={handleClose} success={success} validation={validation} />
        </section>
    )
}
