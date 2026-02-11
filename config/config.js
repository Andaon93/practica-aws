
require('dotenv').config(); 
const { logMensaje } = require("../utils/logger.js");

const config = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "test",
        name: process.env.DB_NAME || "Gestion_Hospital",
        port: process.env.DB_PORT || 3306,
    },
    secretKey: process.env.SECRET_KEY || "default_secret",
};


logMensaje("CONFIGURACIÓN CARGADA:");
logMensaje("DBNAME:", config.db.name);
logMensaje("DBHOST:", config.db.host);
logMensaje("DBUSER:", config.db.user);

module.exports = config;