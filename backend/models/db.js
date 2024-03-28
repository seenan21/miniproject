  
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false, // Disable logging SQL queries (optional)
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Avoid issues with self-signed certificates (optional)
    }
  }
});

module.exports = sequelize;
