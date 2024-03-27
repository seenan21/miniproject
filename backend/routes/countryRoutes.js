const express = require('express')
const router = express.Router()
const Country = require('../models/Country');

router.get('/api/country', async (req, res) => {
    try {
        const countries = await Country.findAll();
        res.json(countries);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve countries' });
    }
});

router.post('/api/country', async (req, res) => {
    try {
        const name = req.body.name;
        const country = await Country.create({ name });
        res.status(201).json(country);
    } catch (error) {
        console.error('Failed to create country:', error);
        res.status(500).json({ error: 'Failed to create country' });
    }
});

// DELETE a record
router.delete('/api/country/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const country = await Country.findByPk(id);
        if (!country) {
            return res.status(404).json({ error: 'Country not found' });
        }
        await country.destroy();
        res.json({ message: 'Country deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete country' });
    }
});

module.exports = router;