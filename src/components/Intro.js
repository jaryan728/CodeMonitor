import React from "react";
import v from "./147303-791344535_small.mp4";
import "./intro.css";
import arrow from "./icons8-move-down-50.png";
export default function Intro() {
  return (
    <div>
      <div className="videoBackground">
        {" "}
        <video autoPlay loop muted playsInline>
          <source src={v} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="a">
        <div className="n" id="aryan">CodefeegMonitor</div>
        <div className="b ">Monitor Your Performance...</div>
        <div className="move"><img src={arrow} alt=" " /></div>
      </div>
    </div>
  );
}
