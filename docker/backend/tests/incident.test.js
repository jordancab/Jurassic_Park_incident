const request = require('supertest');
const app = require('../src/app');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
// Avant tous les tests, synchronise la BDD (test)
beforeAll(async () => {
  await sequelize.sync({ force: true });
});

// Après tous les tests, ferme la connexion
afterAll(async () => {
  await sequelize.close();
});

describe('Incident API', () => {
  const fakeToken = 'Bearer fake-token';

  it('POST /incidents crée un incident', async () => {
    const res = await request(app)
      .post('/incidents')
      .set('Authorization', fakeToken)
      .send({
        titre: 'Fuite de T-Rex',
        description: 'Le T-Rex a cassé la clôture.',
        type: 'Evasion',
        zone: 'T-Rex Valley',
        urgence: 'Haute',
        statut: 'En cours'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('GET /incidents retourne la liste', async () => {
    const res = await request(app)
      .get('/incidents')
      .set('Authorization', fakeToken);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});