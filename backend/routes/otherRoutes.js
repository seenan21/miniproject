const express = require('express');
const router = express.Router();
const Country = require('../models/Country');
const Currency = require('../models/Currency');

router.get('/api/currency-countryName', async (req, res) => {
  try {
    // Perform a JOIN operation between Currency and Country tables
    const currencyAndCountryData = await Currency.findAll({
      attributes: ['currencyCode'], // Select currency code
      include: [{
        model: Country,
        attributes: ['name'], // Select country name
      }]
    });

    // Extract and format the result
    const result = currencyAndCountryData.map(item => ({
      currencyCode: item.currencyCode,
      countryName: item.country.name // Access the associated country name
    }));

    res.json(result);
  } catch (error) {
    console.error('Error fetching currency codes and country names:', error);
    res.status(500).json({ error: 'Failed to retrieve currency codes and country names' });
  }
});

module.exports = router;
