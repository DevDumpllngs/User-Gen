import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import UserCard from "../components/UserCard";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Banner con animación */}
      <motion.div {...fadeIn}>
        <Banner />
      </motion.div>

      {/* Sección About (Responsiva) */}
      <motion.section {...fadeIn} transition={{ delay: 0.2 }} className="px-4 sm:px-8 py-12">
        <About />
      </motion.section>

      {/* Sección Usuarios (Responsiva) */}
      <motion.section {...fadeIn} transition={{ delay: 0.4 }} className="px-4 sm:px-8 py-12">
        <UserCard />
      </motion.section>
    </div>
  );
};

export default Home;
