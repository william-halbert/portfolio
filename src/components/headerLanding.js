import React, { useEffect, useState } from "react";
import "../css/header.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../images/logoBlack.png";
import instagram from "../images/instagram.png";
import github from "../images/githubBlack.png";
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";

function HeaderLanding() {
  const [showEmail, setShowEmail] = useState(false);
  const [headerClassName, setHeader] = useState("header");
  const location = useLocation();

  const handleGmailIconClick = (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    /*setShowEmail(!showEmail);*/
  };

  useEffect(() => {
    if (location.pathname == "/") {
      const handler = () => {
        let newClassName =
          window.pageYOffset > 5 ? "header headerHover" : "header";
        setHeader(newClassName);
      };
      window.addEventListener("scroll", handler);
      return () => window.removeEventListener("scroll", handler);
    }
  }, []);

  useEffect(() => {
    const handleClick = () => {
      setShowEmail(false);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  const socialMediaLinks = [
    {
      src: gmail,
      alt: "Gmail",
      type: "gmail",
      className: "gmailIcon", // Add className property
      onMouseEnter: () => setShowEmail(true),
      onMouseLeave: () => setShowEmail(false),
    },

    {
      src: github,
      alt: "Github",
      link: "https://github.com/william-halbert/",
    },
    {
      src: linkedin,
      alt: "Linkedin",
      link: "https://www.linkedin.com/in/william-halbert/",
    },
  ];

  return (
    <div className={headerClassName}>
      <Link to="../">
        <h1
          initial={{ opacity: 1, x: "0%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 1, delay: 0 }}
          className="headerLogo"
          style={{ color: "black" }}
        >
          //William_Halbert
        </h1>
      </Link>

      <div className="socialMediaIcons">
        {socialMediaLinks.map((icon, index) => (
          <div
            key={index}
            onMouseEnter={icon.onMouseEnter}
            onMouseLeave={icon.onMouseLeave}
            onClick={icon.type === "gmail" ? handleGmailIconClick : null} // Add the onClick handler
            className={
              icon.type === "gmail" ? "iconWrapper gmailWrapper" : "iconWrapper"
            }
          >
            {icon.type === "gmail" && <EmailDropdown show={showEmail} />}
            <a href={icon.link} target="_blank" rel="noopener noreferrer">
              <motion.img
                className={icon.className || ""}
                style={icon.type === "gmail" ? { cursor: "default" } : {}}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
                src={icon.src}
                alt={icon.alt}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderLanding;

function EmailDropdown({ show }) {
  return (
    <motion.div
      className="emailDropdown"
      initial={{ opacity: 0, y: -10 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <p>willhalbert16@gmail.com</p>
    </motion.div>
  );
}
