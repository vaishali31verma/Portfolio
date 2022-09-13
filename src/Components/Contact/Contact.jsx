import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/vaishali3101/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/vaishali31verma"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          <a
            // href="mailto:bicky.dutta@masaischool.com"
            href="mailto:gadaiyavaishali31@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
          </a>
          {/* <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="twitter" />
          </a> */}
          {/* <a href="tel:9057293220" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
          </a> */}
        </div>
      </div>
    </>
  );
};
