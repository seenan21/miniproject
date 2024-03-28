const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Country = require('./Country');

const Currency = sequelize.define('currency', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    currencyCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Country,
            key: 'id'
        }
    },
    conversionRate: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

});

Currency.belongsTo(Country, { foreignKey: 'countryId' });


(async () => {
  try {
    await Currency.sync({ force: true });    //Drops table each time application runs
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Failed to create tables:', error);
  }
})();

//Check if db connected:
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error; // This will cause the test to fail if there's an error
  }
})();

module.exports = Currency;