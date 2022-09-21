import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import GitHubCalendar from 'react-github-calendar';
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiChakraui,
  SiCss3
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">

          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/xY0nCQB/Screenshot-8.png"
                  alt="Licious.in"
                />
              </div>
            </div>
            
            <div className="project_information" data-aos="fade-right">
              <h2>Shop.com</h2>
              <p>
                Clone of the popular Website that offers great deals on clothes,Beauty products,health and Nutrition. Built on React and Chakra-UI. It's a  Individual completed executed in 5 days.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                {/* <SiNodedotjs />
                <SiExpress />
                <SiMongodb /> */}
                <SiChakraui />
              </div>
              <div>
                <a
                  href="https://shopprojectrct-vaishali31verma.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/vaishali31verma/cozy-blade-6503/tree/main/shop.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/SVgCJLL/Screenshot-10.png"
                  alt="Geekbuying website"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>GeekBuying.com</h2>
              <p>
                Website Geekbuying to shop electronics gadgets .
                Group Project, Second Frontend Project with Javascript, HTML and CSS.
              </p>
              <div>
                <IoLogoJavascript />
                {/* <FaReact /> */}
                {/* <SiNodedotjs /> */}
                {/* <SiExpress />
                <SiMongodb /> */}
                <SiHtml5 />
                <SiCss3 />
              </div>
              <div>
                <a
                  href="https://nimble-melba-09757f.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/vaishali31verma/geekbuyingsproject"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right" >
                <img
                  src="https://i.ibb.co/fCQFnR0/Screenshot-12.png"
                  alt="MamaEarth website"

                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>MamaEarth.com</h2>
              <p>
                A web application to shop for skin care products
                Individual Project,  Frontend Project with Javascript, HTML and CSS.
              </p>
              <div>
                <IoLogoJavascript />
                {/* <FaReact /> */}
                {/* <SiNodedotjs /> */}
                {/* <SiExpress />
                <SiMongodb /> */}
                <SiHtml5 />
                <SiCss3 />
              </div>


              <div>
                <a
                  href="https://papaya-horse-9be8eb.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/vaishali31verma/mamaearthproweb18"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>





            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right" style={{ height: "300px" }}>
                <img
                  src="https://i.ibb.co/4jJTBYX/Screenshot-44.png"
                  alt="Chat App"

                />

              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Chat App</h2>
              <p>
                A Online Chat application for group Chat Using Socket-io
              </p>
              <div>
                <IoLogoJavascript />
                <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
                <SiHtml5 />
                <SiCss3 />
              </div>


              <div>
                <a
                  href="https://chat-nine-steel.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/vaishali31verma/Chat-App/tree/master"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>

 
            </div>
            
          </div>
 

        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right" style={{ height: "300px" }}>
                <img
                  src="https://i.ibb.co/0Qz9MPS/Screenshot-46.png"
                  alt="Chat App"

                />

              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Timetracking.com</h2>
              <p>
               It is clone of Time Tracking website We can manage our daily task ,It is a Collabrative project 
              </p>
              <div>
                <IoLogoJavascript />
                <FaReact />
                {/* <SiNodedotjs />
                <SiExpress />
                <SiMongodb /> */}
                <SiHtml5 />
                <SiCss3 />
              </div>


              <div>
                <a
                  href="https://time-tracking-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Randhir200/expert-hand-9078"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>

 
            </div>
            
          </div>
 

        </div>
        <GitHubCalendar  style={{marginLeft:"120px"}} username="vaishali31verma" />
      </div>
    </>
  );
};
