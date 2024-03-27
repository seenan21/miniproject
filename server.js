const express = require('express')  // We import the express application

require('dotenv').config();
const cors = require('cors') // Necessary for localhost
const app = express() // Creates an express application in app
const setupLogger = require('./utils')
const currencyRoutes = require('./routes/currencyRoutes')
const countryRoutes = require('./routes/countryRoutes')
const otherRoutes = require('./routes/otherRoutes')

/**
 * Initial application setup
 * We need to use cors so we can connect to a localhost later
 * We need express.json so we can receive requests with JSON data attached
 */
app.use(cors())
app.use(express.json())
app.use(setupLogger()) 
app.use('/', currencyRoutes);
app.use('/', countryRoutes);
app.use('/', otherRoutes);



/**
 * DATA STORAGE
 * We're using a local variable 'currencies' to store our data: a list of currency objects
 * Each object represents a 'currency', and contains the following fields
 * id: a number, 
 * currencyCode: a string, three letters (see https://www.iban.com/currency-codes as reference)
 * country: a string, the name of the country
 * conversionRate: the amount, in that currency, required to equal 1 Canadian dollar
 */

app.use((request, response) => {
  response.status(404).send({error: 'unknown endpoint'});
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})