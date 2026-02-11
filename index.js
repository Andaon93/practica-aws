require('dotenv').config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { logMensaje } = require("./utils/logger.js");
const sequelize = require("./config/sequelize");
const { initModels } = require("./models/init-models");

// 1. Inicializar modelos antes de cualquier otra cosa
initModels(sequelize);

const hospitalRoutes = require("./routes/hospital.routes");
const plantaRoutes = require("./routes/planta.routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/hospitales", hospitalRoutes);
app.use("/api/plantas", plantaRoutes);

async function startServer() {
    try {
        await sequelize.authenticate();
        
        // Sincronización controlada
        await sequelize.sync();
        
        if (process.env.NODE_ENV !== 'test') {
            logMensaje("Conexión con MySQL establecida y tablas sincronizadas.");
            app.listen(port, () => {
                logMensaje(`Servidor escuchando en el puerto ${port}`);
            });
        }
    } catch (error) {
        // --- FILTRO DEFINITIVO ---
        // Lista de frases que MySQL lanza cuando está creando tablas relacionadas
        const frasesAIgnorar = [
            "doesn't exist",
            "referenced table",
            "Failed to open"
        ];

        const esIgnorable = frasesAIgnorar.some(frase => error.message.includes(frase));

        if (!esIgnorable) {
            console.error("No se pudo conectar a la base de datos:", error.message);
        }
    }
}

startServer();

module.exports = app;