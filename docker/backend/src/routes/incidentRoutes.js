const express = require('express');
const IncidentController = require('../controllers/IncidentController');
const IncidentService = require('../services/IncidentService');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();
const service = new IncidentService();

// Middleware de sécurité simulée
router.use(authMiddleware);

// GET /incidents
router.get('/', (req, res) => {
  const controller = new IncidentController(req, res);
  controller.listIncidents(service);
});

// POST /incidents
router.post('/', (req, res) => {
  const controller = new IncidentController(req, res);
  controller.createIncident(service);
});

// PUT /incidents/:id
router.put('/:id', (req, res) => {
  const controller = new IncidentController(req, res);
  controller.updateIncident(service);
});

// DELETE /incidents/:id
router.delete('/:id', (req, res) => {
  const controller = new IncidentController(req, res);
  controller.deleteIncident(service);
});

module.exports = router;