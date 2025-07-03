import { getIncidents } from './api.js';

// Fonction pour récupérer l'incident à modifier
async function fetchIncidentById(id) {
  const incidents = await getIncidents();
  return incidents.find(incident => String(incident.id) === String(id));
}

// Fonction pour mettre à jour l'incident (statut)
async function updateIncident(id, data) {
  const res = await fetch(`http://incident.local/api/incidents/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer fake-token"
    },
    body: JSON.stringify(data)
  });
  return res.json();
}

// Récupère l'ID depuis l'URL
function getIncidentIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

document.addEventListener('DOMContentLoaded', async () => {
  const id = getIncidentIdFromUrl();
  if (!id) {
    document.getElementById('message').innerHTML = '<div class="alert alert-danger">Aucun ID fourni.</div>';
    return;
  }
  const incident = await fetchIncidentById(id);
  if (!incident) {
    document.getElementById('message').innerHTML = '<div class="alert alert-danger">Incident non trouvé.</div>';
    return;
  }
  // Pré-remplir le formulaire
  document.getElementById('titre').value = incident.titre;
  document.getElementById('statut').value = incident.statut;

  // Gérer la soumission du formulaire
  document.getElementById('edit-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const newStatut = document.getElementById('statut').value;
    try {
      await updateIncident(id, { statut: newStatut });
      document.getElementById('message').innerHTML = '<div class="alert alert-success">Statut mis à jour !</div>';
      setTimeout(() => window.location.href = 'index.html', 1000);
    } catch (err) {
      document.getElementById('message').innerHTML = '<div class="alert alert-danger">Erreur lors de la mise à jour.</div>';
    }
  });
});