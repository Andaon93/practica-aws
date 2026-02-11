const initModels = require("../models/init-models.js").initModels;
const sequelize = require("../config/sequelize.js");
const models = initModels(sequelize);

const Hospital = models.hospital;
const Planta = models.planta;

class HospitalService {
  async getAllHospitales() {
    return await Hospital.findAll({
      include: [{ model: Planta, as: "plantas" }]
    });
  }

  async getHospitalById(id_hospital) {
    return await Hospital.findByPk(id_hospital);
  }

  async createHospital(hospitalData) {
    return await Hospital.create(hospitalData);
  }

  async updateHospital(id_hospital, hospitalData) {
    const [numFilas] = await Hospital.update(hospitalData, {
      where: { id_hospital: id_hospital }
    });
    if (numFilas === 0) return null;
    return await Hospital.findByPk(id_hospital);
  }

  async deleteHospital(id_hospital) {
    return await Hospital.destroy({
      where: { id_hospital: id_hospital }
    });
  }
}

module.exports = new HospitalService();