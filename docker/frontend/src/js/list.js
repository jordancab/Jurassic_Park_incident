import { getIncidents } from './api.js';

function renderIncidents(incidents) {
  const tbody = document.querySelector("#incidents-table tbody");
  tbody.innerHTML = "";
  incidents.forEach(incident => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${incident.titre}</td>
      <td>${incident.type}</td>
      <td>${incident.zone}</td>
      <td>${incident.urgence}</td>
      <td>${incident.statut}</td>
      <td>
        <a href="edit.html?id=${incident.id}" class="btn btn-sm btn-warning">Modifier</a>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

async function loadAndRender(filters = {}) {
  const incidents = await getIncidents(filters);
  renderIncidents(incidents);
}

document.getElementById("filters-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const filters = {
    zone: document.getElementById("zone").value,
    type: document.getElementById("type").value,
    urgence: document.getElementById("urgence").value
  };
  loadAndRender(filters);
});

// Chargement initial
loadAndRender();