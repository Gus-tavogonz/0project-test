module.exports = function(sequelize, DataTypes) {
  var Random = sequelize.define("Random", {
    name: DataTypes.STRING,
    pickupline: DataTypes.TEXT,
    value:DataTypes.INTEGER
  });
  return Random;
};