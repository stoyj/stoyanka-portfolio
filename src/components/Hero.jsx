//(с анимация от framer-motion и бутон за сваляне на PDF)
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      style={{
        textAlign: "center",
        background: "#007bff",
        color: "white",
        padding: "60px 20px",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Hi, I'm Stoyanka Kamenova</h1>
      <p>Front-End Developer looking for an internship</p>
      <a
        href="/cv.pdf"
        download
        style={{
          background: "white",
          color: "#007bff",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Download CV
      </a>
    </motion.section>
  );
}

export default Hero;
