const { logMensaje } = require("../utils/logger.js");
const hospitalService = require("../services/hospitalService");

class HospitalController {
  async getAllHospitales(req, res) {
    try {
      const datos = await hospitalService.getAllHospitales();
      return res.status(200).json({ ok: true, datos, mensaje: "Hospitales recuperados" });
    } catch (err) {
      logMensaje("Error en getAllHospitales:", err);
      return res.status(500).json({ ok: false, mensaje: "Error al recuperar" });
    }
  }

  async getHospitalById(req, res) {
    try {
      const hospital = await hospitalService.getHospitalById(req.params.id);
      if (!hospital) return res.status(404).json({ ok: false, mensaje: "No encontrado" });
      return res.status(200).json({ ok: true, datos: hospital });
    } catch (err) {
      return res.status(500).json({ ok: false, mensaje: "Error" });
    }
  }

  async createHospital(req, res) {
    try {
      const nuevo = await hospitalService.createHospital(req.body);
      return res.status(201).json({ ok: true, datos: nuevo, mensaje: "Hospital creado" });
    } catch (err) {
      return res.status(500).json({ ok: false, mensaje: "Error al crear" });
    }
  }

  async updateHospital(req, res) {
    try {
      const actualizado = await hospitalService.updateHospital(req.params.id, req.body);
      if (!actualizado) return res.status(404).json({ ok: false, mensaje: "No encontrado" });
      return res.status(200).json({ ok: true, datos: actualizado, mensaje: "Actualizado" });
    } catch (err) {
      return res.status(500).json({ ok: false, mensaje: "Error al actualizar" });
    }
  }

  async deleteHospital(req, res) {
    try {
      const borrado = await hospitalService.deleteHospital(req.params.id);
      if (!borrado) return res.status(404).json({ ok: false, mensaje: "No encontrado" });
      return res.status(200).json({ ok: true, mensaje: "Eliminado correctamente" });
    } catch (err) {
      return res.status(500).json({ ok: false, mensaje: "Error al borrar" });
    }
  }
}

module.exports = new HospitalController();