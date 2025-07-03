const Incident = require('../models/Incident');

class IncidentService {
  async getAll() {
    return Incident.findAll();
  }

  async create(data) {
    return Incident.create(data);
  }

  async update(id, data) {
    return Incident.updateById(id, data);
  }

  async delete(id) {
    return Incident.deleteById(id);
  }
}

module.exports = IncidentService;