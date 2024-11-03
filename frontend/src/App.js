import React from "react";
// import arrow from "frontend\public\arrow.png";
// import avatar from "frontend\public\avatar.png";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="group-wrapper">
        <div className="group">
          <div className="rectangle" />

          <div className="div-wrapper">
            <div className="div">
              <div className="group-2">
                <div className="group-3">
                  <div className="rectangle-2" />

                  <div className="rectangle-3" />

                  <div className="rectangle-4" />
                </div>

                <div className="text-wrapper">SOUS CHEF</div>

                <img className="avatar" alt="Avatar" src="frontend\public\avatar.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="frame-wrapper">
        <div className="div-2">
          <div className="group-4">
            <div className="group-5">
              <div className="overlap-group">
                <div className="text-wrapper-2">HI!</div>

                <p className="THIS-IS-YOUR-SOUS">
                  THIS IS YOUR <br />
                  SOUS CHEF
                </p>
              </div>

              <p className="p">HOW SHOULD I ADDRESS YOU?</p>
            </div>

            <div className="chef" />
          </div>

          <div className="div-3">
            <div className="overlap">
              <div className="text-wrapper-3">NAME</div>
            </div>

            <img className="arrow" alt="Arrow" src="frontend\public\arrow.png" />
          </div>
        </div>
      </div>
    </div>
  );
};