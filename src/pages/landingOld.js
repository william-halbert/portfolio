import React, { useEffect, useState, useRef } from "react";
import "../css/landing.css";
import HeaderLanding from "../components/headerLanding";
import { useInView } from "react-intersection-observer";
import AudioPlay from "../components/audioPlay";

import { FaArrowRight } from "react-icons/fa";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";

import logo from "../images/logoBlack.png";

import useScrollSnap from "react-use-scroll-snap";

import ohana from "../images/ohana.png";
import me from "../images/me.png";
import instagram from "../images/instagramSite.png";
import chikfila from "../images/chikfila.png";
import tesla from "../images/tesla.png";
import chemeai from "../images/chemeai.png";
import ehrboost from "../images/ehrboost.png";
import ferris from "../images/ferrisDemo.png";
import leap from "../images/leap.png";
import W from "../images/w.png";
import { Link, useNavigate } from "react-router-dom";

function Landing() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const scrollRef = useRef(null);
  const { width } = useWindowSize();

  const navigate = useNavigate();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(y, [0, 500], [0, 360]);

  const skills = [
    "HTML/CSS/Javascript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase/Firestore/Google Cloud",
    "Amazon Web Services - Amplify",
    "Vercel",
    "Heroku",
    "Bootstrap",
    "SendGrid Emails/Text Messages",
    "Postmark Emails",
    "Google Maps API",
    "Google Speech-to-Text API",
    "Facebook API",
    "OpenAI Chats, Completions, Dall-E, and Fine-tuning",
    "Bubble.io",
    "PdfLib",
    "Framer Motion",
    "Multer",
    "JSON Web Tokens",
    "C++ and Python",
  ];

  const projects = [
    {
      title: "Ohana",
      img: ohana,
      link: "https://www.liveohana.ai/",
      information: [
        "Developed Ohana with the CTO, a subleasing marketplace invested in by: Zillow's co-founder Spencer Rascoff and Code.org's co-founder Ali Partovi.",
        "Created email and text notifcations, custom maps, charts for the Admin Dashboard.",
      ],
    },
    {
      title: "Lecture Leap",
      img: leap,
      link: "https://lectureleap.com",
      information: [
        "Built a website to transcribe audio files and then use LLMs to chat about these audio transcriptions.",
        "Developed PDF and PPT analysis to generate notes from lecture materials.",
      ],
    },
    {
      title: "Ferris: iOS App",
      img: ferris,
      link: "https://ferris.so",
      information: [
        "Developed an iOS Application using React Native that allows users to take photos of a whiteboard or presentation to generate digital notes.",
        "Incorporated OpenAI’s GPT-4 to instantly elaborate and explain the class topics.",
      ],
    },
    {
      title: "Chik-fil-A Project",
      img: chikfila,
      link: "https://william-cfa.netlify.app",
      information: [
        "Frontend UI/UX for a food ordering web app.",
        "Inspired by Chik-Fil-A online ordering and menu.",
      ],
    },
  ];

  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [song, setSong] = useState("");

  return (
    <div className="landingPage">
      <HeaderLanding />
      <div className="heroTop">
        <div
          className="introDiv"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "4vw",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <img
            className="meImg"
            src={me}
            style={{ height: "300px", width: "300px", borderRadius: "25px" }}
          />
          <div>
            <motion.h1
              initial={{ opacity: 0, x: "30%" }}
              animate={{ opacity: 1, x: "0%" }}
              transition={{ duration: 2, delay: 0 }}
            >
              Builder of Websites, Apps, ML Models, Databases, APIs, and
              eventually, companies
            </motion.h1>
            {/*
            <div className="introBottom">
              <motion.h4
                initial={{ opacity: 0, x: "20%" }}
                animate={{ opacity: 1, x: "0%" }}
                transition={{ duration: 1, delay: 0 }}
              >
                Let's make things people want
              </motion.h4>
              <a
                href="https://www.linkedin.com/in/william-halbert/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  initial={{ opacity: 0, x: "50%" }}
                  animate={{ opacity: 1, x: "0%" }}
                  transition={{ duration: 1, delay: 0 }}
                >
                  Say hi!
                  <FaArrowRight className="hire-me-arrow" />
                </motion.button>
              </a>
            </div>
            */}
          </div>
        </div>
      </div>
      {/*
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 1, delay: 2 }}
        style={{
          margin: " 0 5vw",
          diplay: "flex",
          flexDirection: "row",
          width: "90vw",
        }}
      >
        <select
          style={{
            padding: "12px 18px",
            fontSize: "18px",
            borderRadius: "20px",
          }}
          className="audioSelect"
          value={song}
          onChange={(event) => setSong(event.target.value)}
        >
          <option value="">Enjoy my favorite artists as you peruse</option>
          <option value="martin_garrix">Martin Garrix - On Dutch Waters</option>
          <option value="two_friends">
            Two Friends - Big Bootie Mix, Vol. 11
          </option>
          <option value="avicii">Avicii - Tribute Concert</option>
          <option value="queen">Queen - Live Aid 1985</option>
          <option value="">Individual Tracks</option>
          <option value="queen_love">Queen - Love of My Life</option>
          <option value="queen_boh">Queen - Bohemian Rhapsody</option>
          <option value="ed">Ed Sheeran - Perfect</option>
          <option value="logic">Logic & Marshmello - Everyday</option>
          <option value="avicii_fades">Avicii - Fades Away</option>
          <option value="avicii_garrix">
            Avicii x Martin Garrix - Days / High On Life
          </option>
        </select>
        <AudioPlay song={song} />
      </motion.div>
      <motion.div
        className="skillsDiv"
        initial={{ opacity: 1, y: "100%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 1, delay: 3 }}
      >
        <div className="skillsText">
          <div className="knowledgeDiv">
            <img src={W} className="w"></img>
            <h4>KNOWLEDGE</h4>
          </div>
          <div className="superchargeDiv">
            <h1>Supercharge your development</h1>
            <h4>
              Delivering efficient, innovative, and tailored solutions for your
              web projects.
            </h4>
          </div>
        </div>
        <div className="reactNodeDiv" ref={skillsRef}>
          <motion.div
            className="reactDiv"
            initial={{ opacity: 0, y: -100 }}
            animate={
              skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
            }
            transition={{ duration: 0.5 }}
          >
            <h2>React.js</h2>
            <h3>Frontend Development</h3>
          </motion.div>
          <motion.div
            className="nodeDiv"
            initial={{ opacity: 0, y: -100 }}
            animate={
              skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
            }
            transition={{ duration: 0.5 }}
          >
            <h2>Node.js</h2>
            <h3>Backend Development</h3>
          </motion.div>
        </div>
        <div className="otherSkillsDiv">
          {skills.map((skill, index) => (
            <BouncingTag key={index}>{skill}</BouncingTag>
          ))}
        </div>
          </motion.div>*/}
      <div className="bottomProjects">
        <div className="longLine"></div>

        <div className="projects" ref={scrollRef}>
          {projects.map((project, index) => {
            const direction = index % 2 === 0 ? "row" : "row-reverse";

            return (
              <React.Fragment key={index}>
                <div className="project">
                  <div className="orangeCircle"></div>
                  <ProjectSection project={project} index={index} />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {/*
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 1, delay: 2 }}
        style={{
          margin: " 0 5vw",
          diplay: "flex",
          flexDirection: "row",
          width: "90vw",
        }}
      >
        <select
          style={{
            padding: "12px 18px",
            fontSize: "18px",
            borderRadius: "20px",
          }}
          className="audioSelect"
          value={song}
          onChange={(event) => setSong(event.target.value)}
        >
          <option value="">Enjoy my favorite artists as you peruse</option>
          <option value="martin_garrix">Martin Garrix - On Dutch Waters</option>
          <option value="two_friends">
            Two Friends - Big Bootie Mix, Vol. 11
          </option>
          <option value="avicii">Avicii - Tribute Concert</option>
          <option value="queen">Queen - Live Aid 1985</option>
          <option value="">Individual Tracks</option>
          <option value="queen_love">Queen - Love of My Life</option>
          <option value="queen_boh">Queen - Bohemian Rhapsody</option>
          <option value="ed">Ed Sheeran - Perfect</option>
          <option value="logic">Logic & Marshmello - Everyday</option>
          <option value="avicii_fades">Avicii - Fades Away</option>
          <option value="avicii_garrix">
            Avicii x Martin Garrix - Days / High On Life
          </option>
        </select>
        <AudioPlay song={song} />
      </motion.div>*/}
    </div>
  );
}

export default Landing;

function ProjectSection({ project, index }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  const direction = index % 2 === 0 ? "row" : "row-reverse";
  const animationDirection = index % 2 === 0 ? -300 : 300;

  return (
    <div ref={ref} className="project">
      <motion.div
        className="hollowCircle"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        ref={ref}
        className="projectSection"
        style={{ flexDirection: direction }}
        initial="offscreen"
        animate={inView ? "onscreen" : "offscreen"} // Added animate prop for inView
        variants={{
          ...projectVariants,
          offscreen: { ...projectVariants.offscreen, x: animationDirection }, // Update offscreen variant
        }}
      >
        <a href={project.link} target="_blank">
          <motion.img src={project.img} whileHover={{ scale: 1.05 }} />
        </a>
        <div className="projectSectionText">
          <h2 className="projectTitle">{project.title}</h2>
          <p className="projectInfo">
            {project.information.map((info, i) => (
              <p key={i} className="projectSectionParagraph">
                {info}
              </p>
            ))}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

const projectVariants = {
  offscreen: {
    x: 300,
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function HollowCircle({ inView }) {
  return (
    <motion.div
      className="hollowCircle"
      initial="offscreen"
      animate={inView ? "onscreen" : "offscreen"}
      variants={circleVariants}
    ></motion.div>
  );
}

const circleVariants = {
  offscreen: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function BouncingTag({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        x: Math.random() * 40 - 10,
        y: Math.random() * 40 - 10,
        transition: { type: "spring", stiffness: 20, damping: 30 },
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [controls]);

  const handleMouseMove = (event) => {};

  const handleMouseOut = () => {};
  return (
    <motion.div
      className="bouncing-tag"
      style={{
        x,
        y,
        display: "inline-block",
        margin: "0 2rem",
      }}
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <p>{children}</p>
    </motion.div>
  );
}
