import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../index.css';

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home', { replace: true });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-white iridescent-background">
      <motion.h1
        className="text-7xl font-bold heading-font mb-4 text-center"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
      >
        ¡Bienvenido a UserGen! 🚀
      </motion.h1>
      <motion.p
        className="text-2xl text-center max-w-2xl text-gray-200 mb-6"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Genera usuarios aleatorios con datos realistas para tus proyectos de desarrollo y diseño.
      </motion.p>
    </div>
  );
};

export default Welcome;
