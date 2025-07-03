import { createIncident } from './api.js';

document.getElementById('incident-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const data = {
    titre: document.getElementById('titre').value,
    description: document.getElementById('description').value,
    type: document.getElementById('type').value,
    zone: document.getElementById('zone').value,
    urgence: document.getElementById('urgence').value,
    statut: document.getElementById('statut').value
  };
  try {
    await createIncident(data);
    document.getElementById('message').innerHTML = '<div class="alert alert-success">Incident enregistré !</div>';
    setTimeout(() => window.location.href = 'index.html', 1000);
  } catch (err) {
    document.getElementById('message').innerHTML = '<div class="alert alert-danger">Erreur lors de l\'enregistrement.</div>';
  }
});