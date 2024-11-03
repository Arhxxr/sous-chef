import React, {useState} from "react";
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
// import '../styles/HomeScreen.css';
import userProfile from "./UserProfile";
const HomeScreen = () => {
    userProfile.clearData();
    const [username, setUsername] = useState(userProfile.name || "");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = () => {
        // Here we can make API calls or save username locally
        if (username.trim() !== "") {
            // Save user name to local storage or user profile object
            userProfile.updateName(username);

            // Set loading state to true
            setIsLoading(true);

            // Simulate loading delay and navigate to diet restriction page
            setTimeout(() => {
                setIsLoading(false);
                navigate("/dietprofiles"); // Redirect to the diet restriction page
            }, 2000); // Set delay in milliseconds (2 seconds)
        } else {
            alert("Please enter your name.");
        }
    };

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
            {isLoading ? (
                // Loading Screen
                <div className="loading-screen d-flex justify-content-center align-items-center w-100 h-100" style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1 }}>
                    <Spinner animation="border" role="status" variant="light">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <p style={{ color: 'white', marginLeft: '20px', fontFamily: 'Press Start 2P, cursive' }}>Loading...</p>
                </div>
            ) : (
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
                                <input
                                    type="text"
                                    value={username}
                                    onChange={handleInputChange}
                                    className="form-control name-input name-text"
                                    placeholder="Your name here..."
                                   
                                />
                                <Image
                                    src="/images/arrow.png"
                                    alt="Arrow"
                                    style={{ width: '40px', height: '40px', marginLeft: 'auto', cursor: 'pointer'}}
                                    onClick={handleSubmit}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>)}
        </div>
    );
};

export default HomeScreen;

