import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.jpeg";

/**
 * Represents the About Me section.
 * Displays information about the user.
 * Not currently in use.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Nice to meet you! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>I'm a hardcore Website Designer.</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  Today, I am fully immersed in an exciting phase of my career as a Lead Website Designer at a leading tech company iBuild.ts, embracing the challenges and opportunities that come with this dynamic role. <span style={{ color: "var(--hl-color)" }}> iBuild.ts</span>. My playground? The captivating
                  universe of <span style={{ color: "var(--hl-color)" }}> DEPARTMENT</span>.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Here, I take on real-world challenges with  <span style={{ color: "var(--hl-color)" }}> problem-solving mindset</span>
                  leveraging the skills I've gained from my early career start on Udemy and Eat-That-Block.{" "}
                  <span style={{ color: "var(--hl-color)" }}>My journey in blockchain development took off after completing</span>  advanced Solidity courses at Dapp University. where I honed my expertise in
                  smart contract development
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Life is full of diverse experiences beyond coding. When I'm not focused on development, I'm immersing myself in Music/Movies, staying active with Games, and indulging my passion for Learning.
                  These activities fuel my creativity and give me the energy to approach challenges with fresh perspectives, both in my personal life and professional journey.
                </motion.p>
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
