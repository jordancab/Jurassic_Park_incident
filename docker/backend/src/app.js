const express = require('express');
const incidentRoutes = require('./routes/incidentRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./src/swagger.yaml');
const cors = require('cors');

const app = express(); // ✅ Déclaration AVANT utilisation

const corsOptions = {
  origin: 'http://incident.local:30080',
  methods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  allowedHeaders: ['Authorization', 'Content-Type'],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

app.use('/api/incidents', incidentRoutes);
app.use(errorMiddleware);

app.get('/health', (req, res) => res.sendStatus(200));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;