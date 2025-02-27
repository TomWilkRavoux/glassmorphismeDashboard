require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

// Connexion à PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(cors());
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.send('API SwiftLogistics fonctionne 🚀');
});

// Récupérer le total des livraisons en cours
app.get('/total-deliveries', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM view_total_deliveries');
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Récupérer la liste des livraisons
app.get('/deliveries', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM deliveries');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Récupérer les alertes
app.get('/alerts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM alerts');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Calculer le délai moyen des livraisons retardées
app.get('/average-delay', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM view_average_delay');
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Récupérer le nombre de livraisons par priorité
app.get('/priority-count', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM view_priority_count');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${port}`);
});
