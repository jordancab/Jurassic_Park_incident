// src/js/api.js
const API_URL = "http://incident.local/api/incidents"; //http://incident-backend:3000/incidents

export async function getIncidents(filters = {}) {
  const params = new URLSearchParams(filters).toString();
  const res = await fetch(`${API_URL}?${params}`, {
    headers: { Authorization: "Bearer fake-token" }
  });
  return res.json();
}

export async function createIncident(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer fake-token"
    },
    body: JSON.stringify(data)
  });
  return res.json();
}