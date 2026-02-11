const { logMensaje } = require("../utils/logger.js");
const { Sequelize } = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(
    config.db.name,
    config.db.user,
    config.db.password,
    {
        host: config.db.host,
        port: config.db.port,
        dialect: "mysql",
        // En modo test, desactivamos logs para ver solo los resultados de Jest
        logging: process.env.NODE_ENV === "test" ? false : (msg) => {
            if (msg.includes("CREATE TABLE") || msg.includes("ALTER TABLE")) {
                console.log("DBSync:", msg);
            }
        },
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        logMensaje("Conexión establecida con MySQL.");

        // Sincronización básica inicial
        await sequelize.sync(); 
        
        // El modo 'alter' solo se activa fuera de los tests para evitar ruidos de consola
        if (process.env.NODE_ENV !== "test") {
            await sequelize.sync({ alter: true });
            logMensaje("Tablas sincronizadas (modo alter).");
        }

    } catch (error) {
        // Filtro inteligente para ignorar errores de creación temporal (FK y tablas inexistentes)
        const erroresIgnorables = [
            "doesn't exist",
            "referenced table",
            "Failed to open"
        ];

        const esIgnorable = erroresIgnorables.some(msg => error.message.includes(msg));

        if (!esIgnorable) {
            console.error("--- ERROR REAL EN BASE DE DATOS ---");
            console.error("Mensaje:", error.message);
            if (error.code === 'ER_BAD_DB_ERROR') {
                console.error("La base de datos '" + config.db.name + "' no existe.");
            }
            console.error("---------------------------------------");
        }
    }
})();

module.exports = sequelize;