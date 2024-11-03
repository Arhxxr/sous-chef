import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, ListGroup, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../styles/Preferences.css";
import userProfile from "./UserProfile";

const MealPreferences = () => {
    const navigate = useNavigate();
    userProfile.loadFromLocalStorage();

    const [selectedMealType, setSelectedMealType] = useState(
        (userProfile.preferences && userProfile.preferences.meal_type) || null
    );

    const [timeToCook, setTimeToCook] = useState(
        (userProfile.preferences && userProfile.preferences.time_to_cook) || ''
    );

    const [calories, setCalories] = useState(
        (userProfile.preferences && userProfile.preferences.calories_per_meal) || ''
    );

    const [selectedCuisineType, setSelectedCuisineType] = useState(
        (userProfile.preferences && userProfile.preferences.cuisine_type) || null
    );
    const [loading, setLoading] = useState(false);

    // Handle meal type selection
    const handleMealTypeClick = (index, meal) => {
        setSelectedMealType(index); // Set the selected meal type index
        userProfile.preferences.meal_type = meal; // Update userProfile with selected meal type
        localStorage.setItem('userProfile', JSON.stringify(userProfile)); // Save to localStorage
    };

    const handleCuisineTypeClick = (index, cuisine) => {
        setSelectedCuisineType(index); // Set the selected meal type index
        userProfile.preferences.cuisine_type = cuisine; // Update userProfile with selected meal type
        localStorage.setItem('userProfile', JSON.stringify(userProfile)); // Save to localStorage
    };


    // Handle time to cook input change
    const handleTimeToCookChange = (event) => {
        const value = event.target.value;
        setTimeToCook(value);
        userProfile.preferences.time_to_cook = value; // Update userProfile with input value
        localStorage.setItem('userProfile', JSON.stringify(userProfile)); // Save to localStorage
    };

    const handleCaloriesChange = (event) => {
        const value = event.target.value;
        setCalories(value);
        userProfile.preferences.calories_per_meal = value; // Update userProfile with input value
        localStorage.setItem('userProfile', JSON.stringify(userProfile)); // Save to localStorage
    };

    // Function to check if all preferences have been set
    const allPreferencesSet = () => {
        return selectedMealType !== null &&
            timeToCook !== '' &&
            calories !== '' &&
            selectedCuisineType !== null;
    };

    const handleRightclick = () => {

    }


    // Effect to handle navigation when all preferences are set
    useEffect(() => {
        if (allPreferencesSet()) {
            // Set loading state to true
            setLoading(true);

            // Wait for 2 seconds before navigating
            setTimeout(() => {
                setLoading(false);
                navigate("/recipes"); // Replace with your actual path
            }, 2000);
        }
    }, [selectedMealType, timeToCook, calories, selectedCuisineType, navigate]);


    return (
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
            <Row className="cards-row">
                {['TYPE OF MEAL', 'TIME TO COOK', 'CALORIES PER MEAL', 'TYPE OF CUISINE'].map((title, index) => (
                    <Col key={index} md={3} className="mb-4">
                        <Card className="meal-card">
                            <Card.Header className="text-center card-header">
                                <h5>{title}</h5>
                            </Card.Header>
                            <Card.Body className="card-body d-flex flex-column justify-content-center align-items-center">
                                {index === 0 ? (
                                    // TYPE OF MEAL OPTIONS
                                    <ListGroup className="list-options w-100">
                                        {['MAIN COURSE', 'SIDE DISH', 'DESSERT', 'APPETIZER', 'SALAD'].map((meal, idx) => (
                                            <ListGroup.Item
                                                key={idx}
                                                className={`list-group-item ${selectedMealType === idx ? 'active' : ''}`}
                                                onClick={() => handleMealTypeClick(idx, meal)}
                                            >
                                                {meal}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                ) : index === 1 ? (
                                    // TIME TO COOK INPUT
                                    <Form.Group className="w-100 mt-3">
                                        <Form.Label style={{ fontFamily: 'Press Start 2P, cursive', color: 'black' }}>Enter Time to Cook:</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="MINUTES"
                                            value={timeToCook}
                                            onChange={handleTimeToCookChange}
                                            className="meal-input"
                                        />
                                    </Form.Group>
                                ) : index === 2 ? (
                                    // CALORIES PER MEAL INPUT
                                    <Form.Group className="w-100 mt-3">
                                        <Form.Label style={{ fontFamily: 'Press Start 2P, cursive', color: 'black' }}>Enter Calories Per Meal:</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="CAL"
                                            value={calories}
                                            onChange={handleCaloriesChange}
                                            className="meal-input"
                                        />
                                    </Form.Group>
                                ) : (
                                    // TYPE OF CUISINE OPTIONS
                                    <ListGroup className="list-options-2 w-100">
                                        {['ASIAN', 'AFRICAN', 'EUROPEAN', 'AMERICAN', 'MEDITERRANEAN', 'LATIN AMERICAN'].map((cuisine, idx) => (
                                            <ListGroup.Item
                                                key={idx}
                                                className={`list-group-item-2 ${selectedCuisineType === idx ? 'active' : ''}`}
                                                onClick={() => handleCuisineTypeClick(idx, cuisine)}
                                            >
                                                {cuisine}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MealPreferences;
