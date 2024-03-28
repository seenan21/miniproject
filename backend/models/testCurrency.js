const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Currency = sequelize.define('testCurrency', {
    id:{
        type:DataTypes.INTEGER,
        allowNull:true,
        primaryKey:true,
        autoIncrement:true
    },
    currencyCode:{
        type:DataTypes.STRING,
        allowNull:false
    },
    conversionRate:{
        type:DataTypes.FLOAT,
        allowNull:false,
        validate:{
            isNumeric:true
        }
    }
});

(async () => {
  try {
    await Currency.sync({ force: true });    //Drops table each time application runs
    console.log('Ttest tables created successfully');
  } catch (error) {
    console.error('Failed to create tables:', error);
  }
})();

module.exports = Currency;