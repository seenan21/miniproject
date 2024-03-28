const express = require('express')
const router = express.Router()
require('dotenv').config()
let Currency;

if (process.env.NODE_ENV === "test") {
  Currency = require('../models/testCurrency');
} else {
  Currency = require('../models/Currency');
}


/**
 * TESTING Endpoint (Completed)
 * @receives a get request to the URL: http://localhost:3001/
 * @responds with the string 'Hello World!'
 */
router.get('/', (request, response) => {
  response.send('Hello World!')
})

/**
 * TODO: GET Endpoint
 * @receives a get request to the URL: http://localhost:3001/api/currency/
 * @responds with returning the data as a JSON
 */
router.get('/api/currency/', async (request, response) => {
  const currencies = await Currency.findAll();
    response.json(currencies);

})
/**
 * TODO: GET:id Endpoint
 * @receives a get request to the URL: http://localhost:3001/api/currency/:id
 * @responds with returning specific data as a JSON
 */
router.get('/api/currency/:id', async (request, response) => {
const id = request.params.id;
const currency = await Currency.findByPk(id);
if (currency) {
  response.json(currency);
}
else {
    response.status(400).send({error: 'resource not found'});
}

})

/**
 * TODO: POST Endpoint
 * @receives a post request to the URL: http://localhost:3001/api/currency,
 * with data object enclosed
 * @responds by returning the newly created resource
 */
router.post('/api/currency', async (request, response) => {
  const currency = request.body;
  if (!currency.currencyCode || !currency.countryId || !currency.conversionRate) {
    return response.status(400).send({error: 'content missing'});
  }
  try {
    const newCurrency = await Currency.create(currency);
    response.json(newCurrency);
  } catch (error) {
    console.error('Error creating currency:', error);
    response.status(500).send({error: 'An error occurred while creating the currency'});
  }
});

/**
 * TODO: PUT:id endpoint
 * @receives a put request to the URL: http://localhost:3001/api/currency/:id/:newRate
 * with data object enclosed
 * Hint: updates the currency with the new conversion rate
 * @responds by returning the newly updated resource
 */
router.put('/api/currency/:id/:newRate', async (request, response) => {
  const newRate = request.params.newRate;
  const id = request.params.id;
  try {  
    const currency = await Currency.findByPk(id);
    if (currrency) {
        await currency.update({ conversionRate: newRate });
         response.json(currency);
        }
        else {
            response.status(400).send({error: 'resource not found'});
        }
    }
    catch (error) {
        response.status(400).send({error: 'resource not found'});
    }
})

/**
 * TODO: DELETE:id Endpoint
 * @receives a delete request to the URL: http://localhost:3001/api/currency/:id,
 * @responds by returning a status code of 204
 */
router.post('/api/currency/:id', async (request, response) => {
  const id = request.params.id;
  const currency = await Currency.findByPk(id);
  if (currency) {
    await currency.destroy();
    response.status(202).send({message: 'resource deleted'});
  }

})

module.exports = router;
