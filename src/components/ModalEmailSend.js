import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import particles from '../particles.json';

function ModalEmailSend({show, handleClose, success, validation}) {

    const particlesInit = useCallback(async (engine) => await loadFull(engine), []);

    const particlesLoaded = useCallback(async (container) => await console.log(container), []);

    return (
        <>
        {
            success ?
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    {
                        !validation &&
                            <Particles
                                id="tsparticles2"
                                init={particlesInit}
                                loaded={particlesLoaded}
                                options={particles}
                            />
                    }
                    <Modal.Header closeButton>
                        <Modal.Title className="text-body">
                            {
                                !validation ?
                                    "Email successfully send!"
                                :
                                    "UPS! There can not be an empty field"
                            }
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-body">
                        {
                            !validation ?
                                "Thank you for your message. I will contact you as soon as possible."
                            :
                                "Please fill in all fields and try again."
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant={!validation ? "success" : "warning"} onClick={handleClose}>
                            Take me back to the AMAIZING PORTFOLIO!
                        </Button>
                    </Modal.Footer>
                </Modal>
                :
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="text-body">
                            Ups! Something went wrong.
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-body">
                        Please, try again later or contact me via whatsapp: 55 2509 8341
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Take me back to the AMAIZING PORTFOLIO!
                        </Button>
                    </Modal.Footer>
                </Modal>
        }
        </>
    );
}

export default ModalEmailSend;