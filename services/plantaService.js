const initModels = require("../models/init-models.js").initModels;
const sequelize = require("../config/sequelize.js");
const models = initModels(sequelize);

const Planta = models.planta;
const Hospital = models.hospital;

class PlantaService {
  async getAllPlantas() {
    return await Planta.findAll({
      include: [{ model: Hospital, as: "id_hospital_hospital" }]
    });
  }

  async getPlantaById(id_planta) {
    return await Planta.findByPk(id_planta);
  }

  async createPlanta(plantaData) {
    return await Planta.create(plantaData);
  }

  async updatePlanta(id_planta, plantaData) {
    const [numFilas] = await Planta.update(plantaData, {
      where: { id_planta: id_planta }
    });
    if (numFilas === 0) return null;
    return await Planta.findByPk(id_planta);
  }

  async deletePlanta(id_planta) {
    return await Planta.destroy({
      where: { id_planta: id_planta }
    });
  }
}

module.exports = new PlantaService();