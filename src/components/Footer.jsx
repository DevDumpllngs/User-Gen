import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-6">
        
        {/* Logo / Nombre del Proyecto */}
        <motion.h2
          whileHover={{ scale: 1.05 }}
          className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        >
          UserGen
        </motion.h2>

        {/* Texto de Derechos Reservados */}
        <p className="text-gray-400 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>

        {/* Redes Sociales */}
        <div className="flex space-x-4 sm:space-x-6">
          {[
            { icon: Github, link: "https://github.com/DevDumpllngs" },
            { icon: Linkedin, link: "www.linkedin.com/in/devdumpllngs" },
            { icon: Twitter, link: "https://x.com/DevDumpllngs" },
          ].map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              <Icon size={20} sm:size={26} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
