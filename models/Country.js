const { DataTypes } = require('sequelize');
const sequelize = require('./db');


const Country = sequelize.define('country', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
     }, 
    name:{
         type: DataTypes.STRING,
         allowNull: false 
        } 
});

(async () => {
  try {
    await Country.sync({ force: true });    //Drops table each time application runs
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Failed to create tables:', error);
  }
})();


module.exports = Country;