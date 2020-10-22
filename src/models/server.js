'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Server extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Server.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    ipAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Server',
  });
  return Server;
};