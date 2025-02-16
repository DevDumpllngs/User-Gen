import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.webp"; 

const About = () => {
  return (
    <motion.section 
      id="sobre-nosotros" 
      className="bg-gray-100 py-16 px-4 sm:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Imagen con animación */}
        <motion.img
          src={aboutImage}
          alt="Sobre Nosotros"
          className="w-full md:w-[450px] lg:w-[500px] rounded-lg shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Texto con animación */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left px-4 sm:px-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-4">
            Conectando Ideas, Creando Soluciones
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Somos más que una plataforma, somos un 
            <strong className="text-indigo-700"> espacio de innovación </strong>
            diseñado para potenciar proyectos y agilizar el desarrollo. Desde diseñadores hasta programadores, 
            brindamos herramientas para 
            <strong className="text-indigo-700"> generar datos realistas </strong> 
            y facilitar la creación de soluciones digitales.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
            Ya sea que necesites 
            <strong className="bg-indigo-100 text-indigo-800 px-1 rounded"> prototipos dinámicos </strong>, 
            <strong className="bg-indigo-100 text-indigo-800 px-1 rounded"> pruebas de concepto </strong>, 
            o un entorno de desarrollo más fluido, estamos aquí para brindarte recursos 
            <strong className="text-indigo-700"> precisos, eficientes y sin complicaciones.</strong>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
