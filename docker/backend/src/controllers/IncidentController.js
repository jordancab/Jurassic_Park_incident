class IncidentController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  // GET /incidents
  async listIncidents(service) {
    try {
      const incidents = await service.getAll();
      this.res.json(incidents);
    } catch (error) {
      this.res.status(500).json({ error: error.message });
    }
  }

  // POST /incidents
  async createIncident(service) {
    try {
      const incident = await service.create(this.req.body);
      this.res.status(201).json(incident);
    } catch (error) {
      this.res.status(400).json({ error: error.message });
    }
  }

  // PUT /incidents/:id
  async updateIncident(service) {
    try {
      const { id } = this.req.params;
      const updated = await service.update(id, this.req.body);
      if (updated) {
        this.res.json(updated);
      } else {
        this.res.status(404).json({ error: "Incident non trouvé" });
      }
    } catch (error) {
      this.res.status(400).json({ error: error.message });
    }
  }

  // DELETE /incidents/:id
  async deleteIncident(service) {
    try {
      const { id } = this.req.params;
      const deleted = await service.delete(id);
      if (deleted) {
        this.res.json({ message: "Incident supprimé" });
      } else {
        this.res.status(404).json({ error: "Incident non trouvé" });
      }
    } catch (error) {
      this.res.status(400).json({ error: error.message });
    }
  }
}

module.exports = IncidentController;