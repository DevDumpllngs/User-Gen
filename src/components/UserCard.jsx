import React, { useEffect, useState } from "react";
import { Copy, RefreshCw, Info, Download } from "lucide-react";
import { motion } from "framer-motion";

const languages = ["JavaScript", "TypeScript", "HTML", "JSON"];

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [numUsers, setNumUsers] = useState(5);
  const [selectedLang, setSelectedLang] = useState("JavaScript");
  const [loading, setLoading] = useState(false);

  // Obtener usuarios desde la API
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://randomuser.me/api/?results=${numUsers}`);
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [numUsers]);

  // Generar código según el lenguaje seleccionado
  const generateCode = () => {
    switch (selectedLang) {
      case "JavaScript":
        return `const users = ${JSON.stringify(users, null, 2)};`;
      case "TypeScript":
        return `const users: User[] = ${JSON.stringify(users, null, 2)};`;
      case "HTML":
        return users
          .map(
            (user) =>
              `<div class="user">
                <img src="${user.picture.large}" alt="${user.name.first}">
                <p>${user.name.first} ${user.name.last}</p>
              </div>`
          )
          .join("\n");
      case "JSON":
        return JSON.stringify(users, null, 2);
      default:
        return "";
    }
  };

  // Copiar código al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode());
    alert("Código copiado al portapapeles ✅");
  };

  // Descargar JSON
  const downloadUsersJSON = () => {
    const blob = new Blob([JSON.stringify(users, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "usuarios.json";
    link.click();
  };

  return (
    <motion.section 
      id="usuarios" 
      className="bg-white py-16 px-4 sm:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-indigo-900 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Usuarios Generados
        </motion.h2>

        {/* Información */}
        <motion.div
          className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-md mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Info size={20} className="mr-2" />
          <p className="text-sm font-semibold">
            Si no usas una API en tu proyecto, puedes descargar los usuarios en JSON y usarlos como datos estáticos.
          </p>
        </motion.div>

        {/* Controles */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Selección de número de usuarios */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <label className="text-lg font-bold text-gray-800">
              ¿Cuántos usuarios deseas generar?
            </label>
            <select
              value={numUsers}
              onChange={(e) => setNumUsers(parseInt(e.target.value))}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              {[...Array(20).keys()].map((n) => (
                <option key={n + 1} value={n + 1}>
                  {n + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.button
              onClick={fetchUsers}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md flex items-center gap-2 hover:bg-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw size={18} /> Volver a Generar
            </motion.button>

            <motion.button
              onClick={downloadUsersJSON}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md flex items-center gap-2 hover:bg-green-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} /> Descargar JSON
            </motion.button>
          </div>
        </motion.div>

        {/* Contenedor Principal (2 Columnas en Desktop, 1 en Móviles) */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sección Izquierda: Lenguajes */}
          <motion.div
            className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-indigo-800 mb-4">
              Selecciona un Lenguaje
            </h3>
            <div className="flex flex-col gap-3">
              {languages.map((lang) => (
                <motion.button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`px-4 py-2 rounded-md text-white font-semibold transition-all flex justify-center ${
                    selectedLang === lang ? "bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg scale-105" : "bg-gray-500 hover:bg-indigo-500"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {lang}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Sección Derecha: Código Generado */}
          <motion.div
            className="w-full md:w-2/3 bg-gray-900 text-green-400 p-6 rounded-lg shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
              Código Generado ({selectedLang})
            </h3>
            <div className="h-80 overflow-y-auto bg-gray-800 p-4 rounded-md">
              <pre className="whitespace-pre-wrap text-sm">
                <code>{generateCode()}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default UserCard;
