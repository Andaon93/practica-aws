var DataTypes = require("sequelize").DataTypes;
var _hospital = require("./hospital");
var _planta = require("./planta");

function initModels(sequelize) {
  // Inicialización de modelos pasando sequelize y DataTypes
  var hospital = _hospital(sequelize, DataTypes);
  var planta = _planta(sequelize, DataTypes);

  // --- DEFINICIÓN DE RELACIONES ---
  
  // Una PLANTA pertenece a un HOSPITAL
  planta.belongsTo(hospital, { 
    as: "hospital", 
    foreignKey: "id_hospital" 
  });

  // Un HOSPITAL tiene muchas PLANTAS
  hospital.hasMany(planta, { 
    as: "plantas", 
    foreignKey: "id_hospital" 
  });

  return {
    hospital,
    planta,
  };
}

// Exportaciones para que sea compatible con diferentes formas de importación (CommonJS)
module.exports = initModels; 
module.exports.initModels = initModels;
module.exports.default = initModels;