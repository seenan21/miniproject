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

module.exports = Currency;