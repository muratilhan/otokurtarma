import React from "react";
import "./topbar.css";
import Typewriter from "typewriter-effect";


const Topbar = () => {
  return (
    <div className="topbar-container">
      <p>
        <span>
          <i class="fa-solid fa-phone"></i>
        </span>
        <Typewriter
              options={{
                strings: ["0533-344-86-50","0536-722-47-07"],
                autoStart: true,
                loop: true,
              }}
          />
      </p>
      <h3>Yenice - İnegöl Oto Kurtarma</h3>
    </div>
  );
};

export default Topbar;
