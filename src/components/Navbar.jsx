import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Principal */}
      <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-3xl font-extrabold bg-clip-text text-black"
          >
            <Link to="home" smooth={true} duration={500} className="cursor-pointer">
              UserGen<span className="text-blue-500">.</span>
            </Link>
          </motion.div>

          {/* Menú en Pantallas Grandes */}
          <div className="hidden md:flex space-x-10">
            {[
              { name: "Inicio", to: "home" },
              { name: "About", to: "about" },
              { name: "Usuarios", to: "usuarios" },
            ].map(({ name, to }) => (
              <motion.div key={name} whileHover={{ scale: 1.1 }}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="cursor-pointer text-black hover:text-blue-600 transition-all duration-300"
                >
                  {name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Botón Mi Portafolio */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://portfolio-weld-seven-54.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 transition-all duration-300"
          >
            Mi Portafolio
          </motion.a>

          {/* Menú Mobile (Botón de Menú) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-black">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil (Aparece con Animación) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex justify-end"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="bg-white w-64 h-full shadow-xl p-6 flex flex-col space-y-6"
            >
              <button onClick={() => setIsOpen(false)} className="self-end text-gray-600">
                <X size={28} />
              </button>

              {[
                { name: "Inicio", to: "home" },
                { name: "About", to: "about" },
                { name: "Usuarios", to: "usuarios" },
              ].map(({ name, to }) => (
                <Link
                  key={name}
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg text-gray-800 hover:text-blue-600 transition-all"
                >
                  {name}
                </Link>
              ))}

              {/* Botón Mi Portafolio en Móvil */}
              <a
                href="https://portfolio-weld-seven-54.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:opacity-90 transition"
              >
                Mi Portafolio
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
