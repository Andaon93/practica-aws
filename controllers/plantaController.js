const { logMensaje } = require("../utils/logger.js");
const plantaService = require("../services/plantaService");

class PlantaController {
  async getAllPlantas(req, res) {
    try {
      const datos = await plantaService.getAllPlantas();
      return res.status(200).json({ ok: true, datos, mensaje: "Plantas recuperadas" });
    } catch (err) {
      logMensaje("Error en getAllPlantas:", err);
      return res.status(500).json({ ok: false, mensaje: "Error" });
    }
  }

  async getPlantaById(req, res) {
    try {
      const planta = await plantaService.getPlantaById(req.params.id);
      if (!planta) return res.status(404).json({ ok: false, mensaje: "No encontrada" });
      return res.status(200).json({ ok: true, datos: planta });
    } catch (err) {
      return res.status(500).json({ ok: false, mensaje: "Error" });
    }
  }

  async createPlanta(req, res) {
    try {
      const nueva = await plantaService.createPlanta(req.body);
      return res.status(201).json({ ok: true, datos: nueva, mensaje: "Planta creada" });
    } catch (err) {
      return res.status(500).json({ ok: false, mensaje: "Error" });
    }
  }

  async updatePlanta(req, res) {
    try {
      const actualizada = await plantaService.updatePlanta(req.params.id, req.body);
      if (!actualizada) return res.status(404).json({ ok: false, mensaje: "No encontrada" });
      return res.status(200).json({ ok: true, datos: actualizada, mensaje: "Actualizada" });
    } catch (err) {
      return res.status(500).json({ ok: false, mensaje: "Error" });
    }
  }

  async deletePlanta(req, res) {
    try {
      const borrada = await plantaService.deletePlanta(req.params.id);
      if (!borrada) return res.status(404).json({ ok: false, mensaje: "No encontrada" });
      return res.status(200).json({ ok: true, mensaje: "Eliminada" });
    } catch (err) {
      return res.status(500).json({ ok: false, mensaje: "Error" });
    }
  }
}

module.exports = new PlantaController();