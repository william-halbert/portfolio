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
import ll from "../images/ll.png";
import llm from "../images/llm.png";
import rentals from "../images/rentals.png";
import melanoma from "../images/melanoma.png";
import ferris from "../images/ferris.png";
import willheart from "../images/willheart.png";
import sma from "../images/sma.png";
import lex from "../images/lex.png";
import teeth from "../images/teeth.png";

import listings from "../images/listings.png";
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

  const projects = [
    {
      title: "Ohana Subleasing Co.",
      img: ohana,
      link: "https://www.liveohana.ai/",
      information: [
        "Built core functionality alongside Co-founder.",
        "Help interns find summer housing.",
        "12,000 incoming interns, within year 1.",
        "+$1M in rent processed.",
        "Biggest platform for NYC sublets.",
        "Partner with Atlassian, Duolingo, Oracle, Ramp, Salesforce, Wells Fargo, Coinbase, Uber, Bubble, CBIZ.",
        "Investors from Neo (Ali Partovi), Lightbank, and executives from Airbnb, Zillow, and Robinhood.",
      ],
    },
    {
      title: "Ferris Note-Taking App",
      img: ferris,
      link: "https://github.com/william-halbert/ferris-app",
      information: [
        "Built and tested iOS app at Univ. of FL.",
        "Turn photos to structured notes.",
        "Save images to notes, such as diagrams.",
        "Also, see notes on web app.",
      ],
    },

    {
      title: "LexFridmanGPT",
      img: lex,
      link: "https://www.kaggle.com/code/williamhalbert/lexfridmangpt",
      information: [
        "Trained GPT2 on 320 Lex Fridman Podcast transcripts.",
        "Generated Lex Fridman responses to his commonly asked questions.",
      ],
    },
    {
      title: "Melanoma Detection, Benign vs. Malignant",
      img: melanoma,
      link: "https://www.kaggle.com/code/williamhalbert/melanoma-part-3",
      information: [
        "Trained on 13,900 photos.",
        "Trained 6 different pre-trained image models.",
        "Reached 94.7% accuracy, well-above many researchers. 2nd in the Kaggle community.",
      ],
    },
    {
      title: "Audio Transcription",
      img: ll,
      link: "https://github.com/william-halbert/Chat-With-Audio-Transcriptions",
      information: [
        "Built audio transcription.",
        "Generate summaries about the transcript.",
        "Ask questions about the transcript using GPT-4.",
        "Integrated Stripe. Got my first paying customers.",
      ],
    },
    {
      title: "Healthcare Network, Fluoride Checker",
      img: teeth,
      link: "https://www.collierwater.com/",
      information: [
        "Collier county removed fluoride from its water supply in certain areas.",
        "Website tells dentists which patients have fluoride added to their water.",
      ],
    },
    {
      title: "Listing Photos, Professional vs. Unprofessional",
      img: listings,
      link: "https://www.kaggle.com/code/williamhalbert/professional-vs-unprofessional-listing-photos",
      information: [
        "Trained an image model on sublease photos from liveOhana.ai.",
        "Created API with Huggingface and Gradeo.",
      ],
    },
    {
      title: "Rent Price Optimization, Vacation Rentals",
      img: rentals,
      link: "https://www.kaggle.com/code/williamhalbert/sh-unfinished-2",
      information: [
        "Uploaded data from rentals in Stone Harbor and Avalon, NJ.",
        "Visualized the effect of 28 variables on the the renting price.",
      ],
    },
    {
      title: "Langauge Models, Gemma",
      img: llm,
      link: "https://www.kaggle.com/code/williamhalbert/google-gemma-open-source-llm",
      information: [
        "Used the Huggingface Transformer library to implement Gemma, Google's Open Source LLM.",
        "The start of an NLP journey!",
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
              Companies
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="projects" ref={scrollRef}>
        {projects.map((project, index) => {
          const direction = index % 2 === 0 ? "row" : "row-reverse";

          return (
            <React.Fragment key={index}>
              <div className="project">
                <ProjectSection project={project} index={index} />
              </div>
            </React.Fragment>
          );
        })}
      </div>
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
        ref={ref}
        transition={{ duration: 0.5 }}
        className="projectSection"
        style={{ flexDirection: direction }}
        initial="offscreen"
        animate="onscreen" // Always use the onscreen variant
        variants={{
          ...projectVariants,
          offscreen: { ...projectVariants.offscreen, x: animationDirection },
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
