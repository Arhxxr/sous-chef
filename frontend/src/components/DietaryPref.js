import React from "react";
// import arrowL from "/images/arrow-l.png";
// import arrow from "/images/arrow.png";
import { Image } from 'react-bootstrap'
import "../styles/DietaryPref.css";

const DietaryPref = () => {
    return (
        <div className="frame">
            <Image
                src='/images/BG.png'
                alt="Background"
                fluid
                className="position-absolute w-100 h-100"
                style={{objectFit: 'cover', filter: 'blur(5px)', zIndex: '-1' }}
            />

            <div className="mid-sec">
                <p className="text-wrapper">WHAT ARE YOUR DIETARY RESTRICTIONS?</p>

                <div className="div">
                    <div className="group">
                        <div className="overlap-group">
                            <div className="text-wrapper-2">VEGETARIAN</div>
                        </div>

                        <div className="div-wrapper">
                            <div className="text-wrapper-3">GLUTEN-FREE</div>
                        </div>

                        <div className="overlap-group-2">
                            <div className="text-wrapper-4">VEGAN</div>
                        </div>
                    </div>

                    <div className="group-2">
                        <div className="overlap-2">
                            <div className="text-wrapper-5">KOSHER</div>
                        </div>

                        <div className="overlap-3">
                            <div className="text-wrapper-6">PESCETARIAN</div>
                        </div>

                        <div className="overlap-4">
                            <div className="text-wrapper-7">PALEO</div>
                        </div>

                        <div className="overlap-5">
                            <div className="text-wrapper-8">KETO</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="arrows">
                <img className="arrow-l" alt="Arrow l" src="/images/arrow-l.png" />

                <img className="arrow" alt="Arrow" src="/images/arrow.png" />

            </div>

        </div>
    );
};

export default DietaryPref;