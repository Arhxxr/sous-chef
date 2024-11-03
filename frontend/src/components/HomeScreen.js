import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
// import '../styles/HomeScreen.css';

const HomeScreen = () => {
    return (
        <div className="landing" style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
            {/* Background Image */}
            <Image
                src="/images/BG.png"
                alt="Background"
                fluid
                className="position-absolute w-100 h-100"
                style={{ objectFit: 'cover', filter: 'blur(5px)', zIndex: '-1' }}
            />

            {/* Main Container */}
            <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
                <Row className="info-row">
                    <Col md={6} className="chef-col">
                        {/* Chef Image */}
                        <Image src="/images/chef.png" alt="Chef" fluid className="chef-img mb-4" />
                    </Col>

                    <Col md={6} className="text-col">
                        {/* Welcome Text */}
                        <h1>HI!</h1>
                        <p>
                            THIS IS YOUR <br />
                            SOUS CHEF
                        </p>
                        <p>HOW SHOULD I ADDRESS YOU?</p>

                        {/* Input Section */}
                        <Row className="input-row mt-4">
                            <Col md={8} className="input-col">
                                <span className="name-text">NAME</span>
                                <Image
                                    src="/images/arrow.png"
                                    alt="Arrow"
                                    style={{ width: '40px', height: '40px', marginLeft: 'auto' }}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeScreen;

