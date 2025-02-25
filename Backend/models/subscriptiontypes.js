'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubscriptionTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubscriptionTypes.init({
    subscriptionId: {
      type: DataTypes.INTEGER
    },
    type: {
      type: DataTypes.ENUM("Free", "1 Month", "6 Months", "1 Year")
    }
  }, {
    sequelize,
    modelName: 'SubscriptionTypes',
  });
  return SubscriptionTypes;
};