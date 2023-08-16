'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Courier.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  Courier.init(
    {
      courier_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Automatically gets converted to SERIAL for postgres
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      availability: DataTypes.BOOLEAN,
      number_of_deliveries: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Courier',
    }
  );
  return Courier;
};
