import React from "react";
import bizkimiz3 from "../../pictures/bizkimiz3.jpg";
import "./whoarewe.css";
import Typewriter from "typewriter-effect";
import resim1 from "../../pictures/sliders/mobile1.jpg";

const WhoAreWe = () => {
  return (
    <div className="whoarewe-container">
      <div className="whoarewe-inner">
        <h2>Biz Kimiz?</h2>
      </div>
      <div className="whoarewe-info">
        <ul>
          <li>
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span>
            <p>temp@gmail.com</p>
          </li>
          <li>
            <span>
              <i class="fa-solid fa-phone"></i>
            </span>
            <p>5555 555 55 55</p>
          </li>
          <li>
            <span>
              <i class="fa-solid fa-clock"></i>
            </span>
            <p>7/24 Hizmetinizdeyiz. Cumartesi-Pazar</p>
          </li>
        </ul>
      </div>
      <div className="text">
        <div className="text-info"> 
          <h2>
            <Typewriter
              options={{
                strings: ["Emre Yücel","Onur Yücel"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p>
            Bu b Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            quibusdam repellendus modi eveniet id veniam animi nam, distinctio
            obcaecati. Vel ea suscipit deserunt repellat impedit fuga, veniam
            dolor officia quis consectetur eaque blanditiis delectus corporis
            incidunt quidem sequi eos. Officia autem veritatis nisi repudiandae
            culpa similique odio quod unde necessitatibus!.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            inventore.
          </p>
          <p>
          <span>22 Eylül 2015</span>'ten itibaren..
          </p>
        
        </div>
        <div>
          <img src={resim1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
