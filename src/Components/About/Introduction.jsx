import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src="https://i.ibb.co/X3NFs59/Whats-App-Image-2022-08-16-at-3-39-30-PM.jpg"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone,I am{" "}
                <span className="different">Vaishali Verma</span> from{" "}
                Churu,Rajasthan
                <span className="different">  Learning MERN Stack.  </span>
                
                Joined the Military style Bootcamp to learn Software Development and Data Structures. Also learned many soft skills in the process.
              </h4>
              <h4>
                Soft skills :
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Team Collboration
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Remote Work{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
               LeaderShip {" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
               Problem Solving{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
