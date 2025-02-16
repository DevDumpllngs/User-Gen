import React from "react";
import { motion } from "framer-motion";
import Orb from "./Orb"; 
import "../styles/Banner.css"; 

const Banner = () => {
  return (
    <div className="banner-container">
      {/* Fondo Orb (Se mantiene igual) */}
      <Orb className="absolute inset-0 z-0" />

      {/* Imagen (No se mueve en PC, pero en móviles se ajusta con CSS) */}
      <div className="banner-image">
      <img src={`${import.meta.env.BASE_URL}banner.png`} alt="Banner" className="banner-img" />
      </div>

      {/* Contenido principal (Ajustado solo en móviles con CSS) */}
      <div className="banner-content">
        {/* Título con línea animada */}
        <div className="relative">
          <h2 className="banner-title">
            <span className="italic font-semibold">UserGen</span>
          </h2>
          {/* Línea animada */}
          <motion.div
            className="banner-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scaleY: 1.5 }}
          />
        </div>

        {/* Descripción */}
        <p className="banner-text">
          Genera perfiles de usuario realistas con datos completos, perfectos para el desarrollo y pruebas.
        </p>
      </div>
    </div>
  );
};

export default Banner;
