const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/location.db');

db.run('CREATE TABLE IF NOT EXISTS location (id INTEGER PRIMARY KEY, latitude REAL, longitude REAL, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)');

router.post('/update', (req, res) => {
    const { latitude, longitude } = req.body;
    db.run('INSERT INTO location (latitude, longitude) VALUES (?, ?)', [latitude, longitude], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ status: 'success' });
    });
});

router.get('/get', (req, res) => {
    db.get('SELECT latitude, longitude, timestamp FROM location ORDER BY id DESC LIMIT 1', (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(row);
    });
});

module.exports = router;
