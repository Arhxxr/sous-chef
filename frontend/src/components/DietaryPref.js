import React, { useState, useEffect } from "react";
// import arrowL from "/images/arrow-l.png";
// import arrow from "/images/arrow.png";
import { Image } from 'react-bootstrap'
import "../styles/DietaryPref.css";
import userProfile from "./UserProfile";
import { useNavigate } from 'react-router-dom';


const DietaryPref = () => {
    const navigate = useNavigate();
    const [dietaryRestrictions, setDietaryRestrictions] = useState(() => {
        const savedRestrictions = localStorage.getItem("userProfile").dietaryRestrictions;
        return savedRestrictions ? savedRestrictions : [];
    });

    useEffect(() => {
        const updatedProfile = { ...userProfile, dietary_restrictions: dietaryRestrictions };
        localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
        userProfile.dietary_restrictions = dietaryRestrictions; // Update userProfile with the latest restrictions
    }, [dietaryRestrictions]);

    const toggleDietaryRestriction = (restriction) => {
        setDietaryRestrictions((prevRestrictions) => {
            if (prevRestrictions.includes(restriction)) {
                return prevRestrictions.filter(item => item !== restriction);
            } else {
                return [...prevRestrictions, restriction];
            }
        });
    };

    const isSelected = (restriction) => dietaryRestrictions.includes(restriction);


    // Check if at least one preference is selected
    // const isAnyPreferenceSelected = selectedPreferences.length > 0;

    // Handle navigation for the arrows
    const handleLeftArrowClick = () => {
        if (isSelected) {
            navigate("/home");
        }
    };

    const handleRightArrowClick = () => {
        if (isSelected) {
            navigate("/preferences");
        }
    };

    return (
        <div className="frame">
            <Image
                src='/images/BG.png'
                alt="Background"
                fluid
                className="position-absolute w-100 h-100"
                style={{ objectFit: 'cover', filter: 'blur(5px)', zIndex: '-1' }}
            />

            <div className="mid-sec">
                <p className="text-wrapper">WHAT ARE YOUR DIETARY RESTRICTIONS?</p>

                <div className="div">
                    <div className="group">
                        <div
                            className={`overlap-group ${isSelected("VEGETARIAN") ? 'selected' : ''}`}
                            onClick={() => toggleDietaryRestriction("VEGETARIAN")}
                        >
                            <div className="text-wrapper-2">VEGETARIAN</div>
                        </div>

                        <div
                            className={`div-wrapper ${isSelected("GLUTEN-FREE") ? 'selected' : ''}`}
                            onClick={() => toggleDietaryRestriction("GLUTEN-FREE")}
                        >
                            <div className="text-wrapper-3">GLUTEN-FREE</div>
                        </div>

                        <div
                            className={`overlap-group-2 ${isSelected("VEGAN") ? 'selected' : ''}`}
                            onClick={() => toggleDietaryRestriction("VEGAN")}
                        >
                            <div className="text-wrapper-4">VEGAN</div>
                        </div>
                    </div>

                    <div className="group-2">
                        <div
                            className={`overlap-2 ${isSelected("KOSHER") ? 'selected' : ''}`}
                            onClick={() => toggleDietaryRestriction("KOSHER")}
                        >
                            <div className="text-wrapper-5">KOSHER</div>
                        </div>

                        <div
                            className={`overlap-3 ${isSelected("PESCETARIAN") ? 'selected' : ''}`}
                            onClick={() => toggleDietaryRestriction("PESCETARIAN")}
                        >
                            <div className="text-wrapper-6">PESCETARIAN</div>
                        </div>

                        <div
                            className={`overlap-4 ${isSelected("PALEO") ? 'selected' : ''}`}
                            onClick={() => toggleDietaryRestriction("PALEO")}
                        >
                            <div className="text-wrapper-7">PALEO</div>
                        </div>

                        <div
                            className={`overlap-5 ${isSelected("KETO") ? 'selected' : ''}`}
                            onClick={() => toggleDietaryRestriction("KETO")}
                        >
                            <div className="text-wrapper-8">KETO</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="arrows">
                <img className="arrow-l" alt="Arrow l" src="/images/arrow-l.png"  style={{ cursor: 'pointer' }} onClick={handleLeftArrowClick}/>
                <img className="arrow" alt="Arrow" src="/images/arrow.png" style={{ cursor: 'pointer' }} onClick={handleRightArrowClick}/>
            </div>
        </div>
    );
};

export default DietaryPref;