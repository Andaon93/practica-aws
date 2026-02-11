const express = require('express');
const router = express.Router();
const plantaController = require('../controllers/plantaController');


router.get('/', plantaController.getAllPlantas);
router.get('/:id', plantaController.getPlantaById);
router.post('/', plantaController.createPlanta);
router.put('/:id', plantaController.updatePlanta);
router.delete('/:id', plantaController.deletePlanta);

module.exports = router;