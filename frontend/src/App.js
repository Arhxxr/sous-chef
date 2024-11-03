import React from "react";
import BG from "./assets/images/BG.png";
import arrow from "./assets/images/arrow.png";
import avatar from "./assets/images/avatar.png";
import chef from "./assets/images/chef.png";
import "./style.css";

export const Landing = () => {
  return (
    <div className="landing">
      <div className="div">
        <img className="BG" alt="Bg" src={BG} />

        <div className="frame">
          <div className="frame-2">
            <div className="overlap-group">
              <div className="text-wrapper">NAME</div>
            </div>

            <img className="arrow" alt="Arrow" src={arrow} />
          </div>

          <div className="frame-3">
            <img className="chef" alt="Chef" src={chef} />

            <div className="group">
              <div className="overlap-group-2">
                <div className="text-wrapper-2">HI!</div>

                <p className="THIS-IS-YOUR-SOUS">
                  THIS IS YOUR <br />
                  SOUS CHEF
                </p>
              </div>

              <p className="p">HOW SHOULD I ADDRESS YOU?</p>
            </div>
          </div>
        </div>

        <div className="group-wrapper">
          <div className="div-wrapper">
            <div className="group-2">
              <div className="group-3">
                <div className="rectangle" />

                <div className="rectangle-2" />

                <div className="rectangle-3" />
              </div>

              <div className="text-wrapper-3">SOUS CHEF</div>

              <img className="avatar" alt="Avatar" src={avatar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};